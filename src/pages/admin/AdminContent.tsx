import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Save, Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const defaultFaqs = [
  {
    id: "1",
    question: "Isn't this just another AI code generator?",
    answer: "No. Unlike traditional code generators that output snippets you need to assemble, PerfectCode.ai creates complete, working applications.",
  },
  {
    id: "2",
    question: "Can it build something usable?",
    answer: "Absolutely. Our sandbox environment produces production-quality UI with clean component structure.",
  },
  {
    id: "3",
    question: "How much control do I have?",
    answer: "Full control. You can iterate on any aspect through natural conversation.",
  },
];

const defaultPricing = {
  starter: { name: "Starter", price: "Free", description: "Perfect for exploring" },
  pro: { name: "Pro", price: "$29/mo", description: "For serious builders" },
  team: { name: "Team", price: "$99/mo", description: "For teams building together" },
};

export default function AdminContent() {
  const [faqs, setFaqs] = useState(defaultFaqs);
  const [pricing, setPricing] = useState(defaultPricing);

  const updateFaq = (id: string, field: "question" | "answer", value: string) => {
    setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, [field]: value } : faq)));
  };

  const addFaq = () => {
    setFaqs([...faqs, { id: Date.now().toString(), question: "", answer: "" }]);
  };

  const deleteFaq = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  const saveContent = () => {
    // In a real app, this would save to a backend
    toast({
      title: "Content saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Manager</h1>
          <p className="text-muted-foreground">Edit landing page content</p>
        </div>
        <Button variant="gradient" className="gap-2" onClick={saveContent}>
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      {/* FAQ Editor */}
      <Card className="glass-card border-glass-border/30">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            FAQ Items
          </CardTitle>
          <Button variant="glass" size="sm" className="gap-2" onClick={addFaq}>
            <Plus className="w-4 h-4" />
            Add FAQ
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="p-4 bg-secondary/30 rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">FAQ #{index + 1}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteFaq(faq.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Question</label>
                <Input
                  value={faq.question}
                  onChange={(e) => updateFaq(faq.id, "question", e.target.value)}
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Answer</label>
                <Textarea
                  value={faq.answer}
                  onChange={(e) => updateFaq(faq.id, "answer", e.target.value)}
                  className="mt-1 bg-background min-h-[100px]"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pricing Editor */}
      <Card className="glass-card border-glass-border/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Pricing Text
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(pricing).map(([key, plan]) => (
              <div key={key} className="p-4 bg-secondary/30 rounded-lg space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Plan Name</label>
                  <Input
                    value={plan.name}
                    onChange={(e) =>
                      setPricing({ ...pricing, [key]: { ...plan, name: e.target.value } })
                    }
                    className="mt-1 bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Price</label>
                  <Input
                    value={plan.price}
                    onChange={(e) =>
                      setPricing({ ...pricing, [key]: { ...plan, price: e.target.value } })
                    }
                    className="mt-1 bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Description</label>
                  <Input
                    value={plan.description}
                    onChange={(e) =>
                      setPricing({ ...pricing, [key]: { ...plan, description: e.target.value } })
                    }
                    className="mt-1 bg-background"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
