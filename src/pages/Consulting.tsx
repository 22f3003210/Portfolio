import { BusinessOSSection } from '../sections/home/BusinessOSSection';
import { ScrollReveal } from '../components/ScrollReveal';

export function Consulting() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#0B1E2E] py-16 md:py-24 px-6 border-b border-white/10 relative overflow-hidden">
        {/* Background subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(rgba(140,198,63,0.3) 1px, transparent 1px)', 
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
            }} 
          />
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#8CC63F] border border-[#8CC63F]/30 bg-[#8CC63F]/5 mb-6">
              Consulting Services
            </span>
            <h1 
              className="font-extrabold text-white tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.1 }}
            >
              Systems That Scale.{' '}
              <span className="text-[#8CC63F]">Results That Compound.</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-[700px] mx-auto leading-relaxed font-medium">
              I design and deploy end-to-end retail operating systems — unifying ERP, inventory, 
              CRM, finance, and store operations into a single architecture that eliminates 
              inefficiency and drives measurable growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Business OS Section */}
      <BusinessOSSection />
    </>
  );
}
