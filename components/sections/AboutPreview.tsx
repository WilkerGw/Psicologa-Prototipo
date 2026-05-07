"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BADGES = [
  "Formada pela PUCSP",
  "Pós-grad. USP",
  "CRP 06/108983",
];

export default function AboutPreview() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Image — Left */}
          <div className="scroll-reveal flex-1 w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-sage/30">
              <Image
                src="/images/Vanessa-Tamiello.jpeg"
                alt="Vanessa Tamiello — Psicóloga"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text — Right */}
          <div className="scroll-reveal flex-1 flex flex-col gap-6">
            <SectionTitle
              eyebrow="Sobre Mim"
              title="Psicologia com base científica e escuta humana"
            />

            <div className="flex flex-col gap-4 font-body text-charcoal/70 leading-relaxed">
              <p>
                Sou Vanessa Tamiello, psicóloga clínica formada pela Pontifícia
                Universidade Católica de São Paulo (PUCSP) e pós-graduada pela
                Universidade de São Paulo (USP). Com anos de experiência em
                atendimento clínico, meu trabalho é guiado pela ciência e pelo
                respeito à singularidade de cada pessoa.
              </p>
              <p>
                Minha abordagem busca ajudar você a compreender suas emoções,
                identificar padrões que causam sofrimento e desenvolver
                estratégias concretas para uma vida com mais equilíbrio e
                autoconhecimento.
              </p>
              <p>
                Ofereço atendimentos presenciais no Tatuapé, em São Paulo, e
                online para pessoas de qualquer lugar do Brasil — sempre em um
                ambiente acolhedor e livre de julgamentos.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="bg-blush text-charcoal text-xs px-4 py-2 rounded-full border border-sage/30 font-body"
                >
                  {badge}
                </span>
              ))}
            </div>

            <Button variant="ghost" href="/profissional">
              Ver perfil completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
