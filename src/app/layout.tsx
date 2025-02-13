import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luca Christl's Portfolio",
  description: "personal portfolio website for luca christl",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body>{children}</body>
    </html>
  );
}
