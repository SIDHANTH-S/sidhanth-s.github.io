import svgPaths from "./svg-jo09tmkj9w";
import { RequestsPipelineCard, ControlCenterCard } from './DashboardCards'

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.35)] tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[20.8px]">Works</p>
      </div>
    </div>
  );
}

function Works() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Works">
      <Container3 />
    </div>
  );
}

function LinkVariant() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[40px] relative shrink-0" data-name="Link - Variant 1">
      <Works />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-139px)] top-1/2" data-name="Container">
      <LinkVariant />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] font-normal h-[26.4px] leading-[0] mb-[-1.34px] relative shrink-0 text-[#f5f5f5] text-[24px] text-center w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Libre_Baskerville:Regular',sans-serif] justify-center left-[calc(50%-10.5px)] top-[13px]">
        <p className="leading-[26.4px]">{`Artemis `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center left-[calc(50%+52.79px)] top-[11.66px]">
        <p className="leading-[26.4px]">{`&`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[26.4px] whitespace-pre">{`   Artemis`}</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.33px] relative shrink-0" data-name="Name">
      <Paragraph />
      <Container5 />
    </div>
  );
}

function LinkVariant1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Link - Variant 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <Name />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.39px)] top-[calc(50%-2.67px)] w-[136px]" data-name="Container">
      <LinkVariant1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.35)] tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[20.8px]">Playground</p>
      </div>
    </div>
  );
}

function Works1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Works">
      <Container7 />
    </div>
  );
}

function LinkVariant2() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Link - Variant 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[40px] relative size-full">
          <Works1 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+138.61px)] top-[calc(50%-4px)] w-[126px]" data-name="Container">
      <LinkVariant2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[80px] flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="font-['Libre_Baskerville:Regular',sans-serif] text-[#f5f5f5] text-[24px]">
        SIDHANTH S
      </div>
    </div>
  );
}

