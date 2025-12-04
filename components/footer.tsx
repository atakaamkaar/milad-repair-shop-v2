"use client"

import { Instagram, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">نمایندگی مجاز نبیعی</h3>
            <p className="text-primary-foreground/80 leading-relaxed text-pretty">
              ارائه خدمات تعمیرات تخصصی لوازم خانگی با بیش از ۱۵ سال سابقه
              درخشان
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  خانه
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  خدمات
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reservation")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  رزرو آنلاین
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  تماس با ما
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">خدمات</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>تعمیر یخچال و فریزر</li>
              <li>تعمیر لباسشویی</li>
              <li>تعمیر ظرفشویی</li>
              <li>تعمیر جاروبرقی</li>
              <li>سرویس پکیج</li>
              <li>نصب کولر گازی</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:09141075669"
                    className="block text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    09141075669
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  عباسی، ایستگاه المهدی، جنوب مسجد المهدی
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 shrink-0" />
                <a
                  href="https://instagram.com/moasse_mohandesi_nabeie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  @moasse_mohandesi_nabeie
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/80 text-center md:text-right">
            © ۲۰۲۵ نمایندگی مجاز نبیعی. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/moasse_mohandesi_nabeie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
