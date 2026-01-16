import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gradient-purple/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gradient-purple/20 via-gradient-pink/20 to-gradient-orange/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Start building for free</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Ready to build</span>
            <br />
            <span className="text-foreground">your next product?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of creators turning ideas into working apps. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/app">
              <Button variant="gradient" size="xl" className="gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="glass" size="xl">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
