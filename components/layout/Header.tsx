"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/profissional", label: "Profissional" },
  { href: "/consultorio", label: "Consultório" },
  { href: "/locacao", label: "Locação de Salas" },
  { href: "/contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/5511981091524";

function ButterflyLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-9 h-9"
      aria-hidden="true"
    >
      {/* Left wing */}
      <path
        d="M20 20C16 14 8 10 6 14C4 18 10 22 14 22C16 22 18 21 20 20Z"
        fill="currentColor"
        className="text-sage"
      />
      <path
        d="M20 20C16 22 10 28 12 31C14 34 20 30 20 26V20Z"
        fill="currentColor"
        className="text-sage-dark"
      />
      {/* Right wing */}
      <path
        d="M20 20C24 14 32 10 34 14C36 18 30 22 26 22C24 22 22 21 20 20Z"
        fill="currentColor"
        className="text-gold"
      />
      <path
        d="M20 20C24 22 30 28 28 31C26 34 20 30 20 26V20Z"
        fill="currentColor"
        className="text-gold-dark"
      />
      {/* Body */}
      <ellipse cx="20" cy="20" rx="1.2" ry="6" fill="currentColor" className="text-charcoal" />
      {/* Antennae */}
      <path
        d="M19 14C17 10 15 9 14 9"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        className="text-charcoal"
      />
      <path
        d="M21 14C23 10 25 9 26 9"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        className="text-charcoal"
      />
    </svg>
  );
}

export default function Header() {
  const scrolled = useScrollHeader(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur-md shadow-sm py-3"
            : "bg-ivory/60 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <ButterflyLogo />
            <div className="flex flex-col">
              <span className="font-display text-xl text-charcoal leading-tight">
                Vanessa Tamiello
              </span>
              <span className="font-body text-[10px] text-charcoal/50 tracking-wider">
                CRP 06/108983
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-body text-sm text-charcoal/80 hover:text-charcoal transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              href={WHATSAPP_URL}
              external
              size="sm"
              ariaLabel="Agendar consulta pelo WhatsApp"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-charcoal cursor-pointer"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-ivory shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-sage/20">
              <span className="font-display text-lg text-charcoal">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 text-charcoal cursor-pointer"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1" aria-label="Navegação mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base text-charcoal/80 hover:text-terracota py-3 px-3 rounded-lg hover:bg-blush/50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-sage/20">
                <Button
                  variant="primary"
                  href={WHATSAPP_URL}
                  external
                  fullWidth
                  ariaLabel="Agendar consulta pelo WhatsApp"
                >
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
