import { ScrollReveal } from '../../components/ScrollReveal';

export function SystemsProblemSection() {
  const diagnosticPoints = [
    { title: 'Unified Operations.', desc: 'Breaking down organizational silos to build a single, interconnected digital nervous system.' },
    { title: 'Transparent Inventory.', desc: 'Real-time stock tracking across all channels to ensure capital is never trapped or invisible.' },
    { title: 'Structured Customer Intelligence.', desc: 'Consolidating fragmented data points to fuel hyper-personalized, lifetime clienteling journeys.' },
    { title: 'Predictive Decision-Making.', desc: 'Replacing guesswork with real-time indicators, empowering the enterprise to engineer the market.' }
  ];

  return (
    <section className="bg-white pt-8 pb-20 md:pt-10 md:pb-24 px-6 select-none border-b border-[#E2E8F0] relative overflow-hidden">
      
      {/* Outer wrapper to contain the vertical connecting line */}
      <div className="max-w-[1000px] mx-auto relative pt-4 pb-4">
        
        {/* Vertical Dotted Connecting Line (Pipeline storyboard style) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-navy/20 z-0" />

        {/* The Systemic Diagnosis Card */}
        <ScrollReveal className="w-full relative z-10">
          
          {/* Top connecting dot */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
          
          {/* Card body */}
          <div className="bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 md:p-10 text-left shadow-sm hover:shadow-md transition-shadow">
            
            {/* Badge in top left */}
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-navy bg-navy/5 px-2.5 py-0.5 border border-navy/10 self-start inline-block mb-6">
              01 . SYSTEMIC DIAGNOSIS
            </span>

            {/* Mobile-only Headline & 2x2 Grid (under tablet width) */}
            <div className="md:hidden">
              <h2 className="font-extrabold text-2xl text-text-primary tracking-tight leading-tight mb-6">
                Most Retail Systems Don't Scale.
                <br />
                <span className="text-navy">They Lack an Operational Core.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 my-6">
                {diagnosticPoints.map((pt, idx) => (
                  <div key={idx} className="border-l-4 border-navy/35 pl-4 py-1">
                    <h4 className="text-[15px] font-bold text-text-primary leading-snug">{pt.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop-only 4-Corner Layout with Headline in the Center & 90-Degree Orthogonal Routing */}
            <div className="hidden md:block relative w-full aspect-[2/1] my-6 select-none">
              
              {/* SVG Connecting Canvas */}
              <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                
                {/* Connecting Dotted Lines routing from center box left/right edges, then 90-degrees to corner centers */}
                {/* Top-Left Path: Starts at center-left edge (200, 200) -> goes left to (104, 200) -> goes up to corner (104, 60) */}
                <path id="path-tl" d="M 200,200 L 104,200 L 104,60" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                
                {/* Bottom-Left Path: Starts at center-left edge (200, 200) -> goes left to (104, 200) -> goes down to corner (104, 340) */}
                <path id="path-bl" d="M 200,200 L 104,200 L 104,340" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                
                {/* Top-Right Path: Starts at center-right edge (600, 200) -> goes right to (696, 200) -> goes up to corner (696, 60) */}
                <path id="path-tr" d="M 600,200 L 696,200 L 696,60" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                
                {/* Bottom-Right Path: Starts at center-right edge (600, 200) -> goes right to (696, 200) -> goes down to corner (696, 340) */}
                <path id="path-br" d="M 600,200 L 696,200 L 696,340" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

                {/* Animated Data Packets traveling along the orthodiagonal paths */}
                <g fill="#8CC63F">
                  <circle r="3">
                    <animateMotion dur="3s" repeatCount="indefinite">
                      <mpath href="#path-tl" />
                    </animateMotion>
                  </circle>
                  <circle r="3">
                    <animateMotion dur="2.8s" repeatCount="indefinite">
                      <mpath href="#path-bl" />
                    </animateMotion>
                  </circle>
                  <circle r="3">
                    <animateMotion dur="3.5s" repeatCount="indefinite">
                      <mpath href="#path-tr" />
                    </animateMotion>
                  </circle>
                  <circle r="3">
                    <animateMotion dur="3.2s" repeatCount="indefinite">
                      <mpath href="#path-br" />
                    </animateMotion>
                  </circle>
                </g>

                {/* Midpoint Label Rectangles and Text (placed on the vertical segments) */}
                {/* Top-Left */}
                <g>
                  <rect x="69" y="122" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="104" y="133" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">UNIFY SILOS</text>
                </g>
                {/* Top-Right */}
                <g>
                  <rect x="661" y="122" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="696" y="133" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">SYNC STOCKS</text>
                </g>
                {/* Bottom-Left */}
                <g>
                  <rect x="69" y="262" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="104" y="273" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">LINK PROFILE</text>
                </g>
                {/* Bottom-Right */}
                <g>
                  <rect x="661" y="262" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="696" y="273" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">PRE-EMPT</text>
                </g>

              </svg>

              {/* Central Core Headline Card (enlarged to 500px) */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] text-center p-8 bg-white border border-[#E2E8F0] shadow-md z-20"
                style={{ borderTop: '4px solid #0170B9' }}
              >
                <h3 className="font-extrabold text-[21px] sm:text-[22px] text-text-primary tracking-tight leading-snug">
                  Most Retail Systems Don't Scale.
                </h3>
                <h3 className="font-extrabold text-[21px] sm:text-[22px] text-navy tracking-tight leading-snug mt-2">
                  They Lack an Operational Core.
                </h3>
              </div>

              {/* Absolute Corner HTML Cards (pushed further out to 1% margins with width 24%) */}
              {/* Top-Left Card */}
              <div className="absolute left-[1%] top-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                <h4 className="text-[13px] font-bold text-text-primary leading-tight">Unified Operations</h4>
                <p className="text-[11px] text-text-secondary mt-1 leading-snug">Breaking down organizational silos to build a single, interconnected digital nervous system.</p>
              </div>

              {/* Top-Right Card */}
              <div className="absolute right-[1%] top-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                <h4 className="text-[13px] font-bold text-text-primary leading-tight">Transparent Inventory</h4>
                <p className="text-[11px] text-text-secondary mt-1 leading-snug">Real-time stock tracking across all channels to ensure capital is never trapped or invisible.</p>
              </div>

              {/* Bottom-Left Card */}
              <div className="absolute left-[1%] bottom-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                <h4 className="text-[13px] font-bold text-text-primary leading-tight">Structured Customer Intelligence</h4>
                <p className="text-[11px] text-text-secondary mt-1 leading-snug">Consolidating fragmented data points to fuel hyper-personalized, lifetime clienteling journeys.</p>
              </div>

              {/* Bottom-Right Card */}
              <div className="absolute right-[1%] bottom-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                <h4 className="text-[13px] font-bold text-text-primary leading-tight">Predictive Decision-Making</h4>
                <p className="text-[11px] text-text-secondary mt-1 leading-snug">Replacing guesswork with real-time indicators, empowering the enterprise to engineer the market.</p>
              </div>

            </div>

            {/* Centered blue quote */}
            <p className="text-sm sm:text-base font-bold text-navy italic mt-8 border-t border-dashed border-border-light pt-5 text-center">
              &quot;Scale begins where operational friction ends.&quot;
            </p>
          </div>
          
          {/* Bottom connecting dot */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
        </ScrollReveal>

      </div>
    </section>
  );
}
