import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress known Unframer warnings about custom props leaking to DOM
const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("React does not recognize the `%s` prop")
  ) {
    const ignored = new Set([
      "parentSize",
      "providedWindow",
      "parentsize",
      "providedwindow",
      "__withFX",
      "__withfx",
      "__smartComponentFX",
      "__targetOpacity",
      "__perspectiveFX",
      "__fromCanvasComponent",
    ]);
    if (ignored.has(args[1])) return;
  }
  originalConsoleError(...args);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
