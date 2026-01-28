import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Eye,
  Plug,
  Upload,
  Sparkles,
  Layers,
  ShoppingCart,
  LayoutDashboard,
  Wrench,
  FileText,
  Bot,
  Code,
  Monitor,
  Package,
  GitBranch,
  Wand2,
  Rocket,
  Building2,
  Users,
  Briefcase,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

// Section 1 - Product Hero
function ProductHero() {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 animate-fade-in-up">
          <span className="gradient-text">The AI platform</span>{" "}
          <span className="text-foreground">that builds real web apps.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
          From idea to live app — with preview, integrations, and deploy-ready
          code.
        </p>
        <Button
          variant="gradient"
          size="xl"
          className="animate-fade-in-up delay-200"
          asChild
        >
          <Link to="/app">Start Building</Link>
        </Button>
      </div>
    </section>
  );
}

// Section 2 - What PerfectCode Does
const features = [
  {
    icon: MessageSquare,
    title: "Prompt → App",
    description: "Type what you want. Get a real web app.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "See it running instantly in your browser.",
  },
  {
    icon: Plug,
    title: "Integrations Ready",
    description: "Auth, database, payments, APIs.",
  },
  {
    icon: Upload,
    title: "Deploy or Export",
    description: "Push live or download your code.",
  },
];

function WhatItDoesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What PerfectCode Does
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="content-card p-6 glow-hover">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 3 - How It Works
const steps = [
  { number: 1, title: "Describe your app", icon: MessageSquare },
  { number: 2, title: "Get a live preview", icon: Eye },
  { number: 3, title: "Improve it with AI", icon: Sparkles },
  { number: 4, title: "Add integrations", icon: Plug },
  { number: 5, title: "Deploy or export", icon: Rocket },
];

function HowItWorksSection() {
  return (
    <>
      {" "}
      {/* How PerfectCode Works */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How PerfectCode <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From idea to production in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-bold text-xl mb-4">
                    {step.icon && <step.icon className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  {/* <p className="text-muted-foreground">{step.desc}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    // <section className="py-24 relative">
    //   <div className="container mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
    //         How It Works
    //       </h2>
    //     </div>
    //     <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    //       {steps.map((step, index) => (
    //         <div key={step.number} className="flex items-center gap-4">
    //           <div className="content-card p-5 glow-hover flex items-center gap-4">
    //             <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
    //               <span className="text-primary font-bold">{step.number}</span>
    //             </div>
    //             <span className="text-foreground font-medium">{step.title}</span>
    //           </div>
    //           {index < steps.length - 1 && (
    //             <div className="hidden md:block w-8 h-px bg-border" />
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}

// Section 4 - What You Can Build
const buildTypes = [
  { icon: Layers, title: "SaaS products" },
  { icon: ShoppingCart, title: "Marketplaces" },
  { icon: LayoutDashboard, title: "Dashboards" },
  { icon: Wrench, title: "Internal tools" },
  { icon: FileText, title: "Landing pages" },
  { icon: Bot, title: "AI apps" },
];

function WhatYouCanBuildSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What You Can Build
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {buildTypes.map((type) => (
            <div
              key={type.title}
              className="content-card p-5 glow-hover text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                <type.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground text-sm font-medium">
                {type.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 5 - Why PerfectCode Is Different
const differentiators = [
  { icon: Code, text: "Real code, not no-code" },
  { icon: Monitor, text: "Live sandbox preview" },
  { icon: Package, text: "Production-ready output" },
  { icon: GitBranch, text: "Version control" },
  { icon: Wand2, text: "AI copilot for editing" },
];

function WhyDifferentSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why PerfectCode Is Different
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {differentiators.map((item) => (
            <div
              key={item.text}
              className="content-card px-5 py-3 glow-hover flex items-center gap-3"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 6 - Who It's For
const audiences = [
  { icon: Rocket, title: "Founders" },
  { icon: Building2, title: "Startups" },
  { icon: Briefcase, title: "Agencies" },
  { icon: Users, title: "Product teams" },
  { icon: User, title: "Solo builders" },
];

function WhoItsForSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Who It's For
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="content-card px-6 py-4 glow-hover flex items-center gap-3"
            >
              <audience.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                {audience.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 7 - Final CTA
function FinalCTASection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Start building your next product
        </h2>
        <Button variant="gradient" size="xl" asChild>
          <Link to="/app">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero />
        <WhatItDoesSection />
        <HowItWorksSection />
        <WhatYouCanBuildSection />
        <WhyDifferentSection />
        <WhoItsForSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
