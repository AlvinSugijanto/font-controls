import { useState } from "react";
import { FontControls, FontConfig, useFontControls } from "../src";

function App() {
  const { config, setConfig, updateConfig, resetConfig } = useFontControls();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ padding: "40px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
            }}
          >
            Font Controls Demo
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "40px",
            }}
          >
            A beautiful, Leva-inspired font controls library for React. Use the
            panel on the right to customize the text below in real-time.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "40px",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <div style={config}>
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
            background: "#1a1a1a",
            color: "#e0e0e0",
            borderTop: "1px solid #333",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            Current Configuration
          </h3>
          <pre
            style={{
              background: "#2a2a2a",
              padding: "20px",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "14px",
              lineHeight: 1.6,
            }}
          >
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
      </div>

      <FontControls
        value={config}
        onChange={setConfig}
        title="Font Controls"
        draggable={true}
        position={{ x: 20, y: 20 }}
      />
    </div>
  );
}

export default App;
