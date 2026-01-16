import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring and prototyping",
    features: [
      "3 sandbox projects",
      "Basic AI generations",
      "Community support",
      "Preview URLs (24h expiry)",
      "Public projects only",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious builders shipping real products",
    features: [
      "Unlimited projects",
      "Advanced AI generations",
      "Priority support",
      "Permanent preview URLs",
      "Private projects",
      "Code export (ZIP)",
      "Custom domains",
      "Version history",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    description: "For teams building together",
    features: [
      "Everything in Pro",
      "5 team members",
      "Collaboration tools",
      "Admin controls",
      "SSO integration",
      "Dedicated support",
      "API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparison = [
  { feature: "Projects", starter: "3", pro: "Unlimited", team: "Unlimited" },
  { feature: "AI Generations/day", starter: "10", pro: "100", team: "500" },
  { feature: "Preview URL Duration", starter: "24 hours", pro: "Permanent", team: "Permanent" },
  { feature: "Code Export", starter: "—", pro: "✓", team: "✓" },
  { feature: "Private Projects", starter: "—", pro: "✓", team: "✓" },
  { feature: "Custom Domains", starter: "—", pro: "✓", team: "✓" },
  { feature: "Team Members", starter: "1", pro: "1", team: "5" },
  { feature: "API Access", starter: "—", pro: "—", team: "✓" },
  { feature: "Support", starter: "Community", pro: "Priority", team: "Dedicated" },
];

export default function Pricing() {
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
                <span className="gradient-text">Simple, transparent</span>
                <br />
                <span className="text-foreground">pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Start free, upgrade when you're ready. No hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`glass-card p-8 relative ${
                    plan.popular ? "glow-primary border-gradient-purple/50" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full text-sm font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/app">
                    <Button
                      variant={plan.popular ? "gradient" : "glass"}
                      className="w-full"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Compare plans</span>
            </h2>
            <div className="max-w-4xl mx-auto glass-card overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-border bg-secondary/30">
                <div className="text-muted-foreground font-medium">Feature</div>
                <div className="text-center text-foreground font-medium">Starter</div>
                <div className="text-center">
                  <span className="gradient-text font-bold">Pro</span>
                </div>
                <div className="text-center text-foreground font-medium">Team</div>
              </div>

              {/* Rows */}
              {comparison.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 gap-4 p-6 ${
                    index !== comparison.length - 1 ? "border-b border-border" : ""
                  } hover:bg-secondary/20 transition-colors`}
                >
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-center text-muted-foreground">{row.starter}</div>
                  <div className="text-center text-foreground">{row.pro}</div>
                  <div className="text-center text-foreground">{row.team}</div>
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
