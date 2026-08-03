/**
 * Code versions of the two photographic dashboard mockups in the hero.
 *
 * The imported frame already contains two card mockups built entirely from
 * markup (the "Infenix" tutor UI and its sibling). These two mirror that
 * approach for the remaining PNG cards, sharing the #161616 surface, hairline
 * border and drop shadow of `Background+Border+Shadow` in the import.
 *
 * Both are portrait 9:16, covering roughly the same area on the hero as the
 * import's landscape coded cards. They are authored on a large canvas and
 * uniformly scaled down, so the type and chart geometry can be written at
 * sane values.
 */

const DESIGN_W = 752
const DESIGN_H = 540
const CARD_W = 188

// Portrait sibling: a 9:16 canvas, sized so the card covers about the same
// area on the hero as the landscape ones rather than towering over them.
const PORTRAIT_W = 540
const PORTRAIT_H = 960
const PORTRAIT_CARD_W = 120

type ShellProps = {
  width?: number
  designWidth?: number
  designHeight?: number
  children: React.ReactNode
}

function CardShell({
  width = CARD_W,
  designWidth = DESIGN_W,
  designHeight = DESIGN_H,
  children,
}: ShellProps) {
  const scale = width / designWidth
  const ratio = width / CARD_W

  return (
    <div
      className="bg-[#161616] overflow-hidden relative"
      style={{
        width,
        height: (width * designHeight) / designWidth,
        borderRadius: 5.408 * ratio,
        boxShadow: `0px ${8.449 * ratio}px ${16.899 * ratio}px ${-4.056 * ratio}px rgba(0,0,0,0.25)`,
      }}
    >
      <div
        className="absolute left-0 origin-top-left top-0"
        style={{ width: designWidth, height: designHeight, transform: `scale(${scale})` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          border: `${Math.max(0.338 * ratio, 0.5)}px solid rgba(255,255,255,0.2)`,
          borderRadius: 5.408 * ratio,
        }}
      />
    </div>
  )
}

function TitleBar({ label }: { label: string }) {
  return (
    <div className="bg-[#222] border-b border-[rgba(255,255,255,0.06)] flex h-[40px] items-center px-[16px] relative shrink-0">
      <div className="flex gap-[6px] items-center">
        <span className="bg-[rgba(251,44,54,0.5)] rounded-full size-[9px]" />
        <span className="bg-[rgba(240,177,0,0.5)] rounded-full size-[9px]" />
        <span className="bg-[rgba(0,201,80,0.5)] rounded-full size-[9px]" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Consolas:Regular',monospace] left-1/2 text-[#9f9fa9] text-[10px] tracking-[1.4px]">
        {label}
      </p>
    </div>
  )
}

const ICONS: Record<string, string> = {
  cap: 'M3 6.5 10 3l7 3.5L10 10 3 6.5Zm3 3.2v3.4c0 .9 1.8 1.6 4 1.6s4-.7 4-1.6V9.7',
  grid: 'M3.5 3.5h5.2v5.2H3.5zM11.3 3.5h5.2v5.2h-5.2zM3.5 11.3h5.2v5.2H3.5zM11.3 11.3h5.2v5.2h-5.2z',
  pulse: 'M3 10h3l2.2-5.4L11.6 15l2-5h3.4',
  edit: 'M4 16h3l8.2-8.2a1.7 1.7 0 0 0 0-2.4l-.6-.6a1.7 1.7 0 0 0-2.4 0L4 13v3Z',
  book: 'M3.5 4.5h4.2c1.3 0 2.3.8 2.3 1.8v9c0-1-1-1.8-2.3-1.8H3.5v-9Zm13 0h-4.2c-1.3 0-2.3.8-2.3 1.8v9c0-1 1-1.8 2.3-1.8h4.2v-9Z',
  users: 'M3.5 16.5c0-2.4 1.9-4 4.2-4s4.3 1.6 4.3 4M7.7 9.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm5.6 0a2.4 2.4 0 0 0 0-4.8m.6 11.7c0-2-.8-3.3-2-4',
  bell: 'M6 8.4a4 4 0 1 1 8 0c0 3.2 1.3 4.4 1.3 4.4H4.7S6 12.6 6 9.4v-1Zm2.3 6.8a1.8 1.8 0 0 0 3.4 0',
}

