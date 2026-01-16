import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ArrowLeft, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";

const mockTickets = [
  {
    id: "1",
    subject: "Cannot export my project",
    user: "john@example.com",
    status: "open",
    priority: "high",
    created: "2 hours ago",
    messages: [
      { from: "user", content: "I'm trying to export my project but the button doesn't work.", time: "2 hours ago" },
      { from: "support", content: "Thanks for reaching out. Can you tell me which browser you're using?", time: "1 hour ago" },
      { from: "user", content: "I'm using Chrome on macOS.", time: "45 min ago" },
    ],
  },
  {
    id: "2",
    subject: "Billing question",
    user: "sarah@startup.io",
    status: "closed",
    priority: "medium",
    created: "1 day ago",
    messages: [
      { from: "user", content: "When will I be charged for the Pro plan?", time: "1 day ago" },
      { from: "support", content: "You'll be charged at the end of your trial period.", time: "1 day ago" },
    ],
  },
  {
    id: "3",
    subject: "Feature request: Dark mode",
    user: "mike@company.com",
    status: "open",
    priority: "low",
    created: "3 days ago",
    messages: [
      { from: "user", content: "Would love to have a dark mode option!", time: "3 days ago" },
    ],
  },
];

export default function AdminSupport() {
  const [selectedTicket, setSelectedTicket] = useState<typeof mockTickets[0] | null>(null);
  const [reply, setReply] = useState("");

  const sendReply = () => {
    if (!reply.trim()) return;
    // Mock sending reply
    setReply("");
  };

  if (selectedTicket) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSelectedTicket(null)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{selectedTicket.subject}</h1>
            <p className="text-muted-foreground">{selectedTicket.user}</p>
          </div>
        </div>

        <Card className="glass-card border-glass-border/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  selectedTicket.status === "open"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {selectedTicket.status}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  selectedTicket.priority === "high"
                    ? "bg-red-500/20 text-red-400"
                    : selectedTicket.priority === "medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {selectedTicket.priority}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{selectedTicket.created}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Messages */}
            <div className="space-y-4 mb-6">
              {selectedTicket.messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    message.from === "user"
                      ? "bg-secondary/50 ml-8"
                      : "gradient-primary text-primary-foreground mr-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium">
                      {message.from === "user" ? selectedTicket.user : "Support"}
                    </span>
                    <span className="text-xs opacity-70">{message.time}</span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              ))}
            </div>

            {/* Reply */}
            <div className="space-y-4 pt-4 border-t border-border">
              <Textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your reply..."
                className="min-h-[100px] bg-secondary"
              />
              <div className="flex justify-end gap-2">
                <Button variant="glass">Mark as Resolved</Button>
                <Button variant="gradient" className="gap-2" onClick={sendReply}>
                  <Send className="w-4 h-4" />
                  Send Reply
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Support Inbox</h1>
        <p className="text-muted-foreground">Manage customer support tickets</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="glass-card border-glass-border/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Open tickets</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-glass-border/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4h</p>
                <p className="text-sm text-muted-foreground">Avg response time</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-glass-border/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-sm text-muted-foreground">Resolved this month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle>All Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockTickets.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
                className="w-full p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{ticket.subject}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      ticket.status === "open"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {ticket.status}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      ticket.priority === "high"
                        ? "bg-red-500/20 text-red-400"
                        : ticket.priority === "medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {ticket.priority}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{ticket.user}</span>
                  <span>{ticket.created}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
