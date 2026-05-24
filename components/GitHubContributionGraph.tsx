"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { GitHubApiResponse, GitHubContribution } from "@/types/github";

interface GitHubContributionGraphProps {
  data: GitHubApiResponse | null;
  error?: boolean;
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Hash function to provide a stable, randomized delay between 0 and 2.0s for pulsing high levels
const getStableRandomDelay = (dateString: string) => {
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs((hash % 200) / 100);
};

const getLevelColor = (level: 0 | 1 | 2 | 3 | 4) => {
  switch (level) {
    case 1:
      return "#0e3d2e";
    case 2:
      return "#1a6644";
    case 3:
      return "#25a065";
    case 4:
      return "#2dd4a0";
    default:
      return "#1d1d1d";
  }
};

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

function GraphStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .shimmer-overlay {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 60%, transparent);
      animation: shimmer 1.8s infinite linear;
    }

    @keyframes pulse3 {
      0%, 100% {
        background-color: #25a065;
      }
      50% {
        background-color: #2dc47c;
      }
    }
    @keyframes pulse4 {
      0%, 100% {
        background-color: #2dd4a0;
        box-shadow: 0 0 3px rgba(45, 212, 160, 0.35);
      }
      50% {
        background-color: #40f2b9;
        box-shadow: 0 0 10px rgba(45, 212, 160, 0.75);
      }
    }
    .pulse-l3 {
      animation: pulse3 3.5s ease-in-out infinite;
    }
    .pulse-l4 {
      animation: pulse4 3.5s ease-in-out infinite;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `,
      }}
    />
  );
}

const cellVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 240,
      damping: 17,
      delay: custom.delay,
    },
  }),
};

const GridCells = React.memo(({ columns, selectedYear, animateState, handleMouseEnter, handleMouseLeave }: any) => {
  return (
    <div className="flex gap-[2px] sm:gap-[3px]">
      {columns.map((col: any, colIdx: number) => (
        <div
          key={colIdx}
          className="grid grid-rows-7 gap-[2px] sm:gap-[3px]"
          style={{ gridTemplateRows: "repeat(7, 1fr)" }}
        >
          {col.map((cell: any, rowIdx: number) => {
            const hasActivity = cell.level > 0;
            const delay = cell.level > 0 ? colIdx * 0.015 + rowIdx * 0.003 : 0.55 + colIdx * 0.007 + rowIdx * 0.002;
            const isL3 = cell.level === 3;
            const isL4 = cell.level === 4;
            const startPulseDelay = 1.0 + getStableRandomDelay(cell.date);

            return (
              <motion.div
                key={`${cell.date}-${selectedYear}`}
                custom={{ delay }}
                variants={cellVariants}
                initial="hidden"
                animate={animateState}
                onMouseEnter={(e) => handleMouseEnter(e, cell)}
                onMouseLeave={handleMouseLeave}
                className={`w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] rounded-[3px] cursor-help outline-none shadow-sm transition-colors duration-150 hover:scale-[1.3] hover:z-30 ${
                  isL3 && animateState === "visible" ? "pulse-l3" : ""
                } ${
                  isL4 && animateState === "visible" ? "pulse-l4" : ""
                } ${hasActivity ? "hover:brightness-110" : "hover:bg-[#333333]"}`}
                style={{
                  backgroundColor: getLevelColor(cell.level),
                  animationDelay: (isL3 || isL4) && animateState === "visible" ? `${startPulseDelay}s` : undefined,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
});
GridCells.displayName = "GridCells";

export default function GitHubContributionGraph({ data, error = false }: GitHubContributionGraphProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    count: number;
    level: number;
    x: number;
    y: number;
  } | null>(null);

  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | "Last Year">("Last Year");

  // Prevent hover events during scroll
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true;
      setHoveredCell((prev) => (prev !== null ? null : prev));
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const hasAnimated = isInView;

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>, cell: GitHubContribution) => {
      if (isScrolling.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const rawX = rect.left - containerRect.left + rect.width / 2;
        const containerWidth = containerRect.width;
        const tooltipHalfWidth = 85;
        const minX = tooltipHalfWidth + 4;
        const maxX = containerWidth - tooltipHalfWidth - 4;
        const clampedX = Math.max(minX, Math.min(maxX, rawX));

        setHoveredCell({
          ...cell,
          x: clampedX,
          y: rect.top - containerRect.top,
        });
      }
    },
    []
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!isScrolling.current) {
      setHoveredCell(null);
    }
  }, []);

  const animateState = mounted && hasAnimated ? "visible" : "hidden";

  if (error) {
    return (
      <section className="w-full bg-paper py-20 px-6 font-sans border-t border-white/10">
        <div className="max-w-[916px] mx-auto flex flex-col justify-center items-center h-[200px] border border-neutral-900 rounded-xl bg-neutral-950/20">
          <p className="text-neutral-600 text-sm">Could not load activity data.</p>
        </div>
      </section>
    );
  }

  if (!data || !mounted) {
    return (
      <section ref={sectionRef} className="w-full bg-paper py-20 px-6 font-sans relative border-t border-white/10">
        <GraphStyles />
        <div className="max-w-[916px] mx-auto">
          {/* Header area */}
          <div className="mb-20 text-left select-none">
            <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink mb-6">
              BUILD HISTORY
            </h2>
            <p className="text-white/70 font-sans text-lg max-w-2xl">
              Every square is something shipped.
            </p>
          </div>

          {/* Skeleton Grid */}
          <div className="relative overflow-hidden bg-[#0d0d0d]/80 border border-neutral-900 rounded-2xl p-6">
            <div className="shimmer-overlay absolute inset-0 pointer-events-none z-10" />
            <div className="w-full overflow-x-auto no-scrollbar pb-2">
              <div className="flex min-w-[630px] sm:min-w-0 items-start pr-1 sm:pr-1.5 md:pr-2">
                <div className="w-8 sm:w-10 pr-2">
                  <div className="h-4 mb-2" />
                  <div className="grid grid-rows-7 gap-[2px] sm:gap-[3px] h-[82px] sm:h-[109px] items-center justify-end">
                    <span className="text-[11px] text-[#525252] leading-none select-none">Mon</span>
                    <span />
                    <span className="text-[11px] text-[#525252] leading-none select-none">Wed</span>
                    <span />
                    <span className="text-[11px] text-[#525252] leading-none select-none">Fri</span>
                    <span />
                    <span />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="h-4 mb-2" />
                  <div className="flex gap-[2px] sm:gap-[3px]">
                    {Array.from({ length: 52 }).map((_, colIdx) => (
                      <div key={colIdx} className="grid grid-rows-7 gap-[2px] sm:gap-[3px]">
                        {Array.from({ length: 7 }).map((_, rowIdx) => (
                          <div
                            key={rowIdx}
                            className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] rounded-[3px] bg-[#1d1d1d]"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6 text-[13px] text-neutral-700 select-none animate-pulse">
            <div className="w-48 h-4 bg-neutral-900 rounded" />
            <span>·</span>
            <div className="w-24 h-4 bg-neutral-900 rounded" />
            <span>·</span>
            <div className="w-32 h-4 bg-neutral-900 rounded" />
          </div>
        </div>
      </section>
    );
  }

  // Extract unique years from contributions
  const availableYears = Array.from(
    new Set(data.contributions.map((c) => c.date.substring(0, 4)))
  )
    .filter((yr) => /^\d{4}$/.test(yr))
    .map(Number)
    .sort((a, b) => b - a);

  // Exact Sunday / Saturday aligning logic relative to the selected year
  const sortedContributions = [...data.contributions].sort((a, b) => a.date.localeCompare(b.date));
  
  let endSaturday: Date;
  if (selectedYear === "Last Year") {
    const now = new Date();
    const currentUTCDay = now.getUTCDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const daysToSaturday = 6 - currentUTCDay;
    endSaturday = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + daysToSaturday,
      0, 0, 0, 0
    ));
  } else {
    // Find last Saturday of selectedYear
    const endOfYear = new Date(Date.UTC(selectedYear, 11, 31, 0, 0, 0, 0));
    const endOfYearDay = endOfYear.getUTCDay(); // 0 is Sunday, ..., 6 is Saturday
    const daysToSaturday = 6 - endOfYearDay;
    endSaturday = new Date(Date.UTC(
      selectedYear,
      11,
      31 + daysToSaturday,
      0, 0, 0, 0
    ));
  }

  const contributionsMap: Record<string, GitHubContribution> = {};
  sortedContributions.forEach((c) => {
    contributionsMap[c.date] = c;
  });

  // Construct 52 columns of 7 cells
  const columns: GitHubContribution[][] = [];
  let totalGridContributions = 0;
  let activeDaysInGrid = 0;

  for (let w = 0; w < 52; w++) {
    const colCells: GitHubContribution[] = [];
    for (let d = 0; d < 7; d++) {
      const dayOffset = (51 - w) * 7 + (6 - d);
      const targetDateObj = new Date(endSaturday.getTime() - dayOffset * 24 * 60 * 60 * 1000);
      const yyyy = targetDateObj.getUTCFullYear();
      const mm = String(targetDateObj.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(targetDateObj.getUTCDate()).padStart(2, "0");
      const dateString = `${yyyy}-${mm}-${dd}`;

      const contrib = contributionsMap[dateString] || { date: dateString, count: 0, level: 0 };
      colCells.push(contrib);

      totalGridContributions += contrib.count;
      if (contrib.count > 0) {
        activeDaysInGrid++;
      }
    }
    columns.push(colCells);
  }

  // Month Labels configuration
  const getMonthOfColumnMon = (w: number) => {
    const dayOffset = (51 - w) * 7 + 5;
    const targetDateObj = new Date(endSaturday.getTime() - dayOffset * 24 * 60 * 60 * 1000);
    return targetDateObj.getUTCMonth();
  };

  const initialLabels: { index: number; label: string }[] = [];
  let prevMonth = -1;
  for (let w = 0; w < 52; w++) {
    const currentMonth = getMonthOfColumnMon(w);
    if (currentMonth !== prevMonth) {
      initialLabels.push({ index: w, label: MONTH_NAMES[currentMonth] });
      prevMonth = currentMonth;
    }
  }

  // Prevent month label crowding on tight layouts
  const filteredMonthLabels: { index: number; label: string }[] = [];
  let lastPrinted = -10;
  initialLabels.forEach((labelItem) => {
    if (labelItem.index - lastPrinted >= 3) {
      filteredMonthLabels.push(labelItem);
      lastPrinted = labelItem.index;
    }
  });

  // Hover alignment coords handler moved to top of component

  // Weekly consecutive activity streak going back from latest
  let weekStreak = 0;
  for (let colIdx = 51; colIdx >= 0; colIdx--) {
    const colContributions = columns[colIdx];
    const colSum = colContributions ? colContributions.reduce((sum, c) => sum + c.count, 0) : 0;
    if (colSum > 0) {
      weekStreak++;
    } else {
      if (colIdx === 51) {
        // If current week is empty due to mid-week lag, continue calculating streak
        continue;
      }
      break;
    }
  }

  // Custom cell animation logic moved to top of component

  // cellVariants moved to top of component

  // Custom mini bar of relative intensity for the tooltip upgrade
  const renderIntensityBlocks = (level: number) => {
    return (
      <div className="flex gap-[3px] items-center mt-1">
        {Array.from({ length: 4 }).map((_, i) => {
          const isActive = i < level;
          const bg = isActive ? getLevelColor(level as any) : "#2d2d2d";
          return (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-[1.5px] transition-colors"
              style={{ backgroundColor: bg }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="w-full bg-paper py-20 px-6 font-sans antialiased text-white selection:bg-[#2dd4a0]/30 border-t border-white/10">
      <GraphStyles />
      <div className="max-w-[916px] mx-auto">
        {/* Header area with interactive year triggers */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-20 select-none">
          <div>
            <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink mb-6 uppercase">
              Build History
            </h2>
            <p className="text-white/70 font-sans text-lg max-w-2xl">
              Every square is something shipped.
            </p>
          </div>

          {/* Year selector pills */}
          {availableYears.length > 0 && (
            <div className="flex flex-wrap gap-1.5 bg-[#0d0d0d] border border-neutral-900 rounded-full p-1 self-start sm:self-auto shadow-sm">
              <button
                onClick={() => setSelectedYear("Last Year")}
                className={`px-3 py-1 text-xs font-semibold rounded-full select-none transition-all duration-200 cursor-pointer ${
                  selectedYear === "Last Year"
                    ? "bg-white text-black shadow"
                    : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                Last Year
              </button>
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full select-none transition-all duration-200 cursor-pointer ${
                    selectedYear === year
                      ? "bg-white text-black shadow"
                      : "text-[#a3a3a3] hover:text-white"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contribution Graph Widget */}
        <div className="relative bg-[#0d0d0d] border border-neutral-900 rounded-2xl p-6">
          <div ref={scrollRef} className="w-full overflow-x-auto no-scrollbar pb-2">
            <div ref={containerRef} className="relative flex min-w-[630px] sm:min-w-0 items-start pr-1 sm:pr-1.5 md:pr-2">
              {/* Tooltip render inside scrollable parent wrapper */}
              {hoveredCell && (
                <div
                  className="absolute pointer-events-none bg-[#161616] text-[#e5e5e5] text-[11px] px-3 py-2 rounded-lg whitespace-nowrap z-50 transition-transform duration-100 shadow-2xl font-sans border border-neutral-900 flex flex-col gap-1 items-start"
                  style={{
                    left: `${hoveredCell.x}px`,
                    top: `${hoveredCell.y - 48}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <span className="text-[#a3a3a3] text-[10px] uppercase tracking-wider font-semibold">
                    {formatDate(hoveredCell.date)}
                  </span>
                  <div className="flex items-center gap-2">
                    {renderIntensityBlocks(hoveredCell.level)}
                    <span className="text-white font-medium">
                      {hoveredCell.count} {hoveredCell.count === 1 ? 'contribution' : 'contributions'}
                    </span>
                  </div>
                </div>
              )}

              {/* Day labels column */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={animateState === "visible" ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-8 sm:w-10 pr-2 flex-shrink-0"
              >
                <div className="h-4 mb-2" />
                <div
                  className="grid grid-rows-7 gap-[2px] sm:gap-[3px] h-[82px] sm:h-[109px] items-center justify-end"
                  style={{ gridTemplateRows: "repeat(7, 1fr)" }}
                >
                  <span className="text-[11px] text-[#525252] font-semibold leading-none select-none">Mon</span>
                  <span />
                  <span className="text-[11px] text-[#525252] font-semibold leading-none select-none">Wed</span>
                  <span />
                  <span className="text-[11px] text-[#525252] font-semibold leading-none select-none">Fri</span>
                  <span />
                  <span />
                </div>
              </motion.div>

              {/* Grid Column Tracks content */}
              <div className="flex-1 flex flex-col">
                {/* Month header row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animateState === "visible" ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-[2px] sm:gap-[3px] h-4 mb-2 select-none"
                >
                  {columns.map((_, colIdx) => {
                    const labelItem = filteredMonthLabels.find((l) => l.index === colIdx);
                    return (
                      <div
                        key={colIdx}
                        className="w-[10px] h-4 sm:w-[13px] flex-shrink-0 relative"
                      >
                        {labelItem && (
                          <span className="absolute left-[1px] -top-[2px] text-[11px] text-[#525252] font-semibold whitespace-nowrap">
                            {labelItem.label}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </motion.div>

                {/* Staggered squares view */}
                <GridCells
                  columns={columns}
                  selectedYear={selectedYear}
                  animateState={animateState}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats footer Row */}
        <div className="flex flex-wrap gap-y-1 mt-8 text-[13px] text-[#a3a3a3] select-none items-center font-sans">
          <span className="text-white font-semibold">{totalGridContributions.toLocaleString()}</span>&nbsp;
          {selectedYear === "Last Year" ? "contributions in the last year" : `contributions in ${selectedYear}`}
          <span className="text-[#404040] select-none font-medium mx-2.5">·</span>
          <span className="text-white font-semibold">{weekStreak} week</span>&nbsp;streak
          <span className="text-[#404040] select-none font-medium mx-2.5">·</span>
          <span className="text-white font-semibold">{activeDaysInGrid}</span>&nbsp;active days
        </div>
      </div>
    </section>
  );
}
