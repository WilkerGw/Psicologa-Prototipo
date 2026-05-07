"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ivory overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 py-32 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Content (60%) */}
          <div className="flex-3 flex flex-col gap-6 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="font-body text-xs font-light uppercase tracking-[0.2em] text-terracota"
            >
              Psicologia Clínica · Tatuapé, SP
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1]"
            >
              Cuidar de você
              <br />
              começa com uma
              <br />
              <span className="text-sage-dark">conversa.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-base md:text-lg text-charcoal/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Atendimentos presenciais e online para te ajudar a entender suas
              emoções, desenvolver potenciais e construir uma vida com mais
              equilíbrio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2"
            >
              <Button
                variant="whatsapp"
                href="https://wa.me/5511981091524"
                external
                ariaLabel="Agendar pelo WhatsApp"
              >
                Agendar pelo WhatsApp
              </Button>
              <Button variant="ghost" href="#sobre">
                Conhecer o trabalho
              </Button>
            </motion.div>
          </div>

          {/* Right — Image (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-2 relative w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-3/4 w-full">
              {/* Blob background shape */}
              <div className="absolute inset-0 bg-sage/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] scale-110" />
              <div className="absolute inset-2 bg-sage/10 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] scale-105" />

              {/* Image with organic clip */}
              <div
                className="relative w-full h-full overflow-hidden border-[3px] border-sage"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <Image
                  src="/images/Vanessa-Tamiello.jpeg"
                  alt="Vanessa Tamiello — Psicóloga Clínica"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative large quote */}
      <div
        className="absolute bottom-10 left-10 font-heading italic text-sage/15 text-[120px] md:text-[180px] leading-none pointer-events-none select-none hidden lg:block"
        style={{ transform: "rotate(-6deg)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>
    </section>
  );
}
