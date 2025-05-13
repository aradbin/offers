"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-4 text-sm xl:gap-6">
      <Link href="/" className="mr-4">
        <span className="font-bold">
          {siteConfig.name}
        </span>
      </Link>
      {siteConfig?.nav?.map((navItem) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === navItem.href
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {navItem.title}
        </Link>
      ))}
    </nav>
  )
}