function NavDesktop() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Nav - Desktop">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[98px]" data-name="Container">
      <NavDesktop />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24.334px] left-0 top-[6.7px] w-[10.485px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[10.485px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">T</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24.334px] left-[10.47px] top-[4.67px] w-[10.747px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[10.747px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">h</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24.334px] left-[21.25px] top-[3px] w-[4.486px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[4.486px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">i</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24.334px] left-[25.78px] top-[2.38px] w-[9.382px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[9.382px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">s</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24.334px] left-[40.1px] top-[0.95px] w-[4.486px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[4.486px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">i</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24.334px] left-[44.51px] top-[0.61px] w-[9.382px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[9.382px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">s</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[24.334px] left-[58.5px] top-0 w-[12.41px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[12.41px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">A</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24.334px] left-[70.66px] top-[0.05px] w-[6.915px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[6.915px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">r</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[24.334px] left-[77.46px] top-[0.26px] w-[7.326px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[7.326px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">t</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[24.334px] left-[84.47px] top-[0.61px] w-[10.616px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[10.616px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">e</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[24.334px] left-[95.15px] top-[1.41px] w-[16.653px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[16.653px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">m</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[24.334px] left-[111.87px] top-[3.63px] w-[4.486px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[4.486px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">i</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[24.334px] left-[116.51px] top-[4.35px] w-[9.382px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24.334px] justify-center leading-[0] left-0 text-[#2a3132] text-[18.69px] top-[12.17px] w-[9.382px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal]">s</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24.334px] left-[247.07px] top-[-18.55px] w-[372.964px]" data-name="Text">
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Svg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="SVG">
      <Text />
    </div>
  );
}

function ArcText() {
  return (
    <div className="absolute bottom-[-215px] content-stretch flex flex-col items-start justify-center left-[212.5px] top-[-11px] w-[623px]" data-name="Arc text">
      <Svg />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[80px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[96px] mb-0">
          {"Product &".split('').map((c, i) => <span key={i} className="hero-letter" style={{'--i': i + 24} as any}>{c}</span>)}
        </p>
        <p className="leading-[96px]">
          {"Software Engineer".split('').map((c, i) => <span key={i} className="hero-letter" style={{'--i': i + 33} as any}>{c}</span>)}
        </p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-[720px]" data-name="Title">
      <Heading />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.35)] text-center tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[26px]">
          From messy workflows to working software.
        </p>
      </div>
    </div>
  );
}

function Tagline() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-[720px]" data-name="Tagline">
      <Container8 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title">
      <Title1 />
      <Tagline />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[22369600px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">VIEW PROJECTS</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[4px] content-stretch flex flex-col gap-[40px] items-center left-1/2 w-[891px]" data-name="Hero Content">
      <Title />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute flex h-[312.193px] items-center justify-center left-[-77.27px] top-[-151.99px] w-[286.218px]">
      <div className="-rotate-25 flex-none">
        <div className="content-stretch flex flex-col items-start justify-center relative w-[198.3px]" data-name="Container">
          <RequestsPipelineCard width={198.3} />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="-translate-y-1/2 absolute h-[3.491px] left-[5.69px] top-[calc(50%+0.03px)] w-[14.666px]" data-name="Container">
      <div className="absolute bg-[rgba(251,44,54,0.5)] h-[3.491px] left-0 rounded-[7334033.5px] top-0 w-[3.509px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(240,177,0,0.5)] h-[3.481px] left-[5.61px] rounded-[7334033.5px] top-[0.14px] w-[3.492px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,201,80,0.5)] h-[3.474px] left-[11.19px] rounded-[7334033.5px] top-[0.28px] w-[3.476px]" data-name="Overlay" />
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[72.71px] pb-[0.14px] pt-[0.028px] top-[calc(50%+1.68px)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[3.279px] tracking-[0.3279px] whitespace-nowrap">
        <p className="leading-[4.918px]">OPERATIONAL VIEW</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#222] h-[13.999px] mb-[-0.001px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.219px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[4.856px] relative shrink-0 w-[4.898px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.8563" preserveAspectRatio="none" viewBox="0 0 4.89778 4.8563" width="4.89778">
        <g clipPath="url(#clip0_0_51)" id="SVG">
          <path d={svgPaths.p1e672de0} id="Vector" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.404691" />
          <path d="M4.06677 0.405076V2.87378" id="Vector_2" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.404691" />
          <path d={svgPaths.pb933f00} id="Vector_3" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.404691" />
          <path d={svgPaths.p398f2180} id="Vector_4" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.404691" />
        </g>
        <defs>
          <clipPath id="clip0_0_51">
            <rect fill="white" height="4.8563" width="4.89778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[2.78px] items-center left-[4.27px] pb-[0.166px] pt-[0.217px] right-[4.27px] top-[4.27px]" data-name="Container">
      <Svg1 />
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[4.59px] text-[rgba(255,255,255,0.9)] tracking-[-0.1148px] whitespace-nowrap">
        <p className="leading-[6.557px]">INFENIX</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[3.435px] relative shrink-0 w-[3.456px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.43467" preserveAspectRatio="none" viewBox="0 0 3.45642 3.43467" width="3.45642">
        <g clipPath="url(#clip0_0_127)" id="SVG">
          <path d={svgPaths.p28677180} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.286223" />
        </g>
        <defs>
          <clipPath id="clip0_0_127">
            <rect fill="white" height="3.43467" width="3.45642" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[2.067px] items-center justify-center left-[4.4px] pb-[2.673px] pl-[9.973px] pr-[9.637px] pt-[2.842px] right-[4.27px] rounded-[1.311px] top-[16.74px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.68px_-0.55px_0] rounded-[1.311px] shadow-[0px_0.328px_0.984px_0px_rgba(0,0,0,0.1),0px_0.328px_0.656px_-0.328px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Svg2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[3.279px] text-black text-center tracking-[0.3279px] uppercase whitespace-nowrap">
        <p className="leading-[4.37px]">NEW CHAT</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.309px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[2.951px] tracking-[0.2951px] uppercase w-full">
        <p className="leading-[3.934px]">RECENT</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pb-[1.311px] pl-[1.311px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative rounded-[1.311px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[2.8px] pr-[8.401px] py-[1.967px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.279px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="leading-[4.37px]">Java basics concepts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pl-[2.79px] pr-[15.094px] py-[1.967px] relative rounded-[1.311px] shrink-0 w-[45.997px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.279px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">
        <p className="leading-[4.37px]">React hooks intro</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[2.623px] py-[1.967px] relative rounded-[1.311px] shrink-0 w-[45.888px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.279px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">
        <p className="leading-[4.37px]">Data structures notes</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[1.344px] items-end relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4.6px] pt-[2.623px] right-[4.19px] top-[32.45px]" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(43,127,255,0.2)] content-stretch flex h-[6.603px] items-center justify-center left-[1.37px] pb-[1.17px] pt-[0.843px] rounded-[7334033.5px] top-[calc(50%-0.04px)] w-[6.813px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#51a2ff] text-[3.279px] text-center whitespace-nowrap">
        <p className="leading-[4.37px]">U</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[6.607px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Overlay />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute bottom-[0.01px] content-stretch flex flex-col items-start left-[-0.95px] pt-[4.153px] right-[0.95px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t-[0.219px] inset-0 pointer-events-none" />
      <Container23 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute bottom-[4.31px] h-[38.019px] left-[6.3px] right-[3.31px]" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#1a1a1a] h-full mr-[-0.013px] relative shrink-0 w-[55.059px]" data-name="Background+VerticalBorder">
        <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-r-[0.219px] border-solid inset-0 pointer-events-none" />
        <Container17 />
        <Button />
        <Margin />
        <Margin2 />
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[4.055px] relative shrink-0 w-[3.992px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.05539" preserveAspectRatio="none" viewBox="0 0 3.99217 4.05539" width="3.99217">
        <g clipPath="url(#clip0_0_123)" id="SVG">
          <path d={svgPaths.p25327c00} id="Vector" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.332681" />
          <path d="M3.6587 1.69508V4.73922" id="Vector_2" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.332681" />
          <path d={svgPaths.p22641000} id="Vector_3" stroke="#51A2FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.332681" />
        </g>
        <defs>
          <clipPath id="clip0_0_123">
            <rect fill="white" height="4.05539" width="3.99217" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(21,93,252,0.2)] content-stretch flex gap-[1.988px] items-center left-0 px-[3.497px] py-[1.53px] rounded-[1.311px] top-1/2" data-name="Button">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(43,127,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.311px]" />
      <Svg3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#51a2ff] text-[3.279px] text-center tracking-[0.3279px] uppercase whitespace-nowrap">
        <p className="leading-[4.37px]">START TUTOR</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[43.22px] top-[calc(50%+0.79px)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[3.934px] whitespace-nowrap">
        <p className="leading-[5.246px]">|</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-y-1/2 absolute h-[7.67px] left-[5.35px] top-1/2 w-[75.304px]" data-name="Container">
      <Button1 />
      <Container25 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[87.61px] pl-[2.665px] pr-[2.672px] py-[0.874px] rounded-[1.311px] top-[calc(50%+1.49px)]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.311px]" />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[2.951px] text-[rgba(255,255,255,0.6)] tracking-[0.1475px] whitespace-nowrap">
        <p className="leading-[3.934px]">Domain: CS</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#1a1a1a] h-[16.289px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.219px] border-solid inset-0 pointer-events-none" />
      <Container24 />
      <OverlayBorder />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex flex-col items-start max-w-[89.96925354003906px] pl-[5.232px] pr-[5.167px] py-[3.497px] right-[6.25px] rounded-bl-[5.246px] rounded-br-[5.246px] rounded-tl-[5.246px] rounded-tr-[1.311px] top-[7.41px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[5.246px] rounded-br-[5.246px] rounded-tl-[5.246px] rounded-tr-[1.311px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_1.59px_0.29px_0] shadow-[0px_0.328px_0.984px_0px_rgba(0,0,0,0.1),0px_0.328px_0.656px_-0.328px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.606px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[4.81px]">Hi, help me to learn Java!</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[3.986px] relative shrink-0 w-[3.954px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.98615" preserveAspectRatio="none" viewBox="0 0 3.95376 3.98615" width="3.95376">
        <g clipPath="url(#clip0_0_109)" id="SVG">
          <path d={svgPaths.p31ea100} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.32948" />
          <path d="M3.29482 0.34518V2.35508" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.32948" />
          <path d={svgPaths.p54c0bc0} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.32948" />
          <path d={svgPaths.p3ebe780} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.32948" />
        </g>
        <defs>
          <clipPath id="clip0_0_109">
            <rect fill="white" height="3.98615" width="3.95376" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#155dfc] content-stretch flex h-[7.979px] items-center justify-center relative rounded-[2.623px] shrink-0 w-[7.914px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[7.944px] left-0 rounded-[2.623px] shadow-[0px_1.311px_1.967px_-0.328px_rgba(0,0,0,0.1),0px_0.656px_1.311px_-0.656px_rgba(0,0,0,0.1)] top-0 w-[7.796px]" data-name="Overlay+Shadow" />
      <Svg4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] left-[5.41px] not-italic right-[5.19px] text-[3.606px] text-[rgba(255,255,255,0.9)] top-[4.2px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center mb-[-0.02px] relative shrink-0">
        <p className="leading-[5.862px]">{`Here's a simple structured learning path`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[5.862px]">to start with Java:</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[2.591px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#51a2ff] h-[1.96px] relative rounded-[7334033.5px] shrink-0 w-[1.939px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.606px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[4.81px]">{`1. Install JDK & IDE`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[2.587px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#51a2ff] h-[1.953px] relative rounded-[7334033.5px] shrink-0 w-[1.936px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.606px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[4.81px]">2. Learn variables, loops, and OOP</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[2.581px] items-center relative shrink-0 w-[65.64px]" data-name="Container">
      <div className="bg-[#51a2ff] h-[1.947px] relative rounded-[7334033.5px] shrink-0 w-[1.933px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.606px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[4.81px]">3. Practice small terminal programs</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[2.578px] items-center relative shrink-0 w-[65.542px]" data-name="Container">
      <div className="bg-[#51a2ff] h-[1.943px] relative rounded-[7334033.5px] shrink-0 w-[1.933px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[3.606px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[4.81px]">4. Build mini projects</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[1.77px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[5.24px] pl-[2.623px] right-[5.54px] top-[19.75px]" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[3.279px] text-[rgba(255,255,255,0.5)] tracking-[0.3279px] uppercase w-full">
        <p className="leading-[4.37px]">RECOMMENDED RESOURCES</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[5.11px] pt-[1.063px] right-[6.15px] top-[48.7px]" data-name="Margin">
      <Container34 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1a1a1a] h-[99.542px] relative rounded-bl-[5.246px] rounded-br-[5.246px] rounded-tl-[1.311px] rounded-tr-[5.246px] shrink-0 w-[79.279px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[5.246px] rounded-br-[5.246px] rounded-tl-[1.311px] rounded-tr-[5.246px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_1.15px_0.42px_0] shadow-[0px_0.328px_0.984px_0px_rgba(0,0,0,0.1),0px_0.328px_0.656px_-0.328px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Paragraph1 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[3.937px] items-start pb-[0.46px] relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[6.61px] max-w-[101.21540832519531px] top-[25.56px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[114.147px]" data-name="Container">
      <BackgroundBorder />
      <Container27 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[4.299px] relative shrink-0 w-[68.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9f9fa9] text-[3.279px] top-[2.25px] whitespace-nowrap">
          <p className="leading-[4.37px]">Ask Infenix...</p>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[3.726px] relative shrink-0 w-[3.598px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.72625" preserveAspectRatio="none" viewBox="0 0 3.59802 3.72625" width="3.59802">
        <g clipPath="url(#clip0_0_106)" id="SVG">
          <path d={svgPaths.p33b16e80} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.299835" />
          <path d={svgPaths.p258070a0} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.299835" />
        </g>
        <defs>
          <clipPath id="clip0_0_106">
            <rect fill="white" height="3.72625" width="3.59802" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSendMessage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[1.905px] pl-[1.758px] pr-[1.843px] pt-[1.825px] relative rounded-[2.623px] shrink-0" data-name="Button - Send message">
      <Svg5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.421px] items-end pb-[0.629px] relative size-full">
        <div className="bg-[rgba(255,255,255,0.05)] h-[6.262px] relative rounded-[1.311px] shrink-0 w-[16.713px]" data-name="Overlay" />
        <ButtonSendMessage />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] max-w-[167.8628692626953px] min-w-px relative rounded-[3.934px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[3.934px]" />
      <div className="flex flex-row items-end max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[0.014px] items-end max-w-[inherit] pl-[5.464px] pr-[2.186px] py-[2.186px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0.19px_1.45px_-0.08px_0] rounded-[3.934px] shadow-[0px_0.328px_0.984px_0px_rgba(0,0,0,0.1),0px_0.328px_0.656px_-0.328px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-[#161616] content-stretch flex items-center justify-center pb-[5.303px] pl-[5.237px] pr-[4.908px] pt-[5.132px] relative shrink-0 w-[112.206px]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t-[0.219px] inset-0 pointer-events-none" />
      <BackgroundBorder2 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#161616] content-stretch flex flex-[1_0_0] flex-col h-[115.551px] items-start min-w-px relative" data-name="Background">
      <BackgroundHorizontalBorder1 />
      <Container26 />
      <BackgroundHorizontalBorder2 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[3.792px] relative shrink-0 w-[3.625px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.79207" preserveAspectRatio="none" viewBox="0 0 3.62518 3.79207" width="3.62518">
        <g clipPath="url(#clip0_0_103)" id="SVG">
          <path d="M1.81272 1.14085V7.59088" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.302098" />
          <path d={svgPaths.p3c539b20} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.302098" />
        </g>
        <defs>
          <clipPath id="clip0_0_103">
            <rect fill="white" height="3.79207" width="3.62518" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex h-[10.122px] items-center justify-center left-0 p-[0.328px] rounded-[7334033.5px] top-0 w-[9.672px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[7334033.5px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[10.082px] left-0 rounded-[7334033.5px] shadow-[0px_3.279px_4.918px_-0.984px_rgba(0,0,0,0.1),0px_1.311px_1.967px_-1.311px_rgba(0,0,0,0.1)] top-0 w-[9.534px]" data-name="Overlay+Shadow" />
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="h-[3.769px] relative shrink-0 w-[3.616px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.76912" preserveAspectRatio="none" viewBox="0 0 3.61607 3.76912" width="3.61607">
        <g clipPath="url(#clip0_0_116)" id="SVG">
          <path d={svgPaths.p3381b4e0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.301339" />
          <path d={svgPaths.p2b0855e0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.301339" />
          <path d="M0.302512 2.18562H1.22163" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.301339" />
          <path d="M3.0133 2.18562H3.93241" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.301339" />
          <path d="M2.26013 2.03539V2.95451" id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.301339" />
          <path d="M1.35621 2.03539V2.95451" id="Vector_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.301339" />
        </g>
        <defs>
          <clipPath id="clip0_0_116">
            <rect fill="white" height="3.76912" width="3.61607" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex h-[10.06px] items-center justify-center left-[-0.31px] p-[0.328px] rounded-[7334033.5px] top-[12.64px] w-[9.644px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[0.328px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[7334033.5px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[10.019px] left-0 rounded-[7334033.5px] shadow-[0px_3.279px_4.918px_-0.984px_rgba(0,0,0,0.1),0px_1.311px_1.967px_-1.311px_rgba(0,0,0,0.1)] top-0 w-[9.508px]" data-name="Overlay+Shadow" />
      <Svg7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bottom-[34.4px] h-[22.704px] opacity-50 right-[6.45px] w-[9.672px]" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundVerticalBorder />
      <Background />
      <Container37 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[169.635px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute aspect-[4/3] bg-[#161616] left-0 right-[9.96px] rounded-[5.408px] top-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.338px] relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container15 />
      </div>
      <div aria-hidden className="absolute border-[0.338px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[5.408px] shadow-[0px_8.449px_16.899px_-4.056px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex h-[135px] items-center justify-center relative shrink-0 w-[188.137px]">
      <div className="flex-none scale-x-99 skew-x-[-0.92deg]">
        <div className="h-[135.607px] relative w-[188.702px]" data-name="Container">
          <div className="absolute bg-[rgba(255,255,255,0)] bottom-[0.73px] left-[0.09px] shadow-[0px_8.536px_17.073px_-4.098px_rgba(0,0,0,0.25)] top-0 w-[175.052px]" data-name="Overlay+Shadow" />
          <BackgroundBorderShadow />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[-192.88px] flex h-[186.158px] items-center justify-center left-[80.24px] w-[217.104px]">
      <div className="-rotate-19 flex-none">
        <div className="content-stretch flex flex-col h-[133.671px] items-start justify-center pb-[1.564px] relative w-[183.587px]" data-name="Container">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[1.487px] items-start relative size-full">
        <div className="bg-[rgba(251,44,54,0.5)] h-[2.449px] relative rounded-[6544880.5px] shrink-0 w-[2.484px]" data-name="Overlay" />
        <div className="bg-[rgba(240,177,0,0.5)] h-[2.449px] relative rounded-[6544880.5px] shrink-0 w-[2.479px]" data-name="Overlay" />
        <div className="bg-[rgba(0,201,80,0.5)] h-[2.447px] relative rounded-[6544880.5px] shrink-0 w-[2.477px]" data-name="Overlay" />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[2.438px] tracking-[0.2438px] whitespace-nowrap">
          <p className="leading-[3.657px]">OPERATIONAL VIEW</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div className="absolute bg-[#222] content-stretch flex h-[9.8px] items-start justify-between left-0 pb-[2.537px] pl-[3.956px] pr-[78.278px] pt-[3.606px] right-[-0.57px] top-0" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.195px] border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase w-full">
        <p className="leading-[2.377px]">REPOSITORY</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute h-[2.454px] left-[1.68px] top-[calc(50%+0.01px)] w-[2.484px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.45431" preserveAspectRatio="none" viewBox="0 0 2.48418 2.45431" width="2.48418">
        <g clipPath="url(#clip0_0_88)" id="SVG">
          <path d={svgPaths.p9a20c0} id="Vector" stroke="#1F6FEB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204526" />
          <path d={svgPaths.p1dd58600} id="Vector_2" stroke="#1F6FEB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204526" />
          <path d={svgPaths.p1267ac80} id="Vector_3" stroke="#1F6FEB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204526" />
          <path d={svgPaths.p243ce880} id="Vector_4" stroke="#1F6FEB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204526" />
        </g>
        <defs>
          <clipPath id="clip0_0_88">
            <rect fill="white" height="2.45431" width="2.48418" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(31,111,235,0.1)] h-[5.67px] relative rounded-[0.975px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(31,111,235,0.2)] border-solid inset-0 pointer-events-none rounded-[0.975px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.11px_0_0] rounded-[0.975px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg8 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] left-[5.66px] not-italic text-[#a5d6ff] text-[2.194px] top-[calc(50%-0.15px)] whitespace-nowrap">
        <p className="leading-[3.292px]">ecommerce-api/</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[0.981px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <OverlayBorder1 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.97px] pt-[0.975px] right-[3.17px] top-[2.97px]" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase w-full">
          <p className="leading-[2.377px]">SCAN SUMMARY</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[2.764px] relative shrink-0 w-[11.528px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[1.829px] text-[rgba(255,255,255,0.6)] top-[1.32px] whitespace-nowrap">
        <p className="leading-[2.743px]">Files indexed</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[2.757px] relative shrink-0 w-[3.062px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[1.829px] text-white top-[1.27px] whitespace-nowrap">
        <p className="leading-[2.743px]">142</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[2.764px] relative shrink-0 w-[8.566px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[1.829px] text-[rgba(255,255,255,0.6)] top-[1.31px] whitespace-nowrap">
        <p className="leading-[2.743px]">Functions</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[2.759px] relative shrink-0 w-[3.062px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[1.829px] text-white top-[1.27px] whitespace-nowrap">
        <p className="leading-[2.743px]">386</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[2.767px] relative shrink-0 w-[12.666px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[1.829px] text-[rgba(255,255,255,0.6)] top-[1.32px] whitespace-nowrap">
        <p className="leading-[2.743px]">Dependencies</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[2.759px] relative shrink-0 w-[2.041px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[1.829px] text-white top-[1.27px] whitespace-nowrap">
        <p className="leading-[2.743px]">78</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[2.769px] relative shrink-0 w-[9.609px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[1.829px] text-[rgba(255,255,255,0.6)] top-[1.32px] whitespace-nowrap">
        <p className="leading-[2.743px]">Risk nodes</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[2.762px] relative shrink-0 w-[2.041px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#ff6467] text-[1.829px] top-[1.28px] whitespace-nowrap">
        <p className="leading-[2.743px]">12</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container58 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#161b22] relative rounded-[1.463px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.414px] items-start p-[2.146px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.12px_0.03px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container48 />
        <Container51 />
        <Container54 />
        <Container57 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.474px] items-start left-[2.9px] pt-[3.121px] right-[3.2px] top-[15.93px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#30363d] border-solid border-t-[0.195px] inset-0 pointer-events-none" />
      <Container47 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase w-full">
          <p className="leading-[2.377px]">LAYER VIEW</p>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[1.951px] whitespace-nowrap">
          <p className="leading-[2.926px]">01 Architecture</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[1.463px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2.146px] py-[1.658px] relative size-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[1.951px] whitespace-nowrap">
          <p className="leading-[2.926px]">02 Domain</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[1.463px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2.146px] py-[1.658px] relative size-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[1.951px] whitespace-nowrap">
          <p className="leading-[2.926px]">03 Files</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[1.463px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2.146px] py-[1.658px] relative size-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a5d6ff] text-[1.951px] whitespace-nowrap">
          <p className="leading-[2.926px]">04 Functions</p>
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[2.462px] relative shrink-0 w-[2.479px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.46162" preserveAspectRatio="none" viewBox="0 0 2.47933 2.46162" width="2.47933">
        <g clipPath="url(#clip0_0_86)" id="SVG">
          <path d={svgPaths.p1f3c3700} id="Vector" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.205135" />
        </g>
        <defs>
          <clipPath id="clip0_0_86">
            <rect fill="white" height="2.46162" width="2.47933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(31,111,235,0.15)] relative rounded-[1.463px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(31,111,235,0.3)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.187px] py-[1.658px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.33px_-0.29px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container65 />
          <Svg9 />
          <div className="-translate-y-1/2 absolute bg-[#58a6ff] h-[3.952px] left-[0.19px] rounded-br-[0.975px] rounded-tr-[0.975px] top-[calc(50%+0.29px)] w-[0.499px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.488px] items-start relative size-full">
        <Border />
        <Border1 />
        <Border2 />
        <OverlayBorder2 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.478px] inset-[45.72px_3.29px_3.2px_2.77px] items-start pt-[3.121px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#30363d] border-solid border-t-[0.195px] inset-0 pointer-events-none" />
      <Container60 />
      <Container61 />
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#0d1117] h-full mr-[-0.001px] relative shrink-0 w-[35.66px]" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#30363d] border-r-[0.195px] border-solid inset-0 pointer-events-none" />
      <Margin5 />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
    </div>
  );
}

function Container68() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.47px)] top-[0.2px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase whitespace-nowrap">
        <p className="leading-[2.377px]">LAYER 01 • ARCHITECTURE</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[2.44px] relative shrink-0 w-[2.447px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.43965" preserveAspectRatio="none" viewBox="0 0 2.44746 2.43965" width="2.44746">
        <g clipPath="url(#clip0_0_68)" id="SVG">
          <path d={svgPaths.p1cd10080} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203304" />
          <path d={svgPaths.p2a3bac80} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203304" />
          <path d={svgPaths.p172bb7e0} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203304" />
        </g>
        <defs>
          <clipPath id="clip0_0_68">
            <rect fill="white" height="2.43965" width="2.44746" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="absolute bg-[#161b22] bottom-0 content-stretch flex gap-[1.466px] items-center left-0 opacity-60 pb-[1.705px] pt-[1.556px] px-[3.121px] rounded-[1.463px] top-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.19px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">Frontend</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="h-[2.432px] relative shrink-0 w-[2.435px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.43233" preserveAspectRatio="none" viewBox="0 0 2.43523 2.43233" width="2.43523">
        <g clipPath="url(#clip0_0_76)" id="SVG">
          <path d={svgPaths.p268ab380} id="Vector" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202694" />
          <path d={svgPaths.p3c1307e0} id="Vector_2" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202694" />
          <path d={svgPaths.p1ab3b500} id="Vector_3" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202694" />
          <path d={svgPaths.pf3e0b00} id="Vector_4" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202694" />
          <path d={svgPaths.p1d68b800} id="Vector_5" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202694" />
        </g>
        <defs>
          <clipPath id="clip0_0_76">
            <rect fill="white" height="2.43233" width="2.43523" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(31,111,235,0.1)] bottom-[-0.04px] content-stretch flex gap-[1.459px] items-center left-[20.99px] pb-[1.695px] pt-[1.549px] px-[3.121px] rounded-[1.463px] top-[0.06px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(31,111,235,0.4)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.77px_0_0] rounded-[1.463px] shadow-[0px_0px_0px_0.244px_rgba(31,111,235,0.2),0px_0px_2.438px_0px_rgba(31,111,235,0.1)]" data-name="Overlay+Shadow" />
      <Svg11 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a5d6ff] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">Backend</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[2.427px] relative shrink-0 w-[2.423px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.42745" preserveAspectRatio="none" viewBox="0 0 2.42299 2.42745" width="2.42299">
        <g clipPath="url(#clip0_0_72)" id="SVG">
          <path d={svgPaths.p34b84280} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.201916" />
          <path d={svgPaths.pfee3d00} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.201916" />
          <path d={svgPaths.p498f00} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.201916" />
        </g>
        <defs>
          <clipPath id="clip0_0_72">
            <rect fill="white" height="2.42745" width="2.42299" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="absolute bg-[#161b22] bottom-[-0.08px] content-stretch flex gap-[1.452px] items-center left-[41.61px] opacity-60 pb-[1.689px] pt-[1.541px] px-[3.121px] rounded-[1.463px] top-[0.12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.72px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">Database</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="h-[2.42px] relative shrink-0 w-[2.411px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.42014" preserveAspectRatio="none" viewBox="0 0 2.41075 2.42014" width="2.41075">
        <g clipPath="url(#clip0_0_60)" id="SVG">
          <path d={svgPaths.p39766d20} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200896" />
          <path d={svgPaths.pda7ed80} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200896" />
          <path d={svgPaths.p22dbd3a0} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200896" />
        </g>
        <defs>
          <clipPath id="clip0_0_60">
            <rect fill="white" height="2.42014" width="2.41075" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="absolute bg-[#161b22] bottom-[-0.13px] content-stretch flex gap-[1.444px] items-center left-[62.91px] opacity-60 pb-[1.68px] pt-[1.533px] px-[3.121px] rounded-[1.463px] top-[0.18px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.78px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg13 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">Payments</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="-translate-x-1/2 absolute h-[6.431px] left-[calc(50%+0.29px)] top-[4.43px] w-[82.565px]" data-name="Container">
      <BackgroundBorder6 />
      <OverlayBorder3 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[10.798px] left-0 right-[-0.05px] top-0" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.811px] items-start left-[72.09px] py-[0.975px] top-[10.94px] w-[0.245px]" data-name="Margin">
      <div className="bg-gradient-to-b from-[rgba(31,111,235,0.4)] h-[4.86px] relative shrink-0 to-[rgba(31,111,235,0.1)] w-[0.242px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container71() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.48px)] top-[0.08px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase whitespace-nowrap">
        <p className="leading-[2.377px]">LAYER 02 • DOMAIN</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[2.445px] relative shrink-0 w-[2.452px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.44453" preserveAspectRatio="none" viewBox="0 0 2.45237 2.44453" width="2.45237">
        <g clipPath="url(#clip0_0_56)" id="SVG">
          <path d={svgPaths.p2956cc0} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
          <path d={svgPaths.p23a28c80} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
          <path d={svgPaths.p275c8380} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
        </g>
        <defs>
          <clipPath id="clip0_0_56">
            <rect fill="white" height="2.44453" width="2.45237" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#161b22] opacity-60 relative rounded-[1.463px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[1.469px] items-center pb-[1.728px] pt-[1.548px] px-[3.121px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.96px_-0.46px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Svg14 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
            <p className="leading-[3.109px]">Auth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="h-[2.44px] relative shrink-0 w-[2.443px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.43965" preserveAspectRatio="none" viewBox="0 0 2.44257 2.43965" width="2.44257">
        <g clipPath="url(#clip0_0_47)" id="SVG">
          <path d={svgPaths.p577c40} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203304" />
          <path d={svgPaths.p11528700} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203304" />
          <path d={svgPaths.p3ce4ed80} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203304" />
        </g>
        <defs>
          <clipPath id="clip0_0_47">
            <rect fill="white" height="2.43965" width="2.44257" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#161b22] opacity-60 relative rounded-[1.463px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[1.464px] items-center pb-[1.721px] pt-[1.541px] px-[3.121px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.21px_-0.45px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Svg15 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
            <p className="leading-[3.109px]">Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[2.435px] relative shrink-0 w-[2.43px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.43477" preserveAspectRatio="none" viewBox="0 0 2.43034 2.43477" width="2.43034">
        <g clipPath="url(#clip0_0_82)" id="SVG">
          <path d={svgPaths.p2aa45f00} id="Vector" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202528" />
          <path d={svgPaths.p2cb1100} id="Vector_2" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202528" />
          <path d={svgPaths.p1bb529a0} id="Vector_3" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202528" />
        </g>
        <defs>
          <clipPath id="clip0_0_82">
            <rect fill="white" height="2.43477" width="2.43034" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(31,111,235,0.1)] relative rounded-[1.463px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(31,111,235,0.4)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[1.457px] items-center pb-[1.713px] pt-[1.534px] px-[3.121px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.44px_-0.44px_0] rounded-[1.463px] shadow-[0px_0px_0px_0.244px_rgba(31,111,235,0.2),0px_0px_2.438px_0px_rgba(31,111,235,0.1)]" data-name="Overlay+Shadow" />
          <Svg16 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a5d6ff] text-[2.072px] whitespace-nowrap">
            <p className="leading-[3.109px]">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="h-[2.43px] relative shrink-0 w-[2.421px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.42989" preserveAspectRatio="none" viewBox="0 0 2.42055 2.42989" width="2.42055">
        <g clipPath="url(#clip0_0_38)" id="SVG">
          <path d={svgPaths.p34f67400} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.201712" />
          <path d={svgPaths.p2fe17900} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.201712" />
          <path d={svgPaths.p24eb0800} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.201712" />
        </g>
        <defs>
          <clipPath id="clip0_0_38">
            <rect fill="white" height="2.42989" width="2.42055" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#161b22] opacity-60 relative rounded-[1.463px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[1.452px] items-center pb-[1.705px] pt-[1.53px] px-[3.121px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.12px_-0.42px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Svg17 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
            <p className="leading-[3.109px]">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="h-[2.423px] relative shrink-0 w-[2.411px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.42258" preserveAspectRatio="none" viewBox="0 0 2.41076 2.42258" width="2.41076">
        <g clipPath="url(#clip0_0_64)" id="SVG">
          <path d={svgPaths.p2ba6ea00} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200897" />
          <path d={svgPaths.p21128100} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200897" />
          <path d={svgPaths.p2f0a6800} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200897" />
        </g>
        <defs>
          <clipPath id="clip0_0_64">
            <rect fill="white" height="2.42258" width="2.41076" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#161b22] opacity-60 relative rounded-[1.463px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[1.444px] items-center pb-[1.7px] pt-[1.52px] px-[3.121px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.77px_-0.41px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Svg18 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
            <p className="leading-[3.109px]">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[1.926px] items-start left-[calc(50%+0.24px)] top-[4.37px]" data-name="Container">
      <BackgroundBorder9 />
      <BackgroundBorder10 />
      <OverlayBorder4 />
      <BackgroundBorder11 />
      <BackgroundBorder12 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[10.817px] left-[-0.05px] right-[-0.12px] top-[17.66px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.821px] items-start left-[72.1px] py-[0.975px] top-[28.47px] w-[0.248px]" data-name="Margin">
      <div className="bg-gradient-to-b from-[rgba(31,111,235,0.4)] h-[4.87px] relative shrink-0 to-[rgba(31,111,235,0.1)] w-[0.245px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container74() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.73px)] top-[-0.06px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase whitespace-nowrap">
        <p className="leading-[2.377px]">LAYER 03 • FILES</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="h-[2.452px] relative shrink-0 w-[2.462px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.45185" preserveAspectRatio="none" viewBox="0 0 2.46218 2.45185" width="2.46218">
        <g clipPath="url(#clip0_0_131)" id="SVG">
          <path d={svgPaths.p17cfc1c0} id="Vector" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204321" />
          <path d={svgPaths.p32973400} id="Vector_2" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204321" />
          <path d={svgPaths.p3da70e00} id="Vector_3" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204321" />
          <path d={svgPaths.pd242f00} id="Vector_4" stroke="#58A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204321" />
        </g>
        <defs>
          <clipPath id="clip0_0_131">
            <rect fill="white" height="2.45185" width="2.46218" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(31,111,235,0.1)] bottom-0 content-stretch flex gap-[1.476px] items-center left-0 pb-[1.753px] pt-[1.545px] px-[3.121px] rounded-[1.463px] top-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(31,111,235,0.4)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.3px_0_0] rounded-[1.463px] shadow-[0px_0px_0px_0.244px_rgba(31,111,235,0.2),0px_0px_2.438px_0px_rgba(31,111,235,0.1)]" data-name="Overlay+Shadow" />
      <Svg19 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a5d6ff] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">cart.service.ts</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[2.445px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.44453" preserveAspectRatio="none" viewBox="0 0 2.44505 2.44453" width="2.44505">
        <g clipPath="url(#clip0_0_98)" id="SVG">
          <path d={svgPaths.p30f185e0} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
          <path d={svgPaths.p1d6d0b5c} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
          <path d={svgPaths.p39089ac0} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
          <path d={svgPaths.p17b34270} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203711" />
        </g>
        <defs>
          <clipPath id="clip0_0_98">
            <rect fill="white" height="2.44453" width="2.44505" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="absolute bg-[#161b22] bottom-[0.06px] content-stretch flex gap-[1.466px] items-center left-[29.4px] opacity-60 pb-[1.741px] pt-[1.533px] px-[3.121px] rounded-[1.463px] top-[-0.04px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.1px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg20 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">order.service.ts</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="h-[2.435px] relative shrink-0 w-[2.428px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.43477" preserveAspectRatio="none" viewBox="0 0 2.42791 2.43477" width="2.42791">
        <g clipPath="url(#clip0_0_42)" id="SVG">
          <path d={svgPaths.p8190fc0} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202326" />
          <path d={svgPaths.p34f392c0} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202326" />
          <path d={svgPaths.p2b38c050} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202326" />
          <path d={svgPaths.p36d53280} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202326" />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="2.43477" width="2.42791" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="absolute bg-[#161b22] bottom-[0.13px] content-stretch flex gap-[1.454px] items-center left-[59.72px] opacity-60 pb-[1.731px] pt-[1.523px] px-[3.121px] rounded-[1.463px] top-[-0.08px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.16px_0.01px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg21 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">payment.gateway.ts</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="h-[2.427px] relative shrink-0 w-[2.408px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.42745" preserveAspectRatio="none" viewBox="0 0 2.40832 2.42745" width="2.40832">
        <g clipPath="url(#clip0_0_93)" id="SVG">
          <path d={svgPaths.p29d29c24} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200694" />
          <path d={svgPaths.p29651e40} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200694" />
          <path d={svgPaths.p33b5d080} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200694" />
          <path d={svgPaths.p3d9dca80} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200694" />
        </g>
        <defs>
          <clipPath id="clip0_0_93">
            <rect fill="white" height="2.42745" width="2.40832" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="absolute bg-[#161b22] bottom-[0.2px] content-stretch flex gap-[1.444px] items-center left-[92.09px] opacity-60 pb-[1.717px] pt-[1.51px] px-[3.121px] rounded-[1.463px] top-[-0.13px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.04px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg22 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">inventory.repo.ts</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="-translate-x-1/2 absolute h-[6.468px] left-[calc(50%+0.3px)] top-[4.34px] w-[121.165px]" data-name="Container">
      <OverlayBorder5 />
      <BackgroundBorder13 />
      <BackgroundBorder14 />
      <BackgroundBorder15 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[10.835px] left-[-0.09px] right-[-0.2px] top-[35.35px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.829px] items-start left-[72.11px] py-[0.975px] top-[46.03px] w-[0.245px]" data-name="Margin">
      <div className="bg-gradient-to-b from-[rgba(31,111,235,0.4)] h-[4.877px] relative shrink-0 to-[rgba(251,44,54,0.3)] w-[0.242px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container77() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.72px)] top-[-0.18px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[1.585px] text-[rgba(255,100,103,0.5)] tracking-[0.1585px] uppercase whitespace-nowrap">
        <p className="leading-[2.377px]">LAYER 04 • FUNCTIONS</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="h-[2.457px] relative shrink-0 w-[2.465px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.45673" preserveAspectRatio="none" viewBox="0 0 2.46466 2.45673" width="2.46466">
        <g clipPath="url(#clip0_0_34)" id="SVG">
          <path d={svgPaths.p35621e00} id="Vector" stroke="#FF6467" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204728" />
          <path d={svgPaths.p19ea2480} id="Vector_2" stroke="#FF6467" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204728" />
          <path d={svgPaths.p2de08180} id="Vector_3" stroke="#FF6467" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204728" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="2.45673" width="2.46466" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#fb2c36] h-[1.959px] right-[-0.83px] rounded-[6544880.5px] top-[-0.9px] w-[1.956px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="bg-[rgba(255,255,255,0)] h-[1.958px] relative rounded-[6544880.5px] shadow-[0px_0px_0px_0.488px_#82181a] shrink-0 w-[1.951px]" data-name="Overlay+Shadow" />
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.1)] bottom-0 content-stretch flex gap-[1.476px] items-center left-0 pb-[1.774px] pt-[1.534px] px-[3.121px] rounded-[1.463px] top-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.08px_0_0] rounded-[1.463px] shadow-[0px_0px_0px_0.244px_rgba(251,44,54,0.2),0px_0px_3.657px_0px_rgba(239,68,68,0.15)]" data-name="Overlay+Shadow" />
      <Svg23 />
      <Background2 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff6467] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">calculateCartTotal()</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="h-[2.447px] relative shrink-0 w-[2.443px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.44697" preserveAspectRatio="none" viewBox="0 0 2.44263 2.44697" width="2.44263">
        <g clipPath="url(#clip0_0_26)" id="SVG">
          <path d={svgPaths.p32bd0000} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203552" />
          <path d={svgPaths.p1eb9100} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203552" />
          <path d={svgPaths.p103aaa60} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.203552" />
        </g>
        <defs>
          <clipPath id="clip0_0_26">
            <rect fill="white" height="2.44697" width="2.44263" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="absolute bg-[#161b22] bottom-[0.15px] content-stretch flex gap-[1.466px] items-center left-[35.13px] opacity-60 pb-[1.761px] pt-[1.52px] px-[3.121px] rounded-[1.463px] top-[-0.12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.1px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg24 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">createOrder()</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="h-[2.44px] relative shrink-0 w-[2.428px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.43965" preserveAspectRatio="none" viewBox="0 0 2.42794 2.43965" width="2.42794">
        <g clipPath="url(#clip0_0_22)" id="SVG">
          <path d={svgPaths.p1b63aec0} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202329" />
          <path d={svgPaths.p2b72c000} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202329" />
          <path d={svgPaths.pf1d6d00} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.202329" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="2.43965" width="2.42794" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="absolute bg-[#161b22] bottom-[0.26px] content-stretch flex gap-[1.457px] items-center left-[62.02px] opacity-60 pb-[1.749px] pt-[1.513px] px-[3.121px] rounded-[1.463px] top-[-0.22px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.14px_0.01px_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg25 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">validateStock()</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="h-[2.43px] relative shrink-0 w-[2.411px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.42989" preserveAspectRatio="none" viewBox="0 0 2.41081 2.42989" width="2.41081">
        <g clipPath="url(#clip0_0_30)" id="SVG">
          <path d={svgPaths.p237d7840} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200901" />
          <path d={svgPaths.p39409d80} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200901" />
          <path d={svgPaths.p2a06bf80} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200901" />
        </g>
        <defs>
          <clipPath id="clip0_0_30">
            <rect fill="white" height="2.42989" width="2.41081" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="absolute bg-[#161b22] bottom-[0.39px] content-stretch flex gap-[1.444px] items-center left-[91.01px] opacity-60 pb-[1.737px] pt-[1.5px] px-[3.121px] rounded-[1.463px] top-[-0.32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[1.463px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.19px_0_0] rounded-[1.463px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Svg26 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">processPayment()</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="-translate-x-1/2 absolute h-[6.477px] left-[calc(50%+0.32px)] top-[4.32px] w-[118.991px]" data-name="Container">
      <OverlayBorder6 />
      <BackgroundBorder16 />
      <BackgroundBorder17 />
      <BackgroundBorder18 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[10.854px] left-[-0.14px] right-[-0.27px] top-[53.07px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[63.929px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Margin6 />
      <Container70 />
      <Margin7 />
      <Container73 />
      <Margin8 />
      <Container76 />
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#0d1117] content-stretch flex flex-col items-start left-[3.96px] px-[1.658px] py-[0.683px] rounded-[0.975px] top-[calc(50%+0.07px)]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#30363d] border-[0.244px] border-solid inset-0 pointer-events-none rounded-[0.975px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[1.585px] tracking-[0.1585px] uppercase whitespace-nowrap">
        <p className="leading-[2.377px]">TRACE PATH</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">repo</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="-translate-y-1/2 absolute h-[1.969px] left-[6.08px] top-[calc(50%-0.05px)] w-[1.97px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.9688" preserveAspectRatio="none" viewBox="0 0 1.97034 1.9688" width="1.97034">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p21c19e00} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.164067" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="1.9688" width="1.97034" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[9.53px] top-[calc(50%-0.07px)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">Backend</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="-translate-y-1/2 absolute h-[1.969px] left-[19.05px] top-[calc(50%-0.15px)] w-[1.963px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.9688" preserveAspectRatio="none" viewBox="0 0 1.96297 1.9688" width="1.96297">
        <g clipPath="url(#clip0_0_13)" id="SVG">
          <path d={svgPaths.p23cfb703} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.163581" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="1.9688" width="1.96297" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[22.49px] top-[calc(50%-0.18px)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">Cart</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="-translate-y-1/2 absolute h-[1.966px] left-[28.54px] top-[calc(50%-0.22px)] w-[1.961px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96636" preserveAspectRatio="none" viewBox="0 0 1.96053 1.96636" width="1.96053">
        <g clipPath="url(#clip0_0_7)" id="SVG">
          <path d={svgPaths.p30a1af00} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.163377" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="1.96636" width="1.96053" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[31.97px] top-[calc(50%-0.25px)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a5d6ff] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">cart.service.ts</p>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="-translate-y-1/2 absolute h-[1.961px] left-[50.55px] top-[calc(50%-0.4px)] w-[1.951px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96148" preserveAspectRatio="none" viewBox="0 0 1.95074 1.96148" width="1.95074">
        <g clipPath="url(#clip0_0_114)" id="SVG">
          <path d={svgPaths.p20137280} id="Vector" stroke="#1F6FEB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.162561" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="1.96148" width="1.95074" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(251,44,54,0.15)] content-stretch flex flex-col items-start left-[53.97px] px-[1.171px] py-[0.683px] rounded-[0.975px] top-[calc(50%-0.42px)]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border-[0.244px] border-[rgba(251,44,54,0.2)] border-solid inset-0 pointer-events-none rounded-[0.975px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.11px_-0.2px_0] rounded-[0.975px] shadow-[0px_0.244px_0.731px_0px_rgba(0,0,0,0.1),0px_0.244px_0.488px_-0.244px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff6467] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">calculateCartTotal()</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="-translate-y-1/2 absolute h-[1.954px] left-[80.44px] top-[calc(50%-0.63px)] w-[1.936px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.95416" preserveAspectRatio="none" viewBox="0 0 1.93605 1.95416" width="1.93605">
        <g clipPath="url(#clip0_0_129)" id="SVG">
          <path d={svgPaths.pa66db80} id="Vector" stroke="#82181A" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.161338" />
        </g>
        <defs>
          <clipPath id="clip0_0_129">
            <rect fill="white" height="1.95416" width="1.93605" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg32() {
  return (
    <div className="h-[1.952px] relative shrink-0 w-[1.934px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.95172" preserveAspectRatio="none" viewBox="0 0 1.93363 1.95172" width="1.93363">
        <g clipPath="url(#clip0_0_9)" id="SVG">
          <path d={svgPaths.p18759200} id="Vector" stroke="#FF6467" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.161136" />
          <path d={svgPaths.p3fe9df80} id="Vector_2" stroke="#FF6467" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.161136" />
          <path d="M0.967317 1.37872H0.970622" id="Vector_3" stroke="#FF6467" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.161136" />
        </g>
        <defs>
          <clipPath id="clip0_0_9">
            <rect fill="white" height="1.95172" width="1.93363" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[0.965px] items-center left-[83.83px] top-[calc(50%-0.73px)]" data-name="Container">
      <Svg32 />
      <div className="[word-break:break-word] flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffa2a2] text-[2.072px] whitespace-nowrap">
        <p className="leading-[3.109px]">duplicateLogicRisk</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="-translate-y-1/2 absolute h-[4.523px] left-[21.94px] top-[calc(50%-0.07px)] w-[106.999px]" data-name="Container">
      <Container80 />
      <Svg27 />
      <Container81 />
      <Svg28 />
      <Container82 />
      <Svg29 />
      <Container83 />
      <Svg30 />
      <OverlayBorder7 />
      <Svg31 />
      <Container84 />
    </div>
  );
}

function BackgroundHorizontalBorderShadow() {
  return (
    <div className="absolute bg-[#0d1117] bottom-0 h-[8.685px] left-[-0.32px] right-[-0.55px]" data-name="Background+HorizontalBorder+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundBorder19 />
        <Container79 />
      </div>
      <div aria-hidden className="absolute border-[#30363d] border-solid border-t-[0.195px] inset-0 pointer-events-none shadow-[0px_4.876px_6.095px_-1.219px_rgba(0,0,0,0.1),0px_1.951px_2.438px_-1.463px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="flex-[1_0_0] h-[125.411px] min-w-px relative" data-name="Background+Shadow">
      <div aria-hidden className="absolute bg-[#010409] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[34.812px] pl-[3.876px] pr-[3.7px] pt-[26.67px] relative size-full">
          <div className="absolute inset-[0_-0.05px_0_0]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 152.94 125.41' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(9.9604 0 0 9.7862 76.471 62.705)'><stop stop-color='rgba(31,111,235,0.03)' offset='0'/><stop stop-color='rgba(31,111,235,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Gradient" />
          <Container66 />
          <BackgroundHorizontalBorderShadow />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.488px_0.975px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pt-[5.852px] relative size-full">
          <BackgroundVerticalBorder1 />
          <BackgroundShadow />
        </div>
      </div>
    </div>
  );
}

function Svg33() {
  return (
    <div className="h-[2.452px] relative shrink-0 w-[2.484px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.45187" preserveAspectRatio="none" viewBox="0 0 2.48419 2.45187" width="2.48419">
        <g clipPath="url(#clip0_0_17)" id="SVG">
          <path d={svgPaths.p10a0ed00} id="Vector" stroke="#A5D6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204322" />
          <path d="M2.05914 0.203834V1.87987" id="Vector_2" stroke="#A5D6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204322" />
          <path d={svgPaths.p1eacb570} id="Vector_3" stroke="#A5D6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204322" />
          <path d={svgPaths.p36372c70} id="Vector_4" stroke="#A5D6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.204322" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="2.45187" width="2.48419" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[1.987px] items-center left-[2.98px] top-[calc(50%-0.11px)]" data-name="Container">
      <Svg33 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[1.951px] text-[rgba(255,255,255,0.5)] tracking-[0.1951px] uppercase whitespace-nowrap">
        <p className="leading-[2.926px]">CODELENS AI</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="h-[2.164px] relative shrink-0 w-[2.154px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.16398" preserveAspectRatio="none" viewBox="0 0 2.15378 2.16398" width="2.15378">
        <g clipPath="url(#clip0_0_136)" id="SVG">
          <path d={svgPaths.p3e3a9440} id="Vector" stroke="#00D492" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.179482" />
          <path d={svgPaths.pea7df00} id="Vector_2" stroke="#00D492" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.179482" />
        </g>
        <defs>
          <clipPath id="clip0_0_136">
            <rect fill="white" height="2.16398" width="2.15378" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[0.955px] items-center left-[161.4px] top-[calc(50%+0.96px)]" data-name="Container">
      <Svg34 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00d492] text-[1.951px] tracking-[0.1951px] uppercase whitespace-nowrap">
        <p className="leading-[2.926px]">SCAN COMPLETE</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder4() {
  return (
    <div className="absolute bg-[#010409] h-[5.884px] left-0 right-0 top-0" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#30363d] border-b-[0.195px] border-solid inset-0 pointer-events-none" />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <BackgroundHorizontalBorder4 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-[-0.65px] top-[9.8px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute flex h-[140.748px] items-center justify-center left-0 right-[-1.09px] top-0" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(0.201674cqw,79.618cqh)] skew-x-[0.17deg] w-[88.3511cqw]">
        <div className="bg-[#0d1117] border-[#30363d] border-[0.244px] border-solid overflow-clip relative rounded-[3.901px] shadow-[0px_6.095px_12.191px_-2.926px_rgba(0,0,0,0.25)] size-full" data-name="Background+Border+Shadow">
          <BackgroundHorizontalBorder3 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[133.671px] relative rounded-[10.389px] shrink-0 w-[187.007px]" data-name="Container">
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bottom-[-175.41px] flex h-[169.455px] items-center justify-center left-[749.17px] w-[209.888px]">
      <div className="flex-none rotate-12">
        <div className="content-stretch flex flex-col h-[133.67px] items-start justify-center relative w-[186.164px]" data-name="Container">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute flex h-[268.159px] items-center justify-center right-[-50.02px] top-[-114.72px] w-[250.46px]">
      <div className="flex-none rotate-32">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] w-[198.3px]" data-name="Container">
          <ControlCenterCard width={198.3} />
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="-translate-x-1/2 absolute h-[397px] left-1/2 top-[239.67px] w-[1048px]" data-name="Section - Hero">
      {/* <ArcText /> */}
      <HeroContent />
      <Container10 />
      <Container11 />
      <Container38 />
      <Container87 />
    </div>
  );
}

function Svg35() {
  return (
    <div className="absolute left-0 size-[100px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 100 100" width="100">
        <g id="SVG">
          <path d={svgPaths.p317c1c00} fill="white" fillOpacity="0.35" id="RJyltUSSE" />
          <path d={svgPaths.p26fd9100} fill="#F5F5F5" id="w9rNu6_j2" />
        </g>
      </svg>
    </div>
  );
}

function Telescope() {
  return (
    <div className="mb-[-0.665px] overflow-clip relative shrink-0 size-[100px]" data-name="telescope">
      <Svg35 />
    </div>
  );
}

function SectionTitleHeading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[720px]" data-name="Section Title → Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[28px] text-center tracking-[-1.12px] whitespace-nowrap">
        <p className="leading-[39.2px]">Sneak peak of my works</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[158px] right-[169.33px] top-[729px]" data-name="Section Title">
      <Telescope />
      <SectionTitleHeading />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 2">
      <Container />
      <SectionHero />
      <SectionTitle />
    </div>
  );
}