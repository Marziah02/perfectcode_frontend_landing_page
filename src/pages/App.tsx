import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Send,
  Copy,
  ExternalLink,
  Home,
  Layers,
  Box,
  Database,
  Settings,
  Rocket,
  FileText,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const mockMessages = [
  {
    role: "user",
    content: "I want to build a CRM dashboard with customer management and analytics",
  },
  {
    role: "assistant",
    content: "I'll create a CRM dashboard with customer management, analytics charts, and a clean interface. Generating your preview now...",
  },
  {
    role: "system",
    content: "✓ Generation complete. Your preview is ready.",
  },
];

const tabs = [
  { name: "Home", icon: Home },
  { name: "Pages", icon: FileText },
  { name: "Components", icon: Box },
  { name: "Data", icon: Database },
  { name: "Settings", icon: Settings },
  { name: "Deploy", icon: Rocket },
  { name: "Logs", icon: FileText },
];

export default function AppPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    // Mock response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'll make those changes for you. Updating the preview..." },
      ]);
    }, 1000);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText("https://preview.perfectcode.ai/p/abc123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Chat Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-96" : "w-0"
        } transition-all duration-300 border-r border-border bg-card/50 flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">P</span>
            </div>
            <span className="font-semibold text-foreground">PerfectCode.ai</span>
          </Link>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.role === "user"
                  ? "ml-8"
                  : message.role === "system"
                  ? ""
                  : "mr-8"
              }`}
            >
              {message.role === "system" ? (
                <div className="glass-card p-4 border-green-500/30 bg-green-500/10">
                  <div className="flex items-center gap-2 text-green-400">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">{message.content}</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`p-4 rounded-2xl ${
                    message.role === "user"
                      ? "gradient-primary text-primary-foreground"
                      : "glass-card"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe changes..."
              className="flex-1 bg-secondary border-border"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button variant="gradient" size="icon" onClick={handleSend}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Toggle Sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 glass rounded-r-lg"
        style={{ left: sidebarOpen ? "384px" : "0" }}
      >
        {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-14 border-b border-border flex items-center justify-between px-4 bg-card/30">
          {/* Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === tab.name
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden md:inline">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Preview Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Preview ready</span>
            </div>
            <Button variant="glass" size="sm" className="gap-2" onClick={copyUrl}>
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy URL"}
            </Button>
            <Button variant="glass" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Open
            </Button>
          </div>
        </div>

        {/* Preview Frame */}
        <div className="flex-1 p-4 bg-background">
          <div className="w-full h-full rounded-xl glass-card overflow-hidden relative">
            {/* Mock preview content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 animate-float">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Your App Preview</h3>
                <p className="text-muted-foreground max-w-md">
                  This is where your generated app would appear. In a real environment, this would be an
                  interactive iframe showing your live preview.
                </p>
                <p className="text-sm text-muted-foreground mt-4 font-mono">
                  preview.perfectcode.ai/p/abc123
                </p>
              </div>
            </div>

            {/* Fake browser chrome */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-secondary/50 flex items-center gap-2 px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 mx-4">
                <div className="glass px-3 py-1 rounded-lg text-xs text-muted-foreground max-w-md mx-auto text-center">
                  preview.perfectcode.ai/p/abc123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
