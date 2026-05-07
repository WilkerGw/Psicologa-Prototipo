"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Heart, Users, Brain, Shield } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511981091524";

const INDIVIDUAL_TREATMENTS = [
  {
    id: "adolescente",
    title: "Adolescentes",
    subtitle: "Acolhimento para quem está se descobrindo",
    description:
      "A adolescência é um período de intensas transformações. O acompanhamento psicológico ajuda o jovem a compreender suas emoções, fortalecer a autoestima e enfrentar os desafios dessa fase com mais segurança.",
    image: "/images/terapia-adolescente.png",
    topics: ["Ansiedade escolar", "Autoestima", "Conflitos familiares", "Identidade"],
    icon: Shield,
  },
  {
    id: "adulto",
    title: "Adultos",
    subtitle: "Espaço seguro para o autoconhecimento",
    description:
      "A terapia para adultos oferece um espaço de escuta qualificada para lidar com questões emocionais, profissionais e relacionais. Juntos, buscamos estratégias para uma vida mais equilibrada e com mais sentido.",
    image: "/images/terapia-adulto.png",
    topics: ["Ansiedade e estresse", "Relacionamentos", "Carreira", "Autoconhecimento"],
    icon: Brain,
  },
  {
    id: "idoso",
    title: "Idosos",
    subtitle: "Cuidado e dignidade em cada fase da vida",
    description:
      "O envelhecimento traz questões emocionais singulares. A psicoterapia com idosos promove bem-estar, ressignificação de experiências e fortalecimento dos vínculos afetivos, contribuindo para uma vida mais plena.",
    image: "/images/terapia-idoso.png",
    topics: ["Luto e perdas", "Solidão", "Memória e cognição", "Qualidade de vida"],
    icon: Heart,
  },
];

const COUPLE_TREATMENT = {
  title: "Psicoterapia de Casal e Família",
  subtitle: "Fortalecer vínculos, restaurar o diálogo",
  description:
    "A terapia de casal e família é um espaço para melhorar a comunicação, resolver conflitos e fortalecer os laços afetivos. O processo terapêutico ajuda cada membro a compreender o outro, promovendo relações mais saudáveis e equilibradas.",
  image: "/images/terapia-casal.png",
  topics: [
    "Comunicação e diálogo",
    "Resolução de conflitos",
    "Reconstrução de confiança",
    "Transições familiares",
    "Parentalidade",
    "Crise conjugal",
  ],
  icon: Users,
};

export default function TratamentosPage() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-sage pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionTitle
            eyebrow="Áreas de atuação"
            title="Tratamentos"
            subtitle="Cada pessoa é única — e o processo terapêutico respeita essa individualidade. Conheça as modalidades de atendimento."
            centered
            light
          />
        </div>
      </section>

      {/* Individual Therapy Section */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="scroll-reveal mb-16">
            <SectionTitle
              eyebrow="Psicoterapia individual"
              title="Um espaço só seu"
              centered
            />
            <p className="font-body text-charcoal/60 text-center max-w-2xl mx-auto mt-6">
              A psicoterapia individual é um processo de autoconhecimento e
              transformação. Atendo adolescentes, adultos e idosos, com uma
              abordagem personalizada para cada fase da vida.
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-24">
            {INDIVIDUAL_TREATMENTS.map((treatment, index) => {
              const Icon = treatment.icon;
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={treatment.id}
                  className={`scroll-reveal flex flex-col gap-10 lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-sage/10 group">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-5">
                    <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center">
                      <Icon size={24} className="text-sage-dark" strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2">
                        {treatment.title}
                      </h3>
                      <p className="font-heading text-lg text-terracota italic">
                        {treatment.subtitle}
                      </p>
                    </div>

                    <p className="font-body text-charcoal/70 leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {treatment.topics.map((topic) => (
                        <span
                          key={topic}
                          className="bg-blush/60 text-charcoal/70 text-xs px-3.5 py-1.5 rounded-full font-body"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="secondary"
                      href={WHATSAPP_URL}
                      external
                      ariaLabel={`Agendar consulta — ${treatment.title}`}
                    >
                      <span className="flex items-center gap-2">
                        Agendar consulta
                        <ArrowRight size={16} />
                      </span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-ivory">
        <div className="max-w-[600px] mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-sage/20" />
          <Heart size={16} className="text-sage/40" />
          <div className="flex-1 h-px bg-sage/20" />
        </div>
      </div>

      {/* Couple & Family Therapy Section */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="scroll-reveal bg-blush/40 rounded-3xl overflow-hidden border border-sage/10">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[350px] lg:h-full min-h-[400px] group">
                  <Image
                    src={COUPLE_TREATMENT.image}
                    alt={COUPLE_TREATMENT.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/10 lg:bg-gradient-to-l" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-terracota/15 flex items-center justify-center">
                  <Users size={24} className="text-terracota" strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-terracota mb-3">
                    Terapia relacional
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2">
                    {COUPLE_TREATMENT.title}
                  </h3>
                  <p className="font-heading text-lg text-terracota italic">
                    {COUPLE_TREATMENT.subtitle}
                  </p>
                </div>

                <p className="font-body text-charcoal/70 leading-relaxed">
                  {COUPLE_TREATMENT.description}
                </p>

                {/* Topics grid */}
                <div className="grid grid-cols-2 gap-3 mt-1">
                  {COUPLE_TREATMENT.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracota/50 shrink-0" />
                      <span className="font-body text-sm text-charcoal/60">{topic}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  href={WHATSAPP_URL}
                  external
                  ariaLabel="Agendar consulta de casal ou família"
                >
                  <span className="flex items-center gap-2">
                    Agendar consulta
                    <ArrowRight size={16} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-sage py-20 md:py-28">
        <div className="max-w-[700px] mx-auto px-6 md:px-12 text-center">
          <div className="scroll-reveal flex flex-col items-center gap-6">
            <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-ivory/80">
              Primeiro passo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory leading-tight">
              Cada jornada começa com uma conversa
            </h2>
            <div className="w-[60px] h-[2px] bg-gold" />
            <p className="font-body text-ivory/70 leading-relaxed max-w-lg">
              Se você se identificou com algum dos tratamentos, entre em contato.
              O primeiro passo é sempre o mais importante.
            </p>
            <Button
              variant="primary"
              href={WHATSAPP_URL}
              external
              ariaLabel="Agendar consulta pelo WhatsApp"
            >
              <span className="flex items-center gap-2">
                Fale comigo pelo WhatsApp
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
