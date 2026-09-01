import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Search,
  X,
  CheckCircle2,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "InternHub - AI Internship Management System",
    description:
      "AI-powered Internship Management System using Next.js, React.js, Node.js, MongoDB, JWT, Tailwind CSS, Google Gemini AI, and Jitsi Meet API. Role-based authentication, REST APIs, AI chatbot, task management, attendance tracking, and responsive Admin/Intern dashboards.",
    longDescription:
      "InternHub is an enterprise-grade platform designed to automate internship workflows. Features end-to-end role-based security, real-time video conferencing using Jitsi Meet, and AI-driven performance summaries via Google Gemini.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "Gemini AI"],
    category: "Full Stack",
    status: "Live Production",
    image: "/Screenshot 2026-08-06 120634.png",
    github: "https://github.com/Aniketjadhav92/internship-management-system",
    demo: "https://internship-management-system-snowy.vercel.app",
    highlights: [
      "Role-based JWT access control (Admin / Intern)",
      "Google Gemini AI for auto-generated task reports",
      "Jitsi Meet API integration for live interviews",
    ],
  },
  {
    title: "DevHub: Github Clone",
    description:
      "A GitHub clone built with modern web technologies, featuring repository management, issue tracking, and pull request functionality with JWT authentication.",
    longDescription:
      "Replicates GitHub's core developer ecosystem. Users can create public/private repositories, open issue threads, manage profile statistics, and interact with a responsive code viewer.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    category: "Full Stack",
    status: "Live Production",
    image: "/Screenshot 2026-08-06 120743.png",
    github: "https://github.com/Aniketjadhav92/github-clone-frontend",
    demo: "https://devhub-github.netlify.app/login",
    highlights: [
      "Repository CRUD operations & file uploads",
      "Issue tracking & discussion threads",
      "Token-based user session persistence",
    ],
  },
  {
    title: "Insurance Management System",
    description:
      "A comprehensive web platform for managing vehicle and life insurance policies, client records, claims processing, and policy renewals with role-based access.",
    longDescription:
      "Designed for insurance agencies to streamline policy tracking, automated claim verifications, and agent performance reports with relational MySQL data modeling.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    category: "Web Apps",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Aniketjadhav92/Insurance-management-system",
    demo: null,
    highlights: [
      "Relational MySQL schema design for policy records",
      "Agent and customer portal separation",
      "Automated claim status updates",
    ],
  },
  {
    title: "Parivahan - Transport Management",
    description:
      "A transport and vehicle management portal for managing vehicle registrations, permit applications, driver records, and tax payment tracking.",
    longDescription:
      "A digitized public transport infrastructure system facilitating vehicle license applications, road tax tracking, and automated driver record lookup.",
    tech: ["Node.js", "React", "MongoDB", "Tailwind CSS"],
    category: "Web Apps",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Aniketjadhav92/parivahan--clean",
    demo: null,
    highlights: [
      "Digital permit application workflow",
      "Driver history & tax record lookup",
      "Responsive fleet management dashboard",
    ],
  },
  {
    title: "Restaurant Management & Ordering",
    description:
      "A full-stack restaurant platform featuring interactive digital menus, table reservation booking, online food ordering, and real-time order tracking.",
    longDescription:
      "Digital dining application with online table booking, dynamic order cart creation, kitchen management views, and client reservation receipts.",
    tech: ["React", "PHP", "MySQL", "Tailwind CSS"],
    category: "Web Apps",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Aniketjadhav92/Restorent-project",
    demo: null,
    highlights: [
      "Interactive digital menu filtering",
      "Real-time table reservation system",
      "Cart calculation & billing logic",
    ],
  },
  {
    title: "Online Exam Portal",
    description:
      "A secure examination platform featuring timed online tests, randomized question banks, automatic grading, and detailed student performance analytics.",
    longDescription:
      "An automated test evaluation system designed for educational institutions. Randomizes question banks per session and provides real-time anti-cheat countdown timers.",
    tech: ["React", "PHP", "MySQL", "Tailwind CSS", "JWT"],
    category: "Full Stack",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Aniketjadhav92/Examportal",
    demo: null,
    highlights: [
      "Timed test session engine with auto-submit",
      "Randomized question bank generator",
      "Instant result analytics & score cards",
    ],
  },
];

