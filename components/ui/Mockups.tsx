'use client';
import { motion } from "motion/react";
import React, { useState } from "react";
import {
  Bot,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  BarChart3,
  TrendingUp,
  FileText,
  AlertCircle,
  Code2,
  GitMerge,
  CheckCircle2,
  LayoutDashboard,
  Activity,
  Database,
  Terminal,
  Send,
  GraduationCap,
  Users,
  Briefcase,
  FileSignature,
  CheckSquare,
  Bell,
  BookOpen,
  GitPullRequest,
  Calendar,
  Clock,
  History,
  Shield,
  AlertTriangle,
  Pin,
  ChevronRight,
  FolderGit2,
  Box,
  Share2,
  Target,
  FileCode,
  Network
} from "lucide-react";
import { cn } from "../../lib/utils";

const WindowFrame = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative w-full aspect-[4/3] rounded-2xl border border-white/20 bg-[#161616] shadow-2xl overflow-hidden flex flex-col will-change-transform",
      className,
    )}
  >
    <div className="h-10 w-full border-b border-white/5 flex items-center px-4 shrink-0 bg-[#222] justify-between">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="text-[10px] text-zinc-400 font-mono tracking-widest hidden sm:block">OPERATIONAL VIEW</div>
      <div className="w-8"></div>
    </div>
    <div className="flex-1 w-full relative overflow-hidden bg-transparent">
      {children}
    </div>
  </div>
);

export const InfenixMockup = () => {
  return (
    <WindowFrame>
      <div className="flex-1 flex h-full text-xs font-sans">
        {/* Sidebar */}
        <div className="w-40 bg-[#1A1A1A] border-r border-white/5 p-3 flex flex-col gap-4">
          <div className="font-display font-semibold text-white/90 text-sm tracking-tight flex items-center gap-2">
            <Sparkles size={14} className="text-blue-400" /> INFENIX
          </div>
          
          <button className="bg-white text-black font-semibold text-[10px] uppercase tracking-widest py-2 rounded shadow-sm hover:bg-white/90 transition-colors w-full flex items-center justify-center gap-1.5">
            <MessageSquare size={10} /> New Chat
          </button>
          
          <div className="flex flex-col gap-1 mt-2">
            <div className="text-[9px] uppercase tracking-widest text-zinc-400 mb-1 ml-1">Recent</div>
            <div className="text-[10px] text-white/70 py-1.5 px-2 rounded hover:bg-white/5 cursor-pointer truncate">Java basics concepts</div>
            <div className="text-[10px] text-white/70 py-1.5 px-2 rounded hover:bg-white/5 cursor-pointer truncate">React hooks intro</div>
            <div className="text-[10px] text-white/70 py-1.5 px-2 rounded hover:bg-white/5 cursor-pointer truncate">Data structures notes</div>
          </div>
          
          <div className="mt-auto border-t border-white/5 pt-3">
             <div className="flex items-center gap-2 px-1">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px] font-bold">U</div>
                <span className="text-[10px] text-white/80 font-medium">TONY STARK</span>
             </div>
          </div>
        </div>
        
        {/* Main Workspace */}
        <div className="flex-1 flex flex-col bg-[#161616]">
          {/* Top Navbar */}
          <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#1A1A1A]">
            <div className="flex items-center gap-3">
               <button className="bg-blue-600/20 text-blue-400 font-semibold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-blue-500/30 flex items-center gap-1.5">
                 <GraduationCap size={12} /> Start Tutor
               </button>
               <span className="text-zinc-400">|</span>
               <div className="flex gap-4 text-white/60 text-[10px] font-medium hidden sm:flex">
                 <span className="hover:text-white cursor-pointer">Folders</span>
                 <span className="hover:text-white cursor-pointer">Library</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider text-white/60">
                 Domain: CS
               </div>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-5 flex flex-col gap-5 overflow-hidden">
            <motion.div 
              className="self-end bg-[#1A1A1A] border border-white/10 px-4 py-2.5 rounded-2xl rounded-tr-sm text-[11px] max-w-[80%] text-white/90 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hi, help me to learn Java!
            </motion.div>

            <motion.div 
              className="self-start flex flex-col gap-3 max-w-[90%]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles size={12} className="text-white" />
                </div>
                <div className="bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm text-white/90 shadow-sm text-[11px] flex flex-col gap-3">
                  <p className="leading-relaxed">Here&apos;s a simple structured learning path to start with Java:</p>
                  
                  <div className="flex flex-col gap-1.5 ml-2">
                     <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>1. Install JDK & IDE</span>
                     <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>2. Learn variables, loops, and OOP</span>
                     <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>3. Practice small terminal programs</span>
                     <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>4. Build mini projects</span>
                  </div>

                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest mt-1">Recommended Resources</p>
                  
                  <div className="border border-white/5 rounded overflow-hidden">
                    <table className="w-full text-left text-[10px]">
                      <thead className="bg-[#222]">
                        <tr>
                          <th className="p-2 font-medium text-white/70">Resource</th>
                          <th className="p-2 font-medium text-white/70">Why it helps</th>
                          <th className="p-2 font-medium text-white/70">Length</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="bg-[#161616]">
                          <td className="p-2 text-white/90">W3Schools Java</td>
                          <td className="p-2 text-white/60">Step-by-step basics</td>
                          <td className="p-2 "><span className="bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded text-[8px] uppercase tracking-widest font-bold">Short</span></td>
                        </tr>
                        <tr className="bg-[#161616]">
                          <td className="p-2 text-white/90">Bro Code Java</td>
                          <td className="p-2 text-white/60">Full beginner course</td>
                          <td className="p-2"><span className="bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded text-[8px] uppercase tracking-widest font-bold">Long</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Message Input Box */}
          <div className="p-4 bg-[#161616] border-t border-white/5 shrink-0 flex items-center justify-center">
            <div className="w-full max-w-lg bg-[#1A1A1A] border border-white/10 rounded-xl p-1.5 pl-4 flex items-center shadow-sm">
               <span className="text-[10px] text-zinc-400 flex-1">Ask Infenix...</span>
               <div className="flex items-center gap-2">
                 <div className="bg-white/5 text-white/60 px-2 py-1 rounded text-[9px] font-medium">Standard</div>
                 <button className="bg-white text-black p-1.5 rounded-lg" aria-label="Send message">
                    <Send size={12} />
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Actions (absolute) */}
        <div className="absolute right-4 bottom-24 flex flex-col gap-2 opacity-50 hover:opacity-100 transition-opacity">
           <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-white/10">
             <BookOpen size={12} />
           </div>
           <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-white/10">
             <Bot size={12} />
           </div>
        </div>
      </div>
    </WindowFrame>
  );
};

