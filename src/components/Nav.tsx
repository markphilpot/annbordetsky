"use client";

import { ModeToggle } from "@/components/theme-toggle";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className={"w-full sticky top-0 z-20 mb-12 bg-background"}>
      <div className={"max-w-4xl mx-auto px-4"}>
        <div className={"grid grid-cols-2 md:grid-cols-3 py-6"}>
          <div className={"flex justify-start items-center"}>
            <Logo />
          </div>

          <div className={"flex justify-end md:justify-center items-center"}>
            <Button
              variant={"link"}
              className={cn("!px-2", {
                "underline underline-offset-4 decoration-2 decoration-primary":
                  pathname === "/invest",
              })}
              asChild
            >
              <Link href={"/invest"} className={"font-mono font-semibold"}>
                Invest
              </Link>
            </Button>
            <Button
              variant={"link"}
              className={cn("!px-2", {
                "underline underline-offset-4 decoration-2 decoration-primary":
                  pathname === "/build",
              })}
              asChild
            >
              <Link href={"/build"} className={"font-mono font-semibold"}>
                Build
              </Link>
            </Button>
          </div>

          <div className={"hidden md:flex items-center justify-end"}>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
