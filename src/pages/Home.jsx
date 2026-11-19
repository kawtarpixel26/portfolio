import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useLang } from "../LanguageContext";

export default function Home() {
  const { data: { profile } } = useLang();
  useDocumentTitle(`${profile.name} — ${profile.role}`);
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Credentials />
      <Skills />
      <Contact />
    </>
  );
}
