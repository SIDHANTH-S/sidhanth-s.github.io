'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/certifications", label: "Certifications" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-paper/80 backdrop-blur-md border-b border-white/5"
    >
      <Link href="/" className="font-display font-bold text-xl text-white tracking-tighter">
        SIDHANTH S
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-mono tracking-widest uppercase transition-colors ${
                isActive ? "text-white font-bold" : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden">
        {/* Mobile menu toggle would go here. For now, keep it simple or implement later. */}
      </div>
    </motion.nav>
  );
}
