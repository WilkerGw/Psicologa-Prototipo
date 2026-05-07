"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const SYMPTOMS = [
  {
    title: "Preocupação excessiva",
    description:
      "Pensamentos repetitivos sobre situações futuras, dificuldade em controlar as preocupações mesmo quando não há motivo aparente.",
  },
  {
    title: "Sintomas físicos",
    description:
      "Coração acelerado, tensão muscular, dores de cabeça, problemas digestivos, tremores e sudorese sem causa médica identificada.",
  },
  {
    title: "Dificuldade de concentração",
    description:
      "Sensação de mente em branco, dificuldade para focar no trabalho ou estudos, esquecimentos frequentes e sensação de estar sempre 'no piloto automático'.",
  },
  {
    title: "Alterações no sono",
    description:
      "Insônia, sono agitado, dificuldade para adormecer por causa de pensamentos acelerados ou acordar cansado mesmo após horas de descanso.",
  },
  {
    title: "Evitação e isolamento",
    description:
      "Tendência a evitar situações sociais, procrastinação por medo de errar, recusa de convites e sensação de que algo ruim vai acontecer.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof SYMPTOMS)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className="scroll-reveal border-b border-sage/15 last:border-b-0"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="font-heading text-2xl text-sage-dark/40 tabular-nums w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-base font-medium text-charcoal group-hover:text-terracota transition-colors duration-200">
            {item.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-charcoal/40 transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-charcoal/60 leading-relaxed pb-5 pl-12 pr-4">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AnxietyInfo() {
  const ref = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/escritorio.webp')] bg-fixed bg-cover bg-center opacity-[0.07] pointer-events-none" 
        aria-hidden="true"
      />
      
      {/* Decorative background wave */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1200 600"
          fill="none"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] opacity-[0.04]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300"
            stroke="currentColor"
            strokeWidth="2"
            className="text-sage"
          />
          <path
            d="M0 320C200 220 400 420 600 320C800 220 1000 420 1200 320"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-sage"
          />
          <path
            d="M0 340C200 240 400 440 600 340C800 240 1000 440 1200 340"
            stroke="currentColor"
            strokeWidth="1"
            className="text-sage"
          />
          <circle cx="600" cy="300" r="120" stroke="currentColor" strokeWidth="1" className="text-sage" />
          <circle cx="600" cy="300" r="80" stroke="currentColor" strokeWidth="0.5" className="text-sage" />
          <circle cx="600" cy="300" r="40" stroke="currentColor" strokeWidth="0.5" className="text-sage" />
        </svg>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left — Editorial stat + context */}
          <div className="scroll-reveal lg:w-[45%] flex flex-col gap-8">
            {/* Eyebrow */}
            <span className="font-body text-xs font-light uppercase tracking-[0.2em] text-terracota">
              Saúde Mental
            </span>

            {/* Big stat */}
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-7xl md:text-8xl lg:text-[110px] font-bold text-sage leading-none">
                  18,6
                </span>
                <span className="font-heading text-xl md:text-2xl text-charcoal/50 italic">
                  milhões
                </span>
              </div>
              <p className="font-body text-sm text-charcoal/50 leading-relaxed max-w-xs">
                de brasileiros convivem com transtornos de ansiedade — o país com mais
                casos no mundo, segundo a OMS.
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-16 h-[2px] bg-linear-to-r from-gold to-gold/0" />

            {/* Editorial paragraph */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal leading-tight">
                Ansiedade não é frescura.
                <br />
                <span className="text-sage-dark">É o corpo pedindo atenção.</span>
              </h2>
              <p className="font-body text-charcoal/65 leading-relaxed">
                A ansiedade é uma resposta natural do organismo diante de
                situações de perigo ou incerteza. Porém, quando se torna
                constante e desproporcional, ela compromete a qualidade de vida,
                os relacionamentos e até a saúde física.
              </p>
              <p className="font-body text-charcoal/65 leading-relaxed">
                Reconhecer os sinais é o primeiro passo. A psicoterapia oferece
                ferramentas concretas para compreender as causas, lidar com os
                gatilhos e recuperar o equilíbrio emocional.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
              <Button
                variant="secondary"
                href="https://wa.me/5511981091524?text=Ol%C3%A1%20Vanessa!%20Gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20ansiedade."
                external
                ariaLabel="Conversar sobre ansiedade pelo WhatsApp"
              >
                Quero entender melhor
              </Button>
              <Button variant="ghost" href="/profissional">
                Sobre a abordagem
              </Button>
            </div>
          </div>

          {/* Right — Accordion symptoms */}
          <div className="lg:w-[55%] flex flex-col gap-6">
            <div className="scroll-reveal flex items-center gap-3 mb-2">
              {/* Subtle brain icon */}
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sage-dark">
                  <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5.5 4 7.5.5.5 1 1.5 1.5 2.5h3c.5-1 1-2 1.5-2.5 2-2 4-4.5 4-7.5a7 7 0 0 0-7-7z" />
                  <path d="M9 22h6" />
                  <path d="M10 2v1.5" />
                  <path d="M14 2v1.5" />
                  <path d="M9 9.5c1-1 2.5-1 3.5 0s2.5 1 3.5 0" />
                  <path d="M8 12c1-1 2.5-1 3.5 0s2.5 1 3.5 0" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  Sinais que merecem atenção
                </h3>
                <p className="font-body text-xs text-charcoal/40 mt-0.5">
                  Clique para saber mais sobre cada sintoma
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="bg-blush-light/40 rounded-2xl border border-sage/10 px-6 py-2">
              {SYMPTOMS.map((item, i) => (
                <AccordionItem
                  key={item.title}
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>

            {/* Bottom note */}
            <div className="scroll-reveal flex items-start gap-3 bg-sage/8 rounded-xl px-5 py-4 border border-sage/10">
              <div className="w-1 h-full min-h-[40px] bg-sage rounded-full shrink-0" />
              <p className="font-body text-sm text-charcoal/55 leading-relaxed italic">
                Se você se identificou com dois ou mais desses sinais de forma
                recorrente, considere buscar apoio profissional. Ansiedade tem
                tratamento — e quanto antes, melhor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
