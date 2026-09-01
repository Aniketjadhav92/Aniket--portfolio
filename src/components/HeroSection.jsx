import { useEffect, useState } from "react";
import {
  ChevronRight,
  Download,
  Mail,
  FolderGit2,
  Terminal,
  Copy,
  Check,
  Sparkles,
  Layers,
  ArrowDown,
} from "lucide-react";

const roles = [
  "Full-Stack Software Developer",
  "Java & Spring Boot Engineer",
  "MERN Stack Specialist",
  "AI Integration Developer",
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          fullText.substring(
            0,
            isDeleting ? currentText.length - 1 : currentText.length + 1
          )
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const copyCode = () => {
    setCopied(true);
    navigator.clipboard.writeText(
      `const developer = { name: 'Aniket Jadhav', stack: ['Java', 'Spring Boot', 'React', 'Node.js'] };`
    );
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-transparent text-white flex items-center justify-center relative overflow-hidden px-6 md:px-16 pt-24 pb-12"
    >
      {/* Background Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean Content & CTA Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 min-h-[120px] sm:min-h-[140px] flex items-center">
            <span>
              {currentText}
              <span className="inline-block w-1.5 h-10 ml-1.5 bg-purple-500 animate-pulse align-middle" />
            </span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mb-8">
            Building enterprise web applications, robust REST APIs, and AI integrations using{" "}
            <span className="text-slate-200 font-medium">Java, Spring Boot, React</span>, and the{" "}
            <span className="text-slate-200 font-medium">MERN stack</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg text-xs transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.35)] flex items-center gap-2 hover:scale-105"
            >
              <Mail size={14} />
              Get in Touch
            </a>

            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="px-5 py-2.5 border border-slate-800 hover:border-purple-500/50 bg-slate-900/60 text-slate-200 font-medium rounded-lg text-xs transition-all duration-300 flex items-center gap-2 hover:bg-slate-800/80"
            >
              <FolderGit2 size={14} />
              View Projects
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Aniket jadhav Resume.pdf`}
              download="Aniket jadhav Resume.pdf"
              className="group px-5 py-2.5 border border-purple-500/40 bg-purple-950/20 text-purple-300 font-medium rounded-lg text-xs transition-all duration-300 flex items-center gap-2 hover:bg-purple-900/30"
            >
              <Download size={14} className="group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>

          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="inline-flex items-center gap-1 text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors group cursor-pointer"
          >
            About me
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* RIGHT COLUMN: Professional Glassmorphic Code Visual */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4">
            {/* Ambient Lighting Orbs */}
            <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse" />
            <div className="absolute w-60 h-60 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Main IDE Container */}
            <div className="relative w-full rounded-2xl border border-purple-500/30 bg-slate-950/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal size={13} className="text-purple-400" />
                    developer.config.ts
                  </span>
                </div>

                <button
                  onClick={copyCode}
                  className="text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-slate-800 transition-colors"
                  title="Copy Code"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div className="flex gap-4">
                  <div className="select-none text-slate-600 text-right flex flex-col font-mono text-xs">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                    <span>07</span>
                  </div>

                  <div className="flex-1 space-y-1">
                    <p>
                      <span className="text-purple-400 font-semibold">const</span>{" "}
                      <span className="text-blue-400">developer</span>{" "}
                      <span className="text-slate-400">=</span> &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-300 font-medium">'Aniket Jadhav'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-emerald-300 font-medium">'Full-Stack Developer'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">primaryStack:</span> [
                      <span className="text-amber-300">'Java'</span>,{" "}
                      <span className="text-amber-300">'Spring Boot'</span>,{" "}
                      <span className="text-amber-300">'React'</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">status:</span>{" "}
                      <span className="text-cyan-300 font-medium">'Available for Roles'</span>
                    </p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-slate-500 text-xs italic">
                      // Ready to engineer scalable applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Card 1: App Component Floating Preview */}
            <div className="absolute -bottom-2 -left-2 sm:-left-4 w-60 sm:w-64 rounded-xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-xl p-3 shadow-2xl z-20 hover:border-cyan-400/60 transition-all duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  App.tsx
                </div>
                <span className="text-[10px] font-mono text-slate-500">React 18</span>
              </div>
              <div className="font-mono text-[11px] text-slate-300 space-y-1">
                <p className="text-purple-400">export default <span className="text-blue-400">function</span> <span className="text-amber-300">App</span>() &#123;</p>
                <p className="pl-3 text-slate-400">return &lt;<span className="text-cyan-400">FullStackApplication</span> /&gt;;</p>
                <p>&#125;</p>
              </div>
            </div>

            {/* Sub-Card 2: Architecture Badge */}
            <div className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl border border-purple-500/30 bg-slate-900/90 backdrop-blur-xl shadow-2xl z-20 flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                <Layers size={16} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Architecture</p>
                <p className="text-xs font-bold text-white">Full-Stack &amp; Microservices</p>
              </div>
            </div>

            {/* Central Badge */}
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center border-2 border-slate-950 shadow-[0_0_25px_rgba(168,85,247,0.5)] z-30">
              <Sparkles size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Indicators */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[10px] text-slate-500">
        <span className="text-white font-bold">00</span>
        <span className="hover:text-purple-400 transition-colors cursor-pointer">01</span>
        <span className="hover:text-purple-400 transition-colors cursor-pointer">02</span>
        <span className="hover:text-purple-400 transition-colors cursor-pointer">03</span>
      </div>

      <a
        href="#about"
        onClick={(e) => handleScroll(e, "about")}
        className="hidden lg:flex items-center gap-2 absolute right-8 bottom-8 text-slate-500 hover:text-purple-400 transition-colors text-xs tracking-widest uppercase origin-right -rotate-90 cursor-pointer"
      >
        <ArrowDown size={14} className="rotate-90" />
        <span>Scroll Down</span>
      </a>
    </section>
  );
};

export default HeroSection;