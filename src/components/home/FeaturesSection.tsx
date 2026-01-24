import { Zap, Palette, RefreshCw } from "lucide-react";

const features = [
  {
    icon: "/images/instadep.svg",
    title: "Instant Deployment",
    description:
      "Your preview link is auto-created the moment generation completes. Share it immediately.",
  },
  {
    icon: "/images/proqua.svg",
    title: "Production Quality UI",
    description:
      "Clean, modern components with proper structure. No spaghetti code, just maintainable output.",
  },
  {
    icon: "/images/rapit.svg",
    title: "Rapid Iteration",
    description:
      "Change features by continuing the conversation. Your project evolves with each message.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your app, your way.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for speed, designed for quality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="content-card p-8 h-full glow-hover">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <img
                    className="h-full w-6"
                    src={feature.icon}
                    alt={feature.title}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
