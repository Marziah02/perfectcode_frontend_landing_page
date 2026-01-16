import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const useCases = [
  {
    title: "SaaS MVP",
    description: "Launch your software product idea in hours, not months",
    prompt: "Build a SaaS dashboard with user authentication, subscription management, and an analytics overview page",
    icon: "🚀",
    gradient: "from-gradient-purple to-gradient-pink",
    examples: ["Project management tool", "Email marketing platform", "Customer feedback system"],
  },
  {
    title: "Admin Dashboard",
    description: "Create powerful internal tools for your team",
    prompt: "Create an admin dashboard with user management, data tables, charts, and a settings panel",
    icon: "📊",
    gradient: "from-gradient-pink to-gradient-orange",
    examples: ["Content moderation panel", "Order management system", "Team analytics dashboard"],
  },
  {
    title: "Booking App",
    description: "Build appointment and reservation systems fast",
    prompt: "Build a booking app with calendar view, time slot selection, and confirmation emails",
    icon: "📅",
    gradient: "from-gradient-orange to-gradient-purple",
    examples: ["Restaurant reservations", "Salon appointments", "Consultation scheduling"],
  },
  {
    title: "Marketplace",
    description: "Launch two-sided platforms for buyers and sellers",
    prompt: "Create a marketplace with product listings, search filters, shopping cart, and seller profiles",
    icon: "🛒",
    gradient: "from-gradient-purple to-gradient-pink",
    examples: ["Handmade goods marketplace", "Service provider directory", "Digital product store"],
  },
  {
    title: "Internal Tool",
    description: "Automate workflows and boost team productivity",
    prompt: "Build an internal tool with form builders, workflow automation, and team collaboration features",
    icon: "⚙️",
    gradient: "from-gradient-pink to-gradient-orange",
    examples: ["Employee onboarding", "Inventory tracker", "Request approval system"],
  },
  {
    title: "Portfolio Website",
    description: "Showcase your work with style",
    prompt: "Create a portfolio website with project gallery, about section, contact form, and dark mode",
    icon: "✨",
    gradient: "from-gradient-orange to-gradient-purple",
    examples: ["Developer portfolio", "Design showcase", "Photography gallery"],
  },
];

export default function UseCases() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyPrompt = (prompt: string, index: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedIndex(index);
    toast({
      title: "Prompt copied!",
      description: "Paste it in the builder to get started.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-hero-glow opacity-40" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">What will you build?</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore popular use cases and get started with a single click
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-12 pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="glass-card p-8 hover:glow-accent transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{useCase.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  
                  {/* Examples */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Examples</p>
                    <ul className="space-y-1">
                      {useCase.examples.map((example) => (
                        <li key={example} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gradient-pink" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prompt preview */}
                  <div className="glass p-3 rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground line-clamp-2">{useCase.prompt}</p>
                  </div>

                  <Button
                    variant="glass"
                    className="w-full gap-2"
                    onClick={() => copyPrompt(useCase.prompt, index)}
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Try this prompt
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
