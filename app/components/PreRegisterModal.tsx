"use client";

import { useState, useCallback } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function PreRegisterModal({
  open,
  onClose,
  triggerButton,
}: {
  open: boolean;
  onClose: () => void;
  triggerButton: React.ReactNode;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");
      setErrorMessage("");
      try {
        const res = await fetch("/api/pre-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name.trim(), email: email.trim() }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setStatus("error");
          setErrorMessage(data?.error ?? "제출에 실패했습니다.");
          return;
        }
        setStatus("success");
        setName("");
        setEmail("");
      } catch {
        setStatus("error");
        setErrorMessage("네트워크 오류가 발생했습니다.");
      }
    },
    [name, email]
  );

  const handleClose = useCallback(() => {
    onClose();
    setStatus("idle");
    setErrorMessage("");
  }, [onClose]);

  return (
    <>
      {triggerButton}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="preregister-title"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={handleClose}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md rounded-2xl border border-brand/40 bg-[#0a0d0e] p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2
                id="preregister-title"
                className="text-lg font-semibold tracking-[-0.02em] text-slate-50"
              >
                베타 사전등록
              </h2>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-slate-50"
                aria-label="닫기"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            {status === "success" ? (
              <div className="mt-6 space-y-4 text-center">
                <p className="text-sm text-slate-200">
                  사전등록이 완료되었습니다.
                  <br />
                  입력하신 이메일로 안내 메일을 보내드렸습니다.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full bg-brand px-5 py-2 text-sm font-bold tracking-[0.12em] text-slate-950 hover:bg-brand-strong"
                >
                  닫기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="preregister-name"
                    className="min-w-18 shrink-0 text-left text-xs font-medium tracking-[0.08em] text-slate-400"
                  >
                    이름
                  </label>
                  <input
                    id="preregister-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    required
                    disabled={status === "loading"}
                    className="flex-1 rounded-lg border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40 disabled:opacity-60"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="preregister-email"
                    className="min-w-18 shrink-0 text-left text-xs font-medium tracking-[0.08em] text-slate-400"
                  >
                    이메일
                  </label>
                  <input
                    id="preregister-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    disabled={status === "loading"}
                    className="flex-1 rounded-lg border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40 disabled:opacity-60"
                  />
                </div>
                {errorMessage && (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 rounded-full bg-brand px-4 py-2.5 text-sm font-bold tracking-[0.12em] text-slate-950 hover:bg-brand-strong disabled:opacity-60"
                  >
                    {status === "loading" ? "등록 중…" : "등록하기"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function PreRegisterTrigger({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
