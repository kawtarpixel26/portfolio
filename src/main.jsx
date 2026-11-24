import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/silkscreen/400.css";
import "./index.css";
import "./styles/project.css";
import App from "./App.jsx";
import { LanguageProvider } from "./LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
      {/* Vercel Speed Insights: only collects data when the site is deployed on Vercel */}
      <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>
);
