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
            {/* Honeycomb grid path */}
            <path 
              d="M 50 50 L 100 25 L 150 50 L 150 100 L 100 125 L 50 100 Z M 150 100 L 200 75 L 250 100 L 250 150 L 200 175 L 150 150 Z" 
              fill="none" 
              stroke="#D4DFE6" 
              strokeWidth="1.5" 
              opacity="0.6" 
            />
            <path 
              d="M 800 200 L 850 175 L 900 200 L 900 250 L 850 275 L 800 250 Z M 900 250 L 950 225 L 1000 250 L 1000 300 L 950 325 L 900 300 Z M 700 350 L 750 325 L 800 350 L 800 400 L 750 425 L 700 400 Z" 
              fill="none" 
              stroke="#D4DFE6" 
              strokeWidth="1.5" 
              opacity="0.4" 
            />

            {/* Digital flow lines and nodes */}
            <circle cx="100" cy="25" r="3" fill="#8CC63F" opacity="0.8" />
            <circle cx="250" cy="150" r="3.5" fill="#0170B9" opacity="0.6" />
            <circle cx="850" cy="175" r="3" fill="#0170B9" opacity="0.5" />
            <circle cx="950" cy="325" r="4.5" fill="#8CC63F" opacity="0.7" />

            <path 
              d="M 100 25 L 150 50 L 150 100 M 200 75 L 200 150 M 850 175 L 900 200 L 900 250 M 750 325 L 750 400" 
              fill="none" 
              stroke="url(#neonGlow)" 
              strokeWidth="2.5" 
              strokeDasharray="4 6" 
            />
          </svg>
        </div>

        <div className="content-max w-full py-3 lg:py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 pb-6">
              <span className="inline-block self-start px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-navy border border-navy/30 rounded-none bg-navy/5">
                HYDERABAD · JEWELLERY RETAIL TRANSFORMATION ARCHITECT
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-navy uppercase tracking-tight leading-[1.05] mb-4 md:mb-5">
                Scale Your <br className="hidden sm:inline" />
                Jewellery Brand
              </h1>

              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed max-w-xl mb-4 md:mb-6">
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