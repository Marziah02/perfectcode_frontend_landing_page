import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer2, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <>
      {/* <section className="py-32 relative overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-t from-gradient-purple/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gradient-purple/20 via-gradient-pink/20 to-gradient-orange/20 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Start building for free
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Ready to build</span>
              <br />
              <span className="text-foreground">your next product?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of creators turning ideas into working apps. No
              credit card required.
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
      </section> */}
      <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-gradient-purple/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gradient-purple/20 via-gradient-pink/20 to-gradient-orange/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="max-w-5xl mx-auto relative overflow-hidden group rounded-3xl p-0.5">
          {" "}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 rounded-3xl"></div>
          <div className=" max-w-5xl mx-auto bg-slate-900/70 border border-indigo-500/20 rounded-3xl relative overflow-hidden group">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative z-10 p-1 md:p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left p-8 md:p-0">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-[0.3em] mb-4">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
                  Start building for free
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                  Ready to build <br />
                  your next product?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                  Join thousands of creators turning ideas into working apps. No
                  credit card required.
                </p>
              </div>

              <div className="w-full md:w-auto p-8 md:p-0 border-t md:border-t-0 md:border-l border-white/10 flex flex-col gap-4 min-w-[300px]">
                <div className="bg-slate-950/80 p-6 rounded-2xl border border-white/5 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-500 font-mono">
                      APP_ENGINE_V2
                    </span>
                    <MousePointer2 className="w-4 h-4 text-indigo-500" />
                  </div>
                  <Link to="/app">
                    <Button
                      variant="gradient"
                      size="xl"
                      className="w-full py-4  text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-950"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
                <button className="w-full py-4 bg-transparent border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
