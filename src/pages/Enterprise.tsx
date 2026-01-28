import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  BarChart3,
  Users,
  DollarSign,
  Rocket,
  ShoppingCart,
  Bot,
  Database,
  MessageSquare,
  Code,
  GitBranch,
  Cloud,
  Shield,
  Lock,
  FileCheck,
  Eye,
  Server,
  Key,
  Github,
  Container,
  Layers,
  Plug,
  CheckCircle,
  Headphones,
  UserCheck,
  Compass,
  Settings,
  History,
  UserCog,
  RotateCcw,
  ClipboardCheck,
} from "lucide-react";

const trustedLogos = [
  "TechCorp",
  "DataFlow",
  "CloudBase",
  "NexGen",
  "Innovate",
  "ScaleUp",
];

const buildCards = [
  {
    icon: BarChart3,
    title: "Internal Dashboards",
    desc: "Real-time analytics and reporting",
  },
  {
    icon: Users,
    title: "CRM & Sales Tools",
    desc: "Customer management systems",
  },
  {
    icon: DollarSign,
    title: "Finance & HR Portals",
    desc: "Employee and payroll systems",
  },
  { icon: Rocket, title: "SaaS Platforms", desc: "Multi-tenant applications" },
  { icon: ShoppingCart, title: "Marketplaces", desc: "Two-sided platforms" },
  { icon: Bot, title: "AI Copilots", desc: "Intelligent assistants" },
  { icon: Database, title: "Data Tools", desc: "ETL and visualization" },
];

const steps = [
  { step: "01", title: "Describe", desc: "Describe the app in plain English" },
  {
    step: "02",
    title: "Generate",
    desc: "PerfectCode generates a real full-stack app",
  },
  { step: "03", title: "Push", desc: "Code is pushed to GitHub" },
  { step: "04", title: "Deploy", desc: "Deployed to cloud with CI/CD" },
];

const collaborationFeatures = [
  { icon: Layers, title: "Team Workspaces", desc: "Organize projects by team" },
  {
    icon: UserCog,
    title: "Role-Based Access",
    desc: "Granular permissions control",
  },
  { icon: History, title: "Version History", desc: "Track every change" },
  { icon: ClipboardCheck, title: "Approvals", desc: "Review workflows" },
  { icon: RotateCcw, title: "Rollbacks", desc: "Instant revert capability" },
];

const securityFeatures = [
  { icon: Key, title: "SSO Integration", desc: "Google, Azure, Okta" },
  {
    icon: UserCog,
    title: "Role-Based Permissions",
    desc: "Fine-grained access control",
  },
  { icon: Eye, title: "Audit Logs", desc: "Complete activity tracking" },
  {
    icon: Server,
    title: "Private Environments",
    desc: "Isolated infrastructure",
  },
  { icon: Shield, title: "Data Isolation", desc: "Tenant separation" },
  {
    icon: Code,
    title: "Source Code Ownership",
    desc: "You own 100% of your code",
  },
];

const integrations = [
  { name: "GitHub", icon: Github },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Container },
  { name: "PostgreSQL", icon: Database },
  { name: "APIs", icon: Plug },
];

const complianceBadges = ["SOC 2", "GDPR", "ISO 27001"];

const supportFeatures = [
  { icon: UserCheck, title: "Dedicated Account Manager" },
  { icon: Headphones, title: "Priority Support" },
  { icon: Compass, title: "Onboarding Assistance" },
  { icon: Building2, title: "Architecture Help" },
  { icon: Settings, title: "Custom Integrations" },
];

const comparisonData = [
  { platform: "Lovable", focus: "Prototypes", desc: "Quick UI mockups" },
  {
    platform: "Bolt",
    focus: "Developer Productivity",
    desc: "Code generation tools",
  },
  {
    platform: "PerfectCode",
    focus: "Enterprise Software Production",
    desc: "Full-stack production apps",
    highlight: true,
  },
];

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Enterprise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build real{" "}
              <span className="gradient-text">enterprise software</span> from
              ideas — with AI
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              PerfectCode turns prompts into production-ready applications with
              full security, governance, and source code ownership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="gradient" className="group">
                Book a demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-border/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedLogos.map((logo) => (
              <div
                key={logo}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Enterprises Build */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Enterprises <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From internal tools to customer-facing platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {buildCards.map((card) => (
              <Card
                key={card.title}
                className="group bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Collaboration */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise <span className="gradient-text">Collaboration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for teams that ship together
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {collaborationFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm text-success font-medium">
                Enterprise Security
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Security & <span className="gradient-text">Governance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security built into every layer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering-Ready */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engineering-<span className="gradient-text">Ready</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                PerfectCode plugs into your existing DevOps — not a closed
                platform.
              </p>
              <div className="flex flex-wrap gap-4">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <integration.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <GitBranch className="w-24 h-24 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Your code, your infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      {/* <section className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Compliance</span> Ready
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet your regulatory requirements with confidence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {complianceBadges.map((badge) => (
              <div
                key={badge}
                className="w-40 h-40 rounded-3xl bg-card border border-border/50 flex flex-col items-center justify-center hover:border-primary/50 transition-colors"
              >
                <FileCheck className="w-12 h-12 text-primary mb-3" />
                <span className="font-bold text-lg">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enterprise Support */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 via-card to-accent/5 border-primary/20">
              <CardContent className="p-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Headphones className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">
                      White-Glove Service
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Enterprise <span className="gradient-text">Support</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supportFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background/50"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why PerfectCode */}
      {/* <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">PerfectCode</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for enterprise software production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {comparisonData.map((item) => (
              <Card
                key={item.platform}
                className={`transition-all duration-300 ${
                  item.highlight
                    ? "bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/50 scale-105"
                    : "bg-card/50 border-border/50"
                }`}
              >
                <CardContent className="p-8 text-center">
                  <h3
                    className={`text-2xl font-bold mb-2 ${item.highlight ? "gradient-text" : ""}`}
                  >
                    {item.platform}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">
                    {item.focus}
                  </p>
                  <p className="text-muted-foreground">{item.desc}</p>
                  {item.highlight && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Recommended
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to build enterprise software{" "}
              <span className="gradient-text">10× faster?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the companies transforming how they build software with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="gradient" className="group">
                Book a demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
