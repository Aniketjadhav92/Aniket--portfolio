import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import useReveal from "@/hooks/use-reveal";

const ContactSection = () => {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div ref={leftRef} className={`reveal ${leftVisible ? "reveal-visible" : ""} glass-card p-8 space-y-6`}>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>

            <a
              href="mailto:aniketjadhav2492@gmail.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="font-medium text-foreground">aniketjadhav2492@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Aniketjadhav92"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Github className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">GitHub</p>
                <p className="font-medium text-foreground">github.com/Aniketjadhav92</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aniket-jadhav92"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Linkedin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="font-medium text-foreground">linkedin.com/in/aniket-jadhav92</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="font-medium text-foreground">India</p>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            style={{ transitionDelay: "120ms" }}
            className={`reveal ${rightVisible ? "reveal-visible" : ""} glass-card p-8`}
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift glow flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
