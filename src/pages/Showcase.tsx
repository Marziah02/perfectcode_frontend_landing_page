import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Upload, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Heart,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "SaaS", "Marketplaces", "Dashboards", "AI Apps", "Mobile Apps", "Landing Pages"];

const featuredApps = [
  {
    slug: "ai-resume-builder",
    name: "AI Resume Builder",
    description: "Create professional resumes with AI-powered suggestions and formatting.",
    category: "AI Apps",
    badge: "Best UI",
    badgeIcon: Sparkles,
  },
  {
    slug: "sales-crm-dashboard",
    name: "Sales CRM Dashboard",
    description: "Track leads, manage pipelines, and close deals faster with real-time analytics.",
    category: "Dashboards",
    badge: "Trending",
    badgeIcon: TrendingUp,
  },
  {
    slug: "marketplace-freelancers",
    name: "Marketplace for Freelancers",
    description: "Connect talent with opportunities in a beautiful, intuitive platform.",
    category: "Marketplaces",
    badge: "Most Popular",
    badgeIcon: Heart,
  },
];

const showcaseApps = [
  { slug: "subscription-billing-app", name: "Subscription Billing App", description: "Manage recurring payments and subscriptions effortlessly.", category: "SaaS" },
  { slug: "booking-system", name: "Booking System", description: "Schedule appointments and manage availability with ease.", category: "SaaS" },
  { slug: "inventory-manager", name: "Inventory Manager", description: "Track stock levels, orders, and suppliers in one place.", category: "Dashboards" },
  { slug: "client-portal", name: "Client Portal", description: "Secure hub for client communication and file sharing.", category: "SaaS" },
  { slug: "course-platform", name: "Course Platform", description: "Create and sell online courses with built-in payments.", category: "Marketplaces" },
  { slug: "helpdesk-tool", name: "Helpdesk Tool", description: "Streamline customer support with ticket management.", category: "SaaS" },
  { slug: "analytics-dashboard", name: "Analytics Dashboard", description: "Visualize data and metrics with beautiful charts.", category: "Dashboards" },
  { slug: "waitlist-landing", name: "Waitlist Landing Page", description: "Capture leads with a stunning pre-launch page.", category: "Landing Pages" },
  { slug: "ai-content-tool", name: "AI Content Tool", description: "Generate marketing copy and blog posts with AI.", category: "AI Apps" },
  { slug: "expense-tracker", name: "Expense Tracker", description: "Monitor spending and budgets with smart insights.", category: "Mobile Apps" },
  { slug: "team-collaboration", name: "Team Collaboration Hub", description: "Real-time messaging and project management.", category: "SaaS" },
  { slug: "property-listing", name: "Property Listing App", description: "Browse and list real estate with advanced filters.", category: "Marketplaces" },
];

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [formData, setFormData] = useState({
    appName: "",
    description: "",
    liveUrl: "",
    category: "",
    isPublic: false,
  });

  const filteredApps = activeCategory === "All" 
    ? showcaseApps 
    : showcaseApps.filter(app => app.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Explore real apps built with{" "}
                <span className="gradient-text">PerfectCode</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                See what founders, teams, and creators have launched using PerfectCode.ai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/app">
                  <Button variant="gradient" size="lg" className="gap-2">
                    <Rocket className="w-5 h-5" />
                    Start Building
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="gap-2" onClick={() => {
                  document.getElementById('submit-app')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Upload className="w-5 h-5" />
                  Submit Your App
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-slate-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-slate-zone text-muted-foreground hover:text-foreground hover:bg-slate-zone/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Featured Apps
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredApps.map((app) => (
                <div
                  key={app.slug}
                  className="group relative bg-slate-zone border border-slate-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    <app.badgeIcon className="w-3.5 h-3.5" />
                    {app.badge}
                  </div>
                  
                  {/* Screenshot Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl gradient-primary opacity-50" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {app.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {app.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Built with PerfectCode
                      </span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="gap-1.5">
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </Button>
                        <Link to={`/showcase/${app.slug}`}>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Gallery Grid */}
        <section className="py-16 bg-slate-zone/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {activeCategory === "All" ? "All Apps" : activeCategory}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <div
                  key={app.slug}
                  className="group bg-background border border-slate-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  {/* Screenshot Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl gradient-primary opacity-30" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {app.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        Built with PerfectCode
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3 pt-3 border-t border-slate-border">
                      <Button variant="ghost" size="sm" className="flex-1 gap-1 text-xs">
                        <ExternalLink className="w-3 h-3" />
                        View Live
                      </Button>
                      <Link to={`/showcase/${app.slug}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full text-xs">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Your App */}
        <section id="submit-app" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Built something great?{" "}
                  <span className="gradient-text">Submit your app</span>
                </h2>
                <p className="text-muted-foreground">
                  Share your creation with the PerfectCode community and inspire others.
                </p>
              </div>
              
              <div className="bg-slate-zone border border-slate-border rounded-2xl p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="appName">App Name</Label>
                    <Input
                      id="appName"
                      placeholder="My Awesome App"
                      value={formData.appName}
                      onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what your app does in a sentence or two..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-background resize-none"
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="liveUrl">Live URL</Label>
                    <Input
                      id="liveUrl"
                      placeholder="https://myapp.com"
                      value={formData.liveUrl}
                      onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="screenshot">Upload Screenshot</Label>
                    <div className="border-2 border-dashed border-slate-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.filter(c => c !== "All").map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isPublic"
                      checked={formData.isPublic}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, isPublic: checked as boolean })
                      }
                    />
                    <Label htmlFor="isPublic" className="text-sm font-normal">
                      Make this submission public in the showcase
                    </Label>
                  </div>
                  
                  <Button type="submit" variant="gradient" size="lg" className="w-full gap-2">
                    Submit App
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Showcase;
