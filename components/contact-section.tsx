"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MapPin, Instagram, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static form - no backend
    alert("پیام شما ثبت شد! به زودی با شما تماس می‌گیریم.")
    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            تماس با ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            برای دریافت مشاوره رایگان یا رزرو وقت با ما در تماس باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                اطلاعات تماس
              </h3>

              {/* Phone Numbers */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground mb-2">
                      شماره تماس
                    </h4>
                    <div className="space-y-1">
                      <a
                        href="tel:09140075449"
                        className="block text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        ۰۹۱۴۱۰۷۵۶۶۹
                      </a>
                      <a
                        href="tel:04136579911"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        ۰۴۱-
                      </a>
                      <a
                        href="tel:04135288603"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        ۰۴۱-
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground mb-2">
                      آدرس
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      عباسی، ایستگاه المهدی، جنوب مسجد المهدی / پایین‌تر از
                      کارگاه روبروی نیکوکاری، روی مسجد سجاد
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground mb-2">
                      اینستاگرام
                    </h4>
                    <a
                      href="https://instagram.com/moasse_mohandesi_nabeie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      @moasse_mohandesi_nabeie
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-xl bg-muted overflow-hidden">
                <img
                  src="/map-location-pin-marker-street-address.jpg"
                  alt="موقعیت روی نقشه"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              ارسال پیام
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-card-foreground">
                  نام و نام خانوادگی
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-card-foreground">
                  شماره تماس
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="۰۹۱۴-۱۰۷-۵۶۶۹"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="text-card-foreground"
                >
                  پیام شما
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="پیام خود را بنویسید..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  required
                  className="bg-input border-border text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2"
              >
                <Send className="w-5 h-5" />
                ارسال پیام
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
