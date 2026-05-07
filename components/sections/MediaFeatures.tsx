"use client";

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
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="scroll-reveal mb-14">
          <SectionTitle
            eyebrow="Imprensa"
            title="Vanessa Tamiello na mídia"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MEDIA_ITEMS.map((item) => (
            <div
              key={item.title}
              className="scroll-reveal bg-ivory border border-sage/15 rounded-xl p-6 border-l-4 border-l-sage hover:bg-blush/30 transition-colors duration-300 cursor-pointer flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-body text-xs font-medium uppercase tracking-wider text-charcoal/50">
                  {item.source}
                </span>
                <span
                  className={`text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full ${item.typeColor}`}
                >
                  {item.type}
                </span>
              </div>
              <h3 className="font-body text-sm font-medium text-charcoal leading-relaxed">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="scroll-reveal text-center mt-10">
          <Button variant="ghost" href="/profissional">
            Ver todas as participações
          </Button>
        </div>
      </div>
    </section>
  );
}
