import { Check, Shield, Users, Clock, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "قطعات اورجینال",
    description: "استفاده از قطعات اصل و با گارانتی معتبر",
  },
  {
    icon: Users,
    title: "تعمیرکاران متخصص",
    description: "کادری مجرب با سال‌ها تجربه کاری",
  },
  {
    icon: Clock,
    title: "سرویس سریع",
    description: "حضور در محل در کمترین زمان ممکن",
  },
  {
    icon: Award,
    title: "گارانتی تعمیرات",
    description: "ضمانت و گارانتی کتبی برای تمام تعمیرات",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">چرا نمایندگی نبیعی؟</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            اعتماد هزاران مشتری راضی، نتیجه کیفیت و تعهد ما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">مزایای همکاری با ما</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "پوشش تمام مناطق شهری",
                "مشاوره رایگان قبل از تعمیر",
                "قیمت‌گذاری شفاف و منصفانه",
                "پشتیبانی ۲۴ ساعته",
                "امکان رزرو آنلاین",
                "پرداخت پس از انجام کار",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
