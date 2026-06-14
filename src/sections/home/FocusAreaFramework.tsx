import { Target, AlertTriangle, Cpu, BarChart3, Sliders, Award, ArrowDown } from 'lucide-react';
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
            <p className="text-navy font-black text-base md:text-lg leading-relaxed border-l-2 border-gold pl-4 bg-gold/5 py-2">
              I help organizations uncover operational gaps, quantify business risks, design scalable systems, and build decision frameworks that drive measurable growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Focus Area Framework steps in vertical list style of 3rd pic */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:h-full w-full space-y-3 lg:space-y-0">
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

          {/* Right Column: Value Ladder */}
          <div className="lg:col-span-6 flex flex-col lg:grid lg:grid-rows-[auto_1fr] lg:h-full w-full max-w-[500px]">
            <div className="text-left mb-4 lg:mb-0">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8CC63F] bg-[#8CC63F]/5 px-3 py-1 border border-[#8CC63F]/15 rounded-none inline-block font-mono">
                THE VALUE LADDER
              </span>
              <h3 className="text-xl md:text-2xl font-black mt-2 text-[#0B1E2E] leading-tight uppercase tracking-tight">
                Data → Intelligence → Action
              </h3>
            </div>
            
            <div className="flex flex-col justify-between lg:h-full lg:mt-6 space-y-2 lg:space-y-0">
              {[
                { label: 'Data Collection', sub: 'Capture what matters', color: 'bg-slate-200', text: 'text-slate-700' },
                { label: 'Data Engineering', sub: 'Structure and clean', color: 'bg-slate-300', text: 'text-slate-800' },
                { label: 'Business Intelligence', sub: 'Visualize and report', color: 'bg-[#1f5fbf]', text: 'text-white' },
                { label: 'Decision Intelligence', sub: 'Analyze and prescribe', color: 'bg-[#0b2341]', text: 'text-white' },
                { label: 'Continuous Improvement', sub: 'Learn and iterate', color: 'bg-[#8bc34a]', text: 'text-white' },
              ].map((tier, idx, arr) => (
                <div key={tier.label} className="flex flex-col items-center w-full">
                  <div className={`w-full rounded-xl px-6 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300 ${tier.color}`}>
                    <div className="text-left">
                      <p className={`text-sm font-extrabold ${tier.text}`}>{tier.label}</p>
                      <p className={`text-[10.5px] font-medium ${tier.text} opacity-70`}>{tier.sub}</p>
                    </div>
                    <span className={`text-xl font-black ${tier.text} opacity-30`}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  {idx < arr.length - 1 && <ArrowDown className="w-4 h-4 text-[#8bc34a] my-1" />}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </ScrollReveal>
  );
}
