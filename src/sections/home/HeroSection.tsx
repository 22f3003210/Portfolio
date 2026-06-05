import { ChevronDown } from 'lucide-react';
import { GoldButton } from '../../components/GoldButton';
import { OutlineButton } from '../../components/OutlineButton';

export function HeroSection() {




  return (
    <div className="bg-white w-full pt-8 pb-0">
      <section className="min-h-[320px] lg:min-h-[350px] flex items-center relative py-3 lg:py-4 overflow-hidden border-y border-border-light">
        
        {/* Circuit & Honeycomb Grid SVG Background Overlay */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none bg-[#F2F5F7]">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 600" 
            preserveAspectRatio="xMidYMid slice"
          >
            {/* SVG definitions for precision duotone color correction */}
            <defs>
              <filter id="blue-duotone">
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="0.15 1.0" />
                  <feFuncG type="table" tableValues="0.45 1.0" />
                  <feFuncB type="table" tableValues="0.82 1.0" />
                </feComponentTransfer>
              </filter>
            </defs>

            {/* Base Background Image - Precision duotone filtered: grey circuit elements are mapped to blue, white background stays pure white */}
            <image 
              href="/hero_bg.png" 
              x="0" 
              y="0" 
              width="1200" 
              height="600" 
              preserveAspectRatio="xMidYMid slice"
              filter="url(#blue-duotone)"
            />



            {/* Left Side Circuit Traces Overlay for subtle interactive glows */}
            <g stroke="rgba(1, 112, 185, 0.12)" strokeWidth="1.5" fill="none">
              <path id="left-trace-1" d="M 0,100 L 350,100 L 400,150 L 580,150" />
              <circle cx="580" cy="150" r="3.5" fill="rgba(1, 112, 185, 0.2)" stroke="none" />
              
              <path id="left-trace-2" d="M 0,260 L 220,260 L 260,300 L 480,300 L 510,270 L 620,270" />
              <circle cx="620" cy="270" r="3.5" fill="rgba(1, 112, 185, 0.2)" stroke="none" />
              
              <path id="left-trace-3" d="M 0,440 L 400,440 L 450,390 L 610,390" />
              <circle cx="610" cy="390" r="3.5" fill="rgba(1, 112, 185, 0.2)" stroke="none" />
            </g>

            {/* Animated data pulses traveling along left circuit traces */}
            <circle r="3.5" fill="#0170B9" opacity="0.8">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#left-trace-1" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#8CC63F" opacity="0.8">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#left-trace-2" />
              </animateMotion>
            </circle>


          </svg>
        </div>

        <div className="content-max w-full py-3 lg:py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 pb-6">
              <span className="inline-block self-start px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-navy border border-navy/30 rounded-none bg-navy/5">
                HYDERABAD · JEWELLERY RETAIL TRANSFORMATION ARCHITECT
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold leading-[1.12] tracking-tight">
                <span className="text-text-primary">Systems Define</span>
                <br />
                <span className="text-navy">the Future of Retail</span>
              </h1>

              <p className="text-base md:text-lg font-medium text-text-primary">
                Design the system. Control the growth.
              </p>

              <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-lg font-medium">
                Jewellery business transformation architect designing intelligence‑driven operating
                systems across ERP, finance, CRM, inventory, and store operations.
              </p>

              <p className="text-xs md:text-sm text-text-secondary/70 italic border-l-2 border-gold pl-3 max-w-lg">
                &quot;The next decade of jewellery retail belongs to the systemized. The rest will be
                managed out of existence.&quot;
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                <GoldButton to="/#workflows" icon={<ChevronDown className="w-4 h-4" />}>
                  Explore the Operating System
                </GoldButton>
                <OutlineButton 
                  to="/contact" 
                  variant="dark" 
                  className="border-navy/40 text-navy hover:bg-navy/5 hover:border-navy"
                >
                  Book a 30‑min call
                </OutlineButton>
              </div>
            </div>

            {/* Right column - Empty to expose the honeycomb graphic completely */}
            <div className="lg:col-span-5 hidden lg:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <ChevronDown className="w-5 h-5 text-navy/40 animate-bounce" />
        </div>
      </section>
    </div>
  );
}