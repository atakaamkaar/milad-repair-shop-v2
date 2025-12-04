"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function HeroSection() {
  const scrollToReservation = () => {
    const element = document.getElementById("reservation")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-appliance-repair-technician-working-on-refr.jpg"
          alt="تعمیرات لوازم خانگی"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-primary/70 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
            تعمیرات تخصصی لوازم خانگی در تمام نقاط شهری
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
            سرویس سریع، مطمئن و با نمایندگی رسمی
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToReservation}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 gap-2 w-full sm:w-auto"
            >
              رزرو آنلاین تعمیر
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Button>
            <a href="tel:09141075669" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="bg-card/20 border-2 border-primary-foreground text-primary-foreground hover:bg-card/40 text-lg px-8 py-6 w-full"
              >
                تماس فوری: ۰۹۱۴۱۰۷۵۶۶۹
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                ۱۵+
              </div>
              <div className="text-sm text-primary-foreground/80">
                سال تجربه
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                ۱۰۰۰+
              </div>
              <div className="text-sm text-primary-foreground/80">
                مشتری راضی
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                ۲۴/۷
              </div>
              <div className="text-sm text-primary-foreground/80">پشتیبانی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                ۱۰۰٪
              </div>
              <div className="text-sm text-primary-foreground/80">
                قطعات اصل
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
