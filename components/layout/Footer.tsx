import Link from "next/link";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/profissional", label: "Profissional" },
  { href: "/consultorio", label: "Consultório" },
  { href: "/locacao", label: "Locação de Salas" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                <path d="M20 20C16 14 8 10 6 14C4 18 10 22 14 22C16 22 18 21 20 20Z" className="fill-sage" />
                <path d="M20 20C16 22 10 28 12 31C14 34 20 30 20 26V20Z" className="fill-sage/70" />
                <path d="M20 20C24 14 32 10 34 14C36 18 30 22 26 22C24 22 22 21 20 20Z" className="fill-gold" />
                <path d="M20 20C24 22 30 28 28 31C26 34 20 30 20 26V20Z" className="fill-gold/70" />
                <ellipse cx="20" cy="20" rx="1.2" ry="6" className="fill-ivory/80" />
              </svg>
              <span className="font-display text-lg text-ivory">
                Vanessa Tamiello
              </span>
            </div>
            <p className="font-heading text-base italic text-ivory/50 leading-relaxed">
              &ldquo;Psicologia com acolhimento e ciência&rdquo;
            </p>
            <a
              href="https://www.instagram.com/psivanessatamiello/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ivory/50 hover:text-ivory transition-colors duration-200 w-fit"
              aria-label="Instagram de Vanessa Tamiello"
            >
              <InstagramIcon size={18} />
              <span className="text-sm">@psivanessatamiello</span>
            </a>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs uppercase tracking-[0.2em] text-ivory/40 mb-1">
              Navegação
            </h3>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs uppercase tracking-[0.2em] text-ivory/40 mb-1">
              Contato
            </h3>
            <address className="not-italic font-body text-sm text-ivory/60 leading-relaxed">
              Rua Antonio de Barros, 2687, 1º andar
              <br />
              Tatuapé — São Paulo, SP
            </address>
            <a
              href="tel:+5511981091524"
              className="font-body text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
            >
              (11) 98109.1524
            </a>
            <div className="font-body text-sm text-ivory/50">
              <p>Seg–Sex: 7h às 19h</p>
              <p>Sáb–Dom: 7h às 13h</p>
            </div>
            <div className="mt-2 border-l-4 border-terracota bg-terracota/10 px-4 py-3 rounded-r-lg">
              <p className="font-body text-xs text-terracota-light font-medium uppercase tracking-wider">
                Não atendemos convênios
              </p>
              <p className="font-body text-xs text-ivory/50 mt-1">
                Particular com recibo para reembolso
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <p className="font-body text-xs text-ivory/40 text-center">
            © 2025 Vanessa Tamiello — Psicologia | CRP 06/108983
          </p>
        </div>
      </div>
    </footer>
  );
}
