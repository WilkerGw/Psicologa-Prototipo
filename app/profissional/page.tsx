"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SPECIALTIES = [
  "Psicologia Clínica",
  "Relacionamentos",
  "Autoconhecimento",
  "Desenvolvimento Pessoal",
];

const MEDIA_ITEMS = [
  {
    source: "Record TV — SP no Ar",
    context: "Comentou para o SP no Ar da Record sobre comportamento adolescente",
    title: "Adolescentes marcam rolezinho do sexo em parque de SP",
    type: "TV",
    typeColor: "bg-terracota/15 text-terracota",
  },
  {
    source: "Terra",
    context: "Consultada como especialista em psicologia infantil",
    title: "Após inquérito, MC Melody tira bojo e quer ser Anitta aos 8",
    type: "Portal",
    typeColor: "bg-sage/15 text-sage-dark",
  },
  {
    source: "Terra",
    context: "Análise sobre impacto psicológico em crianças expostas à mídia",
    title: "Após polêmicas, MC Melody e Pikena se afastam do funk sensual",
    type: "Portal",
    typeColor: "bg-sage/15 text-sage-dark",
  },
  {
    source: "Women's Health",
    context: "Matéria sobre limites saudáveis em relacionamentos",
    title: "O poder do 'não' em um relacionamento",
    type: "Revista",
    typeColor: "bg-gold/15 text-gold-dark",
  },
  {
    source: "UOL Comportamento",
    context: "Dicas de psicóloga para casais que vão morar juntos",
    title: "6 mandamentos para morar junto e não surtar no primeiro mês",
    type: "Portal",
    typeColor: "bg-sage/15 text-sage-dark",
  },
];

export default function ProfissionalPage() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-blush pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionTitle
            eyebrow="Conheça a profissional"
            title="Formação & Trajetória"
            centered
          />
        </div>
      </section>

      {/* Profile */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left — Profile card */}
            <div className="scroll-reveal md:w-[320px] shrink-0">
              <div className="bg-blush-light rounded-2xl p-6 border border-sage/20">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-6">
                  <Image
                    src="/images/Vanessa-Tamiello.webp"
                    alt="Vanessa Tamiello — Psicóloga"
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-1">
                  Vanessa Tamiello
                </h3>
                <p className="font-body text-sm text-charcoal/60 mb-4">
                  Psicóloga
                </p>
                <div className="flex flex-col gap-2 font-body text-sm text-charcoal/70">
                  <div className="flex justify-between">
                    <span className="text-charcoal/50">CRP</span>
                    <span>06/108983</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/50">Graduação</span>
                    <span>PUCSP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/50">Pós-graduação</span>
                    <span>USP</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-sage/20">
                  <a
                    href="https://www.instagram.com/psivanessatamiello/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-charcoal/60 hover:text-terracota transition-colors duration-200"
                    aria-label="Instagram de Vanessa Tamiello"
                  >
                    <InstagramIcon size={16} />
                    <span className="text-sm">@psivanessatamiello</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Text */}
            <div className="scroll-reveal flex-1 flex flex-col gap-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
                Quem sou eu
              </h2>

              <div className="flex flex-col gap-4 font-body text-charcoal/70 leading-relaxed">
                <p>
                  Sou Vanessa Tamiello, psicóloga formada pela Pontifícia
                  Universidade Católica de São Paulo (PUCSP) e pós-graduada pela
                  Universidade de São Paulo (USP). Ao longo da minha trajetória
                  profissional, desenvolvi uma prática clínica sólida, pautada na
                  escuta empática e no rigor científico.
                </p>
                <p>
                  Acredito que a terapia é um espaço sagrado de autoconhecimento.
                  Meu papel é oferecer um ambiente seguro onde você possa
                  explorar suas emoções, compreender padrões de comportamento e
                  desenvolver ferramentas para lidar com os desafios da vida de
                  forma mais equilibrada.
                </p>
                <p>
                  Trabalho com adultos e jovens adultos, com foco em questões
                  como ansiedade, relacionamentos, autoestima, transições de
                  vida e desenvolvimento pessoal. Cada pessoa é única, e minha
                  abordagem respeita essa individualidade.
                </p>
                <p>
                  Ao longo dos anos, tive a oportunidade de contribuir com
                  veículos de imprensa como Record TV, UOL, Terra e Women&apos;s
                  Health, levando informação de qualidade sobre saúde mental ao
                  público.
                </p>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-3 mt-2">
                {SPECIALTIES.map((spec) => (
                  <span
                    key={spec}
                    className="bg-sage/15 text-sage-dark text-xs px-4 py-2 rounded-full font-body font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media — Full list */}
      <section className="bg-ivory-dark py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="scroll-reveal mb-14">
            <SectionTitle
              eyebrow="Imprensa"
              title="Vanessa Tamiello na mídia"
              centered
            />
          </div>

          <div className="flex flex-col divide-y divide-sage/15">
            {MEDIA_ITEMS.map((item) => (
              <div
                key={item.title}
                className="scroll-reveal py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group cursor-pointer"
              >
                <div className="md:w-48 shrink-0">
                  <span className="font-body text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    {item.source}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs text-charcoal/40 mb-1">
                    {item.context}
                  </p>
                  <h3 className="font-body text-base font-medium text-charcoal group-hover:text-terracota transition-colors duration-200 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
                <span
                  className={`text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full w-fit ${item.typeColor}`}
                >
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
