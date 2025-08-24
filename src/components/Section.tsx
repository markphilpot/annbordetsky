import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section
      className={cn(
        "prose prose-sm mb-10 ",
        "prose-headings:tracking-tight prose-headings:text-foreground prose-headings:font-mono",
        "prose-p:text-foreground prose-p:font-mono",
      )}
    >
      {children}
    </section>
  );
}
