import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import "./globals.css";

const pingAr = localFont({
  src: [
    {
      path: "../../Ping.Font.Tlwen.com/PingAR+LT-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../Ping.Font.Tlwen.com/PingAR+LT-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Ping.Font.Tlwen.com/PingAR+LT-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Ping.Font.Tlwen.com/PingAR+LT-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../Ping.Font.Tlwen.com/PingAR+LT-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../Ping.Font.Tlwen.com/PingAR+LT-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ping-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
  robots: site.robots,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${pingAr.variable} bg-bg text-text font-cairo`}>
        {children}
      </body>
    </html>
  );
}
