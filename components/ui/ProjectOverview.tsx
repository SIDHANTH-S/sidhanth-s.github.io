'use client';
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export function ProjectOverview({
  onOpenCaseStudy,
}: {
  onOpenCaseStudy: () => void;
}) {
  return (
    <div className="flex flex-col items-start justify-center text-left w-full h-full relative z-20">
      <div className="flex items-center gap-4 mb-4 md:mb-8">
        <span className="font-mono text-sm tracking-wider text-neutral-500">
          02
        </span>
        <div className="h-[1px] w-12 bg-neutral-800"></div>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white mb-6 leading-[0.9]">
        CAMPUS
        <br />
        VIDHYA
      </h1>

      <p className="text-base md:text-lg lg:text-xl text-neutral-400 mb-8 max-w-[480px] leading-relaxed">
        Most campuses still depend on WhatsApp groups, paper forms, and
        scattered communication. CampusVidhya replaces that with one connected
        system for approvals, announcements, academic workflows, and every role
        from student to admin.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-12 max-w-[500px]">
        {[
          "REACT",
          "TAILWIND CSS",
          "ROLE-BASED ACCESS",
          "WORKFLOW AUTOMATION",
          "CAMPUS SAAS",
        ].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-[10px] md:text-xs font-mono font-medium tracking-wide border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Impact Card */}
      <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-neutral-800/60 rounded-2xl p-5 md:p-8 mb-10 w-full max-w-[500px] shadow-xl shadow-black/20">
        <div className="text-[10px] md:text-xs font-mono font-medium text-neutral-500 tracking-wider mb-3 uppercase">
          Key Impact
        </div>
        <p className="text-base md:text-lg text-neutral-200 font-medium leading-snug">
          Leading a digital workflow platform for R.M.D. Engineering College,
          connecting students, faculty, staff, and administration through one
          operational system.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenCaseStudy}
          className="group flex items-center justify-center gap-2 bg-white text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 active:scale-95 text-sm md:text-base relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            CASE STUDY
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </button>

        <a
          href="#"
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="#"
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
}
