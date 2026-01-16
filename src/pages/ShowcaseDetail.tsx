import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  Rocket, 
  Copy, 
  Check,
  Code2,
  Layers,
  Database,
  Zap
} from "lucide-react";
import { useState } from "react";

// Combined app data for detail pages
const allApps = [
  {
    slug: "ai-resume-builder",
    name: "AI Resume Builder",
    description: "Create professional resumes with AI-powered suggestions and formatting.",
    longDescription: "AI Resume Builder is a powerful tool that helps job seekers create stunning, ATS-optimized resumes in minutes. Using advanced AI, it suggests improvements to your content, formats your experience professionally, and ensures your resume stands out to recruiters.",
    category: "AI Apps",
    features: ["AI-powered content suggestions", "ATS optimization", "Multiple templates", "Export to PDF/DOCX"],
  },
  {
    slug: "sales-crm-dashboard",
    name: "Sales CRM Dashboard",
    description: "Track leads, manage pipelines, and close deals faster with real-time analytics.",
    longDescription: "A comprehensive sales CRM that gives your team the tools they need to close more deals. Track leads through every stage of your pipeline, get real-time analytics on team performance, and automate follow-ups to never miss an opportunity.",
    category: "Dashboards",
    features: ["Pipeline visualization", "Lead scoring", "Team analytics", "Email integration"],
  },
  {
    slug: "marketplace-freelancers",
    name: "Marketplace for Freelancers",
    description: "Connect talent with opportunities in a beautiful, intuitive platform.",
    longDescription: "A modern marketplace connecting skilled freelancers with businesses that need their expertise. Features include profile showcases, project bidding, secure payments, and review systems to build trust between parties.",
    category: "Marketplaces",
    features: ["Talent profiles", "Project bidding", "Secure escrow", "Reviews & ratings"],
  },
  {
    slug: "subscription-billing-app",
    name: "Subscription Billing App",
    description: "Manage recurring payments and subscriptions effortlessly.",
    longDescription: "Streamline your subscription business with automated billing, dunning management, and customer portal. Integrates with major payment providers and provides detailed revenue analytics.",
    category: "SaaS",
    features: ["Automated billing", "Dunning management", "Customer portal", "Revenue analytics"],
  },
  {
    slug: "booking-system",
    name: "Booking System",
    description: "Schedule appointments and manage availability with ease.",
    longDescription: "A comprehensive booking solution for service businesses. Let customers book appointments online, manage staff availability, send automatic reminders, and reduce no-shows.",
    category: "SaaS",
    features: ["Online booking", "Calendar sync", "SMS reminders", "Staff management"],
  },
  {
    slug: "inventory-manager",
    name: "Inventory Manager",
    description: "Track stock levels, orders, and suppliers in one place.",
    longDescription: "Keep your inventory under control with real-time stock tracking, low stock alerts, and supplier management. Perfect for retail, warehouses, and e-commerce businesses.",
    category: "Dashboards",
    features: ["Stock tracking", "Low stock alerts", "Supplier database", "Order management"],
  },
  {
    slug: "client-portal",
    name: "Client Portal",
    description: "Secure hub for client communication and file sharing.",
    longDescription: "Give your clients a professional, branded space to access their files, communicate with your team, and track project progress. Includes secure file sharing and message encryption.",
    category: "SaaS",
    features: ["File sharing", "Secure messaging", "Project tracking", "Custom branding"],
  },
  {
    slug: "course-platform",
    name: "Course Platform",
    description: "Create and sell online courses with built-in payments.",
    longDescription: "Build your online education business with a complete course creation and selling platform. Features video hosting, quizzes, certificates, and integrated payment processing.",
    category: "Marketplaces",
    features: ["Video courses", "Quizzes & tests", "Certificates", "Payment processing"],
  },
  {
    slug: "helpdesk-tool",
    name: "Helpdesk Tool",
    description: "Streamline customer support with ticket management.",
    longDescription: "Provide exceptional customer support with a modern helpdesk solution. Features ticket routing, canned responses, knowledge base, and customer satisfaction tracking.",
    category: "SaaS",
    features: ["Ticket management", "Knowledge base", "Canned responses", "CSAT tracking"],
  },
  {
    slug: "analytics-dashboard",
    name: "Analytics Dashboard",
    description: "Visualize data and metrics with beautiful charts.",
    longDescription: "Transform your data into actionable insights with stunning visualizations. Connect to multiple data sources, create custom dashboards, and share reports with your team.",
    category: "Dashboards",
    features: ["Custom charts", "Data connectors", "Team sharing", "Scheduled reports"],
  },
  {
    slug: "waitlist-landing",
    name: "Waitlist Landing Page",
    description: "Capture leads with a stunning pre-launch page.",
    longDescription: "Build hype before your launch with a beautiful waitlist page. Features email capture, referral tracking, and integrations with your marketing tools.",
    category: "Landing Pages",
    features: ["Email capture", "Referral tracking", "Analytics", "Custom branding"],
  },
  {
    slug: "ai-content-tool",
    name: "AI Content Tool",
    description: "Generate marketing copy and blog posts with AI.",
    longDescription: "Create compelling content at scale with AI assistance. Generate blog posts, social media content, email campaigns, and more in your brand voice.",
    category: "AI Apps",
    features: ["Blog generation", "Social posts", "Email copy", "Brand voice"],
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    description: "Monitor spending and budgets with smart insights.",
    longDescription: "Take control of your finances with intelligent expense tracking. Automatically categorize transactions, set budgets, and get insights on spending patterns.",
    category: "Mobile Apps",
    features: ["Auto-categorization", "Budget alerts", "Receipt scanning", "Reports"],
  },
  {
    slug: "team-collaboration",
    name: "Team Collaboration Hub",
    description: "Real-time messaging and project management.",
    longDescription: "Keep your team connected and productive with real-time messaging, task management, and file sharing. Integrates with your favorite tools.",
    category: "SaaS",
    features: ["Real-time chat", "Task boards", "File sharing", "Integrations"],
  },
  {
    slug: "property-listing",
    name: "Property Listing App",
    description: "Browse and list real estate with advanced filters.",
    longDescription: "A beautiful real estate platform for property listings. Features advanced search filters, virtual tours, and direct agent communication.",
    category: "Marketplaces",
    features: ["Advanced search", "Virtual tours", "Agent chat", "Saved listings"],
  },
];

