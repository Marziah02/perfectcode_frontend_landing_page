import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { DemoSection } from "@/components/home/DemoSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DemoSection />
        <CommunitySection />
        <PlatformSection />
        <FeaturesSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
