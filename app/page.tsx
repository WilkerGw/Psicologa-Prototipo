import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import AnxietyInfo from "@/components/sections/AnxietyInfo";
import EmotionalIntelligence from "@/components/sections/EmotionalIntelligence";
import ConsultorioGallery from "@/components/sections/ConsultorioGallery";
import SelfEsteem from "@/components/sections/SelfEsteem";
import EmotionalCTA from "@/components/sections/EmotionalCTA";
import MediaFeatures from "@/components/sections/MediaFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <AboutPreview />
      <AnxietyInfo />
      <EmotionalCTA />
      <EmotionalIntelligence />
      <ConsultorioGallery />
      <SelfEsteem />
      <Services />
      <MediaFeatures />
    </>
  );
}

