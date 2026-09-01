import { Award, BadgeCheck, Calendar, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";
import useReveal from "@/hooks/use-reveal";

// ---------------------------------------------------------------------------
// Updated with Aniket Jadhav's official certifications data
// ---------------------------------------------------------------------------
const certifications = [
  {
    title: "Innovating with Google Cloud AI",
    issuer: "Simplilearn",
    date: "Aug 2026",
    credentialId: "ID: 10644692",
    credential: "https://www.simplilearn.com/", // Add direct credential link if available
    skills: ["Google Cloud Platform", "Generative AI", "Artificial Intelligence"],
  },
  {
    title: "Prompt Engineering with GitHub Copilot",
    issuer: "Simplilearn",
    date: "Aug 2026",
    credentialId: "ID: 10644469",
    credential: "https://www.simplilearn.com/", 
    skills: ["Prompt Engineering", "GitHub Copilot", "AI Development"],
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Simplilearn",
    date: "Aug 2026",
    credentialId: "ID: 10616306",
    credential: "https://www.simplilearn.com/",
    skills: ["Cloud Computing", "Cloud Native Architecture", "DevOps"],
  },
  {
    title: "Cloud Computing & Model Development",
    issuer: "Swap Tech Infra",
    date: "Apr 2026",
    credentialId: "ID: 862221877",
    credential: null,
    skills: ["Cloud Architecture", "Model Development", "Machine Learning"],
  },
  {
    title: "AI and Employability Skills",
    issuer: "Magic Bus India Foundation (Infosys)",
    date: "2025",
    credentialId: "MAGICBUS-AI-2025",
    credential: null,
    skills: ["Artificial Intelligence", "Soft Skills", "Employability"],
  },
  {
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    date: "Nov 2025",
    credentialId: "ID: 52FEED30DB53",
    credential: "https://www.hackerrank.com/certificates/iframe/52feed30db53",
    skills: ["Core Java", "Data Structures", "Problem Solving"],
  },
  {
    title: "Full Stack Java Developer",
    issuer: "Symbiosis & Capgemini",
    date: "2025",
    credentialId: "SYM-CAPG-JAVA-2025",
    credential: null,
    skills: ["Java", "Spring Boot", "SQL", "REST APIs"],
  },
  // ... existing certifications
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "In Progress",
    credentialId: null,
    credential: null,
    skills: ["AWS", "Lambda", "Cloud Native"],
    isUpcoming: true,
  },
  {
    title: "Advanced System Design & Microservices",
    issuer: "Upcoming Certification",
    date: "Coming Soon",
    credentialId: null,
    credential: null,
    skills: ["System Design", "Microservices", "Scalability"],
    isUpcoming: true,
  },
];

const CertificationCard = ({ cert, index }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal-3d ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <TiltCard className="glass-card overflow-hidden rounded-xl border border-border h-full">
        <div className="relative p-6 flex flex-col h-full z-10">
          {/* Icon + Verified badge */}
          <div className="flex items-start justify-between mb-5">
            <div className="relative shimmer-sweep w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center">
              <Award className="text-primary" size={26} />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
              <BadgeCheck size={14} className="pulse-ring rounded-full" />
              Verified
            </div>
          </div>

          {/* Title & issuer */}
          <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-primary line-clamp-2">
            {cert.title}
          </h3>
          <p className="text-primary/90 text-sm font-medium mb-3">{cert.issuer}</p>

          {/* Date & Credential ID */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Calendar size={14} />
            <span>{cert.date}</span>
            {cert.credentialId && (
              <>
                <span className="text-border">•</span>
                <span className="truncate">{cert.credentialId}</span>
              </>
            )}
          </div>

         {/* Skill tags */}
<div className="flex flex-wrap gap-2 mb-6 flex-1 items-start">
  {cert.skills.map((skill) => (
    <span
      key={skill}
      className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-200 shadow-sm transition-all duration-300 hover:border-cyan-400/60 hover:text-white"
    >
      {skill}
    </span>
  ))}
</div>

          {/* Verify link */}
          <div className="pt-4 border-t border-border mt-auto">
            {cert.credential ? (
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
              >
                Verify Credential
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                Credential on request
              </span>
            )}
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

const CertificationsSection = () => {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? "reveal-visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications <span className="gradient-text">&amp; Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validated knowledge in Full-Stack Development, Cloud Computing, and AI Integration
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-stage">
          {certifications.map((cert, index) => (
            <CertificationCard cert={cert} index={index} key={cert.credentialId || cert.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;