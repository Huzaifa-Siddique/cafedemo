import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOCAIS Cafe | Riyadh",
  description: "Experience the premium LOCAIS Cafe in Al Aqiq, Riyadh. Featuring our signature Honey Cake and Coffee of the Day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased bg-locais-900 text-locais-100`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
