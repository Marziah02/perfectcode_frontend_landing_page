import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Sparkles, 
  LayoutTemplate, 
  Rocket,
  FileCode,
  Github,
  Database,
  Users,
  Globe,
  Settings,
  Webhook,
  GitBranch,
  Play,
  MessageSquare,
  Bug,
  Lightbulb,
  Map,
  Heart,
  Shield,
  FileCheck,
  Network,
  UserPlus,
  Lock,
  FileText,
  Newspaper,
  Zap,
  Building,
  Rss,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Everything you need to build with{" "}
            <span className="gradient-text">PerfectCode</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn, explore, and master AI-powered app development — from first prompt to production.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </Button>
            <Button variant="outline" size="lg">
              <Play className="w-4 h-4 mr-2" />
              Tutorials
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Community
            </Button>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="py-20 px-6 border-t border-slate-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Start Here</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            New to PerfectCode? These guides will get you up and running in minutes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: "Getting Started", desc: "Create your first app in minutes", color: "from-blue-500 to-cyan-500" },
              { icon: Sparkles, title: "Prompt Engineering", desc: "Learn how to talk to PerfectCode", color: "from-purple-500 to-pink-500" },
              { icon: LayoutTemplate, title: "App Templates", desc: "Start from real-world examples", color: "from-orange-500 to-red-500" },
              { icon: Globe, title: "Deployment Guide", desc: "Go live with real infrastructure", color: "from-green-500 to-emerald-500" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group content-card p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <ArrowRight className="w-4 h-4 mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Documentation */}
      <section className="py-20 px-6 bg-slate-zone">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Developer Documentation</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technical references and integration guides for developers.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FileCode, title: "API Reference" },
              { icon: Github, title: "GitHub Integration" },
              { icon: Database, title: "Database Setup" },
              { icon: Users, title: "Authentication & Users" },
              { icon: Globe, title: "Hosting & Domains" },
              { icon: Settings, title: "Environment Variables" },
              { icon: Webhook, title: "Webhooks" },
              { icon: GitBranch, title: "Versioning" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 p-4 rounded-xl border border-slate-border bg-background/50 hover:border-primary/50 hover:bg-background transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">{item.title}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Open Full Docs
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tutorials & Guides */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Tutorials & Guides</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Step-by-step tutorials to build real applications.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Build a SaaS in 30 minutes", tag: "Popular", color: "bg-gradient-start" },
              { title: "Build a CRM", tag: "Intermediate", color: "bg-gradient-via" },
              { title: "Connect Stripe", tag: "Payments", color: "bg-green-500" },
              { title: "Deploy to production", tag: "DevOps", color: "bg-orange-500" },
              { title: "User login system", tag: "Auth", color: "bg-blue-500" },
              { title: "Admin dashboard", tag: "Advanced", color: "bg-purple-500" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group content-card p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.color} text-white`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Tutorial
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Browse Tutorials
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Templates Library */}
      <section className="py-20 px-6 bg-slate-zone">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Templates</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Production-ready templates to jumpstart your project.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "SaaS Starter",
              "Marketplace",
              "CRM",
              "Booking System",
              "AI App",
              "Internal Tool",
              "Portfolio",
              "Startup Website",
            ].map((template, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] rounded-xl border border-slate-border bg-gradient-to-br from-slate-800/50 to-slate-900/50 overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gradient-end/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-medium text-sm text-center px-2 group-hover:text-primary transition-colors">{template}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="gradient" size="lg">
              Use a Template
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Videos & Walkthroughs */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Learn by Watching</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Video tutorials and product walkthroughs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Product walkthrough",
              "Enterprise demo",
              "Prompting best practices",
              "Scaling apps",
              "Deployment demo",
            ].map((video, index) => (
              <div 
                key={index}
                className="group relative aspect-video rounded-xl border border-slate-border bg-gradient-to-br from-slate-800/50 to-slate-900/50 overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 text-primary fill-primary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <span className="font-medium text-sm">{video}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Watch Videos
              <Play className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 px-6 bg-slate-zone">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Community & Support</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Connect with other builders and get help when you need it.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Discord", desc: "Join 10k+ builders" },
              { icon: Github, title: "GitHub", desc: "Explore open source" },
              { icon: Lightbulb, title: "Feature Requests", desc: "Shape the roadmap" },
              { icon: Bug, title: "Bug Reports", desc: "Report issues" },
              { icon: Map, title: "Roadmap", desc: "See what's coming" },
              { icon: Heart, title: "User Stories", desc: "Get inspired" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group content-card p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="gradient" size="lg">
              Join the Community
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Resources */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Enterprise Resources</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Security, compliance, and architecture documentation for enterprise teams.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Security Overview", desc: "Our security practices" },
              { icon: FileCheck, title: "Compliance Docs", desc: "SOC 2, GDPR, ISO" },
              { icon: Network, title: "Architecture Diagrams", desc: "Technical infrastructure" },
              { icon: UserPlus, title: "Onboarding Guide", desc: "Enterprise onboarding" },
              { icon: Lock, title: "API Governance", desc: "API security & limits" },
              { icon: FileText, title: "Whitepapers", desc: "Technical deep dives" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group content-card p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-gradient-end/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Building className="w-4 h-4 mr-2" />
              View Enterprise Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Blog & Updates */}
      <section className="py-20 px-6 bg-slate-zone">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Product Updates & Insights</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Stay up to date with the latest from PerfectCode.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Product updates", desc: "New features & improvements" },
              { icon: Sparkles, title: "AI engineering insights", desc: "Technical deep dives" },
              { icon: Building, title: "Company news", desc: "Team & milestones" },
              { icon: Rss, title: "Release notes", desc: "Detailed changelogs" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group content-card p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Newspaper className="w-4 h-4 mr-2" />
              Read Blog
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl border border-slate-border bg-gradient-to-br from-slate-zone via-background to-slate-zone p-12 text-center overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-start/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-end/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn. Build. Deploy.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Everything starts with <span className="gradient-text font-semibold">PerfectCode</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/app">
                  <Button variant="gradient" size="lg">
                    Start Building
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
