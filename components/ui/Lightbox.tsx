"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 md:p-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 text-ivory/60 hover:text-ivory transition-colors cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="p-3 text-ivory/40 hover:text-ivory hover:bg-ivory/10 rounded-full transition-all cursor-pointer pointer-events-auto"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="p-3 text-ivory/40 hover:text-ivory hover:bg-ivory/10 rounded-full transition-all cursor-pointer pointer-events-auto"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Caption */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={currentIndex}
              className="mt-6 text-center"
            >
              <p className="text-ivory font-display text-xl md:text-2xl font-light tracking-wide">
                {currentImage.alt}
              </p>
              <p className="text-ivory/40 font-body text-xs mt-2 uppercase tracking-[0.2em]">
                {currentIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
