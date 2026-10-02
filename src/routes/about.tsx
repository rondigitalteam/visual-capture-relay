import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { features } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Ron Digital" },
      { name: "description", content: "Learn how Ron Digital combines strategy, design, visibility, and personalized consultation to help businesses build a stronger online presence." },
      { property: "og:title", content: "About Us | Ron Digital" },
      { property: "og:description", content: "Practical digital solutions built around your business goals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <SiteHeader />
      <main>
        <section className="page-grid grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">About us</span>
            <h1 className="display-font mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Digital Solutions Built Around Your Business</h1>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-muted">Ron Digital provides practical digital solutions for businesses looking to build a stronger online presence. We combine strategy, design, visibility, customer journeys, and personalized consultation to help businesses connect with their audience.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map(([title, description], index) => (
              <div key={title} className="rounded-xl border border-border bg-background p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand"><Check className="size-4" /></span>
                  <span className="text-xs font-semibold text-ink-muted">0{index + 1}</span>
                </div>
                <h3 className="display-font mt-5 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
