import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, MoreHorizontal, Eye } from "lucide-react";

const mockUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    plan: "Pro",
    status: "Active",
    created: "2024-01-15",
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@startup.io",
    plan: "Team",
    status: "Active",
    created: "2024-02-20",
    lastActive: "5 min ago",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike@company.com",
    plan: "Starter",
    status: "Active",
    created: "2024-03-10",
    lastActive: "1 day ago",
  },
  {
    id: "4",
    name: "Lisa Wong",
    email: "lisa@dev.co",
    plan: "Pro",
    status: "Inactive",
    created: "2024-01-05",
    lastActive: "2 weeks ago",
  },
  {
    id: "5",
    name: "Alex Turner",
    email: "alex@tech.io",
    plan: "Team",
    status: "Active",
    created: "2024-04-01",
    lastActive: "Just now",
  },
];

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">Manage user accounts and subscriptions</p>
        </div>
        <Button variant="gradient">Export Users</Button>
      </div>

      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Users</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-secondary border-border"
                />
              </div>
              <Button variant="glass" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.plan === "Team"
                        ? "bg-gradient-purple/20 text-gradient-purple"
                        : user.plan === "Pro"
                        ? "bg-gradient-pink/20 text-gradient-pink"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {user.plan}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`flex items-center gap-2 ${
                      user.status === "Active" ? "text-green-400" : "text-muted-foreground"
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        user.status === "Active" ? "bg-green-400" : "bg-muted-foreground"
                      }`} />
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.created}</TableCell>
                  <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
