import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

export function EducationSection() {
  const educations = [
    {
      institution: 'Indian Institute of Technology, Madras (IIT Madras)',
      degree: 'Bachelor of Science (BS) in Data Science and Applications',
      duration: '2021 – 2025 (Ongoing)',
      details: [
        'Specializing in Data Analytics, Machine Learning algorithms, database systems (SQL/SQLite), and python pipelines.',
        'Actively involved in student life: Head of Operations for Pixels & Panels IIT Madras society, coordinating Paradox Got Talent at Paradox\'25.'
      ],
      icon: <GraduationCap className="w-4 h-4 text-gold" />
    },
    {
      institution: 'Higher Secondary & Intermediate Education',
      degree: 'MPC (Mathematics, Physics, Chemistry)',
      duration: '2016 – 2018',
      details: [
        'Board of Intermediate Education, Andhra Pradesh.',
        'Academic Excellence with MPC group focus.'
      ],
      icon: <BookOpen className="w-4 h-4 text-gold" />
    },
    {
      institution: 'Secondary School Certificate (SSC)',
      degree: 'High School Matriculation',
      duration: 'Class of 2016',
      details: [
        'Board of Secondary Education, Andhra Pradesh (GPA: 9.8 / 10).',
        'Awarded the CM Pratibha Award by the Chief Minister of Andhra Pradesh for academic and athletic excellence.',
        'Recipient of the LIC Best Student of the Year Award (2016 – 2018) for academic merits.'
      ],
      icon: <Award className="w-4 h-4 text-gold" />
    }
  ];

  return (
    <section className="bg-white py-12 px-6 select-none border-b border-slate-200">
      <div className="max-w-[800px] mx-auto space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Education History</h2>
          <p className="text-sm text-text-secondary mt-2">Academic qualifications, degrees, and school-level achievements.</p>
        </div>
        
        <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100">
          {educations.map((edu, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="relative pl-12">
                {/* Node */}
                <div className="absolute left-[9px] top-1.5 w-6.5 h-6.5 rounded-full bg-[#0B1E2E] border border-gold flex items-center justify-center shadow-md z-10">
                  {edu.icon}
                </div>
                <div className="bg-[#F8FAFC] border border-border-light p-5 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base md:text-lg font-bold text-navy">{edu.institution}</h3>
                    <span className="text-xs font-mono font-bold text-gold bg-gold/5 px-2.5 py-0.5 border border-gold/20 inline-block self-start">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0170B9] mb-4">{edu.degree}</h4>
                  <ul className="space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs md:text-sm text-text-secondary leading-relaxed font-semibold">
                        <span className="w-1.5 h-1.5 bg-gold shrink-0 mt-2"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
