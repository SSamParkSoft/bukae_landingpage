import { existsSync } from "node:fs";
import { join } from "node:path";
import LandingContent from "./LandingContent";

export default function Home() {
  const hasMeaningVideo = existsSync(join(process.cwd(), "public", "bg.mp4"));

  return <LandingContent hasMeaningVideo={hasMeaningVideo} />;
}
