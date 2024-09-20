import type { Metadata } from "next";
import Header from "./ui/header"
import "./globals.css";
import { Footer } from "./ui/footer";

export const metadata: Metadata = {
  title: "bellsNest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
