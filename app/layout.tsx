import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BUKAE | 숏폼 자동화 솔루션, 부캐",
    template: "%s | BUKAE",
  },
  description:
    "BUKAE(부캐)는 크리에이터와 마케터를 위해 숏폼 레퍼런스를 구조 단위로 분석하고, 스크립트·촬영·편집 워크플로를 자동화해 주는 구조 기반 숏폼 자동화 솔루션입니다.",
  keywords: [
    "BUKAE",
    "부캐",
    "부케",
    "숏폼",
    "숏폼 자동화",
    "쇼츠",
    "릴스",
    "틱톡",
    "레퍼런스 분석",
    "스크립트 자동 생성",
    "콘텐츠 워크플로",
    "마케팅 콘텐츠",
    "크리에이터",
    "크리에이터 도구",
    "크리에이터 솔루션",
    "크리에이터 플랫폼",
    "크리에이터 플랫폼",
    "1인 비즈니스",
    "1인 비즈니스 도구",
    "1인 비즈니스 솔루션",
    "1인 비즈니스 플랫폼",
    "1인 비즈니스 플랫폼",
    "유튜버",
    "유튜버 도구",
    "유튜버 솔루션",
    "유튜버 플랫폼",
    "유튜버 플랫폼",
    "자동화",
    "자동화 솔루션",
    "자동화 플랫폼",
  ],
  openGraph: {
    title: "BUKAE | 구조 기반 숏폼 자동화 솔루션",
    description:
      "후킹–전개–전환–CTA 구조를 분석해 스크립트와 촬영·편집 플로우를 자동으로 제안하는 구조 기반 숏폼 자동화 솔루션입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "BUKAE",
    images: [
      {
        url: "/main-hero-demo.png",
        width: 1200,
        height: 630,
        alt: "BUKAE 숏폼 자동화 워크플로 데모 화면",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUKAE | 구조 기반 숏폼 자동화 솔루션",
    description:
      "숏폼 레퍼런스를 구조 단위로 분석하고, 스크립트·촬영·편집 워크플로를 한 번에 설계하는 BUKAE.",
    images: ["/main-hero-demo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BUKAE",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "숏폼 레퍼런스를 구조 단위로 분석하고, 스크립트·촬영·편집 워크플로를 자동화해 주는 구조 기반 숏폼 자동화 솔루션.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
              creator: {
                "@type": "Organization",
                name: "쌈박한소프트",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-linear-to-b from-[#050505] via-[#020202] to-black text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
