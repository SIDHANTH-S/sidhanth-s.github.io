'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Copy,
  Check,
} from 'lucide-react';
import { RollingText } from "./ui/TextEffects";

/** Organic, lifelike specs-free Boy 1 Vector Character with slight tilted head, periodic auto-blink and cursor-interaction right-eye winking */
const FramerCharacter = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // High variability blinking intervals matching physical human eyes
  useEffect(() => {
    let nextBlinkTimeout: NodeJS.Timeout;

    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        const delay = 3000 + Math.random() * 5000;
        nextBlinkTimeout = setTimeout(triggerBlink, delay);
      }, 140); // Natural visual blink transient (100ms-150ms)
    };

    nextBlinkTimeout = setTimeout(triggerBlink, 4000);

    return () => {
      clearTimeout(nextBlinkTimeout);
    };
  }, []);

  const shouldCloseRightEye = isBlinking;

  return (
    <svg 
      width="185" 
      height="198" 
      viewBox="0 0 184.764 197.894" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="text-white hover:scale-105 transition-transform duration-500 ease-out cursor-pointer select-none"
      style={{ overflow: 'visible' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="boy-character-svg"
    >
      <g>
        {/* Hair and Silhouette Base Outline */}
        <path 
          d="M 4.533 78.553 C 3.733 92.553 17.866 105.72 25.033 110.553 C 68.366 121.553 156.133 142.753 160.533 139.553 C 166.033 135.553 171.533 120.053 182.033 91.553 C 192.533 63.053 170.033 38.053 160.533 29.553 C 151.033 21.053 100.033 1.053 83.533 0.053 C 70.333 -0.747 63.366 7.72 61.533 12.053 C 23.533 15.553 5.533 61.053 4.533 78.553 Z" 
          fill="#1a1a24" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
          strokeMiterlimit="10" 
        />
        {/* Left Ear */}
        <path 
          d="M 26.357 123.936 C 29.018 114.054 28.939 97.114 20.952 94.936 C 9.952 91.936 -2.548 104.936 0.452 118.436 C 2.852 129.236 15.619 131.603 22.452 130.936 C 23.959 130.388 25.352 127.664 26.357 123.936 Z" 
          fill="#ffffff" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
        />
        <path 
          d="M 9.952 110.936 C 12.389 115.269 19.081 123.936 26.357 123.936" 
          fill="none" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        {/* Right Ear */}
        <path 
          d="M 158.974 127.507 C 161.14 124.34 166.418 119.29 170.974 119.507 C 181.474 120.007 183.64 129.507 181.974 136.507 C 179.474 147.007 172.974 157.507 156.474 156.007 C 150.074 150.007 155.474 134.507 158.974 127.507 Z" 
          fill="#ffffff" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
        />
        <path 
          d="M 172.974 134.007 C 168.974 135.674 160.374 140.307 157.974 145.507" 
          fill="none" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        {/* Face Canvas Skin */}
        <path 
          d="M 20.201 99.487 C 22.421 80.487 56.368 38.654 70.201 27.987 C 77.201 25.487 81.701 32.987 80.701 41.987 C 79.701 50.987 73.201 71.987 85.201 89.987 C 100.534 112.987 152.749 110.987 157.701 118.987 C 161.106 124.487 157.701 186.987 129.201 193.987 C 71.701 208.11 29.606 180.487 22.701 165.987 C 17.701 155.487 16.403 131.987 20.201 99.487 Z" 
          fill="#ffffff" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
          strokeMiterlimit="10" 
        />
        {/* Left Standard Eye (Always Open) */}
        <path 
          d="M 46.686 115 C 46.686 118.314 44.447 120 41.686 120 C 38.925 120 35.686 118 36.686 114 C 37.686 110 40.425 108 43.186 108 C 45.947 108 47.186 111 46.686 115 Z" 
          fill="#0c0c0e" 
        />
        {/* Top Hair Lock Accent */}
        <path 
          d="M 62.151 65 C 70.151 52.6 70.818 34.833 70.151 27.5 L 81.151 20.5 C 83.484 24.167 88.651 44.6 76.651 55 C 64.651 65.4 68.151 79.833 73.151 91 C 66.151 87.5 54.151 77.4 62.151 65 Z" 
          fill="#0c0c0e" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeMiterlimit="10" 
        />
        {/* Smiling Mouth line */}
        <path 
          d="M 66.5 169.5 C 73.167 171.5 89 171 101 168" 
          fill="none" 
          stroke="#0c0c0e" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeMiterlimit="10" 
        />
        {/* Left Eyebrow */}
        <path 
          d="M 44.031 92.908 C 41.055 92.042 37.111 90.352 37.531 88.908 C 37.951 87.464 40.383 86.239 45.457 87.573 C 50.531 88.908 52.404 90.408 51.531 93.408 C 50.803 95.908 47.547 94.215 44.031 92.908 Z" 
          fill="#0c0c0e" 
        />
        {/* Right Eyebrow */}
        <motion.path 
          d="M 111.306 119.085 C 117.24 118.228 125.832 116.487 126.092 118.281 C 126.515 121.214 122.745 122.84 112.728 124.454 C 102.711 126.068 97.353 123.869 97.019 121.556 C 96.57 118.45 104.097 119.796 111.306 119.085 Z" 
          fill="#0c0c0e" 
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        {/* Right Eye (Blinking/Interactive) */}
        <motion.g
          animate={{ scaleY: shouldCloseRightEye ? 0.08 : 1 }}
          transition={{ duration: 0.15, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: "108.5px 123.5px" }}
        >
          <motion.path 
            animate={{ 
              d: isHovered 
                ? "M 110.755 131.287 C 105.297 128.807 96.281 122.558 97.031 120.908 C 98.257 118.21 103.99 121.084 113.295 125.132 C 122.599 129.179 126.048 131.96 124.489 135.389 C 123.191 138.246 117.208 134.58 110.755 131.287 Z" 
                : "M 103.756 124.885 C 102.832 128.067 104.512 130.311 107.164 131.081 C 109.816 131.85 113.484 130.833 113.638 126.712 C 113.793 122.592 111.721 119.908 109.069 119.138 C 106.417 118.368 104.391 120.904 103.756 124.885 Z"
            }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            fill="#0c0c0e" 
          />
        </motion.g>
      </g>
    </svg>
  );
};

/** Minimal Profile Card - Rendered perfectly in center frame */
export function ProfileCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sidhanthranka@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className="w-full max-w-[340px] mx-auto select-none font-sans"
      id="profile-card-root"
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
        id="profile-card-container"
      >
        {/* Top strip (Time & Availability) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4px 8px 0",
          }}
          id="profile-card-header-strip"
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
              className="font-sans"
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
          id="profile-card-details"
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
            id="profile-avatar-wrapper"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0.32)",
                transformOrigin: "center center",
                overflow: "visible",
              }}
              id="profile-character-scale"
            >
              <FramerCharacter />
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
              className="font-display uppercase tracking-tight"
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
              className="font-sans leading-tight"
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
                className="hover:text-white"
                id="social-github-link"
                aria-label="GitHub Profile"
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
                className="hover:text-white"
                id="social-linkedin-link"
                aria-label="LinkedIn Profile"
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
                className="hover:text-white"
                id="social-resume-link"
                aria-label="Download Resume"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div style={{ display: "flex", gap: 8 }} id="profile-card-actions">
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
            className="hover:bg-zinc-700 cursor-pointer text-sans"
            id="hire-me-action"
            aria-label="Send email to sidhanthranka@gmail.com"
          >
            <Mail size={16} />
            Hire me
          </a>
          <button
            onClick={handleCopyEmail}
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
            className="hover:bg-zinc-600 font-sans"
            id="copy-email-action"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy Email'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 md:py-40 bg-zinc-950 text-white relative">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-950 to-zinc-950 pointer-events-none" />

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
          <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] uppercase mb-6 text-white">
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

        <div className="w-full mt-16 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 font-mono text-[10px] uppercase tracking-widest gap-4">
          <span>&copy; {new Date().getFullYear()} Sidhanth S.</span>
          <span>Built with intent.</span>
        </div>
      </div>
    </section>
  );
};
