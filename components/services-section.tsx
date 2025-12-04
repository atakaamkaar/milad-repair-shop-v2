import { Card } from "@/components/ui/card"
import { Snowflake, WashingMachine, Droplets, Wind, Flame, Zap, Fan } from "lucide-react"

const services = [
  {
    icon: Snowflake,
    title: "یخچال و فریزر",
    description: "تعمیرات انواع یخچال، فریزر، یخچال فریزر و ساید بای ساید",
  },
  {
    icon: WashingMachine,
    title: "لباسشویی",
    description: "تعمیر و سرویس انواع ماشین لباسشویی و ماشین ظرفشویی",
  },
  {
    icon: Droplets,
    title: "ظرفشویی",
    description: "تعمیرات تخصصی ماشین ظرفشویی با قطعات اورجینال",
  },
  {
    icon: Wind,
    title: "جاروبرقی",
    description: "تعمیر انواع جاروبرقی خانگی و صنعتی",
  },
  {
    icon: Flame,
    title: "پکیج و شوفاژ",
    description: "تعمیر و سرویس سیستم‌های گرمایشی و پکیج",
  },
  {
    icon: Zap,
    title: "آبگرمکن",
    description: "تعمیرات آبگرمکن برقی و گازی",
  },
  {
    icon: Fan,
    title: "کولر گازی",
    description: "نصب، سرویس و تعمیر انواع کولر گازی",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">خدمات تخصصی ما</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ارائه خدمات تعمیرات و سرویس انواع لوازم خانگی با بالاترین کیفیت
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
