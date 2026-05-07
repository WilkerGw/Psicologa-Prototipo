"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Quote() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-sage py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center scroll-reveal">
        {/* Ornamental quote SVG */}
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-8 text-gold"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M14 34c-1.5 0-2.8.3-4 .8C11.5 28.3 16.2 23 22 20.5l-2-4C12.2 19.6 6 27.5 6 37c0 6.6 4.5 11 9.5 11 4.4 0 8.5-3.6 8.5-8 0-3.8-3.2-6-6-6h-4zm28 0c-1.5 0-2.8.3-4 .8C39.5 28.3 44.2 23 50 20.5l-2-4C40.2 19.6 34 27.5 34 37c0 6.6 4.5 11 9.5 11 4.4 0 8.5-3.6 8.5-8 0-3.8-3.2-6-6-6h-4z" />
        </svg>

        <blockquote className="font-heading italic text-xl md:text-2xl text-ivory leading-relaxed mb-8">
          &ldquo;O principal objetivo da terapia psicológica não é transportar o
          paciente para um impossível estado de felicidade, mas sim ajudá-lo a
          adquirir firmeza e paciência diante do sofrimento.&rdquo;
        </blockquote>

        <cite className="font-body text-sm not-italic uppercase tracking-[0.15em] text-ivory/60">
          — Carl Gustav Jung
        </cite>
      </div>
    </section>
  );
}
