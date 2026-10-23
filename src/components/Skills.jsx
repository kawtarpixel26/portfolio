import Section, { Reveal } from "./Section";
import { skillGroups } from "../data/portfolio";

const Skills = () => (
  <Section id="toolkit" index="05" label="Toolkit" title="What I work with." intro="Solid chips are used in projects. Dashed chips are chosen for work in progress.">
    <div className="space-y-8">
      {skillGroups.map((g, i) => (
        <Reveal key={g.label} delay={i * 0.04}>
          <h3 className="eyebrow mb-3">{g.label}</h3>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((it) => {
              const name = typeof it === "string" ? it : it.name;
              const planned = typeof it !== "string" && it.planned;
              return (
                <li key={name} title={planned ? "Planned: not built yet" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ease-out hover:border-primary/50 hover:text-foreground ${planned ? "border border-dashed border-border text-muted-foreground" : "border border-border bg-card text-foreground/90"}`}>
                  {name}
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);
export default Skills;
