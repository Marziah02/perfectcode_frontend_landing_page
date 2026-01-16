import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  BarChart3,
  Rocket,
  Flag,
  FileText,
  MessageSquare,
  Settings,
  Search,
  Bell,
  ChevronLeft,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Projects", href: "/admin/projects", icon: FolderKanban },
  { name: "Usage & Billing", href: "/admin/usage", icon: BarChart3 },
  { name: "Deployments", href: "/admin/deployments", icon: Rocket },
  { name: "Feature Flags", href: "/admin/flags", icon: Flag },
  { name: "Content", href: "/admin/content", icon: FileText },
  { name: "Support", href: "/admin/support", icon: MessageSquare },
];

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Trust anchor zone */}
      <aside
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } transition-all duration-300 border-r border-slate-border bg-slate-zone flex flex-col`}
      >
        {/* Logo */}
        <div className="h-16 border-b border-slate-border flex items-center justify-between px-4">
          {!sidebarCollapsed && (
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="font-semibold text-foreground">Admin</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.name} to={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${sidebarCollapsed ? "px-3" : ""}`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-slate-border space-y-1">
          <Link to="/admin/settings">
            <Button variant="ghost" className={`w-full justify-start gap-3 ${sidebarCollapsed ? "px-3" : ""}`}>
              <Settings className="w-4 h-4" />
              {!sidebarCollapsed && <span>Settings</span>}
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" className={`w-full justify-start gap-3 ${sidebarCollapsed ? "px-3" : ""}`}>
              <LogOut className="w-4 h-4" />
              {!sidebarCollapsed && <span>Exit Admin</span>}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar - Trust anchor zone */}
        <header className="h-16 border-b border-slate-border flex items-center justify-between px-6 bg-slate-zone">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64 bg-secondary border-border"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">A</span>
              </div>
              <span className="text-sm font-medium text-foreground">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
