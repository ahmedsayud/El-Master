import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "المستر - حلول تعليمية",
  description: "شركة المستر لاختبارات قبول الموظفين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className="antialiased font-janna">
        <Header />
        {children}
      </body>
    </html>
  );
}
