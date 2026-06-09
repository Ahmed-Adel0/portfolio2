import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أحمد النحاس — مهندس برمجيات ومحلل أنظمة",
  description: "أحول متطلبات الأعمال إلى أنظمة ومنتجات رقمية قابلة للنمو",
  keywords: [
    "مهندس برمجيات",
    "محلل أنظمة",
    "Next.js",
    "البرمجة",
    "تطوير الويب",
  ],
  authors: [{ name: "أحمد النحاس" }],
  robots: "index, follow",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&family=DM+Mono:wght@300;400;500&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-cairo">{children}</body>
    </html>
  );
}
