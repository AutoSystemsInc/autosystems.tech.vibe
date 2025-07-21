import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header activeSection="contact" />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-white mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                戻る
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge variant="outline" className="border-amber-400 text-amber-400 bg-amber-400/10 mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">お問い合わせ</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              プロジェクトのご相談、サービスに関するご質問など、
              お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Office Locations 
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">オフィス所在地</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "東京本社",
                address: "〒101-0021\n東京都千代田区外神田2-10-6\n宮本ビル3-A",
                access: "JR秋葉原駅 徒歩10分",
              },
            ].map((office, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-300 whitespace-pre-line">{office.address}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{office.access}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  )
}
