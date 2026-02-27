import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUKAE | 숏폼 자동화 솔루션",
  description: "크리에이터를 위한 숏폼 자동화 솔루션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/spoqa-han-sans@3.3.0/css/SpoqaHanSansNeo.css"
        />
      </head>
      <body className="min-h-screen bg-linear-to-b from-[#050505] via-[#020202] to-black text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
