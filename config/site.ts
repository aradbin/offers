export const siteConfig = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  perPage: 12,
  nav: [
    {
      title: "All",
      href: "/offers",
    },
    {
      title: "Networks",
      href: "/networks",
    },
    {
      title: "Banks",
      href: "/banks",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "Partners",
      href: "/partners",
    },    
  ]
}

export type SiteConfig = typeof siteConfig
