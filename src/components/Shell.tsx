import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Dashboard" },
  { to: "/add", label: "Add Work" },
  { to: "/analysis", label: "Analysis" },
  { to: "/workload", label: "Workload Map" },
  { to: "/plan", label: "AI Plan" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-3.5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              DL
            </span>
            <span className="text-[15px] font-bold tracking-tight">DeadlineLens AI</span>
          </Link>
          <span className="hidden rounded-full border border-accent bg-accent/50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent-foreground sm:inline">
            AI Workload Intelligence
          </span>
          <nav className="ml-auto flex flex-wrap items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:py-12">{children}</main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 text-[13px] text-muted-foreground">
          DeadlineLens AI — Plan smarter. Avoid workload collisions.
        </div>
      </footer>
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5"
      : "border border-border bg-surface text-foreground hover:bg-secondary";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
