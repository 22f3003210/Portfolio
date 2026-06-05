import { AboutHero } from '../sections/about/AboutHero';
import { SystemsPhilosophySection } from '../sections/about/SystemsPhilosophySection';
import { TimelineSection } from '../sections/about/TimelineSection';

export function About() {
  return (
    <>
      <AboutHero />
      <SystemsPhilosophySection />
      <TimelineSection />
    </>
  );
}
