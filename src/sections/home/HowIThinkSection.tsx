import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { useIsMobile } from '../../hooks/use-mobile';

interface ThinkCard {
  title: string;
  summary: string;
  expanded: string;
}

export function HowIThinkSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleMouseEnter = useCallback((idx: number) => {
    setHoveredIdx(idx);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIdx(null);
  }, []);

  const cards: ThinkCard[] = [
    {
      title: 'Pattern Recognition',
      summary: 'Identifying recurring operational issues and systemic loopholes across different locations.',
      expanded: 'Analyzing data across multiple stores reveals that what looks like individual staff errors are actually systematic loopholes in inventory tracking and rate booking. I map these recurring failure modes to resolve them once and for all.'
    },
    {
      title: 'Systems Thinking',
      summary: 'Understanding how individual policy and process changes propagate across the entire enterprise.',
      expanded: 'A change in discount approval policies at the counter affects cash reconciliation at the end of the shift and billing margins in the ledger. I design workflows that maintain systemic integrity across all touchpoints.'
    },
    {
      title: 'Architecture-Level Thinking',
      summary: 'Designing integrated, scalable data structures connecting ERP, CRM, and dashboards.',
      expanded: 'Structuring clean databases and API integrations between Synergics ERP, CRM, and Power BI dashboards. I build the digital backbone that enables automated real-time rates and reconciliations without manual data entries.'
    },
    {
      title: 'Analytical Structuring',
      summary: 'Breaking complex, qualitative retail challenges into clear, measurable data points.',
      expanded: 'Every gram of gold and every rupee of margin is mapped to an owner, timestamp, and location. I turn chaotic operations into structured data pipelines that make audit, loss prevention, and compliance automatic.'
    },
    {
      title: 'Product + Process Mindset',
      summary: 'Building repeatable systems that ensure compliance without relying on personal heroics.',
      expanded: 'Store operations should not rely on personal heroics or memory. I document and build SOP playbooks, HUID scan triggers, and POS interfaces that guarantee consistent operational execution shift after shift.'
    },
    {
      title: 'Retail & Jewellery Awareness',
      summary: 'Applying deep domain knowledge of live MCX rate costing, gold purity, and exchange rules.',
      expanded: 'Understanding live MCX Rate cost calculations, karatometer purities, old gold exchange margins, and savings schemes. My systems are designed around the unique, high-value realities of jewellery retail.'
    },
    {
      title: 'Communication of Vision',
      summary: 'Aligning business directors and showroom staff on-site to drive adoption of new workflows.',
      expanded: 'Systems are only as good as their adoption. I work side-by-side with store staff, managers, and directors on-site, communicating the value of system compliance and training teams to ensure a smooth transition.'
    },
    {
      title: 'Transformation Curiosity',
      summary: 'Auditing physical showroom realities to discover hidden leakages that have been normalized.',
      expanded: 'I constantly audit workflows in real operating conditions to find the leakages you have normalized. I ask the hard questions about why discrepancies exist and design the fail-safes to prevent them.'
    }
  ];

  return (
    <section id="how-i-think" className="bg-warm-white py-20 md:py-[120px] px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <ScrollReveal className="flex flex-col gap-2">
            <SectionLabel variant="plain">APPROACH</SectionLabel>
            <h2
              className="font-extrabold text-text-primary tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.2 }}
            >
              How I Think About <br />
              <span className="text-navy">Business Systems</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Typographic Cards Grid — extra bottom padding so expanded cards have room to overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
          {cards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              /* Wrapper holds the grid cell size constant; overflow-visible lets the card grow out */
              <div key={idx} className={`relative flex items-center transition-all duration-300 ${isHovered ? 'h-auto z-30' : 'z-10'}`} style={{ zIndex: isHovered ? 50 : 1 }}>
                {/* Invisible spacer — mirrors the default card content to lock the cell height */}
                <div className={`p-6 invisible pointer-events-none w-full ${isMobile ? 'hidden' : 'block'}`} aria-hidden="true">
                  <div className="text-[100px] leading-none absolute right-2 -top-4 font-mono font-black opacity-0">00</div>
                  <div className="font-black tracking-tight text-[16px] uppercase">{card.title}</div>
                  <p className="text-sm mt-3 leading-relaxed font-semibold">{card.summary}</p>
                </div>

                {/* Actual card — positioned over the spacer, grows symmetrically from the center on hover */}
                <motion.div
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => setHoveredIdx(prev => prev === idx ? null : idx)}
                  className={`${isMobile ? 'relative' : 'absolute'} left-0 right-0 border text-left flex flex-col select-none overflow-hidden`}
                  animate={{
                    borderRadius: isHovered ? 12 : 0,
                  }}
                  transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                  style={{
                    top: isMobile ? 'auto' : '50%',
                    y: isMobile ? '0%' : '-50%',
                    boxShadow: isHovered
                      ? '0 24px 80px rgba(0,30,60,0.35), 0 8px 30px rgba(0,30,60,0.2)'
                      : '0 1px 3px rgba(0,0,0,0.06)',
                    background: isHovered
                      ? 'linear-gradient(160deg, #003D6B 0%, #005C9E 60%, #0170B9 100%)'
                      : 'linear-gradient(135deg, #ffffff 0%, #EBF1F6 100%)',
                    borderColor: isHovered ? '#003D6B' : '#D0D9E0',
                  }}
                >
                  {/* Top section — always visible, matches the spacer height */}
                  <div className="p-6 relative">
                    {/* Watermark number */}
                    <div
                      className={`absolute right-3 -top-2 font-mono font-black select-none pointer-events-none text-[100px] leading-none transition-colors duration-300 ${
                        isHovered ? 'text-white/[0.06]' : 'text-navy/[0.04]'
                      }`}
                    >
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-black tracking-tight text-[16px] uppercase relative z-10 transition-colors duration-250 ${
                        isHovered ? 'text-white' : 'text-text-primary'
                      }`}
                    >
                      {card.title}
                    </h3>

                    {/* Summary */}
                    <p
                      className={`text-sm mt-3 leading-relaxed font-semibold relative z-10 transition-colors duration-250 ${
                        isHovered ? 'text-white/80' : 'text-text-secondary'
                      }`}
                    >
                      {card.summary}
                    </p>
                  </div>

                  {/* Bottom panel — slides open on hover, JioHotstar style */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          {/* Divider */}
                          <div className="border-t border-white/15 mb-4" />

                          {/* Detail text */}
                          <p className="text-[13px] leading-relaxed text-white/90">
                            {card.expanded}
                          </p>

                          {/* Bottom accent bar — like Hotstar's action row */}
                          <div className="mt-4 flex items-center gap-2">
                            <span className="inline-block w-8 h-[3px] rounded-full bg-gold" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80">
                              Deep Dive
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

