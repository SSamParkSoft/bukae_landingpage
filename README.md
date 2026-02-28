This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Firebase Storage + Vercel 호스팅

- **호스팅**: Vercel만 사용 (Firebase Hosting 사용 안 함)
- **Firebase**: Storage(저장소)만 사용

**Vercel 배포 시**

1. Vercel 프로젝트 → Settings → Environment Variables 에 아래 변수 추가 (`.env.example` 참고)
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` (Analytics 사용 시)
2. 저장 후 재배포하면 Vercel에서도 Firebase Storage가 동작합니다.

### 사전등록 (이름·이메일 + 발송 이메일)

- **저장**: Firebase **Firestore** 컬렉션 `preregister`에 이름·이메일·등록 시각 저장
- **이메일 발송**: [Resend](https://resend.com)로 가입자에게 안내 메일 자동 발송

**필수 설정**

1. **Firebase Console**  
   - Firestore Database 사용 설정 후, 규칙에서 `preregister` 컬렉션 쓰기 허용 (예: 테스트 모드 또는 인증된 사용자만 쓰기 등)
2. **Resend**  
   - [resend.com](https://resend.com) 가입 후 API 키 발급  
   - `.env.local`에 `RESEND_API_KEY` 추가  
   - (선택) 발신 주소: `RESEND_FROM_EMAIL` (예: `BUKAE <noreply@yourdomain.com>`. 미설정 시 `onboarding@resend.dev` 사용)

Vercel 배포 시에도 위 Firebase 환경 변수와 `RESEND_API_KEY`(, 필요 시 `RESEND_FROM_EMAIL`)를 Environment Variables에 추가하면 됩니다.

**Storage 사용 예시**

```ts
import { getFirebaseStorage } from "@/app/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getFirebaseStorage();
if (storage) {
  const fileRef = ref(storage, "경로/파일명");
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
}
```
