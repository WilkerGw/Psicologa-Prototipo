"use client";

import { useForm } from "react-hook-form";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  preference: string;
  message: string;
  privacy: boolean;
}

export default function ContatoPage() {
  const ref = useScrollReveal<HTMLDivElement>();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent("Contato pelo site — Vanessa Tamiello");
    const body = encodeURIComponent(
      `Nome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone}\nPreferência: ${data.preference}\n\nMensagem:\n${data.message}`
    );
    window.location.href = `mailto:contato@psivanessatamiello.com?subject=${subject}&body=${body}`;
  };

  const inputStyles = "w-full bg-ivory border border-sage/40 rounded-xl px-4 py-3 font-body text-charcoal placeholder:text-charcoal/40 transition-all duration-200 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20";

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

      {/* Form + Info */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left — Form */}
            <div className="scroll-reveal flex-1">
              <h3 className="font-display text-xl font-semibold text-charcoal mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nome completo</label>
                  <input id="name" type="text" placeholder="Nome completo *" className={inputStyles} {...register("name", { required: true })} />
                  {errors.name && <span className="text-terracota text-xs mt-1">Campo obrigatório</span>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <input id="email" type="email" placeholder="E-mail *" className={inputStyles} {...register("email", { required: true })} />
                  {errors.email && <span className="text-terracota text-xs mt-1">Campo obrigatório</span>}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Telefone/WhatsApp</label>
                  <input id="phone" type="tel" placeholder="Telefone / WhatsApp" className={inputStyles} {...register("phone")} />
                </div>
                <div>
                  <label htmlFor="preference" className="sr-only">Preferência de atendimento</label>
                  <select id="preference" className={`${inputStyles} cursor-pointer`} {...register("preference")}>
                    <option value="">Como prefere ser atendido?</option>
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                    <option value="sem-preferencia">Sem preferência</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensagem</label>
                  <textarea id="message" rows={5} placeholder="Sua mensagem..." className={`${inputStyles} resize-none`} {...register("message")} />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-sage" {...register("privacy", { required: true })} />
                  <span className="font-body text-xs text-charcoal/60">Li e concordo com a política de privacidade</span>
                </label>
                {errors.privacy && <span className="text-terracota text-xs">Aceite a política para continuar</span>}
                <Button variant="primary" fullWidth>Enviar mensagem</Button>
              </form>
            </div>

            {/* Right — Info Card */}
            <div className="scroll-reveal md:w-[360px] shrink-0">
              <div className="bg-charcoal text-ivory rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="font-display text-xl font-semibold">Informações</h3>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                  <address className="not-italic font-body text-sm text-ivory/70 leading-relaxed">
                    Rua Antonio de Barros, 2687, 1º andar<br />Tatuapé — São Paulo, SP
                  </address>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                  <a href="tel:+5511981091524" className="font-body text-sm text-ivory/70 hover:text-ivory transition-colors">(11) 98109.1524</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                  <div className="font-body text-sm text-ivory/70">
                    <p>Seg–Sex: 7h às 19h</p>
                    <p>Sáb–Dom: 7h às 13h</p>
                  </div>
                </div>
                <div className="w-full h-px bg-gold/20" />
                <Button variant="whatsapp" href="https://wa.me/5511981091524" external fullWidth ariaLabel="Falar no WhatsApp agora">
                  Falar no WhatsApp agora
                </Button>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-sage/20 to-transparent" />
                <div className="border-l-4 border-terracota bg-terracota/10 px-4 py-3 rounded-r-lg">
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
