import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex justify-between items-center gap-2 md:gap-4 max-w-7xl h-14">
          <MainNav />
          <MobileNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}