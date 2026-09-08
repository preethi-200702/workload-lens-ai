import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PLAN } from "@/lib/workload-data";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "AI Recommended Plan — DeadlineLens AI" },
      {
        name: "description",
        content: "A rebalanced day-by-day plan that starts high-effort work earlier and removes the peak.",
      },
      { property: "og:title", content: "AI Recommended Plan — DeadlineLens AI" },
      { property: "og:description", content: "Start earlier to avoid a deadline collision." },
    ],
  }),
  component: Plan,
});

function Plan() {
  return (
    <Shell>
      <div className="rise">
        <span className="rounded-full border border-accent bg-accent/50 px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
          AI Workload Intelligence
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">AI Recommended Plan</h1>

        <div className="mt-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lift">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Recommendation</p>
          <p className="mt-2 text-xl font-bold sm:text-2xl">
            Start earlier to avoid a deadline collision.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm opacity-90">
            <span>Peak day reduced 7 hrs → 4 hrs</span>
            <span>Buffer created before every deadline</span>
          </div>
        </div>

        <ol className="mt-7 space-y-3">
          {PLAN.map((p, i) => (
            <li
              key={p.when}
              className="rise relative flex flex-wrap items-start gap-x-6 gap-y-2 rounded-2xl border border-border bg-card p-5 shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-40 shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{p.when}</p>
                <p className="mt-1 text-xs text-muted-foreground">Total: {p.total}</p>
              </div>
              <ul className="flex-1 space-y-1.5">
                {p.items.map((it) => (
                  <li key={it} className="text-sm font-medium">
                    <span className="mr-2 text-muted-foreground">→</span>
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-accent bg-accent/30 p-6">
          <p className="text-base font-bold text-accent-foreground">Why this plan?</p>
          <p className="mt-2 text-sm text-accent-foreground/85">
            Your original workload had a high concentration of tasks around September 13–14. Starting
            high-effort tasks earlier reduces the peak workload and creates buffer time before deadlines.
          </p>
        </div>

        <div className="mt-7">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </Shell>
  );
}
