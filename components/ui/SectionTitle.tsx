interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  const alignment = centered ? "text-center items-center" : "items-start";
  const textColor = light ? "text-ivory" : "text-charcoal";
  const subtitleColor = light ? "text-ivory/70" : "text-charcoal/60";
  const eyebrowColor = light ? "text-ivory/80" : "text-terracota";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`font-body text-xs font-light uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${textColor}`}
      >
        {title}
      </h2>
      <div className="w-[60px] h-[2px] bg-gold" />
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
