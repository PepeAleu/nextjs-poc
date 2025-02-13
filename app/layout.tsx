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
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
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
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

interface RouteItem {
  text: string;
  route: string;
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const basePath = process.env.BASE_PATH ?? "";
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${basePath}/static/favicons/favicon-72.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/public/favicons/favicon-32.png`}
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
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white font-mono">
        <FavoritesProvider>
          <Header />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
