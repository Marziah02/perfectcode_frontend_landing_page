import { Globe, Rocket, FileText } from "lucide-react";

const platforms = [
  {
    icon: "/images/webapp.svg",
    title: "Web Apps",
    description: "Full-featured web applications with modern UI",
    examples: ["SaaS dashboards", "Admin panels", "Internal tools"],
    gradient: "from-gradient-purple to-gradient-pink",
  },
  {
    icon: "/images/saasp.svg",
    title: "SaaS Products",
    description: "Complete software-as-a-service solutions",
    examples: ["User authentication", "Billing integration", "API endpoints"],
    gradient: "from-gradient-pink to-gradient-orange",
  },
  {
    icon: "/images/landpage.svg",
    title: "Landing Pages",
    description: "High-converting marketing pages",
    examples: ["Product launches", "Waitlist pages", "Portfolio sites"],
    gradient: "from-gradient-orange to-gradient-purple",
  },
];

export function PlatformSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">One Platform. Three Builds.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whatever you're building, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="content-card p-8 glow-hover group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <img
                  className="h-full w-8"
                  src={platform.icon}
                  alt={platform.title}
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {platform.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {platform.description}
              </p>
              <ul className="space-y-2">
                {platform.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
