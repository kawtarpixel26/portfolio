import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Github, Linkedin } from "./BrandIcons";
import { Reveal } from "./Section";
import { useLang } from "../LanguageContext";

// Pill (or round icon) button with a glowing cyan → violet gradient border.
const GlowLink = ({ href, label, round, external = true, children }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 p-px shadow-[0_0_22px_-6px_rgba(56,189,248,0.55),0_0_22px_-6px_rgba(139,92,246,0.55)] transition-shadow duration-300 hover:shadow-[0_0_30px_-4px_rgba(56,189,248,0.7),0_0_30px_-4px_rgba(139,92,246,0.7)]"
  >
    <span className={`flex items-center justify-center gap-2.5 rounded-full bg-background text-sm font-medium text-foreground transition-colors group-hover:bg-background/80 ${round ? "h-12 w-12" : "h-12 px-6"}`}>
      {children}
    </span>
  </a>
);

const Contact = () => {
  const { data: { profile, contactIntro }, ui } = useLang();
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-glow opacity-60" />
      <div className="container max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4"><span className="text-primary">06</span><span className="mx-2 opacity-40">/</span>Contact</p>
          <h2 className="text-balance font-display text-5xl font-semibold tracking-[-0.035em] md:text-7xl lg:text-8xl">{ui.contact.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{contactIntro}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-4">
          <GlowLink href={profile.links.linkedin} label="LinkedIn" round>
            <Linkedin className="h-5 w-5" />
          </GlowLink>
          {profile.whatsappHref && (
            <GlowLink href={profile.whatsappHref} label={`${ui.contact.whatsapp}: ${profile.whatsapp}`} round>
              <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
            </GlowLink>
          )}
          {profile.email && (
            <GlowLink href={`mailto:${profile.email}`} label={`${ui.contact.email}: ${profile.email}`} external={false} round>
              <Mail className="h-5 w-5 text-primary" />
            </GlowLink>
          )}
        </Reveal>
        <Reveal delay={0.15} className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 [&>*]:bg-card">
          <div className="p-5"><p className="eyebrow mb-2 flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{ui.contact.basedIn}</p><p className="text-sm">{profile.location}</p></div>
          <div className="p-5"><p className="eyebrow mb-2 flex items-center gap-2"><Mail className="h-3.5 w-3.5" />{ui.contact.studyingAt}</p><p className="text-sm">{profile.school}</p></div>
          {profile.phone && profile.phoneHref && (
            <a href={profile.phoneHref} className="p-5 transition-colors duration-300 ease-out hover:bg-secondary"><p className="eyebrow mb-2 flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{ui.contact.phone}</p><p className="text-sm">{profile.phone}</p></a>
          )}
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="p-5 transition-colors duration-300 ease-out hover:bg-secondary"><p className="eyebrow mb-2 flex items-center gap-2"><Github className="h-3.5 w-3.5" />GitHub</p><p className="text-sm">kawtarpixel26</p></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 transition-colors duration-300 ease-out hover:bg-secondary"><p className="eyebrow mb-2 flex items-center gap-2"><Linkedin className="h-3.5 w-3.5" />LinkedIn</p><p className="text-sm">Kawtar Imzilne</p></a>
        </Reveal>
      </div>
    </section>
  );
};
export default Contact;
