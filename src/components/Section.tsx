import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section
      className={cn(
        "prose mb-10 ",
        "prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-p:text-foreground",
      )}
    >
      {children}
    </section>
  );
}
