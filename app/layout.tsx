import type { Metadata } from "next";
import "@/app/_css/globals.css";
import { siteMetadata } from "@/app/_data/siteMetadata";
import FavoritesProvider from "./_providers/FavoritesProvider";
import Header from "./_components/Header";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`/favicons/favicon-72.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicons/favicon-32.png`}
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white font-mono">
        <FavoritesProvider>
          <Header />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
