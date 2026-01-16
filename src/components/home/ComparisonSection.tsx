import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Working preview every time",
    description: "Not just code output—a real URL you can test",
    perfectcode: true,
    others: false,
  },
  {
    feature: "Reliability controls",
    description: "Retries + safe fallback UX when AI stumbles",
    perfectcode: true,
    others: false,
  },
  {
    feature: "Same project continuity",
    description: "Iterations update one project, not create new ones",
    perfectcode: true,
    others: false,
  },
  {
    feature: "Versioned outputs/history",
    description: "Download artifacts and roll back anytime",
    perfectcode: true,
    others: false,
  },
  {
    feature: "Sandbox-first approach",
    description: "No database/auth setup required to start",
    perfectcode: true,
    others: false,
  },
];

export function ComparisonSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why PerfectCode.ai?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we compare to other AI builders
          </p>
        </div>

        <div className="max-w-4xl mx-auto flat-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-slate-border bg-slate-muted">
            <div className="text-slate-foreground font-medium">Feature</div>
            <div className="text-center">
              <span className="gradient-text font-bold">PerfectCode.ai</span>
            </div>
            <div className="text-center text-slate-foreground">Others</div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={item.feature}
              className={`grid grid-cols-3 gap-4 p-6 ${
                index !== comparisons.length - 1 ? "border-b border-slate-border" : ""
              } hover:bg-slate-muted/50 transition-colors`}
            >
              <div>
                <div className="font-medium text-foreground">{item.feature}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
              </div>
              <div className="flex justify-center items-center">
                {item.perfectcode ? (
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center">
                {item.others ? (
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-muted flex items-center justify-center">
                    <X className="w-5 h-5 text-slate-foreground" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
