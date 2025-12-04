import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/professional-refrigerator-repair-technician-fixing.jpg",
    alt: "تعمیر یخچال",
    title: "تعمیر یخچال",
  },
  {
    src: "/washing-machine-repair-service-professional-techni.jpg",
    alt: "تعمیر لباسشویی",
    title: "تعمیر لباسشویی",
  },
  {
    src: "/air-conditioning-repair-technician-installing-ac-u.jpg",
    alt: "نصب کولر گازی",
    title: "نصب کولر گازی",
  },
  {
    src: "/dishwasher-repair-technician-with-tools-and-parts.jpg",
    alt: "تعمیر ظرفشویی",
    title: "تعمیر ظرفشویی",
  },
  {
    src: "/heating-system-boiler-repair-professional-service.jpg",
    alt: "سرویس پکیج",
    title: "سرویس پکیج",
  },
  {
    src: "/water-heater-repair-technician-fixing-gas-water-he.jpg",
    alt: "تعمیر آبگرمکن",
    title: "تعمیر آبگرمکن",
  },
]

export default function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">نمونه خدمات ما</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            نگاهی به کیفیت کار و خدمات ارائه شده توسط تیم متخصص ما
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-primary-foreground font-bold text-lg p-6">{image.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
