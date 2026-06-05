import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  num: string;
  title: string;
  timeline: string;
  desc: string;
  img: string;
}

export function HowIWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const steps: Step[] = [
    {
      num: '01',
      title: 'The Audit',
      timeline: 'ON-SITE VISIT',
      desc: 'Every transformation begins on-site. Abraham works directly from your location to gain a first-hand understanding of business operations, workflows, customer interactions, inventory movement, and decision-making processes.',
      img: '/how_i_work_audit.png'
    },
    {
      num: '02',
      title: 'The Assessment',
      timeline: 'ROOT CAUSE ANALYSIS',
      desc: 'Once the audit phase is completed, I present a structured assessment outlining key findings, root causes, and practical recommendations designed to be implementable within the realities of your business.',
      img: '/how_i_work_assessment.png'
    },
    {
      num: '03',
      title: 'The Transformation',
      timeline: 'HANDS-ON EXECUTION',
      desc: 'During this engagement, I continue making regular on-site visits and work closely with stakeholders to implement solutions, redesign processes, establish systems, and drive measurable improvements across operations.',
      img: '/how_i_work_transformation.png'
    },
    {
      num: '04',
      title: 'The Scalability',
      timeline: 'SYSTEM ARCHITECTURE',
      desc: 'The objective is not simply to solve isolated problems, but to build stronger systems that enable long-term scalability, operational visibility, and sustainable growth.',
      img: '/how_i_work_scalability.png'
    }
  ];

  return (
    <section
      id="how-i-work"
      className="w-full py-20 md:py-[120px] px-6 select-none bg-warm-white"
    >
      <div ref={containerRef} className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2
          className="font-extrabold text-text-primary mb-12 md:mb-16 tracking-tight uppercase"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.2 }}
        >
          How I Work
        </h2>

        {/* Horizontal Line above the grid (only visible on desktop) */}
        <div
          className="hidden lg:block h-[2px] mb-0 origin-left bg-navy transition-transform duration-1000 ease-out"
          style={{
            transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left center'
          }}
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              className="pt-8 text-left"
              style={{ borderTop: '4px solid #0170B9' }}
            >
              {/* Cartoon Illustration Container */}
              <div
                className="border-2 border-dashed border-navy/20 bg-white p-3 mb-5 aspect-[4/3] w-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-gold/40"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>

              {/* Number */}
              <div
                className="text-[48px] font-extrabold leading-none text-navy opacity-30"
              >
                {step.num}
              </div>

              {/* Title */}
              <h3 className="mt-2 font-bold text-[18px] text-text-primary">
                {step.title}
              </h3>

              {/* Timeline Subtitle */}
              <div
                className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gold"
              >
                {step.timeline}
              </div>

              {/* Description */}
              <p className="mt-3 text-[15px] font-normal text-text-secondary leading-[1.6]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
