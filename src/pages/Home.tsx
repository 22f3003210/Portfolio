import { HeroSection } from '../sections/home/HeroSection';
import { SystemicDiagnosisSection } from '../sections/home/SystemicDiagnosisSection';
import { OutcomeEngineSection } from '../sections/home/OutcomeEngineSection';
import { BusinessOSSection } from '../sections/home/BusinessOSSection';
import { HowIThinkSection } from '../sections/home/HowIThinkSection';
import { PhilosophySection } from '../sections/home/PhilosophySection';
import { HowIWorkSection } from '../sections/home/HowIWorkSection';
import { ProfileSummary } from '../sections/home/ProfileSummary';
import { CTASection } from '../sections/home/CTASection';

export function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSummary />
      <HowIThinkSection />
      <SystemicDiagnosisSection />
      <OutcomeEngineSection />
      <BusinessOSSection />
      <PhilosophySection />
      <HowIWorkSection />
      <CTASection />
    </>
  );
}


