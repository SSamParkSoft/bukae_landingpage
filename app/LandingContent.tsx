"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "레퍼런스 입력",
    detail:
      "레퍼런스 URL과 목표 지표(조회수, 전환 등)를 입력하면, AI가 수십 개의 숏폼을 비교해 어떤 후킹-전개-전환 구조가 먹히는지 요약해 줍니다.",
  },
  {
    step: "02",
    title: "스크립트·컷 설계",
    detail:
      "검출된 패턴을 기반으로 브랜드 톤에 맞는 스크립트와 씬 리스트를 자동으로 생성하고, 컷 단위로 어떤 미장센과 메시지가 들어가야 하는지까지 정리합니다.",
  },
  {
    step: "03",
    title: "제작 실행",
    detail:
      "촬영 현장 체크리스트와 컷 편집 가이드를 제공해, 누구나 같은 구조로 촬영·편집할 수 있고 결과물을 빠르게 A/B 테스트할 수 있습니다.",
  },
];

export default function LandingContent({
  hasMeaningVideo,
}: {
  hasMeaningVideo: boolean;
}) {
  return (
    <main className="mx-auto max-w-[1440px] space-y-24 pb-28 lg:space-y-32 lg:pb-40">
      {/* Hero */}
      <motion.section
        className="mx-auto max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <header className="flex w-full items-center justify-between">
          <a href="#" className="inline-flex items-center">
            <Image
              src="/Logo.svg"
              alt="BUKAE 로고"
              width={176}
              height={24}
              priority
              className="h-auto w-28 max-w-[42vw] sm:w-36 sm:max-w-[40vw] md:w-40 lg:w-[176px] lg:max-w-none"
            />
          </a>
          <a
            href="#pre-register"
            className="hidden rounded-full border border-brand/60 bg-brand/15 px-4 py-1.5 text-[0.78rem] font-bold tracking-[0.12em] text-brand-strong shadow-[0_6px_14px_rgba(94,135,144,0.32)] hover:bg-brand-strong hover:text-slate-950 hover:shadow-[0_8px_18px_rgba(94,135,144,0.45)] sm:inline-flex"
          >
            사전등록하기
          </a>
        </header>

        <div className="mt-6 overflow-hidden rounded-2xl sm:mt-7">
          <div className="relative flex min-h-[200px] w-full justify-center sm:min-h-[280px] lg:min-h-[360px]">
            <Image
              src="/main-hero-demo.png"
              alt="Bukae 워크플로 데모 화면"
              width={3840}
              height={2432}
              priority
              className="h-auto max-h-[80vh] w-full object-contain object-center"
            />
            <div
              className="hero-overlay-pulse pointer-events-none absolute inset-0 bg-black"
              aria-hidden
            />
          </div>
        </div>
      </motion.section>

      {/* Hero → Problem scroll indicator */}
      <motion.div
        className="-mt-16 mb-16 flex justify-center sm:-mt-14 sm:mb-20"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <a
          href="#problem"
          className="hero-scroll-indicator inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-6xl text-brand hover:bg-black/70"
          aria-label="다음 섹션으로 이동"
        >
          ⌵
        </a>
      </motion.div>

      {/* Problem / Comparison */}
      <motion.section
        id="problem"
        className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="grid gap-1 text-left">
          <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand">
            PROBLEM
          </p>
          <h2 className="max-w-[40rem] text-lg font-semibold leading-snug tracking-[-0.03em] text-slate-50 sm:text-xl lg:text-2xl">
            숏폼이 안 터지는 이유: 감으로 따라 하면 구조가 무너집니다
          </h2>
          <p className="mt-3 max-w-[56rem] text-sm leading-relaxed text-slate-300/85 sm:text-[0.98rem] lg:text-base">
            레퍼런스를 수백 번 봐도 후킹-전개-전환-CTA의 본질적인 구조를 파악하지 못하면, 영상은 루즈해지고
            시청자는 3초 만에 이탈합니다.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* 기존의 눈대중 카피 */}
          <article className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-red-500/45 bg-[rgba(20,7,10,0.96)] px-5 py-6 text-left shadow-[0_18px_36px_rgba(0,0,0,0.4)] sm:min-h-[280px] sm:px-6 sm:py-7 lg:min-h-[300px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-red-400/70 bg-red-500/10 px-3 py-1 text-[0.78rem] font-semibold tracking-[0.12em] text-red-200">
                  현재 방식
                </span>
                <span className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-red-300/85">
                  RISK
                </span>
              </div>

              <h3 className="text-[1.02rem] font-semibold tracking-[-0.02em] text-red-100 sm:text-[1.08rem]">
                기존의 눈대중 카피
              </h3>

              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-100/90 sm:text-[0.95rem] lg:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-400/70 text-[0.7rem] font-semibold text-red-200">
                    ✕
                  </span>
                  <p>화려한 효과만 따라하다가 핵심 메시지가 빠져나가고, 브랜딩과 전환 모두 애매해집니다.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-400/70 text-[0.7rem] font-semibold text-red-200">
                    ✕
                  </span>
                  <p>촬영장에 가서도 무엇을 어떤 컷으로 담아야 할지 애매해, 현장에서 계속 애드리브로 대응합니다.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-400/70 text-[0.7rem] font-semibold text-red-200">
                    ✕
                  </span>
                  <p>편집 단계에서 컷 타이밍을 감으로 잡다 보니, 한 편 편집에 수 시간씩 소요됩니다.</p>
                </li>
              </ul>
            </div>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-red-400/60 via-red-400/0 to-transparent" />
          </article>

          {/* 부캐의 구조 기반 설계 */}
          <article className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-brand/40 bg-linear-to-b from-[#050505] via-[#040404] to-black px-5 py-6 text-left text-slate-50 shadow-[0_18px_36px_rgba(0,0,0,0.4)] sm:min-h-[280px] sm:px-6 sm:py-7 lg:min-h-[300px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-brand/60 bg-brand/15 px-3 py-1 text-[0.78rem] font-semibold tracking-[0.12em] text-brand-strong">
                  BUKAE 방식
                </span>
                <span className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-brand-strong/90">
                  SOLUTION
                </span>
              </div>

              <h3 className="text-[1.02rem] font-semibold tracking-[-0.02em] text-[rgba(244,252,251,0.98)] sm:text-[1.08rem]">
                부캐의 구조 기반 설계
              </h3>

              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[rgba(213,232,235,0.94)] sm:text-[0.95rem] lg:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-brand/60 bg-brand/15 text-[0.7rem] font-semibold text-brand-strong">
                    ✓
                  </span>
                  <p>대본부터 타임라인까지, 후킹–전개–전환–CTA가 끊어지지 않도록 구조를 먼저 설계합니다.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-brand/60 bg-brand/15 text-[0.7rem] font-semibold text-brand-strong">
                    ✓
                  </span>
                  <p>컷리스트에 맞춰 필요한 장면만 빠르게 촬영해, 같은 콘셉트의 영상을 일괄 생산할 수 있습니다.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-brand/60 bg-brand/15 text-[0.7rem] font-semibold text-brand-strong">
                    ✓
                  </span>
                  <p>편집 설계도에 맞춰 컷을 기계적으로 정리해, 10분 이내에 같은 구조의 버전을 여러 개 뽑아냅니다.</p>
                </li>
              </ul>
            </div>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-brand/60 via-brand/0 to-transparent" />
          </article>
        </div>
      </motion.section>

      {/* Workflow */}
      <motion.section
        id="workflow"
        className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="grid gap-1 text-left">
          <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand">
            WORKFLOW
          </p>
          <h2 className="max-w-[40rem] text-lg font-semibold leading-snug tracking-[-0.02em] text-[rgba(241,249,248,0.96)] sm:text-xl lg:text-2xl">
            콘텐츠 제작 과정을 구조 중심으로 3단계로 나눴습니다
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {workflow.map((item) => (
            <article
              key={item.step}
              className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-brand/35 bg-linear-to-b from-[#050505] via-[#040404] to-black px-5 py-6 text-slate-50 shadow-[0_18px_36px_rgba(0,0,0,0.35)] sm:min-h-[280px] sm:px-6 sm:py-7 lg:min-h-[300px]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-brand/60 bg-brand/15 px-3 py-1 text-[0.8rem] font-semibold tracking-[0.12em] text-brand-strong">
                    STEP {item.step}
                  </span>
                  <span className="text-3xl font-semibold tracking-[-0.08em] text-brand/45 sm:text-4xl">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-[1.1rem] font-semibold leading-snug tracking-[-0.018em] text-[rgba(244,252,251,0.98)] lg:text-[1.25rem]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[rgba(200,217,220,0.9)] sm:text-[0.95rem] lg:text-base">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-brand/40 via-brand/0 to-transparent" />
            </article>
          ))}
        </div>
      </motion.section>

      {/* Meaning / BG Video */}
      <motion.section
        className="relative left-1/2 w-screen -translate-x-1/2 min-h-[180px] overflow-hidden sm:min-h-[220px] lg:min-h-[280px] xl:min-h-[360px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {hasMeaningVideo ? (
          <video
            className="absolute inset-0 h-full w-full bg-linear-to-b from-[#020405] to-[#04080a] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 h-full w-full bg-linear-to-b from-[#020405] to-[#04080a]"
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/70 to-black/90" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-10 text-center sm:px-6 lg:px-10">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.16em] text-brand sm:text-sm">BUKAE</p>
            <h2 className="text-lg font-medium leading-snug sm:text-2xl lg:text-3xl">
              Business Utility Knowledge AI Editing
            </h2>
            <p className="mx-auto mt-2 max-w-[36ch] text-sm leading-relaxed text-slate-200/80 sm:max-w-[32ch] sm:text-[0.98rem] lg:max-w-[36ch] lg:text-base">
              당신의 비즈니스 성과로 연결되는 콘텐츠 제작 운영을 위해 설계된 워크플로 시스템
            </p>
          </div>
        </div>
      </motion.section>

      {/* Pre-register CTA */}
      <motion.section
        id="pre-register"
        className="mx-auto mt-16 w-full max-w-[1200px] px-4 text-center sm:mt-20 sm:px-6 lg:mt-24 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-brand sm:text-[0.78rem]">
          BETA PRE-REGISTER
        </p>
        <h2 className="mt-2 text-lg font-medium tracking-[-0.02em] text-slate-50 sm:text-xl lg:text-2xl">
          구조 기반 숏폼 자동화 워크플로를 가장 먼저 경험해 보세요.
        </h2>
        <p className="mx-auto mt-3 max-w-[40rem] text-sm leading-relaxed text-slate-300/85 sm:text-[0.95rem]">
          간단한 팀/프로덕트 정보를 남겨 주시면, 베타 오픈 소식과 함께 혜택을 안내드립니다.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="mailto:ssamso8282@gmail.com?subject=BUKAE%20베타%20사전등록&body=팀명/업종과 현재 숏폼 운영 상황을 간단히 적어 주세요."
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold tracking-[0.12em] text-slate-950 hover:bg-brand-strong"
          >
            사전등록하기
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="mx-auto mt-10 w-full max-w-[1200px] border-t border-white/10 px-4 pt-6 text-center text-xs text-slate-400 sm:px-6 sm:pt-7 sm:text-[0.8rem] lg:px-8 lg:pt-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="space-y-2 sm:space-y-2.5">
          <p className="text-[0.8rem] text-slate-300/90 sm:text-[0.85rem]">
            <span className="mr-2 font-semibold tracking-[0.16em] text-brand sm:text-xs">
              쌈박한소프트
            </span>
            <span className="mr-1 italic text-slate-400">Contact</span>
            <a
              href="mailto:ssamso8282@gmail.com"
              className="font-medium text-slate-100 underline-offset-2 hover:text-brand-strong hover:underline"
            >
              ssamso8282@gmail.com
            </a>
          </p>
          <p className="text-[0.75rem] text-slate-500 sm:text-[0.78rem]">
            © {new Date().getFullYear()} 쌈박한소프트. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </main>
  );
}
