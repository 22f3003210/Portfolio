import { HeroSection } from '../sections/home/HeroSection';
import { SystemicDiagnosisSection } from '../sections/home/SystemicDiagnosisSection';
import { OutcomeEngineSection } from '../sections/home/OutcomeEngineSection';
import { BusinessOSSection } from '../sections/home/BusinessOSSection';
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
      <HowIWorkSection />
      <SystemicDiagnosisSection />
      <HowIThinkSection />
      <OutcomeEngineSection />
      <BusinessOSSection />
      <PhilosophySection />
      <EngagementModelSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}


