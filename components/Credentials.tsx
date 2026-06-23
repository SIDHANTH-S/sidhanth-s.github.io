'use client';
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Award, X, Download } from "lucide-react";
import React, { useState } from "react";

import FramerBook from "./ui/FramerBook";
import DocumentCard from "./ui/DocumentCard";
const DocumentCardTyped = DocumentCard as React.FC<any>;
import { FlipText } from "./ui/TextEffects";


export const Credentials = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<number[]>([]);

  React.useEffect(() => {
    const handleOpenPdf = (e: any) => setSelectedPdf(e.detail);
    document.addEventListener('open-pdf', handleOpenPdf);
    return () => document.removeEventListener('open-pdf', handleOpenPdf);
  }, []);

  const certifications = [
    {
      title: "ServiceNow Certified Application Developer",
      author: "ServiceNow",
      logo: <img src="/SERVICENOWLOGO.svg" alt="ServiceNow" style={{width:"100%",height:"100%",objectFit:"contain"}} />,
      badge: "/CAD.webp",
      innerVideo: "/CAD-gif.webm",
      coverTitle: "ServiceNow CAD",
      coverSubtitle: "Certified Application Developer",
      innerContent: (
        <>
          <p style={{ marginBottom: "8px" }}>A good developer writes code.<br/>A better one deletes the code nobody needs.</p>
          <p>This is where I stopped just configuring systems and started building inside them — apps, logic, and the messy in-between.</p>
        </>
      ),
      pdfName: "CAD_Certificate.pdf",
      pdfLink: "/CAD_Certificate.pdf",

      coverColor: "#0B2E3D",
      backColor: "#0F3D3E"
    },
    {
      title: "ServiceNow Certified System Administrator",
      author: "ServiceNow",
      logo: <img src="/SERVICENOWLOGO.svg" alt="ServiceNow" style={{width:"100%",height:"100%",objectFit:"contain"}} />,
      badge: "/CSA.webp",
      innerVideo: "/CSA-gif.webm",
      coverTitle: "ServiceNow CSA",
      coverSubtitle: "Certified System Administrator",
      innerContent: (
        <>
          <p style={{ marginBottom: "8px" }}>Most people automate tasks.<br/>The interesting challenge is automating chaos.</p>
          <p>This one taught me how enterprise systems actually breathe — workflows, roles, access, all the invisible plumbing nobody notices until it stops working.</p>
        </>
      ),
      pdfName: "CSA.pdf",
      pdfLink: "/CSA.pdf",

      coverColor: "#0B2E3D",
      backColor: "#0F3D3E"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      author: "Oracle",
      // @ts-ignore
      logo: (
        <div id="u38logolink" data-lbl="logo" aria-label="Oracle Home">
          <svg className="u38-oicn" width="136" height="18" viewBox="0 0 231 30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid">
            <path fill="#C74634" d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" transform="translate(-0.02 0)"></path>
          </svg>
        </div>
      ),
      // @ts-ignore
      badge: "/ORACLE.webp",
      coverTitle: "Oracle OCI",
      coverSubtitle: "Cloud Infrastructure Foundations",
      innerContent: (
        <>
          <p style={{ marginBottom: "8px" }}>Infrastructure is invisible.<br/>Until it breaks.</p>
          <p>Spent more time understanding what holds everything up than what runs on top of it. Cloud, networking, security — the unglamorous backbone.</p>
        </>
      ),
      pdfName: "Oracle.pdf",
      pdfLink: "/Oracle.pdf",

      coverColor: "#2A2522",
      backColor: "#2A2522",
      badgeScale: 2.2
    },
    {
      title: "INTRODUCTION to CS50",
      author: "Harvard University",
      logo: <img src="/edx-logo-elm.svg" alt="Harvard edX" style={{width:"100%",height:"100%",objectFit:"contain"}} />,
      badge: "/HarvardUniversity.svg",
      coverTitle: "Harvard edX",
      coverSubtitle: "CS50x",
      innerContent: (
        <>
          <p style={{ marginBottom: "8px" }}>The internet made learning free.<br/>Curiosity is still expensive.</p>
          <p>No shortcuts here — just C, Python, algorithms, and a lot of late nights debugging things that should've worked the first time.</p>
        </>
      ),
      pdfName: "Harvard_University.pdf",
      pdfLink: "/Harvard_University.pdf",
      coverColor: "#0A0A0A",
      backColor: "#0A0A0A"
    }
  ];

  return (
    <section id="credentials" className="w-full py-24 md:py-32 bg-paper relative border-t border-white/10">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 mb-12 md:mb-24">
        <div className="flex-1">
          <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink mb-6 uppercase">
            <FlipText text="Credentials" />
          </h2>
          <p className="text-white/70 font-sans text-lg max-w-xl mb-10">
                Verified milestones from my learning, certifications, and engineering journey.
          </p>

          <button className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white flex items-center gap-2">
            View Full Academic Transcript <ExternalLink size={14} />
          </button>
        </div>

        <div className="flex-1 w-full flex justify-center items-center min-h-[400px]">
            <div className="w-full h-[350px] md:h-[500px] flex justify-center items-center cursor-pointer" onClick={() => setSelectedPdf('/Resume.pdf')}>
            <FramerBook 
              title="Resume"
              author="SIDHANTH_S"
              image="/Portrait.webp"
              style={{ width: "100%", height: "100%" }} 
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 justify-items-center">
        {certifications.map((cert, index) => {
          const isVideoLoaded = loadedVideos.includes(index);
          const videoElement = cert.innerVideo ? (
            isVideoLoaded ? (
              <video src={cert.innerVideo} autoPlay loop muted playsInline style={{ height: "100px", width: "auto", margin: "0 auto", borderRadius: "8px", objectFit: "contain", marginBottom: "12px", display: "block" }} />
            ) : (
              <div style={{ height: "100px", width: "100px", margin: "0 auto", borderRadius: "8px", background: "rgba(0,0,0,0.05)", border: "1px dashed rgba(0,0,0,0.2)", marginBottom: "12px" }} />
            )
          ) : undefined;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center relative w-full h-[280px] sm:h-[340px] hover:z-50 cursor-pointer"
              onClick={() => {
                if (!isVideoLoaded && cert.innerVideo) {
                  setLoadedVideos((prev) => [...prev, index]);
                }
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.6] sm:scale-[0.7] lg:scale-[0.6] xl:scale-[0.7] origin-center transition-transform duration-300 hover:scale-[0.65] sm:hover:scale-[0.75] lg:hover:scale-[0.65] xl:hover:scale-[0.75]">
                <div className="block">
                  {/* @ts-ignore - DocumentCard type lacks style prop */}
                  <DocumentCardTyped 
                    layoutId={`cert-card-${index}`} 
                    coverTitle={cert.coverTitle}
                    coverSubtitle={cert.coverSubtitle}
                    coverColor={cert.coverColor} 
                    backColor={cert.backColor} 
                    logo={cert.logo} 
                    badge={cert.badge} 
                    badgeScale={cert.badgeScale}
                    innerVideo={videoElement} 
                    innerContent={cert.innerContent}
                    pdfLink={cert.pdfLink}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPdf(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh] bg-[#111] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col"
            >
              {/* Custom toolbar */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#1a1a1a] border-b border-white/10 shrink-0">
                <span className="text-white/60 text-sm font-medium tracking-wide uppercase">
                  {selectedPdf === '/Resume.pdf' ? 'Resume' : selectedPdf.split('/').pop()?.replace('.pdf', '').replace(/_/g, ' ')}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedPdf}
                    download
                    className="flex items-center gap-2 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors border border-white/10"
                  >
                    <Download size={14} />
                    Download
                  </a>
                  <button 
                    onClick={() => setSelectedPdf(null)} 
                    className="w-9 h-9 bg-white/10 hover:bg-red-500/80 text-white rounded-lg flex items-center justify-center transition-colors border border-white/10"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              {/* PDF viewer - full toolbar from browser */}
              <iframe 
                src={`${selectedPdf}`} 
                className="w-full flex-1 border-none bg-white" 
                title="PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
