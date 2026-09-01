import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";
import { techIcons } from "./TechIcons";
import useReveal from "@/hooks/use-reveal";
import { LayoutGrid, PieChart as PieChartIcon } from "lucide-react";

// Technical Competency Matrix Data for Radar Chart
const domainCompetency = [
  { subject: "Languages", score: 85 },
  { subject: "Frontend", score: 85 },
  { subject: "Backend", score: 80 },
  { subject: "Databases", score: 80 },
  { subject: "DevOps & Tools", score: 75 },
  { subject: "Security", score: 80 },
];

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Core Java", percentage: 85 },
      { name: "JavaScript (ES6+)", percentage: 80 },
      { name: "SQL", percentage: 80 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", percentage: 85 },
      { name: "Next.js", percentage: 75 },
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 85 },
      { name: "Responsive Design", percentage: 90 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Spring Boot", percentage: 80 },
      { name: "Node.js", percentage: 80 },
      { name: "REST APIs", percentage: 85 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", percentage: 85 },
      { name: "MongoDB", percentage: 80 },
      { name: "Firebase", percentage: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", percentage: 65 },
      { name: "Git / GitHub", percentage: 85 },
      { name: "Postman", percentage: 85 },
    ],
  },
  {
    category: "Security",
    skills: [
      { name: "JWT", percentage: 80 },
      { name: "Role-Based Authorization", percentage: 80 },
      { name: "End-to-End Encryption", percentage: 75 },
    ],
  },
];

const SkillItem = ({ name, percentage, delay }) => {
  const [width, setWidth] = useState(0);
  const iconKey = name.split(" ")[0].replace(".", "");
  const IconComponent = techIcons[name] || techIcons[iconKey];
  const [ref, visible] = useReveal();

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay, visible]);

  return (
    <div ref={ref} className="space-y-1.5 group/item">
      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          {IconComponent && (
            <div className="w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:rotate-6">
              <IconComponent className="w-full h-full" />
            </div>
          )}
          <span className="font-medium text-slate-200 transition-colors duration-300 group-hover/item:text-cyan-300">
            {name}
          </span>
        </div>
        <span className="font-mono text-cyan-400 font-semibold text-[11px] group-hover/item:text-white transition-colors">
          {percentage}%
        </span>
      </div>
      <div className="h-2 bg-slate-950/80 rounded-full overflow-hidden border border-slate-800/80 p-0.5 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(34,211,238,0.6)] relative"
          style={{ width: `${width}%` }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/50 blur-[1px] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// 3D Interactive Card Container
const Interactive3DCard = ({ children, className = "" }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotate({ x: -(y / 15), y: x / 15 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const SkillsSection = () => {
  const [headerRef, headerVisible] = useReveal();
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("chart"); // 'chart' or 'grid'

  const categoriesList = ["all", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient Dynamic Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 reveal ${headerVisible ? "reveal-visible" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Architectural expertise, domain analytics, and tech stack mastery
          </p>
        </div>

        {/* Optimized & Centered Control Bar */}
        <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto mb-12">
          {/* Top Row: View Mode Switcher */}
          <div className="inline-flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-xl border border-cyan-500/20 shadow-lg backdrop-blur-md">
            <button
              onClick={() => setViewMode("chart")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                viewMode === "chart"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <PieChartIcon size={15} />
              Radar Matrix
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <LayoutGrid size={15} />
              Skills Grid
            </button>
          </div>

          {/* Bottom Row: Centered Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 px-2">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-300 border ${
                  activeTab === cat
                    ? "bg-cyan-950/80 text-cyan-300 border-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                    : "bg-slate-950/40 text-slate-400 border-slate-800 hover:border-cyan-500/30 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* VIEW 1: 3D RADAR CHART */}
        {viewMode === "chart" && (
          <Interactive3DCard className="max-w-3xl mx-auto mb-12">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-cyan-400/30 bg-slate-950/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              <span className="text-xs uppercase font-mono tracking-widest text-cyan-400/90 mb-2 px-3.5 py-1 bg-cyan-950/60 rounded-full border border-cyan-400/20 shadow-sm">
                Domain Competency Matrix
              </span>

              <div className="w-full h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={domainCompetency}>
                    <defs>
                      <linearGradient id="radarGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.7} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.25} />
                      </linearGradient>
                    </defs>
                    <PolarGrid stroke="rgba(255, 255, 255, 0.12)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#cbd5e1", fontSize: 12, fontWeight: 600 }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Proficiency"
                      dataKey="score"
                      stroke="#22d3ee"
                      strokeWidth={2.5}
                      fill="url(#radarGlow)"
                      dot={{ r: 4, fill: "#06b6d4", stroke: "#ffffff", strokeWidth: 2 }}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-slate-900/90 border border-cyan-400/40 px-3.5 py-2 rounded-lg text-xs shadow-2xl backdrop-blur-md">
                              <p className="text-cyan-300 font-semibold tracking-wide">
                                {payload[0].payload.subject}:{" "}
                                <span className="text-white">{payload[0].value}%</span>
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Interactive3DCard>
        )}

        {/* VIEW 2: CATEGORIZED 3D GLASS CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-stage">
          {filteredCategories.map((cat, catIdx) => (
            <Interactive3DCard key={cat.category}>
              <div className="glass-card p-6 rounded-2xl border border-border/80 bg-slate-950/40 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 shadow-lg flex flex-col justify-between h-full group">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-5 pb-2.5 border-b border-border/40 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    {cat.category}
                  </h3>

                  <div className="space-y-4">
                    {cat.skills.map((skill, skillIdx) => (
                      <SkillItem
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={(catIdx * 3 + skillIdx) * 60}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Interactive3DCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;