"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Home } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToHome, setShowBackToHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      if (sectionId === "home") {
        setShowBackToHome(false);
      }
    }
  };

  const handleInstantCall = () => {
    setShowBackToHome(true);
    window.location.href = "tel:09141075669";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-primary/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Business Name */}
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isScrolled ? "bg-primary" : "bg-card"
              }`}
            >
              <span
                className={`font-bold text-xl ${
                  isScrolled ? "text-primary-foreground" : "text-primary"
                }`}
              >
                ن
              </span>
            </div>
            <div>
              <h1
                className={`text-lg font-bold leading-tight ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                نمایندگی نبیی
              </h1>
              <p
                className={`text-xs ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-primary-foreground/80"
                }`}
              >
                تعمیرات تخصصی لوازم خانگی
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-secondary"
              }`}
            >
              خانه
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-secondary"
              }`}
            >
              خدمات
            </button>
            <button
              onClick={() => scrollToSection("reservation")}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-secondary"
              }`}
            >
              رزرو آنلاین
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-secondary"
              }`}
            >
              تماس با ما
            </button>
          </nav>

          {/* Call Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {showBackToHome && (
              <Button
                onClick={() => scrollToSection("home")}
                variant="outline"
                className={`gap-2 ${
                  isScrolled
                    ? "border-border text-foreground hover:bg-accent"
                    : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <Home className="w-4 h-4" />
                بازگشت به صفحه اصلی
              </Button>
            )}

            <Button
              onClick={handleInstantCall}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2"
            >
              <Phone className="w-4 h-4" />
              تماس فوری
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4 py-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                خانه
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                خدمات
              </button>
              <button
                onClick={() => scrollToSection("reservation")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                رزرو آنلاین
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                تماس با ما
              </button>

              {showBackToHome && (
                <Button
                  onClick={() => scrollToSection("home")}
                  variant="outline"
                  className="w-full gap-2"
                >
                  <Home className="w-4 h-4" />
                  بازگشت به صفحه اصلی
                </Button>
              )}

              <Button
                onClick={handleInstantCall}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2"
              >
                <Phone className="w-4 h-4" />
                تماس فوری
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
