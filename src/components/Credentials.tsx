import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Award, X, Download } from "lucide-react";
import React, { useState } from "react";

import FramerBook from "./ui/FramerBook.tsx";
import { FlipText } from "./ui/TextEffects";

export const Credentials = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const certifications = [
    {
      title: "ServiceNow Certified System Administrator",
      author: "ServiceNow",
      logo: "/SERVICENOWLOGO.svg",
      badge: "/CSA.png",
      pdf: "/CSA.pdf"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      author: "Oracle",
      // @ts-ignore
      logo: (
        <a id="u38logolink" href="https://www.oracle.com/" data-lbl="logo" aria-label="Oracle Home" target="_blank" rel="noopener noreferrer">
          <svg className="u38-oicn" width="136" height="18" viewBox="0 0 231 30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid">
            <path fill="#C74634" d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" transform="translate(-0.02 0)"></path>
          </svg>
        </a>
      ),
      // @ts-ignore
      badge: "/ORACLE.png",
      pdf: "/Oracle.pdf"
    },
    {
      title: "INTRODUCTION to CS50",
      author: "Harvard University",
      logo: "/edx-logo-elm.svg",
      badge: "/HarvardUniversity.svg",
      pdf: "/Harvard_University.pdf"
    }
  ];

  return (
    <section id="credentials" className="w-full py-32 bg-paper relative border-t border-white/10">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 mb-24">
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
            <div className="w-full h-[500px] flex justify-center items-center cursor-pointer" onClick={() => setSelectedPdf('/Resume.pdf')}>
            <FramerBook 
              title="Resume"
              author="SIDHANTH_S"
              image="/Potrait.jpg"
              style={{ width: "100%", height: "100%" }} 
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-[220px] h-[335px]">
              <div onClick={() => setSelectedPdf(cert.pdf)} className="block w-full h-full cursor-pointer">
                <FramerBook 
                  title={cert.title} 
                  author={cert.author} 
                  // @ts-ignore
                  logo={cert.logo}
                  // @ts-ignore
                  badge={cert.badge}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
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
