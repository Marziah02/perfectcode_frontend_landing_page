import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, AlertCircle, Check, RefreshCw, Clock } from "lucide-react";

const deployments = [
  {
    id: "1",
    project: "E-commerce Dashboard",
    user: "john@example.com",
    status: "success",
    time: "2 min ago",
    duration: "45s",
  },
  {
    id: "2",
    project: "CRM System",
    user: "sarah@startup.io",
    status: "success",
    time: "15 min ago",
    duration: "1m 12s",
  },
  {
    id: "3",
    project: "Portfolio Website",
    user: "mike@company.com",
    status: "failed",
    time: "32 min ago",
    duration: "2m 5s",
    error: "Build timeout exceeded",
  },
  {
    id: "4",
    project: "Booking Platform",
    user: "lisa@dev.co",
    status: "success",
    time: "1 hour ago",
    duration: "38s",
  },
  {
    id: "5",
    project: "Task Manager",
    user: "alex@tech.io",
    status: "pending",
    time: "Just now",
    duration: "-",
  },
];

const errorLogs = [
  {
    id: "1",
    message: "Build timeout exceeded",
    project: "Portfolio Website",
    timestamp: "32 min ago",
    level: "error",
  },
  {
    id: "2",
    message: "Memory limit reached during generation",
    project: "Data Analytics App",
    timestamp: "2 hours ago",
    level: "error",
  },
  {
    id: "3",
    message: "API rate limit exceeded",
    project: "Social Dashboard",
    timestamp: "4 hours ago",
    level: "warning",
  },
];

export default function AdminDeployments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Deployments & Logs</h1>
          <p className="text-muted-foreground">Monitor deployment attempts and error logs</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Retry Simulation
        </Button>
      </div>

      {/* Deployments */}
      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Recent Deployments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deployments.map((deployment) => (
              <div
                key={deployment.id}
                className="flex items-center justify-between py-4 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    deployment.status === "success"
                      ? "bg-green-500/20"
                      : deployment.status === "failed"
                      ? "bg-red-500/20"
                      : "bg-yellow-500/20"
                  }`}>
                    {deployment.status === "success" ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : deployment.status === "failed" ? (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-400 animate-spin" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{deployment.project}</p>
                    <p className="text-sm text-muted-foreground">{deployment.user}</p>
                    {deployment.error && (
                      <p className="text-xs text-red-400 mt-1">{deployment.error}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{deployment.time}</p>
                  <p className="text-xs text-muted-foreground">Duration: {deployment.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Error Logs */}
      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Error Logs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {errorLogs.map((log) => (
              <div
                key={log.id}
                className={`p-4 rounded-lg border ${
                  log.level === "error"
                    ? "bg-red-500/10 border-red-500/30"
                    : "bg-yellow-500/10 border-yellow-500/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    log.level === "error"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {log.level.toUpperCase()}
                  </span>
                  <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{log.message}</p>
                <p className="text-xs text-muted-foreground mt-1">Project: {log.project}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
