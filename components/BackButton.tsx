'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export function BackButton() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 z-[100]">
      <Link 
        href="/"
        className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors shadow-2xl group"
        aria-label="Back to Home"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
