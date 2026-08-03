import { useEffect, useRef, type CSSProperties } from 'react'
import Desktop from './index'
import { RequestsPipelineCard, ControlCenterCard } from './DashboardCards'
import svgPaths from './svg-jo09tmkj9w'

// The imported frame is a fixed 1440 x 1024 composition of absolutely
// positioned layers. From tablet up it is rendered at native size and
// uniformly scaled to the viewport; below that the layers would be too small
// to read, so a fluid stacked arrangement of the same content is used.
const FRAME_W = 1440
const FRAME_H = 1024
const MAX_SCALE = 1.25

function DesktopFrame() {
  return (
    <div
      className="hidden md:flex justify-center overflow-hidden relative w-full"
      style={{ height: `min(${FRAME_H * MAX_SCALE}px, calc(100vw * ${FRAME_H / FRAME_W}))` }}
    >
      <div
        className="origin-top"
        style={{
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
          transform: `scale(min(${MAX_SCALE}, 100vw / ${FRAME_W}))`,
        }}
      >
        <Desktop />
      </div>
    </div>
  )
}

function Telescope({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 100 100">
      <path d={svgPaths.p317c1c00} fill="white" fillOpacity="0.35" />
      <path d={svgPaths.p26fd9100} fill="#F5F5F5" />
    </svg>
  )
}

function MobileHero() {
  return (
    <div className="flex flex-col items-center justify-center md:hidden px-[24px] py-[40px] relative w-full min-h-[100dvh] overflow-hidden">
      <nav
        className="absolute top-[40px] flex flex-col hero-rise items-center w-full z-20"
        style={{ '--d': '0.1s' } as CSSProperties}
      >
        <div className="font-['Libre_Baskerville:Regular',sans-serif] text-[#f5f5f5] text-[20px] text-center">
          SIDHANTH S
        </div>
      </nav>

      {/* Floating Cards Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute hero-shuffle" style={{ top: '15%', left: '-2%', '--d': '0.1s', '--dx': '100px', '--dy': '100px', '--dr': '25deg' } as CSSProperties}>
          <div className="-rotate-[18deg]">
            <RequestsPipelineCard width={110} />
          </div>
        </div>
        {/* Top Right */}
        <div className="absolute hero-shuffle" style={{ top: '12%', right: '2%', '--d': '0.25s', '--dx': '-100px', '--dy': '100px', '--dr': '19deg' } as CSSProperties}>
          <div className="rotate-[12deg] w-[100px] h-[100px] rounded-[8px] overflow-hidden shadow-lg border border-[rgba(255,255,255,0.1)]">
             <img src="https://framerusercontent.com/images/v9by2y3t7Fgrb9sTYB57w099Lk.jpg?width=512" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Bottom Left */}
        <div className="absolute hero-shuffle" style={{ bottom: '15%', left: '2%', '--d': '0.4s', '--dx': '100px', '--dy': '-100px', '--dr': '12deg' } as CSSProperties}>
          <div className="-rotate-[12deg] w-[90px] h-[90px] rounded-[8px] overflow-hidden shadow-lg border border-[rgba(255,255,255,0.1)]">
             <img src="https://framerusercontent.com/images/GfQF9MJTOQgip3GZt7WYQlFA.png?width=512" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Bottom Right */}
        <div className="absolute hero-shuffle" style={{ bottom: '10%', right: '-8%', '--d': '0.55s', '--dx': '-100px', '--dy': '-100px', '--dr': '32deg' } as CSSProperties}>
          <div className="rotate-[18deg]">
            <ControlCenterCard width={110} />
          </div>
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-['Libre_Baskerville:Italic',sans-serif] italic text-[#f5f5f5] text-center tracking-[-1px] [font-size:clamp(34px,10.5vw,56px)] [line-height:1.2] mix-blend-difference">
          <span className="block" data-split-letters>
            {"Product &".split('').map((c, i) => <span key={i} className="hero-letter" style={{'--i': i} as CSSProperties}>{c}</span>)}
          </span>
          <span className="block" data-split-letters>
            {"Software Engineer".split('').map((c, i) => <span key={i} className="hero-letter" style={{'--i': i + 9} as CSSProperties}>{c}</span>)}
          </span>
        </h1>

        <p
          className="font-['DM_Sans:Regular',sans-serif] hero-rise mt-[16px] text-[16px] text-[rgba(255,255,255,0.7)] text-center tracking-[-0.2px] bg-[#0f0f0f]/40 px-[8px] rounded-[4px] backdrop-blur-sm"
          style={{ fontVariationSettings: '"opsz" 14', '--d': '0.9s' } as CSSProperties}
        >
          From messy workflows to working software.
        </p>

        <a
          className="bg-white font-['Inter:Regular',sans-serif] font-bold hero-rise leading-[16px] mt-[32px] px-[24px] py-[12px] rounded-full text-[12px] text-black tracking-[1.2px] uppercase pointer-events-auto"
          style={{ '--d': '1.2s' } as CSSProperties}
        >
          View Projects
        </a>
      </div>

      <div
        className="flex flex-col hero-rise items-center absolute bottom-[40px] z-20"
        style={{ '--d': '1.2s' } as CSSProperties}
      >
        <Telescope className="size-[72px]" />
        <p className="font-['Libre_Baskerville:Italic',sans-serif] italic mt-[8px] text-[#f5f5f5] text-[22px] text-center tracking-[-0.88px]">
          Sneak peak of my works
        </p>
      </div>
    </div>
  )
}

const ARC_TEXT = 'This is SIDHANTH S'

// The arc line above the headline is baked into the read-only import as 13
// individually positioned letter divs, so its copy is rebuilt after mount:
// the letters are re-laid out in normal flow and pushed along the same shallow
// upward curve, centred on the original text's centre (63px into the box).
function setArcText(root: HTMLElement) {
  const box = root.querySelector<HTMLElement>('[data-name="Arc text"] [data-name="Text"]')
  if (!box) return

  const line = document.createElement('div')
  line.className =
    "-translate-x-1/2 absolute flex font-['DM_Sans:Regular',sans-serif] left-[63px] text-[#2a3132] text-[18.69px] top-0 whitespace-pre"
  line.style.fontVariationSettings = '"opsz" 14'
  line.style.lineHeight = '24.334px'

  const letters = [...ARC_TEXT]
  letters.forEach((char, i) => {
    const span = document.createElement('span')
    const t = letters.length > 1 ? (2 * i) / (letters.length - 1) - 1 : 0
    span.style.transform = `translateY(${(6.7 * t * t).toFixed(2)}px)`
    span.textContent = char
    line.appendChild(span)
  })

  box.replaceChildren(line)
}

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!root.current) return
    // setArcText(root.current)
  }, [])

  return (
    <div className="bg-[#0f0f0f] hero-reveal w-full relative overflow-hidden" ref={root}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-paper pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <MobileHero />
        <DesktopFrame />
      </div>
    </div>
  )
}
