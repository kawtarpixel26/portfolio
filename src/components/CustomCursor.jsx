import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { useLang } from "../LanguageContext";

const HOVER = 'a, button, [role="button"], input, textarea, select, summary, .hover-target';

// Dot + trailing ring that is gently pulled toward links and buttons.
// Shown with a mouse; off for touch-only devices or profile.customCursor = false.
const CustomCursor = () => {
  const { data: { profile } } = useLang();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const magnet = useRef(null);

  const ringX = useSpring(0, { damping: 24, stiffness: 120, mass: 0.6 });
  const ringY = useSpring(0, { damping: 24, stiffness: 120, mass: 0.6 });
  const dotX = useSpring(0, { damping: 30, stiffness: 260 });
  const dotY = useSpring(0, { damping: 30, stiffness: 260 });
  const ringScale = useSpring(1, { damping: 22, stiffness: 140 });

  useEffect(() => {
    // Match Angira's behaviour: show on anything with a mouse, hide only on touch-only devices.
    const hasMouse = window.matchMedia("(any-pointer: fine)").matches;
    const touchOnly = "ontouchstart" in window && !hasMouse;
    if (!profile.customCursor || touchOnly) return;
    setEnabled(true);

    const onMove = (e) => {
      setVisible(true);
      const el = e.target.closest?.(HOVER);
      if (el) {
        const r = el.getBoundingClientRect();
        magnet.current = { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
        setHovering(true);
        ringScale.set(1.5);
      } else {
        magnet.current = null;
        setHovering(false);
        ringScale.set(1);
      }
      const m = magnet.current;
      const x = m ? e.clientX + (m.cx - e.clientX) * 0.4 : e.clientX;
      const y = m ? e.clientY + (m.cy - e.clientY) * 0.4 : e.clientY;
      dotX.set(x); dotY.set(y); ringX.set(x); ringY.set(y);
    };
    const down = () => { setClicking(true); ringScale.set(0.8); };
    const up = () => { setClicking(false); ringScale.set(magnet.current ? 1.5 : 1); };
    const leave = () => { setVisible(false); setHovering(false); magnet.current = null; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.documentElement.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [dotX, dotY, ringX, ringY, ringScale]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999]" style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }} aria-hidden="true">
        <motion.div
          className="rounded-full border-primary/80"
          style={{ scale: ringScale, borderStyle: "solid" }}
          animate={{ width: hovering ? 56 : 40, height: hovering ? 56 : 40, opacity: visible ? (hovering ? 1 : 0.6) : 0, borderWidth: hovering ? 2 : 1.5 }}
          transition={{ width: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }, height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }, borderWidth: { duration: 0.3 }, opacity: { duration: 0.3 } }}
        />
      </motion.div>

      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999]" style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }} aria-hidden="true">
        <motion.div className="rounded-full bg-primary" animate={{ width: clicking ? 12 : hovering ? 10 : 6, height: clicking ? 12 : hovering ? 10 : 6, opacity: visible ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />
      </motion.div>

      <AnimatePresence>
        {hovering && (
          <motion.div className="pointer-events-none fixed left-0 top-0 z-[9998]" style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.15, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true">
            <div className="h-20 w-20 rounded-full bg-primary blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media (any-pointer: fine) { .has-custom-cursor, .has-custom-cursor * { cursor: none !important; } .has-custom-cursor input, .has-custom-cursor textarea { cursor: text !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
