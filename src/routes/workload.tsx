import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { WORKLOAD, levelClasses } from "@/lib/workload-data";

export const Route = createFileRoute("/workload")({
  head: () => ({
    meta: [
      { title: "Your Workload Map — DeadlineLens AI" },
      {
        name: "description",
        content: "A 7-day workload map with collision detection across September 9–15.",
      },
      { property: "og:title", content: "Your Workload Map — DeadlineLens AI" },
      { property: "og:description", content: "Workload collision detected on September 13–14: ~13 hours of work." },
    ],
  }),
  component: WorkloadMap,
});

function WorkloadMap() {
  const max = Math.max(...WORKLOAD.map((d) => d.hours));

  return (
    <Shell>
      <div className="rise">
        <span className="rounded-full border border-accent bg-accent/50 px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
          AI Workload Intelligence
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Your Workload Map</h1>
        <p className="mt-2 text-muted-foreground">Planned effort per day, September 9 – 15.</p>

        <div className="mt-7 rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex h-64 items-end gap-2 sm:gap-4">
            {WORKLOAD.map((d, i) => (
              <div key={d.date} className="group flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-bold">{d.hours}h</span>
                <div
                  className={`grow-bar relative w-full origin-bottom rounded-xl ${levelClasses[d.level].bar} ${
                    d.peak ? "ring-2 ring-critical/50 ring-offset-2 ring-offset-card" : ""
                  } transition-transform group-hover:scale-y-[1.02]`}
                  style={{ height: `${(d.hours / max) * 100}%`, animationDelay: `${i * 70}ms` }}
                />
                <span className="text-[11px] font-semibold">{d.date.replace("September ", "Sep ")}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelClasses[d.level].chip}`}
                >
                  {d.level}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4 text-[11px] font-medium text-muted-foreground">
            {(["Light", "Moderate", "High", "Critical"] as const).map((l) => (
              <span key={l} className="inline-flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${levelClasses[l].bar}`} />
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-critical/35 bg-critical/5 p-6">
            <p className="text-base font-bold text-critical-foreground">⚠ Workload Collision Detected</p>
            <p className="mt-2 text-sm text-muted-foreground">
              September 13–14 contains approximately 13 hours of planned work across multiple deadlines.
            </p>
            <div className="mt-4 flex gap-3">
              {WORKLOAD.filter((d) => d.peak).map((d) => (
                <div key={d.date} className="flex-1 rounded-xl border border-border bg-surface p-3">
                  <p className="text-xs text-muted-foreground">{d.date}</p>
                  <p className="text-xl font-extrabold">{d.hours} hrs</p>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelClasses[d.level].chip}`}
                  >
                    {d.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-base font-bold">Distribution insight</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Your workload is unevenly distributed. Starting the Java Project and DBMS Assignment earlier
              can reduce peak workload.
            </p>
            <Link
              to="/plan"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Get AI Recommendation →
            </Link>
          </div>
        </div>
      </div>
    </Shell>
  );
}
