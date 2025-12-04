"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Phone, X, MessageSquare } from "lucide-react"

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    appliance: "",
    address: "",
    date: "",
    description: "",
  })

  const [showNotification, setShowNotification] = useState(false)

  const applianceLabels: Record<string, string> = {
    refrigerator: "یخچال و فریزر",
    washing: "لباسشویی",
    dishwasher: "ظرفشویی",
    vacuum: "جاروبرقی",
    heating: "پکیج و شوفاژ",
    "water-heater": "آبگرمکن",
    ac: "کولر گازی",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowNotification(true)
  }

  const closeNotification = () => {
    setShowNotification(false)
  }

  const handleCallManager = () => {
    window.location.href = "tel:09140075449"
  }

  return (
    <section id="reservation" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            رزرو آنلاین تعمیر
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            فرم زیر را پر کنید تا در سریع‌ترین زمان با شما تماس بگیریم
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    نام و نام خانوادگی
                  </Label>
                  <Input
                    id="name"
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

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    شماره تماس
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0914-107-5669"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Appliance Type */}
                <div className="space-y-2">
                  <Label htmlFor="appliance" className="text-card-foreground">
                    نوع لوازم خانگی
                  </Label>
                  <Select
                    value={formData.appliance}
                    onValueChange={(value) =>
                      setFormData({ ...formData, appliance: value })
                    }
                    required
                  >
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="refrigerator">
                        یخچال و فریزر
                      </SelectItem>
                      <SelectItem value="washing">لباسشویی</SelectItem>
                      <SelectItem value="dishwasher">ظرفشویی</SelectItem>
                      <SelectItem value="vacuum">جاروبرقی</SelectItem>
                      <SelectItem value="heating">پکیج و شوفاژ</SelectItem>
                      <SelectItem value="water-heater">آبگرمکن</SelectItem>
                      <SelectItem value="ac">کولر گازی</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-card-foreground">
                    تاریخ مورد نظر
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="bg-input border-border text-foreground"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-card-foreground">
                  آدرس
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="آدرس دقیق خود را وارد کنید"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              {/* Problem Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-card-foreground">
                  شرح مشکل
                </Label>
                <Textarea
                  id="description"
                  placeholder="مشکل دستگاه خود را شرح دهید..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className="bg-input border-border text-foreground resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1 gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  ثبت درخواست
                </Button>
                <a href="tel:09141075669" className="flex-1">
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground gap-2 bg-transparent"
                  >
                    <Phone className="w-5 h-5" />
                    یا از طریق تماس رزرو کنید
                  </Button>
                </a>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {showNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <Card className="w-full max-w-2xl bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={closeNotification}
                className="float-left text-muted-foreground hover:text-foreground transition-colors"
                aria-label="بستن"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Success message */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                  <MessageSquare className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  درخواست رزرو ثبت شد!
                </h3>
                <p className="text-muted-foreground">
                  جزئیات شما برای مدیریت ارسال شد.
                </p>
                <p className="text-muted-foreground">
                  لطفاً منتظر تماس کارشناسان ما باشید.
                </p>
              </div>

              {/* SMS simulation box */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                  <h4 className="font-bold text-foreground">
                    پیامک به مدیریت:
                  </h4>
                </div>

                <div className="bg-card rounded-md p-4 space-y-2 text-sm border border-border">
                  <p className="font-semibold text-secondary">
                    رزرو جدید دریافت شد
                  </p>
                  <div className="space-y-1 text-card-foreground">
                    <p>
                      <span className="font-medium">نام مشتری:</span>{" "}
                      {formData.name || "نامشخص"}
                    </p>
                    <p>
                      <span className="font-medium">تلفن:</span>{" "}
                      {formData.phone || "نامشخص"}
                    </p>
                    <p>
                      <span className="font-medium">نوع دستگاه:</span>{" "}
                      {formData.appliance
                        ? applianceLabels[formData.appliance]
                        : "انتخاب نشده"}
                    </p>
                    <p>
                      <span className="font-medium">تاریخ انتخابی:</span>{" "}
                      {formData.date || "انتخاب نشده"}
                    </p>
                    <p>
                      <span className="font-medium">آدرس:</span>{" "}
                      {formData.address || "نامشخص"}
                    </p>
                    {formData.description && (
                      <p>
                        <span className="font-medium">توضیحات مشکل:</span>{" "}
                        {formData.description}
                      </p>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs mt-3 pt-3 border-t border-border">
                    لطفاً تماس گرفته و بررسی انجام شود.
                  </p>
                </div>
              </div>

              {/* Call manager button */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleCallManager}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  size="lg"
                >
                  <Phone className="w-5 h-5" />
                  تماس خودکار برای اطلاع مدیریت
                </Button>
                <Button
                  onClick={closeNotification}
                  variant="outline"
                  className="flex-1 bg-transparent"
                  size="lg"
                >
                  بستن
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
}
