import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MinecraftGuide.fr - Guides et Astuces Minecraft",
    template: "%s | MinecraftGuide.fr",
  },
  description:
    "Le guide Minecraft le plus complet en francais. Crafting, enchantements, potions, mobs, commandes, fermes automatiques et plus encore.",
  metadataBase: new URL("https://minecraftguide.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "MinecraftGuide.fr",
    title: "MinecraftGuide.fr - Guides et Astuces Minecraft",
    description:
      "Le guide Minecraft le plus complet en francais. Crafting, enchantements, potions, mobs, commandes, fermes automatiques et plus encore.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { name: "Crafting", href: "/comment-faire" },
  { name: "Enchantements", href: "/enchantement" },
  { name: "Potions", href: "/potion" },
  { name: "Mobs", href: "/mob" },
  { name: "Items", href: "/item" },
  { name: "Minage", href: "/minage" },
  { name: "Commandes", href: "/commande" },
  { name: "Fermes", href: "/ferme" },
  { name: "Constructions", href: "/construction" },
  { name: "Serveurs", href: "/serveur" },
  { name: "Mods", href: "/mod" },
  { name: "Blog", href: "/blog" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mc-border bg-mc-darker/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold text-mc-accent tracking-tight hover:text-mc-emerald transition-colors"
          >
            MinecraftGuide.fr
          </Link>

          {/* Mobile menu button */}
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden cursor-pointer p-2 text-mc-text-muted hover:text-mc-text transition-colors"
            aria-label="Ouvrir le menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-mc-text-muted hover:text-mc-accent hover:bg-mc-gray/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation with CSS-only toggle */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer hidden"
        aria-hidden="true"
      />
      <nav className="hidden peer-checked:block lg:hidden border-t border-mc-border bg-mc-darker">
        <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-mc-text-muted hover:text-mc-accent hover:bg-mc-gray/50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mc-border bg-mc-darker">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-mc-accent tracking-tight"
            >
              MinecraftGuide.fr
            </Link>
            <p className="mt-3 text-sm text-mc-text-muted leading-relaxed">
              Le guide Minecraft le plus complet en francais. Retrouvez toutes
              les informations sur le crafting, les enchantements, les mobs et
              bien plus.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-mc-text uppercase tracking-wider">
              Guides
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mc-text-muted hover:text-mc-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutoriels */}
          <div>
            <h3 className="text-sm font-semibold text-mc-text uppercase tracking-wider">
              Tutoriels
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.slice(4, 8).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mc-text-muted hover:text-mc-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communaute */}
          <div>
            <h3 className="text-sm font-semibold text-mc-text uppercase tracking-wider">
              Communaute
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.slice(8).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mc-text-muted hover:text-mc-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-mc-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-mc-text-dim">
            &copy; 2025 MinecraftGuide.fr. Tous droits reserves. Minecraft est
            une marque de Mojang Studios.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-sm text-mc-text-dim hover:text-mc-text-muted transition-colors"
            >
              Mentions legales
            </Link>
            <Link
              href="/confidentialite"
              className="text-sm text-mc-text-dim hover:text-mc-text-muted transition-colors"
            >
              Confidentialite
            </Link>
            <Link
              href="/contact"
              className="text-sm text-mc-text-dim hover:text-mc-text-muted transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
