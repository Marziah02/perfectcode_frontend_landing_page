import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FolderKanban, Zap, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Users",
    value: "3,421",
    change: "+8%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Previews Generated",
    value: "89,234",
    change: "+23%",
    trend: "up",
    icon: FolderKanban,
  },
  {
    title: "Error Rate",
    value: "0.8%",
    change: "-0.2%",
    trend: "down",
    icon: Zap,
  },
  {
    title: "Monthly Revenue",
    value: "$48,290",
    change: "+15%",
    trend: "up",
    icon: DollarSign,
  },
];

const recentActivity = [
  { action: "New user signup", user: "john@example.com", time: "2 min ago" },
  { action: "Project deployed", user: "sarah@startup.io", time: "5 min ago" },
  { action: "Subscription upgraded", user: "mike@company.com", time: "12 min ago" },
  { action: "Support ticket opened", user: "lisa@dev.co", time: "18 min ago" },
  { action: "New project created", user: "alex@tech.io", time: "25 min ago" },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card border-glass-border/30">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className={`flex items-center gap-1 text-xs ${
                stat.trend === "up" ? "text-green-400" : "text-red-400"
              }`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <Card className="glass-card border-glass-border/30">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Chart visualization placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card border-glass-border/30">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground">Revenue chart placeholder</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
