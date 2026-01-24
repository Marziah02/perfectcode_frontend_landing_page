import { ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "E-commerce Dashboard",
    category: "SaaS",
    updated: "2 hours ago",
    color: "from-gradient-purple to-gradient-pink",
    src: "/images/1_ecom.svg",
  },
  {
    name: "Booking Platform",
    category: "Marketplace",
    updated: "4 hours ago",
    color: "from-gradient-pink to-gradient-orange",
    src: "/images/2_bookplat.svg",
  },
  {
    name: "Portfolio Template",
    category: "Website",
    updated: "6 hours ago",
    color: "from-gradient-orange to-gradient-purple",
    src: "/images/3_port.svg",
  },
  {
    name: "CRM System",
    category: "Internal Tool",
    updated: "8 hours ago",
    color: "from-gradient-purple to-gradient-pink",
    src: "/images/4_crm.svg",
  },
  {
    name: "Task Manager",
    category: "Productivity",
    updated: "12 hours ago",
    color: "from-gradient-pink to-gradient-orange",
    src: "/images/5_tsk.svg",
  },
];

export function CommunitySection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Live from the community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore apps built by creators just like you
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`${index % 2 === 0 ? "content-card" : "content-card-alt"} p-4 flex items-center justify-between glow-hover group`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <span className="text-xl">
                    <img
                      className="h-full w-6"
                      src={project.src}
                      alt="footer."
                    />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 bg-secondary rounded-full text-xs">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.updated}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Live
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/showcase">
            <Button variant="outline" size="lg">
              Explore All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