function Glyph({ name, className = '' }: { name: keyof typeof ICONS | string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d={ICONS[name]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
    </svg>
  )
}

function Rail({ active = 'cap' }: { active?: string }) {
  const items = ['cap', 'grid', 'pulse', 'edit', 'book', 'users', 'bell']
  return (
    <div className="bg-[#1a1a1a] border-r border-[rgba(255,255,255,0.06)] flex flex-col gap-[12px] items-center pt-[14px] shrink-0 w-[48px]">
      {items.map((name) => {
        const on = name === active
        return (
          <div
            key={name}
            className={
              on
                ? 'bg-[rgba(168,85,247,0.18)] border border-[rgba(192,132,252,0.5)] flex items-center justify-center rounded-[8px] size-[30px] text-[#c084fc]'
                : 'flex items-center justify-center size-[30px] text-[#6b6b72]'
            }
          >
            <Glyph className="size-[18px]" name={name} />
          </div>
        )
      })}
    </div>
  )
}

function Panel({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`bg-[#141414] border border-[rgba(255,255,255,0.07)] rounded-[10px] ${className}`}
    >
      {children}
    </div>
  )
}

function PanelTitle({ icon, children }: { icon?: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-[6px] items-center text-[#d4d4d8]">
      {icon ? <Glyph className="size-[13px]" name={icon} /> : null}
      <p className="font-['Inter:Regular',sans-serif] font-semibold text-[9.5px] tracking-[0.9px] uppercase">
        {children}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ card 1 */

const STATS_A = [
  { label: 'Total OD Requests', value: '82', color: '#00c950' },
  { label: 'Total Leave Requests', value: '36', color: '#51a2ff' },
  { label: 'Pending Approvals', value: '27', color: '#f0b100' },
  { label: 'Alerts', value: '5', color: '#fb2c4e' },
  { label: 'Avg SLA', value: '18h', color: '#c084fc' },
]

const PIPELINE = [
  { n: '26', label: 'Submitted', bg: '#1b3a63' },
  { n: '18', label: 'Counselor', bg: '#245084' },
  { n: '12', label: 'Event', bg: '#2f63a3' },
  { n: '9', label: 'Year Coord', bg: '#6b3fa0' },
  { n: '7', label: 'HOD', bg: '#8b3fd1' },
  { n: '4', label: 'Principal', bg: '#8a6a10' },
  { n: '6', label: 'Completed', bg: '#0d6b40' },
]

const STAGES = [
  { name: 'Counselor', pct: 40, time: '12h', tag: 'STABLE', color: '#00c950', tone: '#00c950' },
  { name: 'Event Coord', pct: 48, time: '16h', tag: 'STABLE', color: '#00c950', tone: '#00c950' },
  { name: 'HOD Review', pct: 96, time: '48h', tag: 'WARNING', color: '#f0b100', tone: '#f0b100' },
  { name: 'Principal', pct: 20, time: '8h', tag: 'CLEAR', color: '#2b7fff', tone: '#51a2ff' },
]

const ACTIVITY = [
  { t: '2h ago', text: 'OD request approved by HOD', color: '#c084fc' },
  { t: '4h ago', text: 'Leave request returned for proof', color: '#f0b100' },
  { t: '6h ago', text: 'Event permission to Principal', color: '#2b7fff' },
  { t: '1d ago', text: 'SLA report exported', color: '#6b6b72' },
]

const BOTTLENECKS = [
  { name: 'HOD Review', meta: '48h 54m', pct: 92, color: '#fb2c4e', risk: true },
  { name: 'Event Coord', meta: '12 PEND', pct: 54, color: '#f0b100' },
  { name: 'Counselor', meta: '18 ACTV', pct: 66, color: '#2b7fff' },
  { name: 'Principal', meta: '4 PEND', pct: 30, color: '#00c950' },
]

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.12)] flex font-['Inter:Regular',sans-serif] gap-[5px] items-center px-[10px] py-[6px] rounded-[8px] text-[#e4e4e7] text-[10px]">
      {children}
    </div>
  )
}

