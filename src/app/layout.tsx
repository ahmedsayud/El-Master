import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
