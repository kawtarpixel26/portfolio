import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <ScrollManager />
      <Navbar />
      <motion.main key={pathname} id="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
      <Footer />
    </MotionConfig>
  );
}
