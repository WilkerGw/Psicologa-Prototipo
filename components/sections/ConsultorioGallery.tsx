"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const GALLERY_IMAGES = [
  {
    src: "/images/escritorio.webp",
    alt: "Ambiente de atendimento principal",
    caption: "Conforto e privacidade para sua jornada.",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/escritorio2.webp",
    alt: "Detalhes do consultório",
    caption: "Espaço acolhedor e profissional.",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/escritorio3.webp",
    alt: "Ambiente de espera e recepção",
    caption: "Cada detalhe pensado no seu bem-estar.",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/escritorio4.webp",
    alt: "Detalhes decorativos",
    caption: "Um refúgio de calma na cidade.",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/escritorio5.webp",
    alt: "Segunda sala de atendimento",
    caption: "Amplitude e clareza para o diálogo.",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/escritorio6.webp",
    alt: "Vista geral do espaço",
    caption: "Profissionalismo e acolhimento.",
    size: "lg:col-span-1 lg:row-span-1",
  },
];

export default function ConsultorioGallery() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-ivory py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="scroll-reveal mb-16">
          <SectionTitle
            eyebrow="O Espaço"
            title="Onde o cuidado acontece"
            centered={true}
          />
          <p className="font-body text-charcoal/60 text-center max-w-2xl mx-auto mt-6">
            Localizado em um ponto estratégico de São Paulo, o consultório foi 
            planejado para oferecer um ambiente seguro, silencioso e acolhedor, 
            facilitando o processo terapêutico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:h-[850px] gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`scroll-reveal group relative overflow-hidden rounded-2xl shadow-lg shadow-sage/5 h-[300px] md:h-[400px] lg:h-full ${img.size}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-ivory font-body text-sm italic">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-sage/10 py-10">
          <div className="flex flex-col gap-1">
            <span className="font-heading text-gold-dark font-semibold">Privacidade</span>
            <span className="font-body text-xs text-charcoal/50 leading-tight">Tratamento acústico completo</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-gold-dark font-semibold">Conforto</span>
            <span className="font-body text-xs text-charcoal/50 leading-tight">Climatização e ergonomia</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-gold-dark font-semibold">Localização</span>
            <span className="font-body text-xs text-charcoal/50 leading-tight">Próximo ao Metrô e estacionamento</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-gold-dark font-semibold">Acessibilidade</span>
            <span className="font-body text-xs text-charcoal/50 leading-tight">Prédio moderno com total acessibilidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
