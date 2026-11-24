import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "../components/BrandIcons";
import { useLang } from "../LanguageContext";
import { getCaseStudy } from "../data/caseStudies";
import { diagramMap } from "../components/diagrams/CaseDiagrams";
import { previews } from "../components/diagrams/Previews";
import { Reveal } from "../components/Section";
import { useDocumentTitle } from "../hooks/useDocumentTitle";


function Block({ id, num, title, children }) {
  return (
    <Reveal as="section" id={id} className="cs-block" aria-labelledby={`${id}-t`}>
      <p className="cs-num mono" aria-hidden="true">{num}</p>
      <div className="cs-main">
        <h2 id={`${id}-t`}>{title}</h2>
        {children}
      </div>
    </Reveal>
  );
}

export default function ProjectPage() {
  const { data: { featuredProjects, otherProjects } } = useLang();
  const allProjects = [...featuredProjects, ...otherProjects].filter((p) => p.caseStudy && getCaseStudy(p.caseStudy));
  const { slug } = useParams();
  const p = allProjects.find((x) => x.caseStudy === slug);
  const c = p && getCaseStudy(slug);
  useDocumentTitle(p ? `${p.title} — case study · Kawtar Imzilne` : "Project not found");
  if (!p || !c) return <Navigate to="/404" replace />;

  const i = allProjects.indexOf(p);
  const prev = allProjects[(i - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(i + 1) % allProjects.length];
  const planned = p.status === "In design";
  const Visual = previews[p.preview];

  const toc = [
    c.overview && ["overview", "Overview"],
    c.problem && ["problem", c.problem.title],
    c.goals && ["goals", "Goals"],
    c.contribution && ["contribution", c.contributionTitle || "My contribution"],
    c.architecture && ["architecture", "Architecture"],
    c.stack && ["stack", "Technology"],
    c.decisions && ["decisions", "Design decisions"],
    c.features && ["features", "Features"],
    c.ml && ["ml", "Machine learning"],
    c.delivery && ["delivery", c.delivery.title || "Testing, CI & monitoring"],
    c.next && ["next", c.next.title],
    c.statusReport && ["status", "Status"],
  ].filter(Boolean);

  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  return (
    <article className="case">
      <header className="case-hero">
        <div className="container max-w-6xl">
          <Link to={{ pathname: "/", hash: "#work" }} className="back-link"><ArrowLeft size={16} /> All projects</Link>
          <div className="case-title-row">
            <p className="mono case-kind">{p.kind || "Project"}</p>
            <span className={`badge ${planned ? "is-planned" : ""}`}>{p.status || "Built"}</span>
          </div>
          <h1>{p.title}</h1>
          {c.tagline && <p className="case-tagline">{c.tagline}</p>}
          <p className="case-summary">{p.summary}</p>
          <div className="case-actions">
            {p.github && <a className="btn btn-primary btn-sm" href={p.github} target="_blank" rel="noreferrer"><Github size={15} /> Source code<span className="visually-hidden"> (opens in a new tab)</span></a>}
            {p.live && <a className="btn btn-ghost btn-sm" href={p.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}
          </div>
          {Visual && <div className="case-visual"><Visual /></div>}
          {c.facts && (
            <dl className="case-facts">
              {c.facts.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}
        </div>
      </header>

      <div className="container case-layout max-w-6xl">
        <nav className="toc" aria-label="On this page">
          <p className="mono toc-title">On this page</p>
          <ol>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}>{label}</a></li>)}</ol>
        </nav>

        <div className="case-body">
          {c.banner && <Reveal className="callout" role="note"><strong>{c.banner.title}</strong> {c.banner.body}</Reveal>}

          {c.overview && <Block id="overview" num={num()} title="Overview">{c.overview.map((t) => <p key={t}>{t}</p>)}</Block>}

          {c.problem && <Block id="problem" num={num()} title={c.problem.title}>{c.problem.paragraphs.map((t) => <p key={t}>{t}</p>)}</Block>}

          {c.goals && (
            <Block id="goals" num={num()} title="Goals and constraints">
              <ul className="ticks">{c.goals.goals.map((g) => <li key={g}>{g}</li>)}</ul>
              {c.goals.nonGoals && (<><h3 className="sub">Not in scope</h3><ul className="ticks is-muted">{c.goals.nonGoals.map((g) => <li key={g}>{g}</li>)}</ul></>)}
            </Block>
          )}

          {c.contribution && (
            <Block id="contribution" num={num()} title={c.contributionTitle || "My contribution"}>
              <ul className="ticks">{c.contribution.map((g) => <li key={g}>{g}</li>)}</ul>
            </Block>
          )}

          {c.architecture && (
            <Block id="architecture" num={num()} title="System architecture">
              <p>{c.architecture.intro}</p>
              {c.architecture.diagrams.map((d) => { const D = diagramMap[d.key]; return D ? <D key={d.key} caption={d.caption} /> : null; })}
            </Block>
          )}

          {c.stack && (
            <Block id="stack" num={num()} title="Technology and what it does here">
              <ul className="stack-list">{c.stack.map((s) => <li key={s.name}><strong className="mono">{s.name}</strong><span>{s.role}</span></li>)}</ul>
            </Block>
          )}

          {c.decisions && (
            <Block id="decisions" num={num()} title="Design decisions">
              <ol className="decisions">
                {c.decisions.map((d, k) => (
                  <li key={d.title}><span className="mono d-i">{String(k + 1).padStart(2, "0")}</span><div><h3>{d.title}</h3><p>{d.body}</p></div></li>
                ))}
              </ol>
            </Block>
          )}

          {c.features && (
            <Block id="features" num={num()} title="What the platform does">
              <ul className="feature-grid">{c.features.map((f) => <li key={f.title}><h3>{f.title}</h3><p>{f.body}</p></li>)}</ul>
            </Block>
          )}

          {c.ml && (
            <Block id="ml" num={num()} title="Machine learning">
              <p>{c.ml.intro}</p>
              <div className="table-wrap" tabIndex={0} role="group" aria-label="ML components">
                <table>
                  <thead><tr><th>Component</th><th>Method</th><th>Evaluated by</th></tr></thead>
                  <tbody>{c.ml.rows.map((r) => <tr key={r[0]}>{r.map((cell, k) => <td key={k}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </Block>
          )}

          {c.delivery && (
            <Block id="delivery" num={num()} title={c.delivery.title || "Testing, CI and monitoring"}>
              <p>{c.delivery.intro}</p>
              {c.delivery.diagram && (() => { const D = diagramMap[c.delivery.diagram.key]; return D ? <D caption={c.delivery.diagram.caption} /> : null; })()}
              {c.delivery.order && <ol className="steps">{c.delivery.order.map((s) => <li key={s}>{s}</li>)}</ol>}
              {c.delivery.items && <dl className="kv">{c.delivery.items.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}</dl>}
            </Block>
          )}

          {c.next && (
            <Block id="next" num={num()} title={c.next.title}>
              <ul className="ticks is-muted">{c.next.items.map((g) => <li key={g}>{g}</li>)}</ul>
            </Block>
          )}

          {c.statusReport && (
            <Block id="status" num={num()} title="Status">
              <p>{c.statusReport.summary}</p>
              {c.statusReport.rows && (
                <ul className="status-list">
                  {c.statusReport.rows.map(([k, v]) => (
                    <li key={k}><span>{k}</span><span className={`badge ${v === "Written" ? "" : "is-planned"}`}>{v}</span></li>
                  ))}
                </ul>
              )}
            </Block>
          )}

          {allProjects.length > 1 && (
            <nav className="case-pager" aria-label="More projects">
              <Link to={`/projects/${prev.caseStudy}`} className="pager-link"><span className="mono">← Previous</span><strong>{prev.title}</strong></Link>
              <Link to={`/projects/${next.caseStudy}`} className="pager-link is-next"><span className="mono">Next →</span><strong>{next.title}</strong></Link>
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
