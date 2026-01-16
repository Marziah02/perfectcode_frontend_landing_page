import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react";

const usageStats = [
  { label: "Total Generations", value: "89,234", change: "+23%" },
  { label: "API Calls", value: "1.2M", change: "+18%" },
  { label: "Storage Used", value: "2.4 TB", change: "+12%" },
  { label: "Avg Response Time", value: "1.2s", change: "-8%" },
];

const planDistribution = [
  { plan: "Starter", users: 8420, percentage: 65, color: "bg-muted" },
  { plan: "Pro", users: 3150, percentage: 25, color: "bg-gradient-pink" },
  { plan: "Team", users: 1277, percentage: 10, color: "bg-gradient-purple" },
];

const billingEvents = [
  { event: "Subscription upgraded to Pro", user: "john@example.com", amount: "$29", date: "Today, 2:30 PM" },
  { event: "Payment received", user: "sarah@startup.io", amount: "$99", date: "Today, 11:15 AM" },
  { event: "Subscription renewed", user: "mike@company.com", amount: "$29", date: "Yesterday" },
  { event: "New Team subscription", user: "lisa@dev.co", amount: "$99", date: "2 days ago" },
  { event: "Refund processed", user: "alex@tech.io", amount: "-$29", date: "3 days ago" },
];

export default function AdminUsage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Usage & Billing</h1>
        <p className="text-muted-foreground">Monitor platform usage and billing activity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {usageStats.map((stat) => (
          <Card key={stat.label} className="glass-card border-glass-border/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span className={`text-xs ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Plan Distribution */}
        <Card className="glass-card border-glass-border/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Plan Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {planDistribution.map((plan) => (
              <div key={plan.plan}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">{plan.plan}</span>
                  <span className="text-sm text-muted-foreground">{plan.users.toLocaleString()} users</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${plan.color} rounded-full transition-all duration-500`}
                    style={{ width: `${plan.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Usage Chart Placeholder */}
        <Card className="glass-card border-glass-border/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Usage Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Usage chart placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing Events */}
      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Recent Billing Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {billingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{event.event}</p>
                  <p className="text-xs text-muted-foreground">{event.user}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    event.amount.startsWith("-") ? "text-red-400" : "text-green-400"
                  }`}>
                    {event.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
