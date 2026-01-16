import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Flag } from "lucide-react";

const defaultFlags = [
  {
    id: "export_zip",
    name: "Export ZIP",
    description: "Allow users to export their projects as ZIP files",
    enabled: true,
  },
  {
    id: "team_projects",
    name: "Team Projects",
    description: "Enable team collaboration features",
    enabled: true,
  },
  {
    id: "custom_domain",
    name: "Custom Domain",
    description: "Allow custom domain connections for deployed apps",
    enabled: false,
  },
  {
    id: "ai_v2",
    name: "AI Model V2",
    description: "Use the new AI generation model (beta)",
    enabled: false,
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    description: "Enable advanced analytics dashboard for users",
    enabled: true,
  },
  {
    id: "api_access",
    name: "API Access",
    description: "Allow programmatic API access for Team plans",
    enabled: true,
  },
];

export default function AdminFlags() {
  const [flags, setFlags] = useState(defaultFlags);

  // Load from localStorage on mount
  useEffect(() => {
    const savedFlags = localStorage.getItem("feature_flags");
    if (savedFlags) {
      setFlags(JSON.parse(savedFlags));
    }
  }, []);

  // Save to localStorage on change
  const toggleFlag = (id: string) => {
    const updatedFlags = flags.map((flag) =>
      flag.id === id ? { ...flag, enabled: !flag.enabled } : flag
    );
    setFlags(updatedFlags);
    localStorage.setItem("feature_flags", JSON.stringify(updatedFlags));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Feature Flags</h1>
        <p className="text-muted-foreground">Toggle features across the platform</p>
      </div>

      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flag className="w-5 h-5" />
            All Feature Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {flags.map((flag) => (
              <div
                key={flag.id}
                className="flex items-center justify-between py-4 border-b border-border last:border-0"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-foreground">{flag.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      flag.enabled
                        ? "bg-green-500/20 text-green-400"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {flag.enabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{flag.description}</p>
                </div>
                <Switch
                  checked={flag.enabled}
                  onCheckedChange={() => toggleFlag(flag.id)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">
        Changes are saved automatically and stored in local storage.
      </p>
    </div>
  );
}
