import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "知你 Zhini",
  description: "温柔陪伴你的深夜私密空间。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
