"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MEDIA_ITEMS = [
  {
    source: "SP no Ar — Record",
    title: "Adolescentes marcam rolezinho do sexo em parque de São Paulo",
    type: "TV",
    typeColor: "bg-terracota/15 text-terracota",
  },
  {
    source: "Terra",
    title: "Após inquérito, MC Melody tira bojo e quer ser Anitta aos 8",
    type: "Portal",
    typeColor: "bg-sage/15 text-sage-dark",
  },
  {
    source: "Women's Health",
    title: "O poder do 'não' em um relacionamento",
    type: "Revista",
    typeColor: "bg-gold/15 text-gold-dark",
  },
  {
    source: "UOL Comportamento",
    title: "6 mandamentos para morar junto e não surtar no primeiro mês",
    type: "Portal",
    typeColor: "bg-sage/15 text-sage-dark",
  },
];

export default function MediaFeatures() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-ivory py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blush/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="scroll-reveal mb-16">
          <SectionTitle
            eyebrow="Imprensa"
            title="Vanessa Tamiello na mídia"
            centered={false}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left — Clipping List */}
          <div className="flex-1 w-full flex flex-col gap-5">
            {MEDIA_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal group flex flex-col gap-2 pb-5 border-b border-sage/10 last:border-0 hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10px] font-bold uppercase tracking-widest text-terracota">
                    {item.source}
                  </span>
                  <div className="h-px w-8 bg-sage/20" />
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${item.typeColor}`}
                  >
                    {item.type}
                  </span>
                </div>
                <h3 className="font-display text-base md:text-lg text-charcoal group-hover:text-gold-dark transition-colors duration-200 leading-snug">
                  &ldquo;{item.title}&rdquo;
                </h3>
              </div>
            ))}

            <div className="scroll-reveal mt-6">
              <Button variant="ghost" href="/profissional">
                Ver Clipping Completo
              </Button>
            </div>
          </div>

          {/* Right — Featured Image Section */}
          <div className="scroll-reveal lg:w-[40%] shrink-0">
            <div className="relative">
              {/* Decorative frames */}
              <div className="absolute -inset-4 border border-sage/20 rounded-2xl -rotate-3 pointer-events-none" />
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl rotate-2 pointer-events-none" />
              
              <div className="relative aspect-4/5 w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl shadow-xl shadow-sage/10">
                <Image
                  src="/images/Vanessa-Tamiello-dois.webp"
                  alt="Vanessa Tamiello — Participação na Mídia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                
                {/* Visual badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-charcoal/80 to-transparent p-6">
                  <p className="font-heading italic text-ivory text-sm">
                    Presença constante nos principais veículos de comunicação do país.
                  </p>
                </div>
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg shadow-lg hidden md:block">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-ivory">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
