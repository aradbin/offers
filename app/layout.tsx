import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import NextTopLoader from "nextjs-toploader";
import Providers from "@/components/providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="min-h-svh bg-background text-foreground antialiased">
        <NextTopLoader height={3} showSpinner={false} />
        <Providers>
          <main className="relative flex flex-col min-h-svh bg-background">
            <Header />
            <div className="container mx-auto max-w-7xl px-6 flex-grow flex flex-col gap-4 py-8 md:py-10">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
