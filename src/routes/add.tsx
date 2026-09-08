import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell, Button } from "@/components/Shell";
import { DEMO_INPUT } from "@/lib/workload-data";

export const Route = createFileRoute("/add")({
  head: () => ({
    meta: [
      { title: "Add Your Work — DeadlineLens AI" },
      {
        name: "description",
        content: "Paste assignments, project requirements or meeting notes and turn them into an actionable workload.",
      },
      { property: "og:title", content: "Add Your Work — DeadlineLens AI" },
      { property: "og:description", content: "Turn unstructured work into an analyzed, achievable workload." },
    ],
  }),
  component: AddWork,
});

const STEPS = [
  "Analyzing your workload...",
  "Extracting tasks...",
  "Estimating effort...",
  "Checking deadline conflicts...",
];

function AddWork() {
  const navigate = useNavigate();
  const [text, setText] = useState(DEMO_INPUT);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!running) return;
    if (step >= STEPS.length) {
      const t = setTimeout(() => navigate({ to: "/analysis" }), 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 750);
    return () => clearTimeout(t);
  }, [running, step, navigate]);

  return (
    <Shell>
      <div className="mx-auto max-w-3xl rise">
        <span className="rounded-full border border-accent bg-accent/50 px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
          AI Workload Intelligence
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Add your work</h1>
        <p className="mt-2 text-muted-foreground">
          Paste assignments, project requirements, meeting notes or other work. DeadlineLens will turn
          them into an actionable workload.
        </p>

        <div className="mt-7 rounded-2xl border border-border bg-card p-5 shadow-card">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={14}
            spellCheck={false}
            className="w-full resize-y rounded-xl border border-input bg-background p-4 text-sm leading-relaxed text-foreground outline-none transition focus:border-ring focus:ring-4 focus:ring-ring/15"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Demo data pre-filled · nothing leaves this prototype
            </p>
            <Button onClick={() => setRunning(true)} disabled={running || !text.trim()}>
              {running ? "Analyzing…" : "Analyze My Workload"}
            </Button>
          </div>
        </div>

        {running && (
          <div className="rise mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <p className="text-sm font-semibold">AI analysis in progress</p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  className={`flex items-center gap-2.5 text-sm transition-opacity ${
                    i <= step ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold ${
                      i < step
                        ? "bg-light/25 text-light-foreground"
                        : i === step
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Shell>
  );
}
