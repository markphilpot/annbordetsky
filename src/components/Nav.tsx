"use client";

import { ModeToggle } from "@/components/theme-toggle";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  pathname,
  label,
}: {
  href: string;
  pathname: string;
  label: string;
}) {
  return (
    <Button
      variant={"link"}
      className={cn("!px-2", {
        "underline underline-offset-4 decoration-2 decoration-primary":
          pathname === href,
      })}
      asChild
    >
      <Link href={href} className={"font-mono font-semibold"}>
        {label}
      </Link>
    </Button>
  );
}

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
            <NavLink href={"/"} label={"about"} pathname={pathname} />
            <NavLink href={"/writing"} label={"writing"} pathname={pathname} />
          </div>

          <div className={"hidden md:flex items-center justify-end"}>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
