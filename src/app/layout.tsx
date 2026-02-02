import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-suisse",
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "700"],
});

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
      <body className={`antialiased font-janna ${inter.variable} ${dancingScript.variable}`}>
      
        {children}
      </body>
    </html>
  );
}
