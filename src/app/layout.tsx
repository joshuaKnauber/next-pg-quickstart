import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import Providers from "@/ui/Providers";

export const metadata: Metadata = {
  title: "Paperstack",
  description: "Paperstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
