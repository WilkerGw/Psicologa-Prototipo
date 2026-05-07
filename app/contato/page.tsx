"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContatoPage() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-blush pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <SectionTitle eyebrow="Vamos conversar?" title="Entre em contato" centered />
          <p className="font-body text-charcoal/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Tire suas dúvidas, saiba mais sobre os atendimentos ou agende sua consulta. Estou à disposição para te ajudar.
          </p>
        </div>
      </section>

      {/* Info + WhatsApp CTA */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
            {/* Left — WhatsApp Direct */}
            <div className="scroll-reveal flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage">
                  <MessageCircle size={32} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal leading-tight">
                  Agendamento rápido e direto pelo WhatsApp
                </h3>
                <p className="font-body text-base md:text-lg text-charcoal/70 leading-relaxed max-w-md">
                  Para sua comodidade, realizo todos os agendamentos e esclareço dúvidas diretamente pelo WhatsApp. 
                  Clique no botão abaixo para iniciar uma conversa agora mesmo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="whatsapp"
                  href="https://wa.me/5511981091524"
                  external
                  size="lg"
                  ariaLabel="Iniciar conversa no WhatsApp"
                >
                  Falar no WhatsApp agora
                </Button>
              </div>
            </div>

            {/* Right — Info Card */}
            <div className="scroll-reveal md:w-[400px] shrink-0 w-full">
              <div className="bg-charcoal text-ivory rounded-2xl p-8 md:p-10 flex flex-col gap-8 shadow-xl shadow-charcoal/20">
                <h3 className="font-display text-xl font-semibold border-b border-ivory/10 pb-4">Informações de Contato</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-ivory/5 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <address className="not-italic font-body text-sm text-ivory/70 leading-relaxed">
                      Rua Antonio de Barros, 2687, 1º andar<br />
                      Tatuapé — São Paulo, SP
                    </address>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-ivory/5 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <a href="tel:+5511981091524" className="font-body text-sm text-ivory/70 hover:text-ivory transition-colors">
                      (11) 98109.1524
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-ivory/5 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div className="font-body text-sm text-ivory/70">
                      <p className="font-medium text-ivory/90 mb-1">Horário de Atendimento</p>
                      <p>Seg–Sex: 7h às 19h</p>
                      <p>Sáb–Dom: 7h às 13h</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-terracota bg-terracota/10 px-5 py-4 rounded-r-lg">
                  <p className="font-body text-xs text-terracota-light font-medium uppercase tracking-wider">Não atendemos convênios</p>
                  <p className="font-body text-xs text-ivory/50 mt-1">Particular com recibo para reembolso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ivory pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="scroll-reveal rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7!2d-46.5713!3d-23.5389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzIwLjAiUyA0NsKwMzQnMTYuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do consultório" />
          </div>
        </div>
      </section>
    </div>
  );
}
