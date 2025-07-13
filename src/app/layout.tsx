import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Spell Brigade Guide ",
  description:
    "A guide to The Spell Brigade along with other features such as a tier list maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen w-full antialiased`}>
        <Providers>
          <TopBar>{children}</TopBar>
        </Providers>
      </body>
    </html>
  );
}
