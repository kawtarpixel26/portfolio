import { Briefcase, GraduationCap } from "lucide-react";
import Section, { Reveal } from "./Section";
import { useLang } from "../LanguageContext";

// Compact cards in the education-card style, laid out full width under the section title.
const Journey = () => {
  const { data: { journey }, ui } = useLang();
  const cards = (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {journey.map((j, i) => {
        const Icon = j.kind === "work" ? Briefcase : GraduationCap;
        const current = i === 0;
        return (
          <Reveal as="li" key={j.role} delay={i * 0.06}>
            <article className="surface flex h-full flex-col p-5 transition-colors duration-300 ease-out hover:border-primary/40">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-[18px] w-[18px]" /></span>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />{ui.journey.current}
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-muted-foreground">{j.period}</span>
                </div>
              </div>
              <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug">{j.role}</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">{j.company} · {j.location}</p>
              <ul className="mt-4 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {j.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-primary" />{h}</li>
                ))}
              </ul>
              {j.stack?.length > 0 && (
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {j.stack.map((s) => (
                    <li key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{s}</li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        );
      })}
    </ol>
  );
  return <Section id="journey" index="02" label={ui.journey.label} title={ui.journey.title} intro={ui.journey.intro} wide={cards} />;
};
export default Journey;
