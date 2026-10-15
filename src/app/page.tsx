import { ClientEffects } from "@/components/effects/client-effects";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { PilotSection } from "@/components/sections/pilot-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { SecuritySection } from "@/components/sections/security-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { VideoSection } from "@/components/sections/video-section";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <VideoSection />
        <ResourcesSection />
        <SecuritySection />
        <FaqSection />
        <PilotSection />
      </main>
      <SiteFooter />
      <ClientEffects />
    </>
  );
}
