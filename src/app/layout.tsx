import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

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
      <body className={`flex h-screen w-screen antialiased`}>
        <SideBar />
        <TopBar />
        <div className="mt-16 ml-64 w-full bg-base-200">{children}</div>
      </body>
    </html>
  );
}
