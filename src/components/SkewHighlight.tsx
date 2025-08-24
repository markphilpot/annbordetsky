import { ReactNode, ElementType } from "react";

interface SkewHighlightProps {
  children: ReactNode;
  as?: ElementType;
}

export default function SkewHighlight({
  children,
  as: Component = "span",
}: SkewHighlightProps) {
  return (
    <Component className="relative inline-block">
      <span
        className="absolute inset-0 bg-accent rounded -skew-x-1 -z-10"
        style={{ transform: "skew(-2deg, -2deg)" }}
      />
      <span className="relative">{children}</span>
    </Component>
  );
}
