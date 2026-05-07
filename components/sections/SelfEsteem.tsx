"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Button from "@/components/ui/Button";

const SIGNS = [
  "Dificuldade em aceitar elogios",
  "Comparação constante com os outros",
  "Medo de julgamento e rejeição",
  "Autocrítica excessiva e punitiva",
  "Dificuldade em dizer 'não'",
  "Sensação de não ser suficiente",
];

const GAINS = [
  "Reconhecer seu valor independente de aprovação externa",
  "Estabelecer limites saudáveis nos relacionamentos",
  "Desenvolver um diálogo interno mais gentil",
  "Aceitar imperfeições como parte da jornada",
  "Tomar decisões com mais segurança",
  "Construir uma relação de respeito consigo mesma(o)",
];

export default function SelfEsteem() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-sage py-24 md:py-32 relative overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-[url('/images/escritorio4.webp')] bg-fixed bg-cover bg-center opacity-[0.08] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 600 400"
          fill="none"
          className="absolute right-0 bottom-0 w-[500px] opacity-[0.05]"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="400" x2="600" y2="0" stroke="currentColor" strokeWidth="1" className="text-ivory" />
          <line x1="50" y1="400" x2="600" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-ivory" />
          <line x1="100" y1="400" x2="600" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-ivory" />
          <line x1="150" y1="400" x2="600" y2="150" stroke="currentColor" strokeWidth="0.3" className="text-ivory" />
        </svg>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Centered intro */}
        <div className="scroll-reveal max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <span className="font-body text-xs font-light uppercase tracking-[0.2em] text-ivory/60 mb-4 block">
            Autoconhecimento
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-6">
            Autoestima não é vaidade.
            <br />
            <span className="font-heading italic text-gold-light">
              É a base de tudo.
            </span>
          </h2>

          <div className="w-16 h-px bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          <p className="font-body text-ivory/75 leading-relaxed">
            A forma como você se enxerga influencia cada decisão, cada
            relacionamento, cada oportunidade que abraça ou deixa passar. A
            autoestima saudável não significa achar que você é perfeita(o) —
            significa se respeitar mesmo com suas imperfeições.
          </p>
        </div>

        {/* Contrast columns */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left — Signs */}
          <div className="scroll-reveal flex-1 bg-charcoal/20 backdrop-blur-sm rounded-2xl p-8 border border-ivory/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-terracota/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-terracota-light" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-terracota-light/50" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-ivory">
                Sinais de baixa autoestima
              </h3>
            </div>

            <ul className="flex flex-col gap-4">
              {SIGNS.map((sign, i) => (
                <li
                  key={i}
                  className="scroll-reveal flex items-start gap-3 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="w-5 h-5 rounded-full border border-terracota-light/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracota-light/60" />
                  </span>
                  <span className="font-body text-sm text-ivory/70 leading-relaxed group-hover:text-ivory transition-colors duration-200">
                    {sign}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Separator */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 py-8">
            <div className="w-px h-full bg-linear-to-b from-transparent via-gold/40 to-transparent" />
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
              </svg>
            </div>
            <div className="w-px h-full bg-linear-to-b from-transparent via-gold/40 to-transparent" />
          </div>

          {/* Mobile separator */}
          <div className="flex md:hidden items-center justify-center gap-3 py-2">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-gold/30 to-transparent" />
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold/60">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-gold/30 to-transparent" />
          </div>

          {/* Right — Gains */}
          <div className="scroll-reveal flex-1 bg-ivory/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/15">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-gold-light" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-ivory">
                O que a terapia pode mudar
              </h3>
            </div>

            <ul className="flex flex-col gap-4">
              {GAINS.map((gain, i) => (
                <li
                  key={i}
                  className="scroll-reveal flex items-start gap-3 group"
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <span className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-light" />
                    </svg>
                  </span>
                  <span className="font-body text-sm text-ivory/70 leading-relaxed group-hover:text-ivory transition-colors duration-200">
                    {gain}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal text-center mt-14 md:mt-16">
          <p className="font-heading italic text-base text-ivory/60 mb-6 max-w-md mx-auto">
            Você merece se tratar com a mesma gentileza que dedica aos outros.
          </p>
          <Button
            variant="primary"
            href="https://wa.me/5511981091524?text=Ol%C3%A1%20Vanessa!%20Gostaria%20de%20trabalhar%20minha%20autoestima%20na%20terapia."
            external
            size="lg"
            ariaLabel="Conversar sobre autoestima no WhatsApp"
          >
            Começar essa jornada
          </Button>
        </div>
      </div>
    </section>
  );
}