export const VartalapMockup = () => {
  return (
    <WindowFrame>
      <div className="w-full h-full bg-[#1A1A1A] p-4 space-y-4">
        {/* Top Cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              title: "Invoices Digitized",
              val: "1,248",
              trend: "+312 this month",
              color: "text-blue-400",
            },
            {
              title: "GST Mismatches",
              val: "08",
              trend: "Needs review",
              color: "text-yellow-500",
            },
            {
              title: "Stock Risk",
              val: "Medium",
              trend: "3 items at risk",
              color: "text-red-400",
            },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              className="bg-[#161616] p-3 rounded-lg border border-white/10 shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                {kpi.title}
              </div>
              <div className="text-xl font-display font-semibold mt-1 text-white/90">
                {kpi.val}
              </div>
              <div className={cn("text-[10px] font-medium mt-1", kpi.color)}>
                {kpi.trend}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {[
            "Invoice Uploaded",
            "OCR Extracted",
            "GST Checked",
            "Stock Forecasted",
            "AI Recommendation",
          ].map((step, i) => (
            <motion.div
              key={step}
              className="bg-[#161616] border border-white/10 rounded-md px-2 py-2 text-[8px] text-white/60 uppercase tracking-wider flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              {step}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Main Chart */}
          <motion.div
            className="col-span-2 bg-[#161616] rounded-lg border border-white/10 p-3 flex flex-col shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-white/50">
                  Inventory Demand Forecast
                </h4>
                <p className="text-[9px] text-white/35 mt-0.5">
                  SKU: A4 Notebook Pack
                </p>
              </div>

              <span className="text-[8px] px-2 py-1 rounded border border-yellow-500/20 text-yellow-400 bg-yellow-500/10 uppercase font-medium">
                Risk: Medium
              </span>
            </div>

            <div className="relative h-24 mt-1 rounded-md border border-white/5 bg-black/20 overflow-hidden">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path
                  d="M0 95 H300 M0 65 H300 M0 35 H300"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />

                <motion.path
                  d="M10,90 C45,82 60,76 90,78 C120,80 135,52 165,48 C195,44 210,30 240,42 C265,50 280,62 292,56"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />

                <motion.circle
                  cx="240"
                  cy="42"
                  r="4"
                  fill="#3b82f6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                />
              </svg>

              <div className="absolute bottom-1.5 left-3 right-3 flex justify-between text-[7px] text-zinc-400 font-medium tracking-wide">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="rounded-md border border-white/5 bg-[#1A1A1A] p-2">
                <p className="text-[7px] text-white/35 uppercase">7D Demand</p>
                <p className="text-[12px] font-bold text-white mt-0.5">+18%</p>
              </div>
              <div className="rounded-md border border-white/5 bg-[#1A1A1A] p-2">
                <p className="text-[7px] text-white/35 uppercase">Peak Day</p>
                <p className="text-[12px] font-bold text-white mt-0.5">Friday</p>
              </div>
              <div className="rounded-md border border-white/5 bg-[#1A1A1A] p-2">
                <p className="text-[7px] text-white/35 uppercase">Reorder Qty</p>
                <p className="text-[12px] font-bold text-white mt-0.5">120 units</p>
              </div>
            </div>

            <motion.div
              className="mt-2 rounded-md border border-blue-500/20 bg-[#3b82f6]/10 p-2 text-left"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-[8px] text-blue-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Sparkles size={10} className="shrink-0" /> AI Recommendation
              </p>
              <p className="text-[9px] text-white/70 mt-1 leading-relaxed">
                Reorder 120 units before Friday to avoid stockout.
              </p>
            </motion.div>
          </motion.div>

          {/* OCR Panel */}
          <motion.div className="col-span-1 bg-[#161616] rounded-lg border border-white/10 p-3 shadow-sm flex flex-col gap-2 relative">
            <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider flex items-center gap-1">
              <FileText size={12} /> Invoice OCR
            </div>

            <div className="border border-white/5 rounded bg-[#1A1A1A] h-20 relative overflow-hidden flex items-center justify-center">
              <div className="p-2 space-y-1.5 opacity-40 w-full px-4">
                <div className="w-full h-2 bg-white/20 rounded" />
                <div className="w-3/4 h-2 bg-white/20 rounded" />
                <div className="w-1/2 h-2 bg-white/20 rounded mt-2" />
              </div>
              {/* Scan line */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-[#3b82f6]/100 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <motion.div
              className="mt-auto bg-[#1A1A1A] border border-white/5 p-2 rounded text-[9px] flex flex-col gap-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className="flex justify-between items-center border-b border-white/5 pb-1.5 mb-0.5">
                <span className="font-semibold flex items-center gap-1.5 text-blue-300 uppercase tracking-wider text-[8px]">
                  <CheckCircle2 size={10} /> Extracted
                </span>
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-1 py-0.5 rounded text-[7px] uppercase tracking-wider font-bold">
                  GST Matched
                </span>
              </div>
              
              <div className="flex flex-col gap-1 mt-0.5">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Vendor</span>
                  <span className="text-white/90">Sri Balaji Traders</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">GSTIN</span>
                  <span className="text-white/90 font-mono text-[8px] mt-0.5">33ABCDE1234F1Z5</span>
                </div>
                <div className="flex justify-between mt-1 pt-1 border-t border-white/5">
                  <span className="text-zinc-400">Tax</span>
                  <span className="text-white/80">₹7,704</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total</span>
                  <span className="text-blue-400 font-medium">₹42,800</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </WindowFrame>
  );
};

export const CodeToolMockup = () => {
  return (
    <WindowFrame className="bg-[#0D1117] border-[#30363D]">
      <div className="flex w-full h-full font-sans text-gray-300 relative overflow-hidden">
        {/* Header line mimicking IDE status or title */}
        <div className="absolute top-0 left-0 right-0 h-6 border-b border-[#30363D] bg-[#010409] flex items-center justify-between px-3 z-10 text-[8px] uppercase tracking-widest font-bold text-white/50">
          <span className="flex items-center gap-2"><Sparkles size={10} className="text-[#a5d6ff]"/> CodeLens AI</span>
          <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={9}/> Scan Complete</span>
        </div>

        <div className="flex w-full h-full pt-6">
          {/* Left Panel: Repository Scan */}
          <div className="w-36 border-r border-[#30363D] bg-[#0D1117] p-3 flex flex-col gap-3 shrink-0">
            <div className="flex flex-col gap-1 mt-1">
              <span className="text-zinc-400 text-[6.5px] uppercase tracking-widest font-bold">Repository</span>
              <span className="text-[#a5d6ff] font-mono text-[9px] flex items-center gap-1.5 bg-[#1f6feb]/10 px-1.5 py-1 rounded border border-[#1f6feb]/20 shadow-sm"><FolderGit2 size={10} className="text-[#1f6feb]"/> ecommerce-api/</span>
            </div>
            
            <div className="border-t border-[#30363D] pt-3 flex flex-col gap-1.5">
              <span className="text-zinc-400 text-[6.5px] uppercase tracking-widest font-bold">Scan Summary</span>
              <div className="bg-[#161b22] border border-[#30363D] rounded-md p-2 flex flex-col gap-1.5 shadow-sm">
                <div className="flex justify-between items-center text-[7.5px]"><span className="text-white/60">Files indexed</span><span className="text-white font-mono">142</span></div>
                <div className="flex justify-between items-center text-[7.5px]"><span className="text-white/60">Functions</span><span className="text-white font-mono">386</span></div>
                <div className="flex justify-between items-center text-[7.5px]"><span className="text-white/60">Dependencies</span><span className="text-white font-mono">78</span></div>
                <div className="flex justify-between items-center text-[7.5px]"><span className="text-white/60">Risk nodes</span><span className="text-red-400 font-bold font-mono">12</span></div>
              </div>
            </div>

            <div className="border-t border-[#30363D] pt-3 flex flex-col gap-1.5 flex-1">
              <span className="text-zinc-400 text-[6.5px] uppercase tracking-widest font-bold">Layer View</span>
              <div className="flex flex-col gap-0.5">
                {[
                  { n: "01 Architecture", a: false }, 
                  { n: "02 Domain", a: false }, 
                  { n: "03 Files", a: false }, 
                  { n: "04 Functions", a: true }
                ].map((l, i) => (
                  <div key={i} className={cn("text-[8px] px-2 py-1.5 rounded-md flex items-center justify-between font-medium transition-colors", l.a ? "bg-[#1f6feb]/15 text-[#a5d6ff] border border-[#1f6feb]/30 shadow-sm relative after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-0.5 after:bg-[#58a6ff] after:rounded-r" : "text-gray-400 hover:bg-[#21262d] border border-transparent")}>
                    <span>{l.n}</span>
                    {l.a && <ChevronRight size={10} className="text-[#58a6ff]"/>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel: Layered Code Map */}
          <div className="flex-1 flex flex-col bg-[#010409] relative p-4 gap-4 overflow-hidden items-center justify-center shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,111,235,0.03)_0,transparent_100%)] pointer-events-none"></div>
            
            <div className="flex flex-col items-center gap-0 w-full mb-8 relative z-10">
              {/* Layer 1: Architecture */}
              <motion.div 
                className="flex flex-col items-center gap-2 w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                 <div className="text-[6.5px] text-zinc-400 uppercase tracking-widest font-bold">Layer 01 • Architecture</div>
                 <div className="flex gap-2">
                   {["Frontend", "Backend", "Database", "Payments"].map(x => (
                     <div key={x} className={cn("px-3 py-1.5 rounded-md border text-[8.5px] shadow-sm flex items-center gap-1.5 transition-all font-medium", x === "Backend" ? "bg-[#1f6feb]/10 border-[#1f6feb]/40 text-[#a5d6ff] shadow-[0_0_10px_rgba(31,111,235,0.1)] ring-1 ring-[#1f6feb]/20" : "bg-[#161b22] border-[#30363D] text-gray-400 opacity-60")}>
                       {x === "Backend" ? <Network size={10} className="text-[#58a6ff]"/> : <Box size={10}/>} {x}
                     </div>
                   ))}
                 </div>
              </motion.div>
              
              <motion.div 
                className="h-5 w-px bg-gradient-to-b from-[#1f6feb]/40 to-[#1f6feb]/10 my-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 20, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              
              {/* Layer 2: Domain */}
              <motion.div 
                className="flex flex-col items-center gap-2 w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                 <div className="text-[6.5px] text-zinc-400 uppercase tracking-widest font-bold">Layer 02 • Domain</div>
                 <div className="flex gap-2">
                   {["Auth", "Products", "Cart", "Orders", "Payments"].map(x => (
                     <div key={x} className={cn("px-3 py-1.5 rounded-md border text-[8.5px] shadow-sm flex items-center gap-1.5 transition-all font-medium", x === "Cart" ? "bg-[#1f6feb]/10 border-[#1f6feb]/40 text-[#a5d6ff] shadow-[0_0_10px_rgba(31,111,235,0.1)] ring-1 ring-[#1f6feb]/20" : "bg-[#161b22] border-[#30363D] text-gray-400 opacity-60")}>
                       <Target size={10} className={x === "Cart" ? "text-[#58a6ff]" : ""}/> {x}
                     </div>
                   ))}
                 </div>
              </motion.div>

              <motion.div 
                className="h-5 w-px bg-gradient-to-b from-[#1f6feb]/40 to-[#1f6feb]/10 my-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 20, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />

              {/* Layer 3: Files */}
              <motion.div 
                className="flex flex-col items-center gap-2 w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                 <div className="text-[6.5px] text-zinc-400 uppercase tracking-widest font-bold">Layer 03 • Files</div>
                 <div className="flex gap-2">
                   {["cart.service.ts", "order.service.ts", "payment.gateway.ts", "inventory.repo.ts"].map(x => (
                     <div key={x} className={cn("px-3 py-1.5 rounded-md border text-[8.5px] shadow-sm flex items-center gap-1.5 font-mono transition-all", x === "cart.service.ts" ? "bg-[#1f6feb]/10 border-[#1f6feb]/40 text-[#a5d6ff] shadow-[0_0_10px_rgba(31,111,235,0.1)] ring-1 ring-[#1f6feb]/20" : "bg-[#161b22] border-[#30363D] text-gray-400 opacity-60")}>
                       <FileCode size={10} className={x === "cart.service.ts" ? "text-[#58a6ff]" : ""}/> {x}
                     </div>
                   ))}
                 </div>
              </motion.div>

              <motion.div 
                className="h-5 w-px bg-gradient-to-b from-[#1f6feb]/40 to-red-500/30 my-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 20, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
              />
              
              {/* Layer 4: Functions */}
              <motion.div 
                className="flex flex-col items-center gap-2 w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                 <div className="text-[6.5px] text-red-400/50 uppercase tracking-widest font-bold">Layer 04 • Functions</div>
                 <div className="flex gap-2">
                   {["calculateCartTotal()", "createOrder()", "validateStock()", "processPayment()"].map(x => (
                     <div key={x} className={cn("px-3 py-1.5 rounded-md border text-[8.5px] shadow-sm flex items-center gap-1.5 font-mono transition-all", x === "calculateCartTotal()" ? "bg-red-500/10 border-red-500/30 text-red-400 ring-1 ring-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)] relative" : "bg-[#161b22] border-[#30363D] text-gray-400 opacity-60")}>
                       {x === "calculateCartTotal()" && <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse ring-2 ring-red-900"></span>}
                       <Code2 size={10} className={x === "calculateCartTotal()" ? "text-red-400" : ""}/> {x}
                     </div>
                   ))}
                 </div>
              </motion.div>
            </div>

            {/* Trace Path at bottom */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-[#0D1117] border-t border-[#30363D] p-2 flex items-center gap-3 px-4 shadow-xl z-20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="text-[6.5px] text-zinc-400 uppercase font-bold tracking-widest shrink-0 bg-[#0D1117] px-1.5 py-0.5 rounded border border-[#30363D]">Trace Path</span>
              <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-gray-400 shrink-0">
                 <span>repo</span> <ChevronRight size={8} className="text-gray-600"/>
                 <span>Backend</span> <ChevronRight size={8} className="text-gray-600"/>
                 <span>Cart</span> <ChevronRight size={8} className="text-gray-600"/>
                 <span className="text-[#a5d6ff]">cart.service.ts</span> <ChevronRight size={8} className="text-[#1f6feb]"/>
                 <span className="text-red-400 bg-red-500/15 border border-red-500/20 px-1 py-0.5 rounded shadow-sm">calculateCartTotal()</span> <ChevronRight size={8} className="text-red-900/60"/>
                 <span className="text-red-300 font-bold flex items-center gap-1"><AlertTriangle size={8} className="text-red-400"/> duplicateLogicRisk</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
};

export const EnergyForecastMockup = () => {
  return (
    <WindowFrame className="bg-[#0b0f19] border-[#1e293b]">
      <div className="flex flex-col w-full h-full font-sans text-gray-300 relative overflow-hidden">
        {/* Header */}
        <div className="h-7 border-b border-[#1e293b] bg-[#0f172a] flex items-center justify-between px-3 z-10 shrink-0 shadow-sm">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-white/70">
            <Activity size={12} className="text-emerald-400" /> Energy Forecast Console
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse border border-emerald-200"></span> Live Model
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-3 gap-3 overflow-hidden bg-[#0a0e17]">
          {/* Top KPIs */}
          <div className="grid grid-cols-4 gap-3 shrink-0">
            {[
              { label: "Demand Today", value: "28.4 GW", trend: "+2.1%", trendUp: true, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { label: "Price Forecast", value: "$82/MWh", trend: "+$4.2", trendUp: true, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
              { label: "Model Accuracy", value: "98.2%", trend: "MAPE 1.8", trendUp: false, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
              { label: "Peak Risk", value: "Medium", trend: "18:00-21:00", trendUp: true, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" }
            ].map((kpi, i) => (
              <motion.div 
                key={i}
                className="bg-[#111827] border border-[#1f2937] rounded-lg p-2.5 shadow-sm flex flex-col gap-1 relative overflow-hidden group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className={cn("absolute right-0 top-0 w-16 h-16 rounded-bl-full bg-gradient-to-bl from-current opacity-5 blur-md pointer-events-none", kpi.color)}></div>
                <div className="text-[7.5px] uppercase tracking-widest text-gray-500 font-bold z-10">{kpi.label}</div>
                <div className="flex items-baseline gap-2 z-10">
                  <span className="text-[14px] font-bold text-white font-mono">{kpi.value}</span>
                  <span className={cn("text-[8px] px-1 py-0.5 rounded font-mono border", kpi.bg, kpi.color, kpi.border)}>
                    {kpi.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex-1 flex gap-3 min-h-0">
            {/* Left Charts Area */}
            <div className="flex-[2] flex flex-col gap-3 min-w-0">
              {/* Demand Chart mock */}
              <motion.div 
                className="flex-[1.5] bg-[#111827] border border-[#1f2937] rounded-lg shadow-sm flex flex-col overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="p-2 border-b border-[#1f2937] flex justify-between items-center bg-[#0f172a]">
                  <span className="text-[8.5px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-1.5"><TrendingUp size={10} className="text-blue-400" /> Demand Forecast (GW)</span>
                  <div className="flex gap-2 text-[7px] font-mono">
                    <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-gray-500"></span> Actual</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-blue-500 leading-none border-b border-blue-500 border-dashed pb-[1px]"></span> Predict</span>
                  </div>
                </div>
                <div className="flex-1 relative p-3 flex items-end gap-1 px-4">
                  {/* Decorative chart elements */}
                  <div className="absolute inset-0 z-0 flex flex-col justify-between p-3 opacity-20 pointer-events-none">
                    {[1,2,3,4,5].map(x => <div key={x} className="w-full h-px bg-gray-600"></div>)}
                  </div>
                  {/* Mock Line Graph */}
                  <div className="w-full h-full relative z-10">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 35 C 10 38, 15 20, 25 15 C 35 10, 45 25, 55 25 C 65 25, 75 5, 80 5 C 90 5, 95 20, 100 30 L 100 40 L 0 40 Z" fill="url(#blueGrad)" className="opacity-50" />
                      {/* Actual */}
                      <path d="M 0 35 C 10 38, 15 20, 25 15 C 35 10, 45 25, 55 25" fill="none" stroke="#6b7280" strokeWidth="1" />
                      {/* Predicted */}
                      <path d="M 55 25 C 65 25, 75 5, 80 5 C 90 5, 95 20, 100 30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
                      {/* Confidence Band Mock */}
                      <path d="M 55 25 C 65 20, 75 0, 80 0 C 90 0, 95 15, 100 20 L 100 40 C 95 30, 90 10, 80 10 C 75 10, 65 30, 55 25 Z" fill="#3b82f6" opacity="0.1" />
                    </svg>
                  </div>
                  {/* Annotations */}
                  <div className="absolute left-[70%] top-[4%] bg-[#1A1A1A] text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded text-[6px] font-mono whitespace-nowrap shadow-sm z-20">
                     Peak Expected
                  </div>
                </div>
              </motion.div>

              {/* Price trend mock */}
              <motion.div 
                className="flex-1 bg-[#111827] border border-[#1f2937] rounded-lg shadow-sm flex flex-col overflow-hidden"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="p-2 border-b border-[#1f2937] flex justify-between items-center bg-[#0f172a]">
                  <span className="text-[8.5px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-1.5"><BarChart3 size={10} className="text-purple-400" /> Price Trend ($/MWh)</span>
                </div>
                <div className="flex-1 flex items-end justify-between px-4 pb-2 pt-4 relative">
                  <div className="absolute inset-0 pointer-events-none border-t border-red-500/20 top-1/2"></div>
                  {[40, 45, 60, 85, 110, 95, 70, 50, 45, 40].map((v, i) => (
                    <motion.div 
                      key={i}
                      className={cn("w-[6%] rounded-t-sm", v > 80 ? "bg-red-500/60" : "bg-purple-500/40")}
                      style={{ height: `${v}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${v}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.05), duration: 0.5 }}
                    ></motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Panel */}
            <motion.div 
              className="flex-1 bg-[#111827] border border-[#1f2937] rounded-lg shadow-sm flex flex-col overflow-hidden"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="p-2.5 border-b border-[#1f2937] bg-[#0f172a]">
                <span className="text-[8.5px] uppercase tracking-widest font-bold text-gray-300 flex items-center gap-1.5"><Sparkles size={10} className="text-yellow-400" /> Forecast Insight</span>
              </div>
              <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
                
                <div className="bg-orange-500/10 border border-orange-500/20 p-2 rounded flex flex-col gap-1.5">
                  <span className="text-[7.5px] uppercase tracking-widest text-orange-400 font-bold flex items-center gap-1"><AlertTriangle size={8} /> Peak Load Warning</span>
                  <p className="text-[8.5px] text-gray-300 leading-relaxed">
                    Peak load expected between <strong>18:00 – 21:00</strong> due to residential demand spike.
                  </p>
                </div>

                <div className="bg-[#1f2937]/50 border border-[#374151] p-2 rounded flex flex-col gap-1.5">
                  <span className="text-[7.5px] uppercase tracking-widest text-[#a5d6ff] font-bold">Temperature Correlation</span>
                  <p className="text-[8.5px] text-gray-300 leading-relaxed">
                    Demand increases correlate with forecasted <span className="text-red-300">high-temperature</span> periods starting 14:00.
                  </p>
                </div>

                <div className="bg-[#1f2937]/50 border border-[#374151] p-2 rounded flex flex-col gap-1.5">
                  <span className="text-[7.5px] uppercase tracking-widest text-purple-300 font-bold">Price Volatility</span>
                  <p className="text-[8.5px] text-gray-300 leading-relaxed">
                    High price volatility detected for evening hours. Spot market prices may exceed <strong>$100/MWh</strong>.
                  </p>
                </div>

                <div className="mt-auto border-t border-[#1f2937] pt-2 flex flex-col gap-1.5">
                  <span className="text-[7px] uppercase tracking-widest text-gray-500 font-bold mb-1">Model Factors</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Seasonality", val: "Summer Peak", color: "bg-orange-500" },
                      { label: "Daily Pattern", val: "Evening max", color: "bg-blue-500" },
                      { label: "Weekly Trend", val: "Weekday typical", color: "bg-emerald-500" },
                      { label: "Holiday Impact", val: "Low variance", color: "bg-purple-500" }
                    ].map((f, i) => (
                      <div key={i} className="flex flex-col gap-1 text-[8px] bg-[#0a0e17] px-2 py-1.5 rounded border border-[#1f2937]">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <span className={cn("w-1 h-1 rounded-full", f.color)}></span>
                          {f.label}
                        </span>
                        <span className="text-white font-medium pl-2.5">{f.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
};

const LeftRail = () => (
  <div className="w-10 border-r border-white/5 bg-[#161616] flex flex-col items-center py-3 gap-3.5 shrink-0">
     <div className="w-6 h-6 rounded bg-purple-600/20 text-purple-400 flex flex-col items-center justify-center shrink-0 border border-purple-500/30 mb-1">
       <GraduationCap size={12} />
     </div>
     <div className="flex flex-col gap-3.5 text-zinc-400">
       <LayoutDashboard size={12} className="hover:text-white transition-colors cursor-pointer" />
       <Activity size={12} className="hover:text-white transition-colors cursor-pointer" />
       <FileSignature size={12} className="hover:text-white transition-colors cursor-pointer" />
       <BookOpen size={12} className="hover:text-white transition-colors cursor-pointer" />
       <Users size={12} className="hover:text-white transition-colors cursor-pointer" />
       <Bell size={12} className="hover:text-white transition-colors cursor-pointer" />
     </div>
  </div>
);

const AcademicBulletinMini = () => (
  <WindowFrame className="shadow-2xl">
    <div className="w-full h-full bg-[#161616] flex font-sans text-xs">
      <LeftRail />
      <div className="flex-1 flex flex-col overflow-hidden bg-[#121212]">
        <div className="px-3 py-2 border-b border-white/5 flex justify-between items-center bg-[#1A1A1A]">
           <div>
             <div className="font-semibold text-white/90 text-[10px] flex items-center gap-1.5">
               Academic Bulletin
             </div>
             <div className="text-[7px] text-zinc-400 uppercase tracking-widest mt-0.5">Announcements, notices, events, and calendar</div>
           </div>
           <div className="flex gap-1.5">
              {['I Year', 'II Year', 'III Year', 'IV Year'].map((yr, i) => (
                <span key={yr} className={cn("text-[6px] px-1.5 py-0.5 rounded border border-white/10", i === 2 ? "text-purple-400 bg-purple-500/10 border-purple-500/30 font-bold" : "text-zinc-400 bg-[#161616]")}>{yr}</span>
              ))}
           </div>
        </div>
        <div className="p-2 flex-1 flex flex-col gap-2 overflow-hidden">
          <div className="flex-1 flex gap-2 min-h-0">
            <div className="flex-[1.5] bg-[#1A1A1A] border border-white/5 rounded flex flex-col shadow-sm overflow-hidden">
              <div className="text-[7px] uppercase tracking-widest text-white/50 font-bold px-2 py-1.5 border-b border-white/5 bg-[#161616]">Active Announcements</div>
              <div className="p-1.5 space-y-1.5 overflow-y-auto no-scrollbar flex-1">
                 {[
                   { tag: "Event", title: "Industry Expert Talk", sub: "Guest from Google • Main Auditorium", date: "11 Apr", c: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                   { tag: "Notice", title: "Dept Circular", sub: "Submit term papers to HOD", date: "01 Apr", c: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
                   { tag: "Holiday", title: "Regional Holiday", sub: "Campus closed • No classes", date: "18 Apr", c: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                   { tag: "Notice", title: "Attendance Audit", sub: "Window open for III Yr students", date: "22 Apr", c: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
                   { tag: "Event", title: "Tech Symposium", sub: "Registration opens online", date: "25 Apr", c: "text-blue-400 bg-blue-500/10 border-blue-500/20" }
                 ].map((item, i) => (
                    <div key={i} className="bg-[#161616] border border-white/5 p-1.5 rounded flex items-center justify-between shadow-sm">
                       <div className="flex gap-2 items-center flex-1 min-w-0">
                         <span className={cn("px-1 py-0.5 rounded border text-[5px] uppercase tracking-widest font-bold shrink-0 w-[8ch] text-center", item.c)}>{item.tag}</span>
                         <div className="flex flex-col min-w-0">
                           <span className="text-[7px] text-white/90 truncate">{item.title}</span>
                           <span className="text-[5.5px] text-white/50 truncate mt-[1px]">{item.sub}</span>
                         </div>
                       </div>
                       <span className="text-[6px] text-zinc-400 font-mono shrink-0 ml-1">{item.date}</span>
                    </div>
                 ))}
              </div>
              
              <div className="border-t border-white/5 bg-[#161616] p-2 flex flex-col gap-1.5 shrink-0">
                <div className="text-[6px] text-white/50 uppercase tracking-widest font-bold">Department Reach</div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                   {[
                     { d: "CSE", v: "96%", w: "96%", c: "bg-emerald-500" },
                     { d: "ECE", v: "88%", w: "88%", c: "bg-blue-500" },
                     { d: "IT", v: "91%", w: "91%", c: "bg-emerald-500" },
                     { d: "MECH", v: "74%", w: "74%", c: "bg-yellow-500" }
                   ].map((r, i) => (
                      <div key={i} className="flex flex-col gap-[2px]">
                         <div className="flex justify-between items-center text-[5.5px]">
                           <span className="text-white/70 font-medium">{r.d}</span>
                           <span className="text-white/90 font-mono">{r.v}</span>
                         </div>
                         <div className="w-full h-[2.5px] bg-[#1A1A1A] rounded-full overflow-hidden border border-white/5 shadow-inner">
                            <div className={cn("h-full rounded-full shadow-[0_0_3px_rgba(0,0,0,0.5)]", r.c)} style={{ width: r.w }}></div>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 min-h-0">
              <div className="flex-1 bg-[#1A1A1A] border border-white/5 rounded flex flex-col shadow-sm min-h-0">
                <div className="text-[7px] uppercase tracking-widest text-white/50 font-bold px-2 py-1.5 border-b border-white/5 bg-[#161616]">Calendar: May 2026</div>
                <div className="flex-1 flex flex-col min-h-0">
                   <div className="p-1.5 shrink-0">
                     <div className="grid grid-cols-7 gap-0.5 mb-1 text-[6px] text-zinc-400 text-center font-medium">
                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                     </div>
                     <div className="grid grid-cols-7 gap-0.5">
                       {Array.from({length: 31}).map((_, i) => (
                         <div key={i} className={cn(
                           "aspect-[1.1] flex items-center justify-center text-[6px] rounded", 
                           (i+1) % 7 === 0 || (i+2) % 7 === 0 ? "text-rose-400/50" : "text-white/60", 
                           i === 10 ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 font-bold scale-110 shadow-sm" : "bg-[#161616]",
                           i === 17 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold" : ""
                         )}>{i + 1}</div>
                       ))}
                     </div>
                   </div>
                   
                   <div className="px-1.5 pb-1.5 flex-1 flex flex-col gap-1 min-h-0 justify-end">
                      <div className="bg-[#161616] rounded border border-white/5 p-1.5 flex flex-col gap-0.5">
                        <div className="text-[5.5px] text-white/50 uppercase tracking-widest font-bold">Selected Date</div>
                        <div className="text-[6.5px] text-purple-400 font-medium leading-tight mt-0.5">11 May — Industry Expert Talk</div>
                        <div className="text-[5.5px] text-zinc-400 font-mono">10:00 AM · Main Auditorium</div>
                      </div>
                      <div className="bg-[#161616] rounded border border-white/5 p-1.5 flex flex-col gap-1">
                        <div className="text-[5.5px] text-white/50 uppercase tracking-widest font-bold mb-0.5">Upcoming</div>
                        <div className="flex justify-between items-center text-[6px]">
                          <span className="text-white/60 font-mono">18 May</span>
                          <span className="text-emerald-400 truncate ml-1 font-medium">Regional Holiday</span>
                        </div>
                        <div className="flex justify-between items-center text-[6px]">
                          <span className="text-white/60 font-mono">25 May</span>
                          <span className="text-blue-400 truncate ml-1 font-medium">Tech Symposium</span>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm shrink-0">
                <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold px-0.5">Event Mix</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-[#161616] border border-white/5 px-1.5 py-[3px] rounded text-[5px] text-white/70 shadow-sm flex items-center justify-center min-w-[32%]"><span className="font-bold text-white mr-1 text-[6px]">6</span> Announcements</span>
                  <span className="bg-[#161616] border border-white/5 px-1.5 py-[3px] rounded text-[5px] text-purple-400 shadow-sm flex items-center justify-center min-w-[32%]"><span className="font-bold mr-1 text-[6px]">3</span> Pinned</span>
                  <span className="bg-[#161616] border border-white/5 px-1.5 py-[3px] rounded text-[5px] text-blue-400 shadow-sm flex items-center justify-center min-w-[30%]"><span className="font-bold mr-1 text-[6px]">2</span> Events</span>
                  <span className="bg-[#161616] border border-white/5 px-1.5 py-[3px] rounded text-[5px] text-emerald-400 shadow-sm flex items-center justify-center min-w-[30%]"><span className="font-bold mr-1 text-[6px]">1</span> Holiday</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 shrink-0">
            <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1 shadow-sm">
              <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1"><Pin size={8}/> Pinned Notices</div>
              <div className="flex-1 flex flex-col justify-center gap-1.5 bg-[#161616] p-1.5 rounded border border-white/5 text-[6px]">
                <div className="flex items-start gap-1.5">
                  <span className="text-purple-400 mt-[1px]">•</span><span className="text-white/80 leading-tight">Revised exam schedule</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-purple-400 mt-[1px]">•</span><span className="text-white/80 leading-tight">Lab timetable updated</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-purple-400 mt-[1px]">•</span><span className="text-white/80 leading-tight">New library hours</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1 shadow-sm">
              <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1"><Clock size={8}/> Publishing Queue</div>
              <div className="flex-1 flex flex-col justify-center gap-1.5 bg-[#161616] p-1.5 rounded border border-white/5 text-[6px]">
                <div className="flex items-start gap-1.5">
                  <span className="text-blue-400 mt-[1px]">•</span><span className="text-white/80 leading-tight">Circular scheduled</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blue-400 mt-[1px]">•</span><span className="text-white/80 leading-tight">Symposium reminder</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-white/20 mt-[1px]">•</span><span className="text-zinc-400 leading-tight italic">Waiting for approval</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1 shadow-sm">
              <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1"><BarChart3 size={8}/> Comm Stats</div>
              <div className="flex-1 flex flex-col justify-center gap-[3px] bg-[#161616] p-1.5 rounded border border-white/5 text-[5.5px]">
                <div className="flex justify-between items-center bg-[#1A1A1A] px-1.5 py-1 rounded border border-white/5">
                  <span className="text-white/70">Depts notified</span><span className="text-white/90 font-bold font-mono">4</span>
                </div>
                <div className="flex justify-between items-center bg-[#1A1A1A] px-1.5 py-1 rounded border border-white/5">
                  <span className="text-white/70">Students reached</span><span className="text-emerald-400 font-bold font-mono">128</span>
                </div>
                <div className="flex justify-between items-center bg-[#1A1A1A] px-1.5 py-1 rounded border border-white/5">
                  <span className="text-white/70">Faculty pending</span><span className="text-yellow-400 font-bold font-mono">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WindowFrame>
);

const RequestsPipelineMini = () => (
  <WindowFrame className="shadow-2xl">
    <div className="w-full h-full bg-[#161616] flex font-sans text-xs">
      <LeftRail />
      <div className="flex-1 flex flex-col bg-[#121212] overflow-hidden">
        <div className="px-3 py-2 border-b border-white/5 flex justify-between items-center bg-[#1A1A1A]">
           <div>
             <div className="font-semibold text-white/90 text-[10px] flex items-center gap-1.5">
                Requests & Pipelines
             </div>
             <div className="text-[7px] text-zinc-400 uppercase tracking-widest mt-0.5">Unified OD and Leave approvals with stage health</div>
           </div>
           <div className="flex gap-1.5">
              <span className="text-[6px] px-1.5 py-0.5 rounded border border-white/10 text-white/60 bg-[#161616]">SLA &lt; 24h</span>
              <span className="text-[6px] px-1.5 py-0.5 rounded border border-white/10 text-white/60 bg-[#161616]">Export Snapshot</span>
           </div>
        </div>
        <div className="p-2 flex-1 flex flex-col gap-2 overflow-hidden">
          <div className="grid grid-cols-5 gap-2">
             {[
               { title: "Total OD Requests", val: "82", color: "text-emerald-400" },
               { title: "Total Leave Requests", val: "36", color: "text-blue-400" },
               { title: "Pending Approvals", val: "27", color: "text-yellow-400" },
               { title: "Alerts", val: "5", color: "text-rose-400" },
               { title: "Avg SLA", val: "18h", color: "text-purple-400" }
             ].map((c, i) => (
               <div key={i} className="bg-[#1A1A1A] p-1.5 px-2 rounded border border-white/5 flex flex-col justify-between shadow-sm">
                 <div className="text-[6px] uppercase tracking-widest text-white/50 font-semibold mb-1 truncate">{c.title}</div>
                 <div className={cn("text-sm font-bold font-display leading-none tracking-tight", c.color)}>{c.val}</div>
               </div>
             ))}
          </div>
          
          <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            <div className="bg-[#1A1A1A] border border-white/5 rounded p-2 flex flex-col gap-1 shadow-sm shrink-0">
              <div className="text-[7px] uppercase tracking-widest text-white/50 font-bold flex items-center justify-between">
                <span>OD Request Pipeline</span>
                <div className="flex items-center gap-2.5 text-[6px] font-medium tracking-wide">
                  <span className="flex items-center gap-1 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_3px_#3b82f6]"></div> Active 73</span>
                  <span className="flex items-center gap-1 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_3px_#10b981]"></div> Completed 6</span>
                  <span className="flex items-center gap-1 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_3px_#f43f5e]"></div> SLA Risk 5</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 mt-1 shrink-0">
                 {/* Main continuous segmented bar */}
                 <div className="flex h-5 w-full bg-[#161616] border border-white/5 rounded-sm overflow-hidden shadow-inner">
                   {[
                     { val: 26, c: "bg-blue-500/20 border-r border-[#1A1A1A]", text: "26", flex: 1 },
                     { val: 18, c: "bg-blue-500/30 border-r border-[#1A1A1A]", text: "18", flex: 1 },
                     { val: 12, c: "bg-blue-500/40 border-r border-[#1A1A1A]", text: "12", flex: 1 },
                     { val: 9, c: "bg-purple-500/40 border-r border-[#1A1A1A]", text: "9", flex: 1 },
                     { val: 7, c: "bg-purple-500/60 border-r border-[#1A1A1A]", text: "7", flex: 1 },
                     { val: 4, c: "bg-yellow-500/40 border-r border-[#1A1A1A]", text: "4", flex: 1 },
                     { val: 6, c: "bg-emerald-500/40", text: "6", flex: 0.8 },
                   ].map((s, i) => (
                      <div key={i} className={cn("h-full flex items-center justify-center text-[8px] font-bold font-mono text-white/90 relative group overflow-hidden hover:bg-opacity-80 transition-all", s.c)} style={{ flex: s.flex }}>
                        {s.text}
                      </div>
                   ))}
                 </div>
                 
                 {/* Top segmented bar labels */}
                 <div className="flex text-[5.5px] text-zinc-400 font-medium uppercase tracking-widest px-1">
                   <div className="flex-1 text-center truncate">Submitted</div>
                   <div className="flex-1 text-center truncate">Counselor</div>
                   <div className="flex-1 text-center truncate">Event</div>
                   <div className="flex-1 text-center truncate">Year Coord</div>
                   <div className="flex-1 text-center truncate">HOD</div>
                   <div className="flex-1 text-center truncate">Principal</div>
                   <div className="flex-[0.8] text-center truncate">Completed</div>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 flex-1 overflow-hidden min-h-0">
              {/* Leave Pipeline */}
              <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm">
                <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1"><Calendar size={8}/> Leave Pipeline</div>
                <div className="flex flex-col gap-1 flex-1 bg-[#161616] p-1.5 rounded border border-white/5">
                   <div className="flex items-center gap-[1px] h-3 w-full mt-0.5 rounded overflow-hidden shadow-inner bg-[#1A1A1A]">
                     {[
                       { val: 21, bg: "bg-blue-500/80", w: "58%" },
                       { val: 11, bg: "bg-emerald-500/80", w: "31%" },
                       { val: 4, bg: "bg-rose-500/80", w: "11%" },
                     ].map((s, i) => (
                        <div key={i} className={cn("h-full", s.bg)} style={{ width: s.w }} />
                     ))}
                   </div>
                   <div className="flex justify-between text-[5.5px] text-white/50 uppercase font-semibold tracking-wide px-[1px]">
                      <span>Submitted <span className="text-white/90 font-mono ml-0.5">21</span></span>
                      <span>Approved <span className="text-white/90 font-mono ml-0.5">11</span></span>
                      <span>Rejected <span className="text-white/90 font-mono ml-0.5">4</span></span>
                   </div>
                   
                   <div className="flex gap-1.5 mt-0.5 flex-1 p-0.5">
                      <div className="flex-1 flex flex-col justify-center items-center bg-[#1A1A1A] rounded border border-white/5 shadow-sm">
                         <span className="text-[7.5px] text-emerald-400 font-bold font-mono">72%</span>
                         <span className="text-[4.5px] text-white/50 uppercase tracking-wider font-semibold">Approval</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center items-center bg-[#1A1A1A] rounded border border-white/5 shadow-sm">
                         <span className="text-[7.5px] text-yellow-400 font-bold font-mono">4</span>
                         <span className="text-[4.5px] text-white/50 uppercase tracking-wider font-semibold">Returned</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center items-center bg-[#1A1A1A] rounded border border-white/5 shadow-sm">
                         <span className="text-[7.5px] text-white/90 font-bold font-mono">14h</span>
                         <span className="text-[4.5px] text-white/50 uppercase tracking-wider font-semibold">Avg Dec</span>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Stage Health */}
              <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm">
                 <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1"><Activity size={8}/> Stage Health</div>
                 <div className="flex-1 flex flex-col justify-center gap-1.5 bg-[#161616] p-1.5 rounded border border-white/5 text-[6px]">
                    {[
                      { s: "Counselor", stat: "Stable", t: "12h", w: "40%", c: "text-emerald-400 bg-emerald-400/10", bar: "bg-emerald-500" },
                      { s: "Event Coord", stat: "Stable", t: "16h", w: "50%", c: "text-emerald-400 bg-emerald-400/10", bar: "bg-emerald-500" },
                      { s: "HOD Review", stat: "Warning", t: "48h", w: "90%", c: "text-yellow-400 bg-yellow-400/10", bar: "bg-yellow-500" },
                      { s: "Principal", stat: "Clear", t: "9h", w: "20%", c: "text-blue-400 bg-blue-400/10", bar: "bg-blue-500" },
                    ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center group">
                         <span className="text-white/70 w-[11ch] truncate">{item.s}</span>
                         <div className="flex items-center gap-1.5 flex-1 mx-1.5">
                           <div className="flex-1 h-1 bg-[#1A1A1A] rounded-full overflow-hidden border border-white/5">
                             <div className={cn("h-full rounded-full", item.bar)} style={{ width: item.w }}></div>
                           </div>
                         </div>
                         <div className="flex items-center gap-1.5 shrink-0">
                           <span className={cn("px-1 py-[1.5px] rounded text-[4.5px] uppercase font-bold tracking-wider", item.c)}>{item.stat}</span>
                           <span className="text-zinc-400 font-mono w-[3ch] text-right">{item.t}</span>
                         </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* SLA Monitor */}
              <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm">
                 <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1"><Clock size={8}/> SLA Monitor</div>
                 <div className="flex-1 flex items-center gap-2 bg-[#161616] p-1.5 rounded border border-white/5">
                    <div className="flex flex-col items-center justify-center gap-[3px] shrink-0 ml-1">
                      <div className="relative w-10 h-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-md">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#sla-gradient)" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 18/24)} strokeLinecap="round" />
                          <defs>
                            <linearGradient id="sla-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#c084fc" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[9px] font-bold text-white leading-none font-mono tracking-tighter">18h</span>
                        </div>
                      </div>
                      <span className="text-[4.5px] text-zinc-400 uppercase tracking-widest font-semibold bg-[#1A1A1A] px-1.5 py-[1px] rounded border border-white/5">Target 24h</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center gap-[2px] text-[6px] ml-0.5">
                       <div className="flex justify-between items-center bg-[#1A1A1A] px-1.5 py-1 rounded border border-white/5">
                         <span className="text-white/60 font-medium">Overdue</span><span className="text-rose-400 font-bold font-mono">5</span>
                       </div>
                       <div className="flex justify-between items-center bg-[#1A1A1A] px-1.5 py-1 rounded border border-white/5">
                         <span className="text-white/60 font-medium">At Risk</span><span className="text-yellow-400 font-bold font-mono">9</span>
                       </div>
                       <div className="flex justify-between items-center bg-[#1A1A1A] px-1.5 py-1 rounded border border-white/5">
                         <span className="text-white/60 font-medium">Cleared</span><span className="text-emerald-400 font-bold font-mono">14</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 flex-1 min-h-0 overflow-hidden">
               {/* Recent Activity */}
               <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm">
                 <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1 shrink-0"><History size={8}/> Recent Activity</div>
                 <div className="flex-1 flex flex-col justify-center gap-2 bg-[#161616] p-2 rounded border border-white/5 overflow-hidden shrink-0 mt-0.5">
                    {[
                      { t: "2h ago", m: "OD request approved by HOD", c: "bg-purple-500" },
                      { t: "4h ago", m: "Leave request returned for proof", c: "bg-yellow-500" },
                      { t: "6h ago", m: "Event permission to Principal", c: "bg-blue-500" },
                      { t: "1d ago", m: "SLA report exported", c: "bg-white/40" }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-2 items-center relative">
                         {i !== 3 && <div className="absolute left-[2.5px] top-[8px] bottom-[-10px] w-px bg-white/10"></div>}
                         <div className={cn("w-1.5 h-1.5 rounded-full shrink-0 relative z-10 shadow-[0_0_4px_rgba(0,0,0,0.5)]", item.c)}></div>
                         <span className="text-[5.5px] text-white/50 whitespace-nowrap w-[5ch] font-mono shrink-0">{item.t}</span>
                         <span className="text-[6px] text-white/80 leading-tight truncate">{item.m}</span>
                       </div>
                    ))}
                 </div>
               </div>

               {/* Policy Snapshot */}
               <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm">
                  <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1 shrink-0"><Shield size={8}/> Policy Snapshot</div>
                  <div className="flex-1 flex flex-col justify-center gap-1.5 bg-[#161616] p-1.5 rounded border border-white/5 shrink-0 mt-0.5">
                     {[
                       "Max 2 consecutive ODs",
                       "Proof required for OD",
                       "HOD approval for leave",
                       "Auto alert after 24h"
                     ].map((p, i) => (
                        <div key={i} className="flex items-center gap-2 text-[6px] text-white/80 bg-[#1A1A1A] px-2 py-1 rounded border border-white/5 shadow-sm">
                          <CheckCircle2 size={7} className="text-emerald-500 opacity-90 shrink-0"/> <span className="truncate">{p}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Bottleneck Analysis */}
               <div className="bg-[#1A1A1A] border border-white/5 rounded p-1.5 flex flex-col gap-1.5 shadow-sm">
                  <div className="text-[6px] uppercase tracking-widest text-white/50 font-bold flex items-center gap-1 shrink-0"><AlertTriangle size={8}/> Bottlenecks</div>
                  <div className="flex-1 flex flex-col justify-center gap-2 bg-[#161616] p-1.5 rounded border border-white/5 text-[6.5px] shrink-0 mt-0.5">
                     {[
                       { l: "HOD Review", v: "48h warn", w: "90%", c: "bg-rose-500", risk: true },
                       { l: "Event Coord", v: "12 pend", w: "60%", c: "bg-yellow-500" },
                       { l: "Counselor", v: "18 actv", w: "75%", c: "bg-blue-500" },
                       { l: "Principal", v: "4 pend", w: "20%", c: "bg-emerald-500" }
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1.5">
                              <span className="text-white/80 font-medium">{item.l}</span>
                              {item.risk && <span className="text-[4px] bg-rose-500/20 text-rose-400 px-1 py-[1.5px] rounded uppercase tracking-wider font-bold">High Risk</span>}
                            </div>
                            <span className="text-white/50 font-mono text-[5.5px] uppercase tracking-wider">{item.v}</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden border border-white/5 mt-0.5">
                             <div className={cn("h-full rounded-full shadow-[0_0_4px_rgba(0,0,0,0.5)]", item.c)} style={{ width: item.w }}></div>
                          </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WindowFrame>
);

const AdminDashboardMini = () => (
    <WindowFrame className="shadow-2xl">
      <div className="w-full h-full bg-[#161616] flex font-sans text-xs">
         <LeftRail />
         <div className="flex-1 flex flex-col overflow-hidden">
             <div className="px-3 py-2 border-b border-white/5 flex justify-between items-center bg-[#1A1A1A]">
                <div>
                  <div className="font-semibold text-white/90 text-[10px] flex items-center gap-1.5">
                    CampusVidhya Control Center
                  </div>
                  <div className="text-[7px] text-zinc-400 uppercase tracking-widest mt-0.5">Academic Operations Dashboard</div>
                </div>
                <div className="flex bg-[#161616] rounded border border-white/5 p-0.5">
                   {['Student', 'Faculty', 'Staff', 'Admin'].map((role, i) => (
                     <div key={role} className={cn("px-2 py-0.5 rounded text-[7px] font-medium cursor-default transition-colors", i === 3 ? "bg-white/10 text-white shadow-sm" : "text-zinc-400")}>{role}</div>
                   ))}
                </div>
             </div>
             
             <div className="p-2 flex-1 flex flex-col gap-2 overflow-hidden bg-[#121212]">
                <div className="grid grid-cols-5 gap-2 shrink-0">
                   {[
                     { title: "Students", val: "2,480", color: "text-blue-400" },
                     { title: "Faculty", val: "126", color: "text-purple-400" },
                     { title: "Staff", val: "42", color: "text-emerald-400" },
                     { title: "Pending Approvals", val: "26", color: "text-yellow-400" },
                     { title: "Today Events", val: "06", color: "text-rose-400" },
                   ].map((c, i) => (
                     <div key={i} className="bg-[#1A1A1A] px-2 py-1.5 rounded border border-white/5 flex flex-col justify-between shadow-sm">
                       <div className="uppercase tracking-widest text-white/50 text-[7px] mb-1 font-semibold truncate">{c.title}</div>
                       <div className={cn("text-[14px] font-bold font-display tracking-tight leading-none mt-0.5", c.color)}>{c.val}</div>
                     </div>
                   ))}
                </div>
                
                <div className="flex flex-col gap-2 flex-1 overflow-hidden">
                   {/* Middle Row */}
                   <div className="grid grid-cols-3 gap-2 shrink-0 h-[105px]">
                      {/* Main: Approval Queue */}
                      <div className="col-span-2 bg-[#1A1A1A] border border-white/5 rounded flex flex-col overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between border-b border-white/5 px-2 py-1.5 bg-[#161616]">
                          <div className="text-[7px] text-white/50 uppercase tracking-widest font-bold flex items-center gap-1"><CheckSquare size={10}/> Approval Queue</div>
                          <span className="text-[7px] bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border border-yellow-500/20">Action Required</span>
                        </div>
                        <div className="flex-1 overflow-hidden p-1.5 flex flex-col justify-between">
                           {[
                              { req: 'OD Request - CSE Dept', meta: 'SLA 18h' },
                              { req: 'Leave Request - ECE Faculty', meta: 'Pending Review' },
                              { req: 'Certificate Approval', meta: 'Urgent' },
                              { req: 'Event Permission', meta: 'HOD Review' },
                           ].map((item, i) => (
                              <div key={i} className="bg-[#161616] py-1.5 px-2 rounded border border-white/5 flex justify-between items-center group shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                                <div className="flex flex-col gap-[2px]">
                                  <span className="text-[8px] text-white/80 font-medium tracking-wide">{item.req}</span>
                                  <span className="text-[7px] text-zinc-400">{item.meta}</span>
                                </div>
                                <div className="px-1.5 py-0.5 text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-[7px] font-bold uppercase tracking-wider cursor-pointer hover:bg-emerald-500/20 transition-colors">Approve</div>
                              </div>
                           ))}
                        </div>
                      </div>
                      
                      <div className="col-span-1 flex flex-col gap-2 overflow-hidden">
                        {/* Critical Alerts */}
                        <div className="bg-[#1A1A1A] border border-white/5 rounded flex flex-col py-1.5 px-2 shrink-0 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-8 h-8 bg-red-500/10 blur-xl rounded-full"></div>
                          <div className="text-[7px] text-red-400/80 uppercase tracking-widest font-bold flex items-center gap-1 mb-1"><ShieldAlert size={8}/> Alerts</div>
                          <div className="text-[7px] text-white/70 leading-tight">
                            Leave requests spiking. Check coverage.
                          </div>
                        </div>
                        
                        {/* Weekly Activity */}
                        <div className="bg-[#1A1A1A] border border-white/5 rounded flex flex-col py-1.5 px-2 shrink-0 shadow-sm flex-1">
                          <div className="text-[7px] text-white/50 uppercase tracking-widest font-bold flex items-center gap-1 mb-1.5"><BarChart3 size={8}/> Weekly Activity</div>
                          <div className="flex items-end flex-wrap gap-[3px] flex-1">
                            {[30, 45, 25, 60, 80, 50, 40].map((h, i) => (
                              <div key={i} className="flex-1 bg-purple-500/40 border-t border-purple-400/50 rounded-sm hover:bg-purple-400" style={{ height: `${h}%` }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                   </div>

                   {/* Bottom Row */}
                   <div className="grid grid-cols-3 gap-2 flex-1 overflow-hidden min-h-0">
                      {/* Left/Middle: Multi-line Chart */}
                      <div className="col-span-2 bg-[#1A1A1A] border border-white/5 rounded flex flex-col overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between border-b border-white/5 px-2 py-1 bg-[#161616]">
                          <div className="text-[7px] text-white/50 uppercase tracking-widest font-bold flex items-center gap-1"><TrendingUp size={8}/> Performance Trends</div>
                          <div className="flex gap-1.5">
                            <div className="flex items-center gap-0.5"><div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_2px_#10b981]"></div><span className="text-[6px] text-zinc-400 font-medium">Credits</span></div>
                            <div className="flex items-center gap-0.5"><div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_2px_#3b82f6]"></div><span className="text-[6px] text-zinc-400 font-medium">Attendance</span></div>
                          </div>
                        </div>
                        <div className="flex-1 px-1.5 pb-2 pt-1 relative flex items-end">
                           <div className="absolute inset-0 px-2 py-1.5 flex flex-col justify-between z-0">
                              <div className="w-full h-px bg-white/5"></div>
                              <div className="w-full h-px bg-white/5"></div>
                              <div className="w-full h-px bg-white/5"></div>
                           </div>
                           <div className="relative w-full h-[85%] z-10 px-1 mt-auto">
                               <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-hidden" preserveAspectRatio="none">
                                  <defs>
                                    <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="gradEmerald" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M0,25 C20,25 25,12 50,15 C75,18 80,5 100,10" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                                  <path d="M0,25 C20,25 25,12 50,15 C75,18 80,5 100,10 L100,40 L0,40 Z" fill="url(#gradBlue)" opacity="0.5" />
                                  
                                  <path d="M0,32 C15,32 30,18 50,22 C70,26 85,15 100,18" fill="none" stroke="#10b981" strokeWidth="1.5" />
                                  <path d="M0,32 C15,32 30,18 50,22 C70,26 85,15 100,18 L100,40 L0,40 Z" fill="url(#gradEmerald)" opacity="0.3" />
                               </svg>
                               <div className="absolute -bottom-1.5 left-1 right-1 flex justify-between text-[5px] text-zinc-400 font-mono">
                                 <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                               </div>
                           </div>
                        </div>
                      </div>

                      {/* Right: Radar */}
                      <div className="bg-[#1A1A1A] border border-white/5 rounded flex flex-col overflow-hidden shadow-sm">
                        <div className="flex items-baseline justify-between border-b border-white/5 px-2 py-1 bg-[#161616]">
                          <div className="text-[7px] text-white/50 uppercase tracking-widest font-bold flex items-center gap-1"><Activity size={8}/> Radar</div>
                        </div>
                        <div className="flex-1 flex items-center justify-center p-1 relative overflow-hidden">
                           <svg viewBox="0 0 100 100" className="w-[95%] h-[95%] max-h-[100px] drop-shadow-md">
                              {/* Background Grids */}
                              <polygon points="50,15 80.3,32.5 80.3,67.5 50,85 19.7,67.5 19.7,32.5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                              <polygon points="50,26.6 70.2,38.3 70.2,61.6 50,73.3 29.8,61.6 29.8,38.3" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                              <polygon points="50,38.3 60.1,44.1 60.1,55.8 50,61.6 39.9,55.8 39.9,44.1" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                              
                              {/* Axis Lines */}
                              <line x1="50" y1="50" x2="50" y2="15" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                              <line x1="50" y1="50" x2="80.3" y2="32.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                              <line x1="50" y1="50" x2="80.3" y2="67.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                              <line x1="50" y1="50" x2="50" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                              <line x1="50" y1="50" x2="19.7" y2="67.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                              <line x1="50" y1="50" x2="19.7" y2="32.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                              
                              {/* Data Polygon 1: Cohort Average */}
                              <polygon points="50,32 68,40 60,65 50,60 38,62 42,45" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" strokeDasharray="1.5,1.5" />
                              
                              {/* Data Polygon 2: Current Cohort */}
                              <polygon points="50,22 75,38 65,65 50,78 28,60 30,35" fill="rgba(168, 85, 247, 0.25)" stroke="rgba(168, 85, 247, 0.8)" strokeWidth="1" />
                              
                              {/* Vertices Dots */}
                              <circle cx="50" cy="22" r="1.5" fill="#c084fc" />
                              <circle cx="75" cy="38" r="1.5" fill="#c084fc" />
                              <circle cx="65" cy="65" r="1.5" fill="#c084fc" />
                              <circle cx="50" cy="78" r="1.5" fill="#c084fc" />
                              <circle cx="28" cy="60" r="1.5" fill="#c084fc" />
                              <circle cx="30" cy="35" r="1.5" fill="#c084fc" />

                              {/* Labels */}
                              <text x="50" y="10" fill="rgba(255,255,255,0.4)" fontSize="4.5" textAnchor="middle" fontWeight="600" letterSpacing="0.2">ATTENDANCE</text>
                              <text x="82" y="32.5" fill="rgba(255,255,255,0.4)" fontSize="4.5" textAnchor="start" dominantBaseline="middle" fontWeight="600" letterSpacing="0.2">CREDITS</text>
                              <text x="82" y="67.5" fill="rgba(255,255,255,0.4)" fontSize="4.5" textAnchor="start" dominantBaseline="middle" fontWeight="600" letterSpacing="0.2">PROJECTS</text>
                              <text x="50" y="93" fill="rgba(255,255,255,0.4)" fontSize="4.5" textAnchor="middle" fontWeight="600" letterSpacing="0.2">EVENTS</text>
                              <text x="18" y="67.5" fill="rgba(255,255,255,0.4)" fontSize="4.5" textAnchor="end" dominantBaseline="middle" fontWeight="600" letterSpacing="0.2">APPROVALS</text>
                              <text x="18" y="32.5" fill="rgba(255,255,255,0.4)" fontSize="4.5" textAnchor="end" dominantBaseline="middle" fontWeight="600" letterSpacing="0.2">ENGAGEMENT</text>
                           </svg>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
         </div>
      </div>
    </WindowFrame>
);

export const CampusVidhyaMockup = () => {
  const [order, setOrder] = useState(["bulletin", "pipeline", "admin"]);
  const [isHovered, setIsHovered] = useState(false);

  const bringToFront = (id: string) => {
    setOrder(prev => {
      if (prev[2] === id) return prev;
      const newOrder = prev.filter(x => x !== id);
      return [...newOrder, id];
    });
  };

  const sendToBack = (id: string) => {
    setOrder(prev => {
      if (prev[0] === id) return prev;
      const newOrder = prev.filter(x => x !== id);
      return [id, ...newOrder];
    });
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] flex items-center justify-center perspective-[2000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {["bulletin", "pipeline", "admin"].map((id) => {
        const index = order.indexOf(id);
        const isFront = index === 2;

        let content;
        let titleLabel = "";
        let initialYOffset = 0;
        if (id === "bulletin") {
          content = <AcademicBulletinMini />;
          titleLabel = "Academic Bulletin";
          initialYOffset = 40;
        } else if (id === "pipeline") {
          content = <RequestsPipelineMini />;
          titleLabel = "Requests Pipeline";
          initialYOffset = 30;
        } else {
          content = <AdminDashboardMini />;
          titleLabel = "Admin Dashboard";
          initialYOffset = 20;
        }

        // Normal values
        const yNormal = index === 0 ? -40 : index === 1 ? -20 : 0;
        const xNormal = index === 0 ? 150 : index === 1 ? 75 : 0;
        const rotateNormal = index === 0 ? 4 : index === 1 ? 2 : 0;
        const opacityNormal = index === 0 ? 0.70 : index === 1 ? 0.88 : 1;

        // Hover values (fan out more and raise alignment)
        const yHover = index === 0 ? -60 : index === 1 ? -30 : 0;
        const xHover = index === 0 ? 190 : index === 1 ? 95 : 0;
        const rotateHover = index === 0 ? 1 : index === 1 ? 0.5 : 0;
        const opacityHover = index === 0 ? 0.90 : index === 1 ? 0.95 : 1;

        const scaleInView = index === 0 ? 0.72 : index === 1 ? 0.78 : 0.84;
        const zIndex = index * 10;

        const currentY = isHovered ? yHover : yNormal;
        const currentX = isHovered ? xHover : xNormal;
        const currentRotate = isHovered ? rotateHover : rotateNormal;
        const currentOpacity = isHovered ? opacityHover : opacityNormal;
        const currentScale = isHovered 
          ? (index === 0 ? 0.76 : index === 1 ? 0.82 : 0.88)
          : scaleInView;

        return (
          <motion.div
            key={id}
            className={cn(
              "absolute inset-0 origin-center cursor-grab active:cursor-grabbing select-none transition-opacity duration-300",
              !isFront && "hover:!opacity-100"
            )}
            style={{ zIndex }}
            onClick={(e) => {
              e.stopPropagation();
              bringToFront(id);
            }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.85}
            dragTransition={{ bounceStiffness: 450, bounceDamping: 28 }}
            whileDrag={{ 
              scale: currentScale * 1.05,
              zIndex: 100,
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.4)"
            }}
            onDragEnd={(event, info) => {
              const threshold = 35;
              const isDragged = Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold;
              if (isDragged) {
                if (isFront) {
                  sendToBack(id);
                } else {
                  bringToFront(id);
                }
              }
            }}
            initial={{ opacity: 0, y: yNormal + initialYOffset, scale: scaleInView, rotateZ: rotateNormal, x: xNormal }}
            animate={{ 
              opacity: currentOpacity, 
              y: currentY, 
              scale: currentScale, 
              rotateZ: currentRotate, 
              x: currentX 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div 
              className={cn(
                "absolute -top-6 right-0 bg-[#222] border border-white/10 text-white/60 px-2 py-0.5 rounded text-[8px] tracking-widest uppercase font-semibold transition-opacity duration-300 z-50 pointer-events-none",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              {titleLabel}
            </div>
            
            {content}
            
            {!isFront && (
              <div className="absolute inset-0 z-40 bg-black/0 hover:bg-white/5 transition-colors rounded-2xl" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
