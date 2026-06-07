import { useState } from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { DetailedBioSection } from '../sections/about/DetailedBioSection';
import { SystemsPhilosophySection } from '../sections/about/SystemsPhilosophySection';
import { TimelineSection } from '../sections/about/TimelineSection';
import { EducationSection } from '../sections/about/EducationSection';
import { SkillsSection } from '../sections/about/SkillsSection';
import { ProjectsSection } from '../sections/about/ProjectsSection';
import { ResponsibilitiesSection } from '../sections/about/ResponsibilitiesSection';
import { User, GraduationCap, Target, Code, Award } from 'lucide-react';

export function About() {
  const [activeTab, setActiveTab] = useState<string>('summary');

  const tabs = [
    { id: 'summary', label: 'Professional Summary', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Target },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'responsibilities', label: 'Position of Responsibilities', icon: Award }
  ];

  return (
    <>
      <AboutHero />
      
      {/* Dynamic Slicer Tabs Capsule Bar (Light Pill Design with Icons) */}
      <div className="bg-[#F8FAFC] pt-8 pb-5 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="inline-flex flex-wrap items-center bg-slate-100 p-1.5 rounded-full border border-slate-200/60 shadow-sm gap-1">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-full whitespace-nowrap ${
                    active
                      ? 'bg-white text-[#0b2341] shadow-md border border-slate-200/40 font-extrabold'
                      : 'text-slate-500 hover:text-[#0b2341] hover:bg-slate-200/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Rendered Content Area */}
      <div className="bg-white min-h-[400px]">
        {activeTab === 'summary' && (
          <>
            <DetailedBioSection />
            <SystemsPhilosophySection />
            <TimelineSection hideSidebar={true} />
          </>
        )}
        {activeTab === 'education' && <EducationSection />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'responsibilities' && <ResponsibilitiesSection />}
      </div>
    </>
  );
}
