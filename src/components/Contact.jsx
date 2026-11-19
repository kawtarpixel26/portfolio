import { useState } from "react";
import { Copy, Check, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { Reveal } from "./Section";
import { useLang } from "../LanguageContext";

const Contact = () => {
  const { data: { profile, contactIntro }, ui } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* ignore */ }
  };
  const primaryHref = profile.email ? `mailto:${profile.email}` : profile.links.linkedin;
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-glow opacity-60" />
      <div className="container max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4"><span className="text-primary">06</span><span className="mx-2 opacity-40">/</span>Contact</p>
          <h2 className="text-balance font-display text-5xl font-semibold tracking-[-0.035em] md:text-7xl lg:text-8xl">{ui.contact.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{contactIntro}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
          <a href={primaryHref} target={profile.email ? undefined : "_blank"} rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {profile.email ? profile.email : ui.contact.linkedinMsg}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          {profile.email && (
            <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors duration-300 ease-out hover:bg-secondary">
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              {copied ? ui.contact.copied : ui.contact.copy}
            </button>
          )}
        </Reveal>
        <Reveal delay={0.15} className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 [&>*]:bg-card">
          <div className="p-5"><p className="eyebrow mb-2 flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{ui.contact.basedIn}</p><p className="text-sm">{profile.location}</p></div>
          <div className="p-5"><p className="eyebrow mb-2 flex items-center gap-2"><Mail className="h-3.5 w-3.5" />{ui.contact.studyingAt}</p><p className="text-sm">{profile.school}</p></div>
          {profile.phone && profile.phoneHref && (
            <a href={profile.phoneHref} className="p-5 transition-colors duration-300 ease-out hover:bg-secondary"><p className="eyebrow mb-2 flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{ui.contact.phone}</p><p className="text-sm">{profile.phone}</p></a>
          )}
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="p-5 transition-colors duration-300 ease-out hover:bg-secondary"><p className="eyebrow mb-2 flex items-center gap-2"><Github className="h-3.5 w-3.5" />GitHub</p><p className="text-sm">khaliljabour4</p></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 transition-colors duration-300 ease-out hover:bg-secondary"><p className="eyebrow mb-2 flex items-center gap-2"><Linkedin className="h-3.5 w-3.5" />LinkedIn</p><p className="text-sm">Khalil Jabour</p></a>
        </Reveal>
      </div>
    </section>
  );
};
export default Contact;
