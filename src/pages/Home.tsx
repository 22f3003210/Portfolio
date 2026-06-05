import { HeroSection } from '../sections/home/HeroSection';
import { SystemsProblemSection } from '../sections/home/SystemsProblemSection';
import { OutcomeEngineSection } from '../sections/home/OutcomeEngineSection';
import { BusinessOSSection } from '../sections/home/BusinessOSSection';
import { HowIThinkSection } from '../sections/home/HowIThinkSection';
import { ProblemsSection } from '../sections/home/ProblemsSection';
import { WorkflowsGrid } from '../sections/home/WorkflowsGrid';
import { PhilosophySection } from '../sections/home/PhilosophySection';
import { HowIWorkSection } from '../sections/home/HowIWorkSection';
import { CTASection } from '../sections/home/CTASection';

export function Home() {
  return (
    <>
      <HeroSection />
      <SystemsProblemSection />
      <OutcomeEngineSection />
      <BusinessOSSection />
      <HowIThinkSection />
      <ProblemsSection />
      <WorkflowsGrid />
      <PhilosophySection />
      <HowIWorkSection />
      <CTASection />
    </>
  );
}


