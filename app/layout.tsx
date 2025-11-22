import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dabali Cafe - Where Tradition Meets Taste",
  description:
    "Experience the finest dining with our carefully curated menu featuring authentic flavors and modern culinary techniques. Book your table at Dabali Cafe today!",
  keywords: [
    "restaurant",
    "cafe",
    "dining",
    "food",
    "Dabali Cafe",
    "Kathmandu",
    "Nepal",
    "authentic cuisine",
  ],
  authors: [{ name: "Dabali Cafe" }],
  openGraph: {
    title: "Dabali Cafe - Where Tradition Meets Taste",
    description:
      "Experience the finest dining with authentic flavors and modern culinary techniques.",
    type: "website",
    locale: "en_US",
    siteName: "Dabali Cafe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/dabali_cafe_favicon.svg"
          type="image/svg+xml"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
