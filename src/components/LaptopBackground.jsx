import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import useParallax from "@/hooks/use-parallax";

/**
 * Advanced Interactive LaptopBackground
 * Features:
 * - Spring-physics mouse tilt & magnetic depth effect
 * - Cursor-reactive dynamic neon backlight glow
 * - Smooth scroll-driven micro-parallax
 * - High-contrast, vibrant character rendering
 */
const CHARACTER_IMAGE = `${import.meta.env.BASE_URL}coder-character.png`;

const screenBounds = {
  top: "30%",
  left: "16%",
  right: "54%",
  bottom: "49%",
};

const LaptopBackground = () => {
  // 1. Micro-Parallax on Scroll
  const scrollOffset = useParallax(0.05);

  // 2. Mouse Position State for Interactive 3D Parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize values between -0.5 and 0.5
      setMousePos({
        x: e.clientX / innerWidth - 0.5,
        y: e.clientY / innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3. Smooth Spring Physics for Mouse Interaction
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(() => mousePos.y * -12), springConfig);
  const rotateY = useSpring(useTransform(() => mousePos.x * 12), springConfig);
  const glowX = useSpring(useTransform(() => mousePos.x * 60), springConfig);
  const glowY = useSpring(useTransform(() => mousePos.y * 60), springConfig);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 flex items-start justify-center overflow-hidden pointer-events-none z-0 perspective-[1000px]"
    >
      <motion.div
        className="relative w-[85vw] sm:w-[70vw] max-w-[460px] mt-[12vh]"
        style={{
          translateY: scrollOffset,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Dynamic Interactive Backlight (Follows Cursor) */}
        <motion.div
          className="absolute rounded-full blur-3xl bg-cyan-400/30 animate-pulse pointer-events-none"
          style={{
            top: screenBounds.top,
            left: screenBounds.left,
            width: "55%",
            height: "40%",
            x: glowX,
            y: glowY,
          }}
        />

        {/* Ambient Teal Radial Shadow */}
        <div className="absolute inset-0 rounded-full blur-2xl bg-teal-500/10 -z-10" />

        {/* Crisp High-Contrast Character Image */}
        <img
          src={CHARACTER_IMAGE}
          alt=""
          className="w-full h-auto opacity-45 brightness-105 contrast-105 select-none filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          draggable={false}
        />

        {/* 3D Floating Screen Overlay & Typing Effect */}
        <div
          className="absolute rounded-md overflow-hidden laptop-screen-glow border border-cyan-400/20 backdrop-blur-[1px]"
          style={{
            top: screenBounds.top,
            left: screenBounds.left,
            right: screenBounds.right,
            bottom: screenBounds.bottom,
            transform: "translateZ(15px)", // Pushes the screen output forward in 3D space
          }}
        >
          <div className="w-full h-full flex flex-col justify-center gap-[10%] px-[10%] bg-cyan-950/20">
            <span className="laptop-code-line" style={{ animationDelay: "0s" }} />
            <span className="laptop-code-line" style={{ animationDelay: "0.9s" }} />
            <span className="laptop-code-line" style={{ animationDelay: "1.8s" }} />
            <span className="laptop-cursor" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LaptopBackground;