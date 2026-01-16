import { Play, MessageSquare, Layers, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    title: "Prompt",
    description: "Describe your app idea in plain English",
  },
  {
    icon: Layers,
    title: "Build in sandbox",
    description: "AI generates working code instantly",
  },
  {
    icon: ExternalLink,
    title: "Preview URL generated",
    description: "Share and test your live app",
  },
];

export function DemoSection() {
  return (
    <section id="product" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See it in action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how ideas become apps in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video placeholder */}
          <div className="content-card p-2 glow-primary">
            <div className="aspect-video rounded-xl bg-card-foreground/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gradient-purple/10 to-gradient-pink/10" />
              <Button variant="gradient" size="xl" className="rounded-full w-20 h-20 p-0">
                <Play className="w-8 h-8 ml-1" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Demo: Building a SaaS dashboard in 60 seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps - important cards get glow hover */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 content-card p-6 glow-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-primary">0{index + 1}</span>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
