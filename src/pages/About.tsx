import { AboutHero } from '../sections/about/AboutHero';
import { DetailedBioSection } from '../sections/about/DetailedBioSection';
import { SystemsPhilosophySection } from '../sections/about/SystemsPhilosophySection';
import { TimelineSection } from '../sections/about/TimelineSection';
import { ProjectsAndResponsibilities } from '../sections/about/ProjectsAndResponsibilities';
import { motion } from 'framer-motion';

export function About() {
  const quote = "“A young person who travels a lot is older than old man who stays in the village.” — Gabon (African Proverb)";
  const words = quote.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      }
    }
  } as const;

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  } as const;

  return (
    <>
      <AboutHero />
      
      {/* Gabon Proverb Transition Quote Banner (No Card with Text Reveal Motion) */}
      <div className="bg-white pt-10 pb-6 px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-[1380px] w-full text-center select-none"
        >
          <p className="italic text-base md:text-lg font-extrabold leading-relaxed tracking-tight flex flex-wrap justify-center">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                whileHover={{ y: -4, scale: 1.08, color: "#0170B9" }}
                className="inline-block mr-1.5 text-[#0B1E2E] cursor-default transition-colors duration-200"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>

      <DetailedBioSection />
      <SystemsPhilosophySection />
      <TimelineSection />
      <ProjectsAndResponsibilities />
    </>
  );
}
