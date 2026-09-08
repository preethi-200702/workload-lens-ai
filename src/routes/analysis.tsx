import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { TASKS } from "@/lib/workload-data";

export const Route = createFileRoute("/analysis")({
  head: () => ({
    meta: [
      { title: "Workload Analysis — DeadlineLens AI" },
      {
        name: "description",
        content: "Tasks, deadlines, effort estimates and priorities extracted from your pasted work.",
      },
      { property: "og:title", content: "Workload Analysis — DeadlineLens AI" },
      { property: "og:description", content: "5 tasks identified, 20 estimated hours, 3 high-priority tasks." },
    ],
  }),
  component: Analysis,
});

const priorityChip: Record<string, string> = {
  High: "bg-critical/15 text-critical-foreground",
  Medium: "bg-moderate/25 text-moderate-foreground",
};

function Analysis() {
  return (
    <Shell>
      <div className="rise">
        <span className="rounded-full border border-accent bg-accent/50 px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
          AI Workload Intelligence
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Workload Analysis</h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["5", "tasks identified"],
            ["20", "estimated hours"],
            ["3", "high-priority tasks"],
          ].map(([v, l], i) => (
            <div
              key={l}
              className="rise rounded-2xl border border-border bg-card p-5 shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="text-3xl font-extrabold tracking-tight">{v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-accent bg-accent/30 p-4 text-sm text-accent-foreground">
          <span className="font-semibold">AI insight · </span>
          AI identified multiple high-effort tasks with closely spaced deadlines.
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-secondary/70 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  {["Task", "Deadline", "Estimated Effort", "Priority", "Status"].map((h) => (
                    <th key={h} className="px-5 py-3.5 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TASKS.map((t) => (
                  <tr key={t.task} className="border-t border-border transition-colors hover:bg-secondary/40">
                    <td className="px-5 py-4 font-semibold">{t.task}</td>
                    <td className="px-5 py-4 text-muted-foreground">{t.deadline}</td>
                    <td className="px-5 py-4 text-muted-foreground">{t.effort} hrs</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityChip[t.priority]}`}
                      >
                        {t.priority}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-7">
          <Link
            to="/workload"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            View Workload →
          </Link>
        </div>
      </div>
    </Shell>
  );
}
