import { HeroSection } from '../sections/home/HeroSection';
import { CoreCapabilitiesSection } from '../sections/home/CoreCapabilitiesSection';
import { SystemicDiagnosisSection } from '../sections/home/SystemicDiagnosisSection';
import { OutcomeEngineSection } from '../sections/home/OutcomeEngineSection';
import { PhilosophySection } from '../sections/home/PhilosophySection';
import { HowIWorkSection } from '../sections/home/HowIWorkSection';
import { EngagementModelSection } from '../sections/home/EngagementModelSection';
import { ProfileSummary } from '../sections/home/ProfileSummary';
import { CorePhilosophySection } from '../sections/home/CorePhilosophySection';
// import { TestimonialsSection } from '../sections/home/TestimonialsSection'; // hidden for now
import { CTASection } from '../sections/home/CTASection';

export function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSummary />
      <CorePhilosophySection />
      <HowIWorkSection />
      <CoreCapabilitiesSection />
      <SystemicDiagnosisSection />
      <OutcomeEngineSection />
      <PhilosophySection />
      <EngagementModelSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </>
  );
}


