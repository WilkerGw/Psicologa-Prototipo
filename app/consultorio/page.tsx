"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock, Phone } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

const GALLERY_ITEMS = [
  { src: "/images/escritorio.webp", alt: "Ambiente de atendimento principal", span: "md:col-span-2" },
  { src: "/images/escritorio2.webp", alt: "Detalhes do consultório", span: "md:col-span-1" },
  { src: "/images/escritorio3.webp", alt: "Ambiente de espera e recepção", span: "md:col-span-1" },
  { src: "/images/escritorio4.webp", alt: "Detalhes decorativos", span: "md:col-span-1" },
  { src: "/images/escritorio5.webp", alt: "Segunda sala de atendimento", span: "md:col-span-1" },
  { src: "/images/escritorio6.webp", alt: "Vista geral do espaço", span: "md:col-span-3" },
];

export default function ConsultorioPage() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % GALLERY_ITEMS.length,
    }));
  };

  return (
    <div ref={ref}>
      {/* Lightbox */}
      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        images={GALLERY_ITEMS}
        currentIndex={lightbox.index}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* Hero */}
      <section className="bg-sage pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionTitle
            title="O Consultório"
            subtitle="Um espaço pensado para o seu acolhimento"
            centered
            light
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="scroll-reveal font-body text-charcoal/70 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            O consultório foi projetado para oferecer conforto, privacidade e um
            ambiente propício à reflexão. Cada detalhe foi pensado para que você
            se sinta à vontade desde o primeiro momento.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`scroll-reveal relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}
                onClick={() => openLightbox(i)}
              >
                <div className="aspect-video md:aspect-auto md:h-[400px] relative overflow-hidden rounded-2xl border border-sage/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-ivory font-body text-xs italic">
                      {item.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-blush py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left — Info */}
            <div className="scroll-reveal flex-1 flex flex-col gap-6">
              <SectionTitle
                eyebrow="Como chegar"
                title="Fica fácil de encontrar"
              />

              <div className="flex flex-col gap-5 mt-2">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-sage-dark mt-0.5 shrink-0" />
                  <address className="not-italic font-body text-charcoal/70 leading-relaxed">
                    Rua Antonio de Barros, 2687, 1º andar
                    <br />
                    Tatuapé — São Paulo, SP
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-sage-dark mt-0.5 shrink-0" />
                  <div className="font-body text-charcoal/70">
                    <p>Segunda a Sexta: 7h às 19h</p>
                    <p>Sábado e Domingo: 7h às 13h</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-sage-dark mt-0.5 shrink-0" />
                  <a
                    href="tel:+5511981091524"
                    className="font-body text-charcoal/70 hover:text-terracota transition-colors"
                  >
                    (11) 98109.1524
                  </a>
                </div>
              </div>

              <Button
                variant="secondary"
                href="https://www.google.com/maps/search/Rua+Antonio+de+Barros+2687+Tatuape+SP"
                external
              >
                Como chegar — Google Maps
              </Button>
            </div>

            {/* Right — Map */}
            <div className="scroll-reveal flex-1">
              <div className="rounded-2xl overflow-hidden shadow-md h-[350px] md:h-full min-h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7!2d-46.5713!3d-23.5389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzIwLjAiUyA0NsKwMzQnMTYuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do consultório no Tatuapé, SP"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
