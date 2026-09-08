import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { WORKLOAD, levelClasses } from "@/lib/workload-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeadlineLens AI — Workload Dashboard" },
      {
        name: "description",
        content:
          "See your workload before it overwhelms you. DeadlineLens AI extracts tasks, estimates effort and detects deadline collisions.",
      },
      { property: "og:title", content: "DeadlineLens AI — Workload Dashboard" },
      {
        property: "og:description",
        content: "AI workload intelligence: extract tasks, spot collisions, get a realistic plan.",
      },
    ],
  }),
  component: Dashboard,
});

const summary = [
  { value: "7", label: "Active Tasks", note: "across 3 sources" },
  { value: "3", label: "High Priority", note: "due within 7 days" },
  { value: "2", label: "Workload Conflicts", note: "Sep 13–14" },
  { value: "24", label: "Estimated Hours", note: "this week" },
];

function Dashboard() {
  const max = Math.max(...WORKLOAD.map((d) => d.hours));

  return (
    <Shell>
      <section className="rise">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">DeadlineLens AI</h1>
            <p className="mt-2 text-base text-muted-foreground">
              See your workload before it overwhelms you.
            </p>
          </div>
          <Link
            to="/add"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            + Add New Work
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((s, i) => (
            <div
              key={s.label}
              className="rise rounded-2xl border border-border bg-card p-5 shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="text-3xl font-extrabold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm font-semibold">{s.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold tracking-tight">Weekly workload</h2>
                <p className="text-xs text-muted-foreground">Planned hours per day, September 9–15</p>
              </div>
              <span className="rounded-full bg-accent/60 px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                AI estimated
              </span>
            </div>

            <div className="mt-6 flex h-52 items-end gap-2 sm:gap-4">
              {WORKLOAD.map((d, i) => (
                <div key={d.date} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">{d.hours}h</span>
                  <div
                    className={`grow-bar w-full origin-bottom rounded-lg ${levelClasses[d.level].bar} ${
                      d.peak ? "ring-2 ring-critical/40 ring-offset-2 ring-offset-card" : ""
                    }`}
                    style={{ height: `${(d.hours / max) * 100}%`, animationDelay: `${i * 70}ms` }}
                  />
                  <span className="text-[11px] font-medium text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4 text-[11px] font-medium text-muted-foreground">
              {(["Light", "Moderate", "High", "Critical"] as const).map((l) => (
                <span key={l} className="inline-flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${levelClasses[l].bar}`} />
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-critical/30 bg-critical/5 p-5">
              <p className="text-sm font-bold text-critical-foreground">⚠ 2 workload conflicts</p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                September 13–14 holds roughly 13 hours of planned work across multiple deadlines.
              </p>
              <Link
                to="/workload"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Open Workload Map →
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <p className="text-sm font-bold">Next up</p>
              <ul className="mt-3 space-y-3">
                {[
                  ["DBMS Assignment", "Sep 12 · 3 hrs"],
                  ["Aptitude Practice", "Sep 13 · 2 hrs"],
                  ["Presentation", "Sep 14 · 4 hrs"],
                ].map(([t, m]) => (
                  <li key={t} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">{t}</span>
                    <span className="text-xs text-muted-foreground">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
