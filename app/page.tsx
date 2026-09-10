import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact/FloatingContact";
import { Hero } from "@/components/sections/Hero/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip/TrustStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo/WhatWeDo";
import { WhyUs } from "@/components/sections/WhyUs/WhyUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects/FeaturedProjects";
import { IndustriesServed } from "@/components/sections/IndustriesServed/IndustriesServed";
import { CTASection } from "@/components/sections/CTASection/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhatWeDo />
        <WhyUs />
        <FeaturedProjects />
        <IndustriesServed />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
