import { CheckCircle2, Lightbulb, Compass } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { FocusAreaFramework } from '../home/FocusAreaFramework';

export function DetailedBioSection() {
  const stats = [
    { value: '200+', label: 'On-Site Business Exposures', desc: 'Working directly with owners, operational leaders, and frontline teams across South India.' },
    { value: '90+', label: 'Jewellery Organizations Visited', desc: 'Evaluating process discipline, inventory security, and billing workflows first-hand.' },
    { value: '55+', label: 'ERP Implementations', desc: 'Unifying operational databases, cost tag structures, and stock ledger entries.' },
    { value: '15+', label: 'Transformation Initiatives', desc: 'Redesigning workflows, training staff, and establishing operational frameworks.' }
  ];

  const systemsQuestions = [
    'What is this process missing?',
    'What operational or decision-making gaps currently exist?',
    'What risks could these gaps create if left unaddressed?',
    'What insights can this process generate?',
    'What actions can be taken based on those insights?',
    'How will this improve operational efficiency, decision quality, customer experience, or profitability?',
    'How does this contribute to the overall performance and growth of the business?'
  ];

  const pillars = [
    {
      title: 'Data Without Action',
      slogan: 'Data without action has little value.',
      desc: 'Information is only as good as the decisions it enables. We don\'t just accumulate metrics; we design actionable insights.'
    },
    {
      title: 'Processes Without Outcomes',
      slogan: 'Processes without outcomes create bureaucracy.',
      desc: 'Structure without results is just bureaucracy. Every checklist and log we implement must directly protect or grow your margin.'
    },
    {
      title: 'Technology Without Adoption',
      slogan: 'Technology without adoption creates complexity.',
      desc: 'Features without staff buy-in create complexity. Systems must be simple enough for frontline employees to execute daily.'
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 px-6 border-b border-border-light relative">
      <div className="max-w-[1200px] mx-auto space-y-24">
        
        {/* Section 1: Learning Business Through the Field */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0170B9] bg-[#0170B9]/5 px-3 py-1 border border-[#0170B9]/15 rounded-none inline-block">
                FIELD EXPERIENCE
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-2">
                Learning Business Through the Field, <br />
                <span className="text-[#0170B9]">Not Just the Classroom</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="space-y-4">
              <p className="text-text-secondary text-base leading-relaxed">
                Many professionals spend years inside a single organization and become experts in one way of operating.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                My journey has been different.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Over the years, I have travelled extensively across South India, working directly with business owners, operational leaders, managers, accountants, inventory teams, and frontline employees. Through ERP implementations, process transformation initiatives, technical pre-sales engagements, training programs, and business consulting assignments, I have gained on-site exposure to more than 200 businesses and visited over 90 jewellery organizations.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                I have led or contributed to 55+ ERP implementation projects, 15+ process transformation and training initiatives, and numerous solution engineering engagements where understanding business operations was just as important as understanding technology.
              </p>
              <p className="text-text-secondary text-base leading-relaxed font-semibold text-text-primary">
                This experience gave me something that cannot be learned from a single organization or a textbook: perspective.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="bg-white p-6 rounded-none border border-border-light shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-4xl md:text-5xl font-black text-navy leading-none">{stat.value}</span>
                  <h4 className="text-sm font-bold text-[#0170B9] mt-3 leading-snug">{stat.label}</h4>
                </div>
                <p className="text-xs text-text-secondary mt-3 leading-relaxed">{stat.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section 2: What I Discovered */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 bg-white border border-border-light rounded-none p-8 lg:p-10 flex flex-col justify-between shadow-sm">
            <ScrollReveal className="space-y-4">
              <div className="w-10 h-10 rounded-none bg-gold/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-[#2E3192]" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy">What I Discovered</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                While every business is unique, many of the challenges they face are surprisingly similar.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Inventory issues, inconsistent processes, poor visibility, disconnected systems, unreliable data, communication gaps, and decision-making bottlenecks appear in different forms across organizations.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                What fascinated me was not the problems themselves, but how different businesses approached solving them.
              </p>
              
              <ul className="space-y-1.5 pl-1 text-sm text-text-secondary font-medium">
                <li>• Some relied on experience.</li>
                <li>• Some relied on intuition.</li>
                <li>• Some relied on technology.</li>
                <li>• Some relied on process discipline.</li>
              </ul>
              
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Observing these differences allowed me to identify patterns, uncover recurring bottlenecks, and understand how operational decisions influence business outcomes.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Over time, I realized that most business challenges are rarely isolated problems.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed font-semibold text-text-primary">
                They are symptoms of larger system-level gaps.
              </p>
            </ScrollReveal>
          </div>

          {/* Section 3: The Shift From Technology to Systems Thinking */}
          <div className="lg:col-span-7 bg-navy rounded-none p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
            <ScrollReveal className="space-y-4">
              <div className="w-10 h-10 rounded-none bg-white/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-gold">METHODOLOGY</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">The Shift From Technology to Systems Thinking</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed font-semibold">
                My work began with technology, but my thinking evolved into systems.
              </p>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Repeatedly working with businesses exposed me to a common reality: poor outcomes are often the result of poor visibility, fragmented processes, and incomplete information.
              </p>
              <p className="text-xs md:text-sm text-white/85 leading-relaxed font-medium">
                This led me to look beyond software implementation and reporting.
              </p>
              <p className="text-xs md:text-sm text-white/95 leading-relaxed font-medium">
                I became increasingly interested in understanding:
              </p>
              
              <ul className="space-y-2 pt-1 pl-1">
                {systemsQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-white/90">
                    <span className="text-gold shrink-0 font-bold">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-xs md:text-sm text-gold font-semibold pt-2 leading-relaxed">
                These questions became the foundation of how I approach problem-solving.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Section 4: My Philosophy (Three Pillars) */}
        <div className="space-y-12 pt-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0170B9] bg-[#0170B9]/5 px-3 py-1 border border-[#0170B9]/15 rounded-none inline-block">
              OPERATING PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">My Philosophy</h2>
            <p className="text-base md:text-lg text-text-primary font-medium max-w-2xl mx-auto leading-relaxed">
              I believe every report, dashboard, workflow, process, and technology investment should serve a business purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="bg-white border border-border-light rounded-none p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider font-mono">PILLAR 0{idx + 1}</span>
                  <h3 className="text-lg font-extrabold text-navy mt-2">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-[#0170B9] mt-1 italic leading-snug">{pillar.slogan}</p>
                </div>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed mt-4">{pillar.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Goal & Systems Impact Box */}
          <ScrollReveal className="bg-white border border-border-light rounded-none p-8 lg:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-gold font-mono">THE ULTIMATE GOAL</span>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-navy leading-snug">The goal is not to build more systems.</p>
                  <p className="text-2xl font-black text-[#0170B9] leading-snug">The goal is to build better systems.</p>
                </div>
              </div>
              
              <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-border-light pt-6 md:pt-0 md:pl-8 space-y-3">
                <span className="text-xs font-bold text-navy uppercase tracking-wider">Better systems enable:</span>
                <ul className="space-y-2">
                  {[
                    'Systems that create visibility.',
                    'Systems that improve decision-making.',
                    'Systems that drive accountability.',
                    'Systems that help businesses operate with greater clarity, consistency, and control.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-[#0170B9] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section 5: How I Work */}
        <FocusAreaFramework />

      </div>
    </section>
  );
}
