import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const ease = [0.22, 1, 0.36, 1];

// Fades and lifts into view once.
export const Reveal = ({ children, delay = 0, className, as = "div", ...rest }) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Two-column section: label + title on the left, content on the right (scrolls together).
// `wide` renders full width underneath both columns.
const Section = ({ id, index, label, title, intro, aside, children, wide, className }) => (
  <section id={id} className={cn("relative py-16 md:py-24", className)}>
    <div className="container grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
      <Reveal className="self-start lg:col-span-4">
        <p className="eyebrow mb-4">
          <span className="text-primary">{index}</span>
          <span className="mx-2 opacity-40">/</span>
          {label}
        </p>
        <h2 className="text-balance font-display text-3xl font-semibold md:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-xs text-pretty text-[15px] leading-relaxed text-muted-foreground">{intro}</p>}
        {aside}
      </Reveal>
      {children && <div className="min-w-0 lg:col-span-8">{children}</div>}
      {wide && <div className="min-w-0 lg:col-span-12">{wide}</div>}
    </div>
  </section>
);

export default Section;
