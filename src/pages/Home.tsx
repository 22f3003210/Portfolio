import { HeroSection } from '../sections/home/HeroSection';
import { CoreCapabilitiesSection } from '../sections/home/CoreCapabilitiesSection';
import { SystemicDiagnosisSection } from '../sections/home/SystemicDiagnosisSection';
import { OutcomeEngineSection } from '../sections/home/OutcomeEngineSection';
import { HowIThinkSection } from '../sections/home/HowIThinkSection';
import { PhilosophySection } from '../sections/home/PhilosophySection';
import { HowIWorkSection } from '../sections/home/HowIWorkSection';
import { EngagementModelSection } from '../sections/home/EngagementModelSection';
import { ProfileSummary } from '../sections/home/ProfileSummary';
import { TestimonialsSection } from '../sections/home/TestimonialsSection';
import { CTASection } from '../sections/home/CTASection';

export function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSummary />
      <CoreCapabilitiesSection />
      <HowIWorkSection />
      <SystemicDiagnosisSection />
      <HowIThinkSection />
      <OutcomeEngineSection />
      <PhilosophySection />
      <EngagementModelSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}


