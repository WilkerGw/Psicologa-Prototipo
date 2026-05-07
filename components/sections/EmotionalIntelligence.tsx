"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Button from "@/components/ui/Button";

const PILLARS = [
  {
    number: "01",
    title: "Autoconsciência",
    short: "Reconhecer suas emoções no momento em que surgem.",
    detail:
      "É a capacidade de observar seus sentimentos sem ser dominado por eles. Pessoas autoconscientes entendem como suas emoções influenciam seus pensamentos, comportamentos e decisões — e conseguem identificar padrões com mais clareza.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
        <circle cx="16" cy="16" r="4" fill="currentColor" className="text-gold" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1" className="text-gold/50" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Autorregulação",
    short: "Gerenciar impulsos e reagir com equilíbrio.",
    detail:
      "Não se trata de suprimir emoções, mas de escolher como respondemos a elas. A autorregulação permite pausar antes de agir, lidar com frustrações sem explosões e manter a compostura mesmo em situações difíceis.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M8 24C8 24 12 16 16 16C20 16 24 24 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-sage-dark" />
        <path d="M8 20C8 20 12 12 16 12C20 12 24 20 24 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-sage/50" />
        <circle cx="16" cy="8" r="2" fill="currentColor" className="text-sage-dark" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Motivação",
    short: "Encontrar propósito além de recompensas externas.",
    detail:
      "Pessoas emocionalmente inteligentes são movidas por valores internos — crescimento, realização, propósito. Essa motivação intrínseca gera resiliência, otimismo e a capacidade de persistir diante de obstáculos.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 26V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-terracota" />
        <path d="M10 16l6-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-terracota" />
        <circle cx="16" cy="26" r="2" fill="currentColor" className="text-terracota/50" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Empatia",
    short: "Compreender genuinamente o que o outro sente.",
    detail:
      "Vai além de 'se colocar no lugar do outro'. A empatia envolve perceber emoções não-ditas, respeitar perspectivas diferentes e responder com sensibilidade — fortalecendo vínculos e reduzindo conflitos.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 26s-9-5.5-9-12a5.5 5.5 0 0 1 9-4.24A5.5 5.5 0 0 1 25 14c0 6.5-9 12-9 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-gold" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Habilidades Sociais",
    short: "Construir relações saudáveis e comunicar com clareza.",
    detail:
      "Envolve assertividade, escuta ativa, resolução de conflitos e a capacidade de inspirar confiança. Pessoas com boas habilidades sociais criam ambientes mais colaborativos e constroem relacionamentos mais profundos.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" className="text-sage-dark" />
        <circle cx="22" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" className="text-sage" />
        <path d="M4 26c0-4 4-7 8-7 2 0 3.5.5 5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-sage-dark" />
        <path d="M20 26c0-3 2-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-sage" />
      </svg>
    ),
  },
];

