"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wifi, Snowflake, ShieldCheck, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Wifi, label: "Wi-Fi incluso" },
  { icon: Snowflake, label: "Climatização" },
  { icon: ShieldCheck, label: "Total privacidade" },
  { icon: MapPin, label: "Fácil acesso — Tatuapé" },
];

export default function LocacaoPage() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <span className="font-body text-xs font-light uppercase tracking-[0.2em] text-terracota mb-4 block">
            Para profissionais de saúde
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-6">
            Salas disponíveis para locação em Tatuapé
          </h1>
          <p className="font-body text-base md:text-lg text-ivory/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Espaços modernos e equipados para psicólogos, terapeutas e outros profissionais.
          </p>
          <Button variant="whatsapp" href="https://wa.me/5511981091524?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20a%20loca%C3%A7%C3%A3o%20de%20salas." external size="lg" ariaLabel="Consultar disponibilidade no WhatsApp">
            Consultar disponibilidade
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-charcoal pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.label} className="scroll-reveal bg-ivory/5 border border-ivory/10 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                  <Icon size={28} className="text-ivory/70" strokeWidth={1.5} />
                  <span className="font-body text-sm text-ivory/80">{feat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="scroll-reveal mb-12">
            <SectionTitle title="Conheça os espaços" subtitle="Salas individuais, mobiliadas e climatizadas, prontas para atendimento. Disponibilidade flexível — por hora ou período." centered />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="scroll-reveal relative overflow-hidden rounded-xl cursor-pointer">
                <div className="aspect-square bg-linear-to-br from-blush/60 via-sage/20 to-ivory-dark flex items-center justify-center">
                  <span className="font-body text-xs text-charcoal/30">Sala {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blush py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="scroll-reveal font-display text-2xl md:text-3xl font-bold text-charcoal mb-4">Interessado em locar uma sala?</h2>
          <address className="scroll-reveal not-italic font-body text-charcoal/60 mb-2">Rua Antonio de Barros, 2687, 1º andar — Tatuapé, SP</address>
          <p className="scroll-reveal font-body text-charcoal/60 mb-8">(11) 98109.1524</p>
          <div className="scroll-reveal">
            <Button variant="whatsapp" href="https://wa.me/5511981091524?text=Ol%C3%A1!%20Tenho%20interesse%20na%20loca%C3%A7%C3%A3o%20de%20salas." external size="lg" ariaLabel="Falar sobre locação no WhatsApp">
              Falar sobre locação
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
