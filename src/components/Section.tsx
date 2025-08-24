import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section
      className={cn(
        "prose dark:prose-invert prose-sm mb-10",
        "!max-w-3xl",
        "prose-headings:tracking-tight prose-headings:text-foreground prose-headings:font-mono",
        "prose-p:text-foreground prose-p:font-mono",
        "prose-ul:list-(--my-marker) prose-ul:marker:text-muted-foreground",
        "prose-li:text-foreground prose-li:tracking-tight",
      )}
    >
      {children}
    </section>
  );
}
