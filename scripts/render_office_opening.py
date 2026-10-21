"""Rebuild the silent, live-action homepage film from licensed Pexels footage.

Requires imageio-ffmpeg and Pillow. Source URLs were obtained from each asset's
official Pexels download link; see public/media/office-film-sources.md.
"""

from __future__ import annotations

import pathlib
import subprocess
import urllib.request

import imageio_ffmpeg


ROOT = pathlib.Path(__file__).resolve().parents[1]
CACHE = ROOT / "tmp" / "office-film"
OUTPUT = ROOT / "public" / "media"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

SOURCES = {
    "night-office": "https://videos.pexels.com/video-files/7668950/7668950-uhd_3840_2160_25fps.mp4",
    "city-view": "https://videos.pexels.com/video-files/8572181/8572181-uhd_4096_2160_25fps.mp4",
    "glass-office": "https://videos.pexels.com/video-files/5483227/5483227-uhd_4096_2160_25fps.mp4",
    "typing": "https://videos.pexels.com/video-files/3202364/3202364-hd_1920_1080_25fps.mp4",
}


def run(arguments: list[str]) -> None:
    subprocess.run([FFMPEG, "-hide_banner", "-y", *arguments], check=True)


def main() -> None:
    CACHE.mkdir(parents=True, exist_ok=True)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name, url in SOURCES.items():
        path = CACHE / f"{name}.mp4"
        if not path.exists():
            request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(request, timeout=90) as response:
                path.write_bytes(response.read())

    # End with the second immediately preceding the first shot, so native looping
    # reconnects to continuous live action rather than a fade to a black screen.
    shots = [
        ("night-office", 1, 5.0, "1.08:brightness=0.025:saturation=0.77:contrast=1.04"),
        ("city-view", 2, 3.6, "0.97:brightness=-0.015:saturation=0.64:contrast=1.10"),
        ("glass-office", 2, 4.6, "1.02:brightness=0.010:saturation=0.68:contrast=1.09"),
        ("typing", 3, 3.6, "0.95:brightness=-0.020:saturation=0.64:contrast=1.08"),
        ("night-office", 0, 1.0, "1.08:brightness=0.025:saturation=0.77:contrast=1.04"),
    ]
    for i, (name, start, length, grade) in enumerate(shots):
        run([
            "-ss", str(start), "-i", str(CACHE / f"{name}.mp4"),
            "-t", str(length), "-an", "-vf",
            "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,"
            "setsar=1,fps=25,settb=AVTB,"
            f"eq=gamma={grade},colorbalance=rs=-0.012:gs=0.004:bs=0.020:rm=-0.008:bm=0.012,"
            "vignette=PI/5:eval=init,format=yuv420p",
            "-c:v", "libx264", "-preset", "fast", "-crf", "18",
            "-threads", "4", str(CACHE / f"shot-{i}.mp4"),
        ])

    arguments: list[str] = []
    for i in range(len(shots)):
        arguments += ["-i", str(CACHE / f"shot-{i}.mp4")]
    offsets = [4.55, 7.70, 11.85, 15.00]
    filters = []
    previous = "0:v"
    for i, offset in enumerate(offsets, start=1):
        target = f"transition{i}"
        filters.append(
            f"[{previous}][{i}:v]xfade=transition=fade:duration=0.45:offset={offset}[{target}]"
        )
        previous = target
    arguments += [
        "-filter_complex_threads", "2", "-filter_complex", ";".join(filters),
        "-map", f"[{previous}]", "-an", "-t", "16", "-c:v", "libx264",
        "-preset", "slow", "-crf", "22", "-maxrate", "5M", "-bufsize", "10M",
        "-pix_fmt", "yuv420p", "-r", "25", "-g", "50", "-threads", "4",
        "-movflags", "+faststart", "-metadata", "title=AutoSystems | Urban Work",
        str(OUTPUT / "autosystems-office-opening.mp4"),
    ]
    run(arguments)
    run([
        "-ss", "1.2", "-i", str(OUTPUT / "autosystems-office-opening.mp4"),
        "-frames:v", "1", "-q:v", "2", str(OUTPUT / "autosystems-office-poster.jpg"),
    ])


if __name__ == "__main__":
    main()
