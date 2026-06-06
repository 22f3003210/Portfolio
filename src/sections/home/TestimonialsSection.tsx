import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
  textColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "“Abraham didn't just recommend another software package; he completely re-engineered our inventory controls and gemstone-tracking workflow. Stock shrinkage dropped to zero within 90 days, and our showroom staff now has live clienteling tools that work.”",
    author: "Rajesh Mehta",
    role: "Managing Director, Mehta & Sons Fine Jewellery",
    initials: "RM",
    color: "#E2ECE9", // Sage Green tint
    textColor: "#4A6E55" // Sage Green dark
  },
  {
    quote: "“Before Abraham stepped in, our sales, inventory, and finance teams were operating in siloed databases. Abraham unified our digital nervous system, allowing us to scale from 3 to 12 stores without adding a single administrative overhead role.”",
    author: "Sarah Jenkins",
    role: "Chief Operating Officer, Aurelia Retail",
    initials: "SJ",
    color: "#E0EBEC", // Teal tint
    textColor: "#3C5B66" // Teal dark
  },
  {
    quote: "“Abraham's process-first, software-second philosophy is unmatched. His audit uncovered operational leakages in our custom order pipeline that we had overlooked for years. He built the systems foundation that allowed us to scale our showrooms predictably.”",
    author: "Tariq Al-Mansoor",
    role: "Founder, Al-Mansoor Designs",
    initials: "TM",
    color: "#F2ECE7", // Terracotta tint
    textColor: "#825C43" // Terracotta dark
  }
];

export function TestimonialsSection() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-20 md:py-28 px-6 border-b border-border-light relative overflow-hidden select-none">
      {/* Decorative background dot grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40" />

      <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel variant="pill">PROOF</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight mt-3">
              What Retail Leaders Say. <br />
              <span className="text-[#0170B9]">Operating Systems in Practice.</span>
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-2 max-w-2xl mx-auto">
              Real feedback from luxury showrooms and retail networks that structured their operations for scale.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between rounded-none shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top border colored dynamically */}
              <div 
                className="absolute top-0 left-0 right-0 h-[4px]" 
                style={{ backgroundColor: t.textColor }} 
              />

              {/* Quote Mark Watermark */}
              <span 
                className="absolute right-6 top-6 text-8xl font-serif pointer-events-none select-none font-bold opacity-[0.04] leading-none"
                style={{ color: t.textColor }}
              >
                ”
              </span>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                {/* Star Ratings */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3 relative z-10">
                {/* Initials Badge */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black tracking-wider shrink-0"
                  style={{ backgroundColor: t.color, color: t.textColor }}
                >
                  {t.initials}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-sm font-extrabold text-navy leading-snug">
                    {t.author}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-normal">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
