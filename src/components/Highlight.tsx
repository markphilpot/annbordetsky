import { ReactNode, ElementType } from "react";

interface HighlightProps {
  children: ReactNode;
  as?: ElementType;
}

export default function Highlight({
  children,
  as: Component = "span",
}: HighlightProps) {
  return (
    <Component className={"bg-accent pr-2 rounded font-bold"}>
      {children}
    </Component>
  );
}
