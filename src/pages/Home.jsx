import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { profile } from "../data/portfolio";

export default function Home() {
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
