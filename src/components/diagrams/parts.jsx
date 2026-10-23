// Small SVG building blocks shared by every diagram. Colours come from CSS tokens
// (see .dg-* in project.css), so diagrams follow the active theme automatically.
import { useId } from "react";

export function Defs({ id }) {
  return (
    <defs>
      <marker id={`${id}-arr`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M1 1.5 8.5 5 1 8.5" className="dg-arrowhead" fill="none" />
      </marker>
    </defs>
  );
}

export function Node({ x, y, w, h, title, sub, tone = "base", planned = false, small = false }) {
  const cx = x + w / 2;
  return (
    <g className={`dg-node tone-${tone} ${planned ? "is-planned" : ""}`}>
      <rect x={x} y={y} width={w} height={h} rx="9" />
      <text x={cx} y={sub ? y + h / 2 - 3 : y + h / 2 + 4} textAnchor="middle" className={small ? "dg-t dg-t-sm" : "dg-t"}>{title}</text>
      {sub && <text x={cx} y={y + h / 2 + 13} textAnchor="middle" className="dg-sub">{sub}</text>}
    </g>
  );
}

export function Link({ d, id, flow = true, dashed = false }) {
  return <path d={d} className={`dg-link ${flow ? "is-flow" : ""} ${dashed ? "is-dashed" : ""}`} markerEnd={`url(#${id}-arr)`} fill="none" />;
}

export function Label({ x, y, children, anchor = "middle", accent = false }) {
  return <text x={x} y={y} textAnchor={anchor} className={accent ? "dg-label dg-label-accent" : "dg-label"}>{children}</text>;
}

export function Figure({ caption, children, label, minWidth }) {
  return (
    <figure className="diagram">
      <div className="diagram-scroll" tabIndex={0} role="group" aria-label={label}>
        <div style={minWidth ? { minWidth } : undefined}>{children}</div>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function useDiagramId() {
  return "d" + useId().replace(/[^a-z0-9]/gi, "");
}
