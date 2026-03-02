import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InfoBluera | Premium IT Solutions",
  description: "We craft high-performance websites, mobile apps, and enterprise software that drives growth. Trusted by industry leaders.",
  keywords: ["Software Development", "Mobile Apps", "Web Development", "IT Solutions", "InfoBluera"],
  openGraph: {
    title: "InfoBluera | Premium IT Solutions",
    description: "We craft high-performance websites, mobile apps, and enterprise software that drives growth.",
    type: "website",
    url: "https://infobluera.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfoBluera | Premium IT Solutions",
    description: "We craft high-performance websites, mobile apps, and enterprise software that drives growth.",
  },
};

import { organizationSchema, servicesSchema, siteSchema } from "@/lib/schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {servicesSchema.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-text-primary min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
