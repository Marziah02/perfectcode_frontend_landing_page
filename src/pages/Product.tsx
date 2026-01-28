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
  ArrowRight,
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
    image: "/images/1_prompt.png",
    title: "Prompt → App",
    description: "Type what you want. Get a real web app.",
  },
  {
    image: "/images/2_liveprev.png",
    title: "Live Preview",
    description: "See it running instantly in your browser.",
  },
  {
    image: "/images/3_integration.png",
    title: "Integrations Ready",
    description: "Auth, database, payments, APIs.",
  },
  {
    image: "/images/4_deploy.png",
    title: "Deploy or Export",
    description: "Push live or download your code.",
  },
];

const ServiceCard = ({ image, title, description }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className="group relative bg-[#0f172a]/80 hover:bg-[#1e293b]/60 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] hover:-translate-y-2 overflow-hidden flex flex-col h-full backdrop-blur-sm bg-cover bg-center"
  >
    {/* Image Container with Dark Theme Contrast */}
    <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-blue-500/5 to-transparent overflow-hidden flex items-center justify-center">
      {/* <img
				src={image}
				alt={title}
				className="w-[85%] h-[85%] object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
			/> */}
      {/* Radial overlay to soften edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] opacity-20"></div>
    </div>

    <div className="p-8 relative z-10 flex flex-col flex-grow">
      {/* Accent Glow behind text */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all duration-500"></div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors flex-grow">
        {description}
      </p>

      {/* <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-blue-500 opacity-60 group-hover:opacity-100 transition-all duration-300">
				Explore Feature{" "}
				<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
			</div> */}
    </div>
  </div>
);

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
          {features.map((feature, index) => (
            // <div
            // 	key={feature.title}
            // 	className="content-card p-6 glow-hover">
            // 	<div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
            // 		<feature.icon className="w-6 h-6 text-primary" />
            // 	</div>
            // 	<h3 className="text-lg font-semibold text-foreground mb-2">
            // 		{feature.title}
            // 	</h3>
            // 	<p className="text-muted-foreground text-sm">
            // 		{feature.description}
            // 	</p>
            // </div>
            <ServiceCard key={index} {...feature} />
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
  {
    icon: Layers,
    title: "SaaS products",
    description:
      "Scale your business with robust multi-tenant software solutions.",
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-500/20",
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description:
      "Connect buyers and sellers with powerful e-commerce platforms.",
    color: "from-purple-500 to-pink-400",
    border: "border-purple-500/20",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Visualize complex data with intuitive management interfaces.",
    color: "from-indigo-500 to-blue-400",
    border: "border-indigo-500/20",
  },
  {
    icon: Wrench,
    title: "Internal tools",
    description:
      "Streamline operations with custom-built enterprise utilities.",
    color: "from-orange-500 to-yellow-400",
    border: "border-orange-500/20",
  },
  {
    icon: FileText,
    title: "Landing pages",
    description: "High-converting single pages designed for maximum impact.",
    color: "from-green-500 to-emerald-400",
    border: "border-green-500/20",
  },
  {
    icon: Bot,
    title: "AI apps",
    description: "Leverage LLMs and neural networks for next-gen features.",
    color: "from-red-500 to-rose-400",
    border: "border-red-500/20",
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-[#0d0e22] border ${item.border} rounded-[24px] p-8 transition-all duration-300 hover:bg-[#12132b] hover:border-white/10 flex flex-col items-start overflow-hidden`}
              >
                {/* Decorative Background Glow */}
                <div
                  className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${item.color} blur-[50px] opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                {/* Icon Container */}
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8b8da1] text-[15px] leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}
                />
              </div>
            );
          })}
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
