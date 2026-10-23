import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, BookOpen } from "lucide-react";
import { Github } from "./BrandIcons";
import Section, { Reveal } from "./Section";
import { previews } from "./diagrams/Previews";
import { featuredProjects, otherProjects } from "../data/portfolio";

const statusStyle = (s) =>
  s === "In design" ? "bg-[hsl(var(--warn)/0.12)] text-[hsl(var(--warn))]" : "bg-primary/10 text-primary";

const Btn = ({ href, to, icon: Icon, children, primary }) => {
  const cls = `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-out ${primary ? "bg-foreground text-background hover:opacity-90" : "border border-border hover:bg-secondary"}`;
  return to ? (
    <Link to={to} className={cls}><Icon className="h-4 w-4" />{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}><Icon className="h-4 w-4" />{children}</a>
  );
};

const Featured = ({ p, i }) => {
  const Preview = previews[p.preview];
  return (
    <Reveal>
      <motion.article whileHover="hover" className="surface group relative overflow-hidden">
        <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="pcard-glow pointer-events-none absolute -inset-px bg-glow" />
        <div className="relative">
          {Preview && (
            <div className="grid items-center gap-5 border-b border-border bg-secondary/40 p-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-border bg-card"><Preview /></div>
              <dl className="space-y-1.5 font-mono text-[11px]">
                {p.spec.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-right text-foreground/90">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow"><span className="text-primary">{String(i + 1).padStart(2, "0")}</span> · {p.kind}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle(p.status)}`}>{p.status}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {p.title}
              {p.alias && <span className="ml-2 align-middle font-sans text-xs font-normal text-muted-foreground">({p.alias})</span>}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              {p.outcomes.map((o) => (<li key={o} className="flex gap-3"><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{o}</li>))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (<li key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{s}</li>))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.caseStudy && <Btn primary to={`/projects/${p.caseStudy}`} icon={BookOpen}>Case study</Btn>}
              {p.github && <Btn href={p.github} icon={Github}>GitHub</Btn>}
              {p.live && <Btn href={p.live} icon={ExternalLink}>Live demo</Btn>}
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
};

const Projects = () => (
  <Section id="work" index="03" label="Work" title="Selected projects." intro="Real repositories, described as they are today.">
    <div className="space-y-6">
      {featuredProjects.map((p, i) => (<Featured key={p.title} p={p} i={i} />))}
    </div>
    {otherProjects.length > 0 && (
      <>
        <Reveal><h3 className="eyebrow mb-5 mt-16">More projects</h3></Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {otherProjects.map((p, i) => {
            const Preview = previews[p.preview];
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <motion.article whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220, damping: 26 }} className="surface flex h-full flex-col overflow-hidden transition-colors duration-300 ease-out hover:border-primary/40">
                  {Preview && <div className="border-b border-border bg-secondary/40 p-4"><div className="overflow-hidden rounded-lg border border-border bg-card"><Preview /></div></div>}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-lg font-semibold">{p.title}</h4>
                      {p.metric && (
                        <div className="shrink-0 text-right">
                          <p className="font-display text-2xl font-semibold leading-none text-primary">{p.metric}</p>
                          <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{p.metricLabel}</p>
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (<li key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{s}</li>))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {p.caseStudy && <Btn primary to={`/projects/${p.caseStudy}`} icon={BookOpen}>Case study</Btn>}
                      {p.github && <Btn href={p.github} icon={Github}>GitHub</Btn>}
                      {p.live && <Btn href={p.live} icon={ExternalLink}>Live demo</Btn>}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </>
    )}
  </Section>
);
export default Projects;
