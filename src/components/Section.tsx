import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section
      className={cn(
        "prose dark:prose-invert md:prose-lg mb-10",
        "!max-w-3xl",
        "prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-p:text-foreground",
        // "prose-ul:list-(--my-marker) prose-ul:marker:text-muted-foreground",
        "prose-ul:marker:text-muted-foreground",
        "prose-li:text-foreground prose-li:tracking-tight",
        "prose-li:m-0",
      )}
    >
      {children}
    </section>
  );
}