const categories = ["All", "Full Stack", "AI & Data", "Web Apps"];

const ProfessionalProjectCard = ({ project, getImageUrl, onSelect }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      className="relative group rounded-2xl border border-border/80 bg-slate-950/60 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_15px_35px_rgba(6,182,212,0.2)] flex flex-col h-full w-[340px] sm:w-[380px] shrink-0 cursor-pointer"
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Card Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-900 shrink-0">
        <img
          src={getImageUrl(project.image)}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />

        {/* Status Glow Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 backdrop-blur-md z-20">
          <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live Production" ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-cyan-400"}`} />
          {project.status}
        </div>

        {/* Category Badge */}
        <span className="absolute top-3.5 right-3.5 px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full bg-slate-900/90 border border-cyan-400/30 text-cyan-300 backdrop-blur-md shadow-md z-20">
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 relative z-20">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 mb-2.5 line-clamp-1 flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400 shrink-0 ml-2" />
        </h3>

        <p className="text-slate-400 mb-6 leading-relaxed text-xs sm:text-sm flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-cyan-950/50 border border-cyan-400/20 text-cyan-300 transition-all duration-300 hover:border-cyan-400/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800/80 mt-auto flex items-center justify-between gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="text-xs font-semibold text-cyan-400 hover:text-white transition-colors flex items-center gap-1"
          >
            Quick Details &rarr;
          </button>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={13} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const getImageUrl = (imgPath) => {
    if (!imgPath) return "";
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
      return imgPath;
    }
    const cleanPath = imgPath.replace(/^public\//, "").replace(/^\//, "");
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  // Search & Category Filtering
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-400/20 mb-3">
            <Sparkles size={13} /> Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Architectural web platforms, full-stack microservices, and AI integrations
          </p>
        </div>

        {/* Controls: Search Bar + Category Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-10">
          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-slate-950/40 text-slate-400 border-slate-800 hover:border-cyan-400/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Infinite Auto-Scrolling Marquee Track with Hover Pause */}
        <div className="relative w-full overflow-hidden mask-gradient py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-6 w-max"
            >
              {filteredProjects.length > 0 ? (
                <div
                  className="flex gap-6 shrink-0 marquee-track"
                  style={{
                    display: "flex",
                    animationName: "marqueeScroll",
                    animationDuration: `${Math.max(filteredProjects.length * 5, 20)}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                  }}
                >
                  {[...filteredProjects, ...filteredProjects].map((project, index) => (
                    <ProfessionalProjectCard
                      key={`${project.title}-${index}`}
                      project={project}
                      getImageUrl={getImageUrl}
                      onSelect={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500 text-sm w-full">
                  No projects match your search query.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CSS Keyframe Styling */}
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track:hover {
            animation-play-state: paused !important;
          }
          .mask-gradient {
            mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          }
        `}</style>

        {/* Project Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-cyan-400/30 rounded-2xl p-6 md:p-8 max-w-2xl w-full relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Code2 size={14} />
                  <span>{selectedProject.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Highlights Checklist */}
                {selectedProject.highlights && (
                  <div className="mb-6 space-y-2 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                      Key Technical Highlights
                    </h4>
                    {selectedProject.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Modal Footer Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-xl transition-all shadow-lg"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-slate-800 hover:border-cyan-400/50 text-slate-300 hover:text-white font-semibold text-xs rounded-xl transition-all bg-slate-950/40"
                    >
                      <Github size={14} /> Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Footer Callout */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Aniketjadhav92"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-all duration-300 font-medium text-xs"
          >
            <Github size={18} />
            View all 12+ repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;