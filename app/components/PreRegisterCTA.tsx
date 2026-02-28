"use client";

import { useState } from "react";
import { PreRegisterModal } from "./PreRegisterModal";

const buttonClass =
  "inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-bold tracking-[0.12em] text-slate-950 hover:bg-brand-strong sm:w-auto sm:max-w-none sm:px-7";

export function PreRegisterCTA() {
  const [open, setOpen] = useState(false);
  return (
    <PreRegisterModal
      open={open}
      onClose={() => setOpen(false)}
      triggerButton={
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={buttonClass}
        >
          사전등록하기
        </button>
      }
    />
  );
}
