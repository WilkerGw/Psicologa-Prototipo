"use client";

import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function EmotionalCTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-charcoal overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(168,181,162,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(184,150,90,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Butterfly icon */}
        <div className="scroll-reveal mb-8">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="w-14 h-14 mx-auto"
            aria-hidden="true"
          >
            <path
              d="M24 24C20 18 12 14 10 18C8 22 14 26 18 26C20 26 22 25 24 24Z"
              className="fill-gold/60"
            />
            <path
              d="M24 24C20 26 14 32 16 35C18 38 24 34 24 30V24Z"
              className="fill-gold/40"
            />
            <path
              d="M24 24C28 18 36 14 38 18C40 22 34 26 30 26C28 26 26 25 24 24Z"
              className="fill-gold/60"
            />
            <path
              d="M24 24C28 26 34 32 32 35C30 38 24 34 24 30V24Z"
              className="fill-gold/40"
            />
            <ellipse cx="24" cy="24" rx="1.2" ry="6" className="fill-gold" />
          </svg>
        </div>

        <h2 className="scroll-reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-6">
          Dar o primeiro passo
          <br />
          já é um ato de coragem.
        </h2>

        <p className="scroll-reveal font-body text-base md:text-lg text-ivory/80 leading-relaxed mb-10 max-w-xl mx-auto">
          Fazer terapia é reservar um espaço e tempo para cuidar de você. Entre
          em contato e tire suas dúvidas sem compromisso.
        </p>

        <div className="scroll-reveal">
          <Button
            variant="primary"
            href="https://wa.me/5511981091524"
            external
            size="lg"
            ariaLabel="Falar com Vanessa no WhatsApp"
          >
            Falar com Vanessa no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
