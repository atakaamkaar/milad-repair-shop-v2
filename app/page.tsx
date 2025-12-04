import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import ReservationSection from "@/components/reservation-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReservationSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
