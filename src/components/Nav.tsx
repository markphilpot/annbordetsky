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
    <nav className={"w-full sticky top-0 z-20 mb-12"}>
      <div className={"max-w-4xl mx-auto px-4"}>
        <div className={"grid grid-cols-2 sm:grid-cols-3 py-6"}>
          <div className={"flex justify-start items-center"}>
            <Logo />
          </div>

          <div className={"flex justify-end sm:justify-center items-center"}>
            <Button
              variant={"link"}
              className={cn("!px-2", {
                "underline underline-offset-4 decoration-2 decoration-primary":
                  pathname === "/investor",
              })}
              asChild
            >
              <Link href={"/investor"} className={"font-scp"}>
                Investor
              </Link>
            </Button>
            <Button
              variant={"link"}
              className={cn("!px-2", {
                "underline underline-offset-4 decoration-2 decoration-primary":
                  pathname === "/builder",
              })}
              asChild
            >
              <Link href={"/builder"} className={"font-scp"}>
                Builder
              </Link>
            </Button>
          </div>

          <div className={"hidden sm:flex items-center justify-end"}>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
