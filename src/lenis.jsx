import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./lenis.scss"; // CSS dosyanı ekle!

gsap.registerPlugin(ScrollTrigger);

const LenisScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="section">🔥 Bölüm 1</div>
      <div className="section">🔥 Bölüm 2</div>
      <div className="section">🔥 Bölüm 3</div>
    </div>
  );
};

export default LenisScroll;
