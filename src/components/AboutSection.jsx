import { Code2, Compass, Flame, GraduationCap, Rocket } from "lucide-react";
import useReveal from "@/hooks/use-reveal";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education - MCA",
    body: "Pursuing Master of Computer Applications (MCA) with a focus on enterprise software development, modern web architectures, and cloud technology.",
  },
  {
    icon: GraduationCap,
    title: "Education - BCA",
    body: "Completed Bachelor of Computer Applications (BCA), building core fundamentals in computer science, data structures, and database management.",
  },
  {
    icon: Code2,
    title: "Passion",
    body: "Full-stack development with a love for creating clean, efficient, highly scalable, and user-friendly web applications.",
  },
  {
    icon: Rocket,
    title: "Goal",
    body: "To excel as a full-stack engineer and contribute to impactful software solutions that solve complex real-world problems.",
  },
];

const InfoCard = ({ icon: Icon, title, body, delay }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal-visible" : ""} glass-card p-6 hover-lift flex items-start gap-4 group`}
    >
      <div className="p-3 rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20 shrink-0">
        <Icon className="text-primary" size={24} />
      </div>
      <div>
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [introRef, introVisible] = useReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know a little bit about who I am and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Bio Container */}
          <div
            ref={introRef}
            className={`reveal ${introVisible ? "reveal-visible" : ""} glass-card p-8 hover-lift flex flex-col justify-between h-full`}
          >
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hey there! I'm <span className="text-foreground font-semibold">Aniket</span>, a result-oriented Full-Stack Developer with a strong technical foundation in Java, Spring Boot, and the MERN stack. I specialize in building scalable, secure web applications and AI-powered tools that simplify complex processes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Beyond writing code, my focus is driven by continuous learning, problem-solving, and crafting high-impact digital experiences.
              </p>
            </div>

            {/* Enhanced Interests Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-400/10">
                <Code2 className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Open-Source & Exploration</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    Building personal projects & experimenting with new web frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-400/10">
                <Compass className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Tech & Innovation</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    Keeping up with AI integrations, cloud architecture, & backend patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-400/10">
                <GraduationCap className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Continuous Growth</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    Sharpening Data Structures, Algorithms, and System Design daily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-400/10">
                <Flame className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Product Mindset</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    Turning creative ideas into functional, user-centric software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards Column */}
          <div className="grid gap-6">
            {infoCards.map((card, index) => (
              <InfoCard key={card.title} {...card} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;