"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock, Phone } from "lucide-react";

const GALLERY_ITEMS = [
  { alt: "Recepção do consultório", span: "md:col-span-2" },
  { alt: "Sala de atendimento principal", span: "" },
  { alt: "Detalhe da decoração", span: "" },
  { alt: "Vista da sala de espera", span: "" },
  { alt: "Ambiente de terapia", span: "md:col-span-2" },
];

export default function ConsultorioPage() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
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
              >
                <div className="aspect-4/3 bg-linear-to-br from-sage/5 to-sage/10 rounded-2xl flex items-center justify-center border border-sage/10 overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-sage-dark">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                    <span className="font-body text-xs text-charcoal/40">
                      {item.alt}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
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
