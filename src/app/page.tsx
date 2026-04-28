import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyKeenForge } from "@/components/sections/WhyKeenForge";
import { FounderPreview } from "@/components/sections/FounderPreview";
import { Proof } from "@/components/sections/Proof";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesOverview />
      <HowItWorks />
      <IndustriesSection />
      <WhyKeenForge />
      <FounderPreview />
      <Proof />
      <FAQ />
      <CTASection />
    </>
  );
}
