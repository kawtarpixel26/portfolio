import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import VideoBackdrop from "../components/VideoBackdrop";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useLang } from "../LanguageContext";

export default function Home() {
  const { data: { profile } } = useLang();
  useDocumentTitle(`${profile.name} — ${profile.role}`);
  return (
    <>
      <Hero />
      <VideoBackdrop src={`${import.meta.env.BASE_URL}sections-bg.mp4`}>
        <About />
        <Journey />
        <Projects />
      </VideoBackdrop>
      <Credentials />
      <Contact />
    </>
  );
}
