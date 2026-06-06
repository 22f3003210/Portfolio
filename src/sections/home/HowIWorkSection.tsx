import { FocusAreaFramework } from './FocusAreaFramework';

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 border-b border-border-light relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0170B9_1.5px,transparent_1.5px)] [background-size:24px_24px] z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <FocusAreaFramework />
      </div>
    </section>
  );
}
