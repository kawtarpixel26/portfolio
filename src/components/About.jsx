import { motion } from "framer-motion";
import { Server, Brain, Boxes, Cpu } from "lucide-react";
import Section, { Reveal } from "./Section";
import { profile, focusAreas } from "../data/portfolio";

const icons = { server: Server, brain: Brain, boxes: Boxes, cpu: Cpu };

const About = () => (
  <Section id="about" index="01" label="About" title="Data, models and the backends that carry them.">
    <Reveal>
      <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">{profile.summary}</p>
    </Reveal>
    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {focusAreas.map((f, i) => {
        const Icon = icons[f.icon] || Server;
        return (
          <Reveal key={f.title} delay={i * 0.06}>
            <motion.article whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220, damping: 26 }} className="surface group h-full p-6 transition-colors duration-300 ease-out hover:border-primary/40">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {f.tools.map((t) => (
                  <li key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        );
      })}
    </div>
  </Section>
);
export default About;
