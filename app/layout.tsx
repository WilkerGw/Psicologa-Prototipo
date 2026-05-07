import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vanessa Tamiello — Psicóloga Clínica | Tatuapé, SP",
  description:
    "Psicóloga clínica (CRP 06/108983) com atendimentos presenciais no Tatuapé e online para todo o Brasil. Formada pela PUCSP, pós-graduada pela USP. Agende sua consulta.",
  keywords: [
    "psicóloga",
    "psicóloga tatuapé",
    "terapia online",
    "psicologia clínica",
    "Vanessa Tamiello",
    "CRP 06/108983",
  ],
  openGraph: {
    title: "Vanessa Tamiello — Psicóloga Clínica",
    description:
      "Psicologia com acolhimento e ciência. Atendimentos presenciais e online.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
