import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const svg = readFileSync(join(process.cwd(), "app/icon.svg"), "utf8");

export default function AppleIcon() {
  return new ImageResponse(
    // biome-ignore lint/performance/noImgElement: ImageResponse renders plain elements, not next/image
    <img
      src={`data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`}
      width={180}
      height={180}
      alt=""
    />,
    size,
  );
}