const ShowcaseDetail = () => {
  const { appSlug } = useParams<{ appSlug: string }>();
  const [copied, setCopied] = useState(false);
  
  const app = allApps.find(a => a.slug === appSlug);
  
  if (!app) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 text-center py-20">
            <h1 className="text-3xl font-bold mb-4">App Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The app you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/showcase">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Showcase
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(`Build an app like ${app.name}: ${app.description}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Back Link */}
        <div className="container mx-auto px-6 mb-8">
          <Link 
            to="/showcase" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Showcase
          </Link>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Screenshot */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border border-slate-border flex items-center justify-center overflow-hidden">
              <div className="w-32 h-32 rounded-3xl gradient-primary opacity-40" />
            </div>
            
            {/* Details */}
            <div>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
                {app.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {app.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {app.longDescription}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {app.features.map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    {index === 0 && <Code2 className="w-4 h-4 text-primary" />}
                    {index === 1 && <Layers className="w-4 h-4 text-primary" />}
                    {index === 2 && <Database className="w-4 h-4 text-primary" />}
                    {index === 3 && <Zap className="w-4 h-4 text-primary" />}
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button variant="gradient" size="lg" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </Button>
                <Link to="/app">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Rocket className="w-4 h-4" />
                    Start Building Similar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Was Built */}
        <section className="py-16 bg-slate-zone/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How it was built
              </h2>
              <div className="bg-background border border-slate-border rounded-2xl p-8 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  This app was created using PerfectCode.ai by describing the core functionality in plain English. 
                  The AI generated a full-stack application with authentication, database integration, and responsive UI. 
                  The developer then refined the design and added custom features through iterative prompts.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-border">
                  <p className="text-sm text-muted-foreground mb-3">Sample prompt used:</p>
                  <div className="bg-slate-zone rounded-lg p-4 font-mono text-sm">
                    "Build an app like {app.name}: {app.description}"
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={handleCopyPrompt}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Prompt
                  </>
                )}
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build something similar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with this as inspiration and make it your own with PerfectCode.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/app">
                  <Button variant="gradient" size="lg" className="gap-2">
                    <Rocket className="w-5 h-5" />
                    Start Building
                  </Button>
                </Link>
                <Link to="/showcase">
                  <Button variant="outline" size="lg">
                    Explore More Apps
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShowcaseDetail;
