import { ImageResponse } from "next/og";

export const alt = "ThreadFlow — Da conversa ao trabalho acompanhado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "radial-gradient(circle at 72% 24%, #173a72 0%, #0e1116 42%, #0b0e13 100%)",
        color: "#f4f7fc",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        padding: "84px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "760px" }}>
        <div
          style={{
            color: "#93baf9",
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          ThreadFlow
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          Toda conversa vira trabalho com endereço.
        </div>
        <div
          style={{
            color: "rgba(232,237,245,.68)",
            display: "flex",
            fontSize: 28,
            marginTop: 34,
          }}
        >
          Google Chat como fonte da verdade. ThreadFlow como camada operacional.
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(145deg, #5865f2, #20c7b5)",
          border: "2px solid rgba(255,255,255,.22)",
          borderRadius: 68,
          boxShadow: "0 30px 80px rgba(47,124,246,.3)",
          display: "flex",
          height: 250,
          justifyContent: "center",
          width: 250,
        }}
      >
        <svg
          width="132"
          height="132"
          viewBox="0 0 132 132"
          aria-hidden="true"
        >
          <circle cx="66" cy="66" r="66" fill="#ffffff" />
          <path
            d="M35 67 56 88 98 43"
            fill="none"
            stroke="#0b1020"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>,
    size,
  );
}
