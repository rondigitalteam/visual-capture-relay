import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Ron Digital" },
      { name: "description", content: "Answers to common questions about Ron Digital services, pricing, minimum project budget, and how to get started." },
      { property: "og:title", content: "FAQ | Ron Digital" },
      { property: "og:description", content: "Common questions about services, pricing, and getting started with Ron Digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <SiteHeader />
      <main>
        <section className="page-grid max-w-3xl py-20 md:py-24">
          <div className="text-center">
            <span className="eyebrow">Questions, answered</span>
            <h1 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently Asked Questions</h1>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-border bg-background">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold">
                  <span>{question}</span>
                  <ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
