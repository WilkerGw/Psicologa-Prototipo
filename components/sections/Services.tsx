"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Armchair, Monitor, KeyRound, Info } from "lucide-react";

const SERVICES = [
  {
    icon: Armchair,
    title: "Presencial",
    description:
      "Sessões no consultório em Tatuapé, SP. Ambiente acolhedor e reservado para que você se sinta à vontade.",
    badge: "Tatuapé — SP",
  },
  {
    icon: Monitor,
    title: "Online",
    description:
      "Atendimento via plataforma segura, de qualquer lugar do Brasil. A mesma qualidade, com mais flexibilidade.",
    badge: "Todo o Brasil",
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-blush py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="scroll-reveal mb-14">
          <SectionTitle
            eyebrow="O que ofereço"
            title="Formas de atendimento"
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="scroll-reveal bg-ivory rounded-2xl p-8 border border-sage/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center">
                  <Icon size={24} className="text-sage-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="inline-block w-fit bg-sage/15 text-sage-dark text-xs px-3 py-1.5 rounded-full font-body font-medium">
                  {service.badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* Insurance note */}
        <div className="scroll-reveal mt-10 max-w-2xl mx-auto bg-blush-light/50 border-l-4 border-terracota px-5 py-4 rounded-r-lg flex items-start gap-3">
          <Info size={18} className="text-terracota mt-0.5 shrink-0" />
          <p className="font-body text-sm text-charcoal/60 leading-relaxed">
            <strong className="text-charcoal/80">Não atendemos convênios</strong>{" "}
            — Atendimento particular com emissão de recibo para reembolso junto
            ao seu plano.
          </p>
        </div>
      </div>
    </section>
  );
}
