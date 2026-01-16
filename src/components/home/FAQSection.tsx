import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isn't this just another AI code generator?",
    answer: "No. Unlike traditional code generators that output snippets you need to assemble, PerfectCode.ai creates complete, working applications with live preview URLs. You get a functional app you can test and share immediately, not just code to copy-paste.",
  },
  {
    question: "Can it build something usable?",
    answer: "Absolutely. Our sandbox environment produces production-quality UI with clean component structure. Many users deploy their generated apps directly to production after minimal tweaks.",
  },
  {
    question: "How much control do I have?",
    answer: "Full control. You can iterate on any aspect through natural conversation, export the code to your preferred environment, or connect to external services like databases and authentication when needed.",
  },
  {
    question: "Can I add features later?",
    answer: "Yes! That's the beauty of our chat-based approach. Simply continue the conversation to add new features, modify existing ones, or connect integrations. Your project evolves with you.",
  },
  {
    question: "Do I need a database at the start?",
    answer: "No. Our sandbox-first approach means you can build and iterate without any infrastructure. Add database, auth, or other integrations only when you're ready to go beyond the prototype.",
  },
  {
    question: "Can I export my project?",
    answer: "Yes. Pro and Team plans include full code export. You'll get a clean, well-structured codebase that you can host anywhere or continue developing in your preferred IDE.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="content-card px-6 border-l-0 data-[state=open]:border-l-[3px] data-[state=open]:border-l-primary data-[state=open]:glow-subtle"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
