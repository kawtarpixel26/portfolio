import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileCode2, FolderOpen, Settings2, SquareTerminal } from "lucide-react";
import Section, { Reveal } from "./Section";
import { useLang } from "../LanguageContext";
import { cn } from "../lib/utils";

const LINES = 12;

const Panel = ({ className, children }) => (
  <div className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-[var(--surface-shadow)]", className)}>{children}</div>
);

const About = () => {
  const { data: { profile, focusAreas }, ui } = useLang();
  const [active, setActive] = useState(0);
  const current = focusAreas[active] || focusAreas[0];
  const others = focusAreas.filter((_, i) => i !== active);

  return (
    <Section id="about" index="01" label={ui.about.label} title={ui.about.title} wide={
      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
          <span>{ui.about.path}</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            <span className="text-primary">{ui.about.status}</span>
          </span>
        </div>

        <div className="mt-3 grid gap-4 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
          {/* File explorer */}
          <Panel className="md:row-span-2">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 text-sm text-muted-foreground">
              <span>{ui.about.files}</span>
              <span className="flex items-center gap-2" aria-hidden="true"><FileCode2 className="h-4 w-4" /><Settings2 className="h-4 w-4" /></span>
            </div>
            <div className="p-3 font-mono text-[13px]">
              <p className="mb-2 flex items-center gap-2 px-2 text-foreground/90"><FolderOpen className="h-4 w-4" />projects/</p>
              <ul role="tablist" aria-orientation="vertical" className="space-y-0.5">
                {focusAreas.map((f, i) => (
                  <li key={f.file}>
                    <button
                      role="tab"
                      aria-selected={i === active}
                      onClick={() => setActive(i)}
                      className={cn("flex w-full items-center gap-2.5 rounded-md px-3 py-1.5 text-left transition-colors", i === active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground")}
                    >
                      {i === active ? <span className="h-2 w-2 shrink-0 rounded-full bg-primary" /> : <span className="h-2 w-2 shrink-0 rounded-sm border border-muted-foreground/40" />}
                      <span className="truncate">{f.file}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          {/* Editor */}
          <Panel>
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 text-sm">
              <span className="whitespace-nowrap text-muted-foreground">{ui.about.content}</span>
              <span className="truncate font-mono text-xs text-muted-foreground">{ui.about.editing}: <span className="text-foreground">{current.file}</span></span>
            </div>
            <div className="flex gap-4 px-4 py-5 font-mono text-[13px] leading-6 md:text-sm">
              <div className="select-none text-right text-muted-foreground/50" aria-hidden="true">
                {Array.from({ length: LINES }, (_, i) => <div key={i}>{String(i + 1).padStart(2, "0")}</div>)}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={current.file} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold leading-6 text-foreground">{current.title}</h3>
                  <p className="mt-6 text-foreground/85">{current.body}</p>
                  <p className="mt-6 text-primary/90">
                    [{current.tools.map((t, i) => <span key={t}>{i > 0 && ", "}<span className="text-foreground/90">[{t}]</span></span>)}]
                  </p>
                  <p className="mt-6 text-muted-foreground">
                    tags = [{(current.tags || current.tools.slice(0, 2)).map((t, i) => <span key={t}>{i > 0 && ", "}<span className="text-primary">'{t}'</span></span>)}]
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Panel>

          {/* Tabs + other files */}
          <Panel>
            <div className="flex items-center justify-between border-b border-border">
              <div className="flex min-w-0 overflow-x-auto font-mono text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {focusAreas.map((f, i) => (
                  <button key={f.file} onClick={() => setActive(i)} className={cn("whitespace-nowrap border-r border-border px-4 py-3 transition-colors", i === active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground")}>
                    {f.file}
                  </button>
                ))}
              </div>
              <SquareTerminal className="mx-4 hidden h-4 w-4 shrink-0 text-muted-foreground sm:block" aria-hidden="true" />
            </div>
            <div className="grid gap-6 p-5 sm:grid-cols-2 xl:grid-cols-3">
              {others.map((f) => (
                <button key={f.file} onClick={() => setActive(focusAreas.indexOf(f))} className="group flex flex-col items-start self-start text-left">
                  <h4 className="font-display text-[15px] font-semibold transition-colors group-hover:text-primary">{f.title}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{f.body}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {f.tools.map((t) => <li key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</li>)}
                  </ul>
                </button>
              ))}
            </div>
          </Panel>
        </div>
      </Reveal>
    }>
      <Reveal>
        <p className="text-pretty text-base leading-relaxed text-foreground/85 md:text-[17px]">{profile.summary}</p>
      </Reveal>
    </Section>
  );
};
export default About;
