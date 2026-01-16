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
import { Search, Filter, ExternalLink, MoreHorizontal } from "lucide-react";

const mockProjects = [
  {
    id: "1",
    name: "E-commerce Dashboard",
    owner: "john@example.com",
    created: "2024-01-15",
    updated: "2 hours ago",
    status: "Active",
    previewUrl: "preview.perfectcode.ai/p/abc123",
  },
  {
    id: "2",
    name: "CRM System",
    owner: "sarah@startup.io",
    created: "2024-02-20",
    updated: "5 min ago",
    status: "Active",
    previewUrl: "preview.perfectcode.ai/p/def456",
  },
  {
    id: "3",
    name: "Portfolio Website",
    owner: "mike@company.com",
    created: "2024-03-10",
    updated: "1 day ago",
    status: "Inactive",
    previewUrl: "preview.perfectcode.ai/p/ghi789",
  },
  {
    id: "4",
    name: "Booking Platform",
    owner: "lisa@dev.co",
    created: "2024-01-05",
    updated: "3 days ago",
    status: "Active",
    previewUrl: "preview.perfectcode.ai/p/jkl012",
  },
  {
    id: "5",
    name: "Task Manager",
    owner: "alex@tech.io",
    created: "2024-04-01",
    updated: "Just now",
    status: "Active",
    previewUrl: "preview.perfectcode.ai/p/mno345",
  },
];

export default function AdminProjects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = mockProjects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">View and manage all projects</p>
        </div>
      </div>

      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Projects</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
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
                <TableHead>Project Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Preview URL</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell className="text-muted-foreground">{project.owner}</TableCell>
                  <TableCell className="text-muted-foreground">{project.created}</TableCell>
                  <TableCell className="text-muted-foreground">{project.updated}</TableCell>
                  <TableCell>
                    <span className={`flex items-center gap-2 ${
                      project.status === "Active" ? "text-green-400" : "text-muted-foreground"
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        project.status === "Active" ? "bg-green-400" : "bg-muted-foreground"
                      }`} />
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <a
                      href={`https://${project.previewUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <span className="text-sm truncate max-w-[180px]">{project.previewUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
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