export function RequestsPipelineCard({ width = PORTRAIT_CARD_W }: { width?: number }) {
  return (
    <CardShell designHeight={PORTRAIT_H} designWidth={PORTRAIT_W} width={width}>
      <div className="flex flex-col size-full">
        <TitleBar label="OPERATIONAL VIEW" />
        <div className="flex flex-1 min-h-0">
          <Rail active="cap" />
          <div className="flex flex-col flex-1 gap-[11px] min-w-0 p-[14px]">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-semibold text-[19px] text-white">
                  Requests & Pipelines
                </p>
                <p className="font-['Inter:Regular',sans-serif] mt-[3px] text-[#6b6b72] text-[8.5px] tracking-[0.9px] uppercase">
                  Unified OD and leave approvals
                </p>
              </div>
              <div className="flex gap-[6px]">
                <Pill>SLA &lt; 24h ⌄</Pill>
                <Pill>↓ Export</Pill>
              </div>
            </div>

            <div className="flex gap-[5px]">
              {STATS_A.map((s) => (
                <Panel className="flex-1 px-[6px] py-[7px]" key={s.label}>
                  <p className="font-['Inter:Regular',sans-serif] leading-[1.25] text-[#9f9fa9] text-[7px] tracking-[0.5px] uppercase">
                    {s.label}
                  </p>
                  <p
                    className="font-['Inter:Regular',sans-serif] font-semibold mt-[3px] text-[19px]"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </p>
                </Panel>
              ))}
            </div>

            <Panel className="px-[10px] py-[9px]">
              <div className="flex items-center justify-between">
                <PanelTitle>OD Request Pipeline</PanelTitle>
                <div className="flex font-['Inter:Regular',sans-serif] gap-[9px] text-[#9f9fa9] text-[7.5px] tracking-[0.4px] uppercase">
                  {[
                    ['#2b7fff', 'Active 73'],
                    ['#00c950', 'Completed 8'],
                    ['#fb2c4e', 'SLA Risk 5'],
                  ].map(([c, t]) => (
                    <span className="flex gap-[4px] items-center" key={t}>
                      <span className="rounded-full size-[4px]" style={{ background: c }} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-[2px] mt-[8px]">
                {PIPELINE.map((p) => (
                  <div className="flex-1 min-w-0" key={p.label}>
                    <div
                      className="flex font-['Inter:Regular',sans-serif] font-semibold h-[32px] items-center justify-center rounded-[4px] text-[12px] text-white"
                      style={{ background: p.bg }}
                    >
                      {p.n}
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] mt-[4px] overflow-hidden text-[#9f9fa9] text-[6px] text-center text-ellipsis tracking-[0.3px] uppercase whitespace-nowrap">
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>

            <div className="flex gap-[9px]">
              <Panel className="flex-1 min-w-0 px-[10px] py-[9px]">
                <PanelTitle icon="edit">Leave Pipeline</PanelTitle>
                <div className="flex gap-[2px] mt-[9px]">
                  <span className="bg-[#2b7fff] h-[10px] rounded-l-[3px] w-[55%]" />
                  <span className="bg-[#00c950] h-[10px] w-[30%]" />
                  <span className="bg-[#fb2c4e] h-[10px] rounded-r-[3px] w-[15%]" />
                </div>
                <div className="flex font-['Inter:Regular',sans-serif] justify-between mt-[7px] text-[#9f9fa9] text-[6.5px] tracking-[0.3px] uppercase">
                  <span>
                    Sub <b className="text-white">21</b>
                  </span>
                  <span>
                    Appr <b className="text-white">11</b>
                  </span>
                  <span>
                    Rej <b className="text-white">4</b>
                  </span>
                </div>
                <div className="flex gap-[5px] mt-[10px]">
                  {[
                    ['72%', 'Approval', '#00c950'],
                    ['4', 'Returned', '#f0b100'],
                    ['14h', 'Avg Dec', '#ffffff'],
                  ].map(([v, l, c]) => (
                    <div
                      className="border border-[rgba(255,255,255,0.07)] flex-1 py-[8px] rounded-[7px]"
                      key={l}
                    >
                      <p
                        className="font-['Inter:Regular',sans-serif] font-semibold text-[13px] text-center"
                        style={{ color: c }}
                      >
                        {v}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] mt-[2px] text-[#9f9fa9] text-[6px] text-center tracking-[0.3px] uppercase">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel className="flex-1 min-w-0 px-[10px] py-[9px]">
                <PanelTitle icon="pulse">Stage Health</PanelTitle>
                <div className="flex flex-col gap-[9px] mt-[9px]">
                  {STAGES.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between">
                        <p className="font-['Inter:Regular',sans-serif] text-[8.5px] text-[rgba(255,255,255,0.75)]">
                          {s.name}
                        </p>
                        <span
                          className="border font-['Inter:Regular',sans-serif] font-semibold px-[5px] py-[1.5px] rounded-[4px] text-[6px] tracking-[0.4px]"
                          style={{
                            color: s.tone,
                            borderColor: `${s.tone}55`,
                            background: `${s.tone}1a`,
                          }}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <div className="flex gap-[6px] items-center mt-[4px]">
                        <div className="bg-[rgba(255,255,255,0.08)] flex-1 h-[3.5px] rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{ background: s.color, width: `${s.pct}%` }}
                          />
                        </div>
                        <span className="font-['Inter:Regular',sans-serif] text-[7.5px] text-white">
                          {s.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <Panel className="px-[10px] py-[9px]">
              <PanelTitle icon="bell">SLA Monitor</PanelTitle>
              <div className="flex gap-[12px] items-center mt-[6px]">
                <div className="shrink-0">
                  <svg className="size-[62px]" viewBox="0 0 54 54">
                    <circle
                      cx="27"
                      cy="27"
                      fill="none"
                      r="21"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="5"
                    />
                    <circle
                      cx="27"
                      cy="27"
                      fill="none"
                      r="21"
                      stroke="#c084fc"
                      strokeDasharray="132 132"
                      strokeDashoffset="40"
                      strokeLinecap="round"
                      strokeWidth="5"
                      transform="rotate(-90 27 27)"
                    />
                    <text
                      fill="white"
                      fontFamily="Inter:Regular, sans-serif"
                      fontSize="12"
                      fontWeight="600"
                      textAnchor="middle"
                      x="27"
                      y="31"
                    >
                      18h
                    </text>
                  </svg>
                  <p className="bg-[rgba(255,255,255,0.05)] font-['Inter:Regular',sans-serif] mt-[3px] py-[2px] rounded-[4px] text-[#9f9fa9] text-[6px] text-center tracking-[0.4px] uppercase">
                    Target 24h
                  </p>
                </div>
                <div className="flex flex-1 gap-[6px]">
                  {[
                    ['Overdue', '5', '#fb2c4e'],
                    ['At Risk', '9', '#f0b100'],
                    ['Cleared', '14', '#00c950'],
                  ].map(([l, v, c]) => (
                    <div
                      className="border border-[rgba(255,255,255,0.07)] flex-1 px-[7px] py-[8px] rounded-[7px]"
                      key={l}
                    >
                      <p
                        className="font-['Inter:Regular',sans-serif] font-semibold text-[14px]"
                        style={{ color: c }}
                      >
                        {v}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] mt-[2px] text-[#9f9fa9] text-[6.5px] tracking-[0.3px] uppercase">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            <div className="flex flex-1 gap-[9px] min-h-0">
              <Panel className="flex-1 min-w-0 px-[10px] py-[9px]">
                <PanelTitle icon="pulse">Recent Activity</PanelTitle>
                <div className="flex flex-col gap-[8px] mt-[9px]">
                  {ACTIVITY.map((a) => (
                    <div className="flex gap-[6px] items-start" key={a.text}>
                      <span
                        className="mt-[3px] rounded-full shrink-0 size-[5px]"
                        style={{ background: a.color }}
                      />
                      <div className="min-w-0">
                        <p className="font-['Inter:Regular',sans-serif] text-[7.5px] text-[rgba(255,255,255,0.8)]">
                          {a.text}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[#6b6b72] text-[6.5px]">
                          {a.t}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel className="flex-1 min-w-0 px-[10px] py-[9px]">
                <PanelTitle icon="book">Policy Snapshot</PanelTitle>
                <div className="flex flex-col gap-[6px] mt-[9px]">
                  {[
                    'Max 2 consecutive ODs',
                    'Proof required for OD',
                    'HOD approval for leave',
                    'Auto alert after 24h',
                  ].map((p) => (
                    <div
                      className="border border-[rgba(255,255,255,0.07)] flex gap-[6px] items-center px-[7px] py-[6px] rounded-[6px]"
                      key={p}
                    >
                      <svg className="size-[10px] shrink-0" fill="none" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="5" stroke="#00c950" strokeWidth="1" />
                        <path
                          d="m3.8 6.1 1.5 1.5 2.9-3"
                          stroke="#00c950"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.1"
                        />
                      </svg>
                      <span className="font-['Inter:Regular',sans-serif] text-[7.5px] text-[rgba(255,255,255,0.8)]">
                        {p}
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <Panel className="px-[10px] py-[9px]">
              <PanelTitle icon="bell">Bottlenecks</PanelTitle>
              <div className="flex flex-col gap-[8px] mt-[9px]">
                {BOTTLENECKS.map((b) => (
                  <div key={b.name}>
                    <div className="flex items-center justify-between">
                      <span className="flex gap-[5px] items-center">
                        <span className="font-['Inter:Regular',sans-serif] text-[8px] text-[rgba(255,255,255,0.8)]">
                          {b.name}
                        </span>
                        {b.risk ? (
                          <span className="bg-[rgba(251,44,78,0.15)] font-['Inter:Regular',sans-serif] font-semibold px-[4px] py-[1px] rounded-[3px] text-[#fb2c4e] text-[6px] tracking-[0.4px]">
                            HIGH RISK
                          </span>
                        ) : null}
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] text-[#9f9fa9] text-[7px]">
                        {b.meta}
                      </span>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.08)] h-[3.5px] mt-[4px] rounded-full">
                      <div
                        className="h-full rounded-full"
                        style={{ background: b.color, width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </CardShell>
  )
}

/* ------------------------------------------------------------------ card 2 */

const STATS_B = [
  { label: 'Students', value: '2,480', color: '#51a2ff' },
  { label: 'Faculty', value: '126', color: '#c084fc' },
  { label: 'Staff', value: '42', color: '#00c950' },
  { label: 'Pending Approvals', value: '26', color: '#f0b100' },
  { label: 'Today Events', value: '06', color: '#fb2c4e' },
]

const WEEK = [
  { d: 'M', h: 14 },
  { d: 'T', h: 22 },
  { d: 'W', h: 9 },
  { d: 'T', h: 34 },
  { d: 'F', h: 42 },
  { d: 'S', h: 20 },
  { d: 'S', h: 17 },
]

const RADAR_AXES = ['Attendance', 'Credits', 'Projects', 'Events', 'Approvals', 'Engagement']
const RADAR_VALUES = [0.92, 0.72, 0.6, 0.82, 0.66, 0.8]

function radarPoint(i: number, r: number, cx: number, cy: number) {
  const angle = (Math.PI / 3) * i - Math.PI / 2
  return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const
}

function Radar() {
  const cx = 58
  const cy = 58
  const max = 46
  const ring = (f: number) =>
    RADAR_AXES.map((_, i) => radarPoint(i, max * f, cx, cy).join(',')).join(' ')
  const shape = RADAR_VALUES.map((v, i) => radarPoint(i, max * v, cx, cy).join(',')).join(' ')

  return (
    <svg className="size-[116px]" viewBox="0 0 116 116">
      <defs>
        <linearGradient id="radarFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {[0.4, 0.7, 1].map((f) => (
        <polygon
          fill="none"
          key={f}
          points={ring(f)}
          stroke="rgba(192,132,252,0.25)"
          strokeWidth="0.7"
        />
      ))}
      {RADAR_AXES.map((_, i) => {
        const [x, y] = radarPoint(i, max, cx, cy)
        return (
          <line
            key={i}
            stroke="rgba(192,132,252,0.2)"
            strokeWidth="0.7"
            x1={cx}
            x2={x}
            y1={cy}
            y2={y}
          />
        )
      })}
      <polygon fill="url(#radarFill)" points={shape} stroke="#c084fc" strokeWidth="1.2" />
      {RADAR_VALUES.map((v, i) => {
        const [x, y] = radarPoint(i, max * v, cx, cy)
        return <circle cx={x} cy={y} fill="#c084fc" key={i} r="1.8" />
      })}
    </svg>
  )
}

function TrendChart() {
  const attendance = 'M4 62 C 60 62, 78 34, 132 34 S 210 20, 268 18 S 330 14, 372 10'
  const credits = 'M4 78 C 60 78, 78 52, 132 52 S 210 40, 268 36 S 330 30, 372 26'

  return (
    <svg className="h-[86px] w-full" preserveAspectRatio="none" viewBox="0 0 376 96">
      <defs>
        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00c950" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00c950" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="trendFill2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2b7fff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2b7fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${attendance} L 372 96 L 4 96 Z`} fill="url(#trendFill2)" />
      <path d={`${credits} L 372 96 L 4 96 Z`} fill="url(#trendFill)" />
      <path d={attendance} fill="none" stroke="#2b7fff" strokeLinecap="round" strokeWidth="3.4" />
      <path d={credits} fill="none" stroke="#00c950" strokeLinecap="round" strokeWidth="3.4" />
    </svg>
  )
}

export function ControlCenterCard({ width = PORTRAIT_CARD_W }: { width?: number }) {
  return (
    <CardShell designHeight={PORTRAIT_H} designWidth={PORTRAIT_W} width={width}>
      <div className="flex flex-col size-full">
        <TitleBar label="OPERATIONAL VIEW" />
        <div className="flex flex-1 min-h-0">
          <Rail active="pulse" />
          <div className="flex flex-col flex-1 gap-[11px] min-w-0 p-[14px]">
            <div className="flex gap-[9px] items-center">
              <div className="bg-[rgba(168,85,247,0.18)] border border-[rgba(192,132,252,0.5)] flex items-center justify-center rounded-[9px] shrink-0 size-[34px] text-[#c084fc]">
                <Glyph className="size-[20px]" name="cap" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter:Regular',sans-serif] font-semibold text-[17px] text-white">
                  CampusVidhya Control Center
                </p>
                <p className="font-['Inter:Regular',sans-serif] mt-[2px] text-[#6b6b72] text-[8.5px] tracking-[0.9px] uppercase">
                  Academic operations dashboard
                </p>
              </div>
              <Pill>Admin ⌄</Pill>
            </div>

            <div className="flex gap-[5px]">
              {STATS_B.map((s) => (
                <Panel className="flex-1 px-[6px] py-[7px]" key={s.label}>
                  <p className="font-['Inter:Regular',sans-serif] leading-[1.25] text-[#9f9fa9] text-[7px] tracking-[0.5px] uppercase">
                    {s.label}
                  </p>
                  <p
                    className="font-['Inter:Regular',sans-serif] font-semibold mt-[3px] text-[18px]"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </p>
                </Panel>
              ))}
            </div>

            <Panel className="px-[10px] py-[9px]">
              <div className="flex items-center justify-between">
                <PanelTitle icon="edit">Approval Queue</PanelTitle>
                <span className="bg-[rgba(240,177,0,0.12)] border border-[rgba(240,177,0,0.45)] font-['Inter:Regular',sans-serif] font-semibold px-[7px] py-[3px] rounded-[6px] text-[#f0b100] text-[7px] tracking-[0.8px] uppercase">
                  Action Required
                </span>
              </div>
              <div className="flex flex-col gap-[7px] mt-[9px]">
                {[
                  ['OD Request - CSE Dept', 'SLA 18h'],
                  ['Leave Request - ECE Faculty', 'Pending Review'],
                ].map(([t, s]) => (
                  <div
                    className="border border-[rgba(255,255,255,0.07)] flex items-center justify-between px-[9px] py-[8px] rounded-[7px]"
                    key={t}
                  >
                    <div className="min-w-0">
                      <p className="font-['Inter:Regular',sans-serif] text-[9px] text-[rgba(255,255,255,0.9)]">
                        {t}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] mt-[1px] text-[#6b6b72] text-[7px]">
                        {s}
                      </p>
                    </div>
                    <span className="border border-[rgba(0,201,80,0.45)] font-['Inter:Regular',sans-serif] font-semibold px-[9px] py-[4px] rounded-[6px] shrink-0 text-[#00c950] text-[7.5px] tracking-[0.7px] uppercase">
                      Approve
                    </span>
                  </div>
                ))}
              </div>
            </Panel>

            <div className="flex gap-[9px]">
              <Panel className="flex-1 min-w-0 px-[10px] py-[9px]">
                <PanelTitle icon="grid">Weekly Activity</PanelTitle>
                <div className="flex gap-[5px] h-[52px] items-end mt-[9px]">
                  {WEEK.map((w, i) => (
                    <div className="flex flex-1 flex-col items-center" key={i}>
                      <span className="bg-[#7c3aed] rounded-t-[3px] w-full" style={{ height: w.h }} />
                      <span className="font-['Inter:Regular',sans-serif] mt-[3px] text-[#9f9fa9] text-[6.5px]">
                        {w.d}
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel className="px-[10px] py-[9px] w-[168px]">
                <div className="flex gap-[5px] items-center text-[#fb2c4e]">
                  <Glyph className="size-[13px]" name="bell" />
                  <p className="font-['Inter:Regular',sans-serif] font-semibold text-[9.5px] tracking-[0.9px] uppercase">
                    Alerts
                  </p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.4] mt-[7px] text-[9px] text-[rgba(255,255,255,0.85)]">
                  Leave requests spiking. Check coverage.
                </p>
              </Panel>
            </div>

            <Panel className="flex flex-col flex-1 min-h-0 px-[10px] py-[9px]">
              <div className="flex items-center justify-between">
                <PanelTitle icon="pulse">Performance Trends</PanelTitle>
                <div className="flex font-['Inter:Regular',sans-serif] gap-[8px] text-[#9f9fa9] text-[7px]">
                  {[
                    ['#00c950', 'Credits'],
                    ['#2b7fff', 'Attendance'],
                  ].map(([c, t]) => (
                    <span className="flex gap-[3px] items-center" key={t}>
                      <span className="rounded-full size-[4px]" style={{ background: c }} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-end min-h-0">
                <TrendChart />
                <div className="flex font-['Inter:Regular',sans-serif] justify-between mt-[4px] text-[#6b6b72] text-[6.5px]">
                  {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel className="px-[10px] py-[9px]">
              <PanelTitle icon="pulse">Radar Snapshot</PanelTitle>
              <div className="flex gap-[12px] items-center mt-[4px]">
                <Radar />
                <p className="font-['Inter:Regular',sans-serif] flex-1 leading-[1.45] text-[9px] text-[rgba(255,255,255,0.7)]">
                  Overview across key academic dimensions. Keep improving!
                </p>
              </div>
            </Panel>

            <p className="font-['Consolas:Regular',monospace] text-[#3f3f46] text-[7px] text-center tracking-[1.6px] uppercase">
              CampusVidhya • Empowering Education
            </p>
          </div>
        </div>
      </div>
    </CardShell>
  )
}