function PillarCard({
  pillar,
  index,
  isActive,
  onToggle,
}: {
  pillar: (typeof PILLARS)[0];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="scroll-reveal flex gap-5 group cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    >
      {/* Timeline indicator */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isActive
              ? "border-terracota bg-terracota/10 scale-110"
              : "border-sage/30 bg-ivory group-hover:border-gold"
          }`}
        >
          <span
            className={`font-heading text-sm font-semibold transition-colors duration-300 ${
              isActive ? "text-terracota" : "text-charcoal/40 group-hover:text-gold"
            }`}
          >
            {pillar.number}
          </span>
        </div>
        {index < PILLARS.length - 1 && (
          <div className="w-[2px] h-full min-h-[24px] bg-linear-to-b from-gold/30 to-gold/5 my-1" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 last:pb-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="opacity-70">{pillar.icon}</div>
          <h4
            className={`font-display text-lg font-semibold transition-colors duration-200 ${
              isActive ? "text-charcoal" : "text-charcoal/80 group-hover:text-charcoal"
            }`}
          >
            {pillar.title}
          </h4>
        </div>

        <p className="font-body text-sm text-charcoal/55 leading-relaxed mb-1">
          {pillar.short}
        </p>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="font-body text-sm text-charcoal/65 leading-relaxed mt-3 pr-4 border-l-2 border-gold/30 pl-4">
                {pillar.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function EmotionalIntelligence() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-blush py-24 md:py-32 relative overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/escritorio3.webp')] bg-fixed bg-cover bg-center opacity-[0.06] pointer-events-none" 
        aria-hidden="true"
      />
      
      {/* Decorative geometric pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="absolute -left-16 top-20 w-[300px] md:w-[400px] opacity-[0.03]"
        >
          <polygon points="200,20 380,150 320,370 80,370 20,150" stroke="currentColor" strokeWidth="1.5" className="text-charcoal" />
          <polygon points="200,60 340,160 290,340 110,340 60,160" stroke="currentColor" strokeWidth="1" className="text-charcoal" />
          <polygon points="200,100 300,170 260,310 140,310 100,170" stroke="currentColor" strokeWidth="0.5" className="text-charcoal" />
          <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="0.5" className="text-charcoal" />
        </svg>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left — Editorial intro */}
          <div className="scroll-reveal lg:w-[40%] flex flex-col gap-7">
            <span className="font-body text-xs font-light uppercase tracking-[0.2em] text-terracota">
              Desenvolvimento Pessoal
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-tight">
              O que é
              <br />
              <span className="text-gold-dark italic font-heading text-4xl md:text-5xl">
                Inteligência Emocional?
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-linear-to-r from-gold to-gold/0" />

            <p className="font-body text-charcoal/65 leading-relaxed">
              Inteligência Emocional é a capacidade de reconhecer, compreender e
              gerenciar as próprias emoções — e as dos outros. Conceito
              popularizado pelo psicólogo Daniel Goleman, ela é hoje considerada
              tão importante quanto o QI para o sucesso pessoal e profissional.
            </p>

            <p className="font-body text-charcoal/65 leading-relaxed">
              Na prática clínica, trabalhar a inteligência emocional significa
              aprender a identificar gatilhos, responder ao invés de reagir e
              construir relações mais autênticas e satisfatórias.
            </p>

            {/* Goleman reference */}
            <div className="bg-ivory/60 rounded-xl px-5 py-4 border border-sage/15">
              <blockquote className="font-heading italic text-base text-charcoal/70 leading-relaxed">
                &ldquo;A inteligência emocional representa 80% do sucesso na
                vida.&rdquo;
              </blockquote>
              <cite className="font-body text-xs not-italic text-charcoal/40 mt-2 block">
                — Daniel Goleman
              </cite>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
              <Button
                variant="primary"
                href="https://wa.me/5511981091524?text=Ol%C3%A1%20Vanessa!%20Gostaria%20de%20saber%20mais%20sobre%20intelig%C3%AAncia%20emocional%20na%20terapia."
                external
                ariaLabel="Conversar sobre inteligência emocional no WhatsApp"
              >
                Quero desenvolver a minha
              </Button>
            </div>
          </div>

          {/* Right — 5 Pillars Journey */}
          <div className="lg:w-[60%] flex flex-col">
            <div className="scroll-reveal flex items-center gap-3 mb-8">
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <div className="w-2 h-2 rounded-full bg-sage" />
                <div className="w-2 h-2 rounded-full bg-terracota" />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal">
                Os 5 pilares
              </h3>
              <span className="font-body text-xs text-charcoal/35">
                — toque para explorar
              </span>
            </div>

            <div className="flex flex-col">
              {PILLARS.map((pillar, i) => (
                <PillarCard
                  key={pillar.number}
                  pillar={pillar}
                  index={i}
                  isActive={activeIndex === i}
                  onToggle={() =>
                    setActiveIndex(activeIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
