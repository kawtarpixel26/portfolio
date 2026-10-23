import { Award, ArrowUpRight, GraduationCap } from "lucide-react";
import Section, { Reveal } from "./Section";
import { certifications, education } from "../data/portfolio";

const Credentials = () => (
  <Section id="credentials" index="04" label="Credentials" title="Certifications & education.">
    {(certifications.length > 0 || import.meta.env.DEV) && (
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="surface group flex h-full flex-col p-6 transition-colors hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Award className="h-5 w-5" /></span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              {c.code && <p className="mt-3 font-mono text-[11px] text-muted-foreground">{c.code}</p>}
            </a>
          </Reveal>
        ))}
        {certifications.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground sm:col-span-2">
            Dev preview only: add certificates to <code className="font-mono">certifications</code> in <code className="font-mono">src/data/portfolio.js</code>. This box is hidden in the production build.
          </div>
        )}
      </div>
    )}
    <Reveal className={certifications.length > 0 || import.meta.env.DEV ? "mt-6" : ""}>
      <article className="surface p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><GraduationCap className="h-5 w-5" /></span>
            <div>
              <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{education.specialisation} · {education.school}</p>
            </div>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {education.points.map((p) => (<li key={p} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{p}</li>))}
        </ul>
      </article>
    </Reveal>
  </Section>
);
export default Credentials;
