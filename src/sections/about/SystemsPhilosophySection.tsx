import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';

export function SystemsPhilosophySection() {
  return (
    <section className="bg-white py-20 md:py-[120px] px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1000px] mx-auto text-center">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-center gap-2 mb-16">
          <SectionLabel variant="pill">PHILOSOPHY</SectionLabel>
          <h2
            className="font-extrabold text-text-primary tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2 }}
          >
            The Engineering Approach to <br />
            <span className="text-navy">Jewellery Retail</span>
          </h2>
        </ScrollReveal>

        {/* Module 2: The Unified Architecture */}
        <ScrollReveal className="w-full max-w-[800px] mx-auto relative z-10">
          <div className="bg-gradient-to-br from-white to-[#F9FAFB] border border-[#D2DFE8] p-6 lg:p-10 text-left shadow-sm hover:shadow-md transition-shadow rounded-none">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-navy bg-navy/5 px-2.5 py-0.5 border border-navy/15 self-start inline-block mb-4">
              UNIFIED ARCHITECTURE
            </span>

            <h3 className="font-extrabold text-2xl lg:text-3xl text-navy tracking-tight leading-tight mb-4">
              The Single Source of Truth
            </h3>

            <p className="text-sm lg:text-base text-text-secondary leading-relaxed font-semibold mb-3">
              As a Jewellery Business Transformation Architect, I design intelligence‑driven operating systems that replace friction with predictability.
            </p>
            
            <p className="text-sm text-text-secondary leading-relaxed font-medium mb-6">
              By unifying ERP, finance, CRM, inventory, and store operations into a single source of truth, I help heritage brands and modern retailers transform from legacy businesses into high-velocity enterprises.
            </p>

            {/* Central Engine Visual */}
            <div className="bg-white border border-[#E2E8F0] p-6 flex flex-col items-center justify-center relative overflow-hidden select-none rounded-none">
              <svg width="100%" height="240" viewBox="0 0 400 240" className="max-w-[340px]">
                {/* Connection Paths */}
                <path id="path-erp" d="M 200,35 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                <path id="path-finance" d="M 320,75 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                <path id="path-crm" d="M 290,195 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                <path id="path-inventory" d="M 110,195 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                <path id="path-stores" d="M 80,75 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />

                {/* Active Animated Data Packets (Pulsing Circles) */}
                <circle r="3.5" fill="#8CC63F">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s">
                    <mpath href="#path-erp" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#0170B9">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
                    <mpath href="#path-finance" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#8CC63F">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="0s">
                    <mpath href="#path-crm" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#0170B9">
                  <animateMotion dur="3.2s" repeatCount="indefinite" begin="0s">
                    <mpath href="#path-inventory" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#8CC63F">
                  <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s">
                    <mpath href="#path-stores" />
                  </animateMotion>
                </circle>

                {/* Secondary Delayed Packet Stream */}
                <circle r="3.5" fill="#0170B9">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.25s">
                    <mpath href="#path-erp" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#8CC63F">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#path-finance" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#0170B9">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s">
                    <mpath href="#path-crm" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#8CC63F">
                  <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.6s">
                    <mpath href="#path-inventory" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#0170B9">
                  <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.3s">
                    <mpath href="#path-stores" />
                  </animateMotion>
                </circle>

                {/* Central Node: Single Source of Truth */}
                <circle cx="200" cy="120" r="32" fill="#0170B9" stroke="#8CC63F" strokeWidth="2" />
                <text x="200" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="extrabold" letterSpacing="0.5">SINGLE</text>
                <text x="200" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="extrabold" letterSpacing="0.5">SOURCE</text>
                <text x="200" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" opacity="0.8">OF TRUTH</text>

                {/* Outer Operational Pillars */}
                {/* ERP */}
                <circle cx="200" cy="35" r="16" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                <text x="200" y="38" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">ERP</text>

                {/* Finance */}
                <circle cx="320" cy="75" r="18" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                <text x="320" y="78" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">FINANCE</text>

                {/* CRM */}
                <circle cx="290" cy="195" r="18" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                <text x="290" y="198" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">CRM</text>

                {/* Inventory */}
                <circle cx="110" cy="195" r="20" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                <text x="110" y="198" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">INVENTORY</text>

                {/* Store Ops */}
                <circle cx="80" cy="75" r="18" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                <text x="80" y="78" textAnchor="middle" fill="#3A3A3A" fontSize="6.5" fontWeight="extrabold">STORE OPS</text>
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
