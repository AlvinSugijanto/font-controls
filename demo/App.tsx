import { useState } from "react";
import { FontControls, FontConfig, useFontControls } from "../src";

function App() {
  const { config, setConfig, updateConfig, resetConfig } = useFontControls();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "hsl(0, 0%, 100%)",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "hsl(0, 0%, 100%)",
          borderRadius: "8px",
          overflow: "hidden",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "hsl(0, 0%, 3.9%)",
              marginBottom: "20px",
            }}
          >
            Font Controls Demo
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "hsl(0, 0%, 45.1%)",
              marginBottom: "40px",
            }}
          >
            A beautiful, Leva-inspired font controls library for React. Use the
            panel on the right to customize the text below in real-time.
          </p>
        </div>

        <div
          style={{
            background: "hsl(0, 0%, 98%)",
            padding: "40px",
            border: "1px solid hsl(0, 0%, 89.8%)",
          }}
        >
          <div style={{ ...config, color: config.color || "hsl(0, 0%, 3.9%)" }}>
            <h2
              style={{
                marginBottom: "20px",
                fontSize: "inherit",
                fontWeight: "inherit",
              }}
            >
              The Quick Brown Fox Jumps Over The Lazy Dog
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayed.
              The arrangement of type involves selecting typefaces, point sizes,
              line lengths, line-spacing, and letter-spacing, and adjusting the
              space between pairs of letters.
            </p>
            <p>
              Good typography establishes a strong visual hierarchy, provides a
              graphic balance to the website, and sets the product's overall
              tone. Typography should guide and inform your users, optimize
              readability and accessibility, and ensure an excellent user
              experience.
            </p>
          </div>
        </div>

        <div
          style={{
            padding: "40px",
            background: "hsl(0, 0%, 96.1%)",
            color: "hsl(0, 0%, 3.9%)",
            borderBottom: "1px solid hsl(0, 0%, 89.8%)",
            borderLeft: "1px solid hsl(0, 0%, 89.8%)",
            borderRight: "1px solid hsl(0, 0%, 89.8%)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "16px",
              color: "hsl(0, 0%, 3.9%)",
            }}
          >
            Current Configuration
          </h3>
          <pre
            style={{
              background: "hsl(0, 0%, 100%)",
              padding: "20px",
              borderRadius: "6px",
              border: "1px solid hsl(0, 0%, 89.8%)",
              overflow: "auto",
              fontSize: "14px",
              lineHeight: 1.6,
            }}
          >
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
      </div>

      <FontControls value={config} onChange={setConfig} />
    </div>
  );
}

export default App;
