import { Fa6BrandsLinkedin, Fa6BrandsSquareXTwitter } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className={"w-full py-2 sticky bottom-0 z-20 bg-background"}>
      <div className={"max-w-4xl mx-auto"}>
        <div className={"flex justify-center items-center gap-2"}>
          <Button variant={"ghost"} size={"icon"}>
            <Fa6BrandsSquareXTwitter />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Fa6BrandsLinkedin />
          </Button>
        </div>
      </div>
    </footer>
  );
}
