import { NextResponse } from "next/server";
import { getFirestoreDb } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { error: "이름과 이메일을 입력해 주세요." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해 주세요." },
        { status: 400 }
      );
    }

    const db = getFirestoreDb();
    if (!db) {
      return NextResponse.json(
        { error: "저장소를 사용할 수 없습니다." },
        { status: 503 }
      );
    }

    await addDoc(collection(db, "preregister"), {
      name,
      email,
      createdAt: new Date().toISOString(),
    });

    if (process.env.RESEND_API_KEY) {
      const from =
        process.env.RESEND_FROM_EMAIL ?? "BUKAE <onboarding@resend.dev>";
      const { data, error } = await resend.emails.send({
        from,
        to: email,
        subject: "[BUKAE] 베타 사전등록이 완료되었습니다",
        html: `
          <p>${name}님, 안녕하세요.</p>
          <p>BUKAE(부캐) 베타 사전등록이 완료되었습니다.</p>
          <p>베타 오픈 시 이메일로 안내해 드리겠습니다.</p>
          <p>— 쌈박한소프트 BUKAE 팀</p>
        `,
      });
      if (error) {
        console.error("Resend 이메일 발송 실패:", error);
      } else {
        console.log("Resend 이메일 발송 성공:", data?.id, "→", email);
      }
    } else {
      console.warn("RESEND_API_KEY 없음 — 이메일 미발송");
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("pre-register error", e);
    return NextResponse.json(
      { error: "처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
