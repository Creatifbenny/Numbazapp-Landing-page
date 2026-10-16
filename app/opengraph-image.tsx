import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Share image (1200 x 630). Hex values only: ImageResponse cannot read CSS
// variables. #043135 is the page background, #37F4B4 the mint accent.

export const alt = "Numbaz. Know your Numbaz. Grow your business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public", "brand", "logo-lockup.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#043135",
          paddingTop: 68,
        }}
      >
        {/* The lock-up is 775 x 156 native; shown smaller (640 x 129). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={640} height={129} alt="" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 70,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>Know your&nbsp;</span>
            <span style={{ color: "#37F4B4" }}>Numbaz.</span>
          </div>
          <div style={{ display: "flex" }}>Grow your business.</div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 34,
            fontWeight: 700,
            color: "#37F4B4",
          }}
        >
          Early access open
        </div>
      </div>
    ),
    { ...size },
  );
}
