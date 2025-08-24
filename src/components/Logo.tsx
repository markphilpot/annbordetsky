import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Logo() {
  return (
    <Button asChild variant={"link"} className={"!px-0"}>
      <Link href={"/"}>
        <span className={"font-mono text-3xl text-foreground"}>ann✺b</span>
        <span className={"sr-only"}>Ann Bordetsky</span>
      </Link>
    </Button>
  );
}
