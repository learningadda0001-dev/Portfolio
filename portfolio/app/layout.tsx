import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import CommandMenu from "@/components/CommandMenu";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Chethan T V — Software Developer",
  description:
    "Chethan T V — 4.3+ years experienced Software Developer specializing in PHP, Laravel, CodeIgniter and ASP.NET Core.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Chethan T V — Software Developer",
    description:
      "4.3+ years building scalable web apps with PHP, CodeIgniter, Laravel, C# and ASP.NET Core.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-ink text-[#f4f5f7] antialiased selection:bg-signal/20">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgress />
          <CursorFollower />
          <CommandMenu />
          <Navbar />
          <main id="main">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
