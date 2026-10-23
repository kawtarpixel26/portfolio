import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section, { Reveal } from "./Section";
import { journey } from "../data/portfolio";

const Journey = () => {
  const [open, setOpen] = useState({ 0: true });
  return (
    <Section id="journey" index="02" label="Journey" title="Where I'm learning and building." intro="Education and milestones, newest first.">
      <ol className="group/list space-y-4">
        {journey.map((j, i) => {
          const isOpen = !!open[i];
          const current = i === 0;
          return (
            <Reveal as="li" key={j.role} delay={i * 0.06} >
              <article className="surface p-6 transition-opacity duration-300 ease-out group-hover/list:opacity-50 hover:!opacity-100 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-snug">{j.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{j.company} · {j.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />Current
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted-foreground">{j.period}</span>
                  </div>
                </div>
                {j.metrics.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {j.metrics.map((m) => (<li key={m} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{m}</li>))}
                  </ul>
                )}
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {(isOpen ? j.highlights : j.highlights.slice(0, 2)).map((h) => (
                    <motion.li key={h} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{h}
                    </motion.li>
                  ))}
                </ul>
                {j.highlights.length > 2 && (
                  <button type="button" onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))} aria-expanded={isOpen} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {isOpen ? "Show less" : `Show ${j.highlights.length - 2} more`}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                )}
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {j.stack.map((s) => (<li key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{s}</li>))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
};
export default Journey;
