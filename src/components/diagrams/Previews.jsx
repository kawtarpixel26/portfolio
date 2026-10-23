// Project-specific visuals for the home page cards. These are original
// illustrations of each project's architecture, NOT screenshots.
import { Defs, useDiagramId } from "./parts";

export function ShopEasePreview() {
  const id = useDiagramId();
  const rows = [
    { t: "filters", s: "auth · authorization", tone: "accent" },
    { t: "servlets", s: "HTTP ↔ JSON" },
    { t: "services", s: "business rules" },
    { t: "repositories", s: "JPA / Hibernate" },
    { t: "SQL Server", s: "persistence", tone: "base" },
  ];
  return (
    <svg viewBox="0 0 440 300" className="preview-svg" role="img" aria-label="Layered backend: filters, servlets, services, repositories, database.">
      <Defs id={id} />
      {rows.map((r, i) => (
        <g key={r.t} className={`dg-node tone-${r.tone || "base"}`} style={{ "--i": i }}>
          <rect x={40 + i * 6} y={24 + i * 52} width={300 - i * 12} height="40" rx="8" />
          <text x={58 + i * 6} y={48 + i * 52} className="dg-t dg-t-sm">{r.t}</text>
          <text x={328 + i * -6} y={48 + i * 52} textAnchor="end" className="dg-sub">{r.s}</text>
        </g>
      ))}
      <path d="M190 64 V76 M190 116 V128 M190 168 V180 M190 220 V232" className="dg-link is-flow" markerEnd={`url(#${id}-arr)`} fill="none" />
      <g className="dg-node tone-base">
        <rect x="372" y="24" width="48" height="252" rx="9" />
        <text transform="translate(401 150) rotate(90)" textAnchor="middle" className="dg-sub">entities · JWT · roles</text>
      </g>
    </svg>
  );
}

export function SkillRadarPreview() {
  const blips = [
    { x: 262, y: 92, l: "java" }, { x: 168, y: 150, l: "docker" }, { x: 236, y: 206, l: "kafka" },
    { x: 318, y: 150, l: "sql" }, { x: 130, y: 84, l: "python" },
  ];
  return (
    <svg viewBox="0 0 440 300" className="preview-svg" role="img" aria-label="Radar-style illustration with skill names as blips. Concept art, not data.">
      <g className="radar-rings is-preview">
        {[40, 80, 120, 148].map((r) => <circle key={r} cx="220" cy="150" r={r} />)}
        <line x1="220" y1="2" x2="220" y2="298" /><line x1="72" y1="150" x2="368" y2="150" />
        <g className="radar-sweep" style={{ transformOrigin: "220px 150px" }}><path d="M220 150 L220 2 A148 148 0 0 1 325 45 Z" /></g>
      </g>
      {blips.map((b, i) => (
        <g key={b.l} className="blip" style={{ "--i": i }}>
          <circle cx={b.x} cy={b.y} r="4.5" /><circle cx={b.x} cy={b.y} r="10" className="blip-ring" />
          <text x={b.x + 14} y={b.y + 4} className="dg-sub">{b.l}</text>
        </g>
      ))}
    </svg>
  );
}

export function AcademicPreview() {
  const id = useDiagramId();
  const rows = [["dashboards", "admin · director · professor · student"], ["spring boot api", "jwt · roles"], ["fastapi service", "predict · ask"], ["models + llm", "scikit-learn · ollama"]];
  return (
    <svg viewBox="0 0 440 260" className="preview-svg" role="img" aria-label="Dashboards, Spring Boot API, FastAPI service, models and local LLM.">
      <Defs id={id} />
      {rows.map(([t, s], i) => (
        <g key={t} className={`dg-node tone-${i === 1 ? "accent" : "base"}`}>
          <rect x="30" y={18 + i * 60} width="380" height="44" rx="8" />
          <text x="48" y={45 + i * 60} className="dg-t dg-t-sm">{t}</text>
          <text x="394" y={45 + i * 60} textAnchor="end" className="dg-sub">{s}</text>
        </g>
      ))}
      <path d="M220 62 V78 M220 122 V138 M220 182 V198" className="dg-link is-flow" markerEnd={`url(#${id}-arr)`} fill="none" />
    </svg>
  );
}

export function QueuePreview() {
  return (
    <svg viewBox="0 0 440 260" className="preview-svg" role="img" aria-label="A 16 by 2 LCD showing Now serving and ticket A005.">
      <g className="dg-node tone-base"><rect x="50" y="50" width="340" height="150" rx="12" /></g>
      <rect x="74" y="74" width="292" height="102" rx="6" className="lcd" />
      <text x="92" y="108" className="lcd-t">Now Serving :</text>
      <text x="92" y="150" className="lcd-t lcd-big">A005</text>
      <circle cx="70" cy="217" r="4" className="blip-dot" /><circle cx="86" cy="217" r="4" className="blip-dot" />
    </svg>
  );
}

export const previews = { shopease: ShopEasePreview, skillradar: SkillRadarPreview, academic: AcademicPreview, queue: QueuePreview };
