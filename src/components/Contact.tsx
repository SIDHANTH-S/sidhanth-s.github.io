import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Clock,
  Copy,
} from "lucide-react";
// @ts-ignore
import FramerCharacter from "./ui/FramerCharacter";
import { RollingText } from "./ui/TextEffects";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sidhanthranka@gmail.com",
    sublabel: "sidhanth@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sidhanth-s",
    sublabel: "linkedin.com/in/sidhanth-s",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SIDHANTH-S",
    sublabel: "github.com/SIDHANTH-S",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/Resume.pdf",
    sublabel: "Download PDF",
  },
];

/** Framer-style Minimal Profile Card */
const ProfileCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15, duration: 0.5 }}
    className="w-full max-w-[340px] mx-auto"
  >
    <div
      style={{
        backgroundColor: "rgb(33, 33, 33)",
        borderRadius: 32,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 0.77px 0.77px -0.47px, rgba(0, 0, 0, 0.18) 0px 1.83px 1.83px -0.94px, rgba(0, 0, 0, 0.18) 0px 3.34px 3.34px -1.41px, rgba(0, 0, 0, 0.17) 0px 5.55px 5.55px -1.88px, rgba(0, 0, 0, 0.16) 0px 8.97px 8.97px -2.34px, rgba(0, 0, 0, 0.15) 0px 14.68px 14.68px -2.81px, rgba(0, 0, 0, 0.12) 0px 25.28px 25.28px -3.28px, rgba(0, 0, 0, 0.06) 0px 46px 46px -3.75px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: 16,
        gap: 12,
      }}
    >
      {/* Top strip (Time & Availability) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 8px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(138, 207, 48)",
              boxShadow: "0 0 8px rgba(138, 207, 48, 0.5)",
            }}
          />
          <span
            style={{
              color: "rgb(153, 230, 53)",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Available for work
          </span>
        </div>
      </div>

      {/* Main Info Area (Rectangular) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: 24,
          backgroundColor: "#1e1e1e",
          overflow: "hidden",
          padding: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Avatar — Framer Character (Interactive) */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "2px solid rgba(255,255,255,0.1)",
            position: "relative",
            flexShrink: 0,
            overflow: "visible",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0.32)",
              transformOrigin: "center center",
              overflow: "visible",
              // pointerEvents: "none" removed to enable hover interactions on the character!
            }}
          >
            {/* @ts-ignore */}
            <FramerCharacter variant="Boy 1" />
          </div>
        </div>

        {/* Text & Social Icons */}
        <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
          <div
            style={{
              color: "rgb(250, 250, 250)",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            SIDHANTH S
          </div>
          <div
            style={{
              color: "rgba(250, 250, 250, 0.6)",
              fontSize: 13,
              fontWeight: 400,
              marginTop: 2,
            }}
          >
            Always building. Open to opportunities.
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <a
              href="https://github.com/SIDHANTH-S"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sidhanth-s"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              <Linkedin size={18} />
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              <FileText size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div style={{ display: "flex", gap: 8 }}>
        <a
          href="mailto:sidhanthranka@gmail.com"
          style={{
            flex: 1,
            backgroundColor: "rgb(69, 69, 69)",
            borderRadius: 18,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "rgb(250, 250, 250)",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px 0.79px 0.79px -0.87px, rgba(0, 0, 0, 0.16) 0px 2.41px 2.41px -1.75px, rgba(0, 0, 0, 0.14) 0px 6.38px 6.38px -2.62px, rgba(0, 0, 0, 0.08) 0px 20px 20px -3.5px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(80, 80, 80)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(69, 69, 69)")
          }
        >
          <Mail size={16} />
          Hire me
        </a>
        <button
          onClick={() =>
            navigator.clipboard.writeText("sidhanthranka@gmail.com")
          }
          style={{
            flex: 1,
            backgroundColor: "rgb(46, 46, 46)",
            borderRadius: 18,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "rgb(250, 250, 250)",
            fontSize: 14,
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px 0.79px 0.79px -0.87px, rgba(0, 0, 0, 0.16) 0px 2.41px 2.41px -1.75px, rgba(0, 0, 0, 0.14) 0px 6.38px 6.38px -2.62px, rgba(0, 0, 0, 0.08) 0px 20px 20px -3.5px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(60, 60, 60)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(46, 46, 46)")
          }
        >
          <Copy size={16} />
          Copy Email
        </button>
      </div>
    </div>
  </motion.div>
);

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-40 bg-paper text-ink relative">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-paper to-paper pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 block">
            010 / End of Portfolio
          </span>
          <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] uppercase mb-6 text-ink">
            <RollingText text="Let's build " />
            <span className="text-white/40 italic font-serif font-normal lowercase">
              something useful.
            </span>
          </h2>

          <p className="text-white/60 font-sans text-lg max-w-2xl mx-auto mb-10">
            Open to internships, collaborations, hackathons, AI projects, and
            full-stack product work.
          </p>

          {/* Minimal Profile Card */}
          <ProfileCard />
        </motion.div>

        <div className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-white/40 font-mono text-[10px] uppercase tracking-widest gap-4">
          <span>&copy; {new Date().getFullYear()} Sidhanth S.</span>
          <span>Designed &amp; Built with React &amp; Tailwind</span>
        </div>
      </div>
    </section>
  );
};
