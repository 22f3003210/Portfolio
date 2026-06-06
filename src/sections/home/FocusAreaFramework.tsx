import { Target, AlertTriangle, Cpu, BarChart3, Sliders, Award } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

export function FocusAreaFramework() {
  const steps = [
    { 
      title: 'Understand the business objective', 
      desc: 'Aligning on scaling targets, margin goals, and key operational hurdles.',
      icon: Target,
      iconColor: 'text-[#0170B9]'
    },
    { 
      title: 'Identify the gaps', 
      desc: 'Auditing workflows, finding leakages, and mapping data discrepancies.',
      icon: AlertTriangle,
      iconColor: 'text-amber-500'
    },
    { 
      title: 'Design the system', 
      desc: 'Engineering data capture rules, automated controls, and reporting architectures.',
      icon: Cpu,
      iconColor: 'text-purple-500'
    },
    { 
      title: 'Generate meaningful insights', 
      desc: 'Converting raw logs and numbers into clear, real-time operating metrics.',
      icon: BarChart3,
      iconColor: 'text-emerald-500'
    },
    { 
      title: 'Enable better decisions', 
      desc: 'Empowering management to act quickly based on verified, system-wide data.',
      icon: Sliders,
      iconColor: 'text-orange-500'
    },
    { 
      title: 'Create measurable business impact', 
      desc: 'Protecting margins, optimizing inventory turn rates, and enabling growth.',
      icon: Award,
      iconColor: 'text-rose-500'
    }
  ];

  return (
    <ScrollReveal className="w-full">
      <div className="space-y-10">
        {/* Section Header - Split Grid to align intro text to the right of title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0170B9] bg-[#0170B9]/5 px-3 py-1 border border-[#0170B9]/15 rounded-none inline-block font-mono">
              METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 text-[#0B1E2E] leading-tight uppercase tracking-tight">
              What I Do
            </h2>
            <p className="text-sm md:text-base font-extrabold text-[#8CC63F] uppercase tracking-wider mt-2 font-mono">
              From Root Cause to Business Impact
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-6 text-left">
            <p className="text-[#0170B9] font-black text-base md:text-lg leading-relaxed border-l-2 border-[#0170B9] pl-4 bg-[#0170B9]/5 py-2">
              I help organizations uncover operational gaps, quantify business risks, design scalable systems, and build decision frameworks that drive measurable growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Focus Area Framework steps in vertical list style of 3rd pic */}
          <div className="lg:col-span-6 space-y-3 w-full">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx}
                  className="relative filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:translate-x-2 select-none w-full max-w-[520px] group"
                >
                  {/* Slanted Card Body - Right Slanted Parallelogram */}
                  <div
                    style={{
                      clipPath: 'polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)'
                    }}
                    className="flex items-stretch min-h-[64px] bg-white transition-all duration-300 border-y border-r border-slate-100 group-hover:bg-[#0170B9] relative overflow-hidden"
                  >
                    {/* Slanted badge on the left, stretches to full height of card body */}
                    <div 
                      className="w-16 shrink-0 flex items-center justify-center bg-[#0B1E2E] text-white transition-colors duration-300 group-hover:bg-[#8CC63F]"
                      style={{
                        clipPath: 'polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)',
                        fontFamily: "'Orbitron', sans-serif"
                      }}
                    >
                      <span className="text-base md:text-lg lg:text-xl font-black select-none tracking-tighter pl-2">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Step Icon & Title & Desc */}
                    <div className="flex items-center gap-3 pl-3 pr-5 py-3 flex-grow">
                      <StepIcon className={`w-5 h-5 shrink-0 ${step.iconColor} group-hover:text-white transition-colors duration-300 mt-0.5`} />
                      
                      <div className="flex flex-col gap-0.5 text-left flex-grow">
                        <span className="text-[#0B1E2E] font-extrabold text-xs md:text-sm leading-snug group-hover:text-white transition-colors duration-300">
                          {step.title}
                        </span>
                        <span className="text-[#4B4F58] font-semibold text-[11px] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {step.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Narrative objectives shifted up with flex height to align bottoms */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {/* Narrative secondary text */}
            <div className="text-[#4B4F58] text-xs md:text-sm leading-relaxed font-semibold text-left">
              <p>
                I DON'T focus on simply fixing problems. I do root-cause analysis: why it happened, what it is costing.
              </p>
            </div>
            
            {/* Quote Box */}
            <div className="bg-[#0170B9]/5 border-l-4 border-[#0170B9] p-5 shadow-sm italic text-emerald-700 font-bold text-base md:text-lg leading-relaxed text-left">
              "I design systems that prevent them."
            </div>

            {/* Transformation Focus Card (Fills the remaining height and centers contents) */}
            <div className="bg-white border border-slate-100 p-6 shadow-sm space-y-4 rounded-none flex-grow flex flex-col justify-center text-left">
              <h4 className="text-xs font-bold text-[#0170B9] uppercase tracking-wider font-mono">
                System Goals & Objectives
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Unify Silos', desc: 'Connecting inventory, sales, finance, and customer data into a single source of truth.' },
                  { title: 'Automate Controls', desc: 'Replacing manual checks with automated workflows to eliminate leakage and errors.' },
                  { title: 'Drive Decisions', desc: 'Converting raw ERP data into actionable dashboards for procurement and growth.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs md:text-sm">
                    <div className="w-1.5 h-1.5 rounded-none bg-[#8CC63F] shrink-0 mt-2" />
                    <div>
                      <span className="font-bold text-[#0B1E2E]">{item.title}: </span>
                      <span className="text-[#4B4F58] font-medium leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </ScrollReveal>
  );
}
