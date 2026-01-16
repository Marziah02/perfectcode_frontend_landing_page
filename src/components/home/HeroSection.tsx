import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Lock, Globe, Sparkles, SendHorizonal } from "lucide-react";

const examplePrompts = [
  "SaaS Platform",
  "Online Marketplace",
  "Client Portal",
  "Mobile App",
  "Landing Page",
];

export function HeroSection() {
  const [prompt, setPrompt] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse-glow delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered App Builder</span>
          </div> */}

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold mb-5 animate-fade-in-up delay-100 whitespace-nowrap text-wrap text-center">
            <span className="gradient-text">Start building</span>{" "}
            <span className="text-foreground">your next product</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Build, preview, and launch real web apps with AI.
          </p>

          {/* Prompt Box */}
          <div className="max-w-2xl mx-auto animate-fade-in-up delay-300">
            <div className="content-card p-2 glow-primary">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="I want to build a…"
                    className="w-full bg-transparent border-0 resize-none text-lg p-4 text-foreground placeholder:text-muted-foreground focus:outline-none min-h-[120px]"
                  />
                </div>

                <div className="flex items-center justify-between p-2 border-t border-border w-full ">
                  {/* Toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPrivate(!isPrivate)}
                      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                        isPrivate
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      <Lock className="w-4 h-4" />
                      <span className="text-sm hidden md:block">Private</span>
                      <div className="block md:hidden absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-1.5 px-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Private
                        <span className="absolute top-100 left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-black"></span>
                      </div>
                    </button>
                    <button
                      onClick={() => setIsPrivate(!isPrivate)}
                      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                        !isPrivate
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm hidden md:block">Public</span>
                      <div className="block md:hidden absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-1.5 px-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Public
                        <span className="absolute top-100 left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-black"></span>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="glass" size="sm" className="gap-2">
                      <ImagePlus className="w-4 h-4" />
                      Add Images
                    </Button>
                    <Button
                      variant="gradient"
                      size="lg"
                      className="shadow-lg hidden md:block"
                    >
                      Generate Preview
                    </Button>

                    <Button
                      variant="gradient"
                      size="sm"
                      className="shadow-lg block md:hidden group relative"
                    >
                      <SendHorizonal />
                      <div className="block md:hidden absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-1.5 px-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Generate Preview
                        <span className="absolute top-100 left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-black"></span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Example chips - flat, not glowing */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {examplePrompts.map((example) => (
                <button
                  key={example}
                  onClick={() => setPrompt(example)}
                  className="px-4 py-2 rounded-full text-sm text-muted-foreground bg-card border border-border hover:text-foreground hover:border-primary/40 transition-all"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Value cards - clear separation from background */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 animate-fade-in-up delay-500">
          <div className="content-card p-6 text-center glow-hover">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧪</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Sandbox-first
            </h3>
            <p className="text-sm text-muted-foreground">
              No infrastructure needed to start. Build and iterate freely.
            </p>
          </div>
          <div className="content-card p-6 text-center glow-hover">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Working preview every time
            </h3>
            <p className="text-sm text-muted-foreground">
              Get a functional preview URL, not just code snippets.
            </p>
          </div>
          <div className="content-card p-6 text-center glow-hover">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Iterate by chat
            </h3>
            <p className="text-sm text-muted-foreground">
              Refine your app through natural conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
