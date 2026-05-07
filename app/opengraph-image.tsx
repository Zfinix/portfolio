import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Chizi Ogbonda";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, color: "#6b7280", letterSpacing: "0.01em" }}>
          Chizi Ogbonda
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 32, color: "#6b7280", lineHeight: 1 }}>
            I&apos;m
          </div>
          <div
            style={{
              fontSize: 240,
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              display: "flex",
            }}
          >
            <span>Chizi</span>
            <span style={{ color: "#d1d5db" }}>.</span>
          </div>
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#374151",
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          I build AI tools and the apps that put them in front of people.
        </div>
      </div>
    ),
    { ...size },
  );
}
