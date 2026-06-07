import { ScrollReveal } from '../../components/ScrollReveal';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Award, 
  Trophy, 
  Shield, 
  BookOpen, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface Responsibility {
  role: string;
  org: string;
  duration: string;
  location?: string;
  bullets: string[];
  icon: React.ReactNode;
}

interface AwardItem {
  title: string;
  subtitle: string;
  year: string;
  icon: React.ReactNode;
}

export function ResponsibilitiesSection() {
  const leadershipRoles: Responsibility[] = [
    {
      role: 'Head of Operations',
      org: 'Pixels & Panels Society, IIT Madras',
      duration: 'Jun 2024 – May 2025',
      location: 'IIT Madras',
      icon: <Users className="w-4 h-4 text-gold" />,
      bullets: [
        'Managed operations and execution activities for IIT Madras’ pop-culture society with a community of 1800+ members.',
        'Coordinated event planning, volunteer management, onboarding, and engagement activities across multiple large-scale society initiatives.',
        'Streamlined operational workflows and team coordination improving execution efficiency and participation management.'
      ]
    },
    {
      role: 'Event Management Head',
      org: 'Paradox Got Talent | Paradox’25',
      duration: 'May 2025',
      location: 'IIT Madras',
      icon: <Calendar className="w-4 h-4 text-gold" />,
      bullets: [
        'Led end-to-end event operations and coordination for Paradox Got Talent during Paradox’25 at IIT Madras.',
        'Managed participant handling, volunteer workflows, scheduling, and stage execution ensuring smooth event operations.',
        'Coordinated with organizing teams for audience engagement and operational planning.'
      ]
    },
    {
      role: 'Tech Fest Coordinator',
      org: 'TRYST, IIT Delhi',
      duration: 'Jan 2024 – Mar 2024',
      location: 'IIT Delhi',
      icon: <SettingsIcon />,
      bullets: [
        'Coordinated participant engagement, volunteer activities, and event execution support for TRYST, IIT Delhi’s flagship tech fest.',
        'Assisted in operational planning and large-scale event coordination in fast-paced environments.'
      ]
    },
    {
      role: 'Squad Member',
      org: 'Mood Indigo, IIT Bombay',
      duration: 'Oct 2023 – Dec 2023',
      location: 'IIT Bombay',
      icon: <Award className="w-4 h-4 text-gold" />,
      bullets: [
        'Supported on-ground operations, crowd coordination, and participant management during Mood Indigo, IIT Bombay’s annual cultural festival.',
        'Worked with large volunteer teams ensuring smooth execution of large-scale campus events.'
      ]
    }
  ];

  const awardsList: AwardItem[] = [
    {
      title: 'Bronze Medal in National-Level Boxing Championship',
      subtitle: 'National-Level Boxing Championship, Gujarat',
      year: 'Sep 2018',
      icon: <Shield className="w-4 h-4 text-gold" />
    },
    {
      title: 'Pratibha Award by Chief Minister of Andhra Pradesh',
      subtitle: 'Excellence in SSC exam results and sports achievements',
      year: 'Jul 2018',
      icon: <Trophy className="w-4 h-4 text-gold" />
    },
    {
      title: 'Silver Medal in State-Level Hockey Championship (SGFI)',
      subtitle: 'Chittoor | Selected for National-level state team',
      year: '2017',
      icon: <Trophy className="w-4 h-4 text-gold" />
    },
    {
      title: 'Central-Zone Kabaddi Championship Winner',
      subtitle: 'Madala',
      year: '2016',
      icon: <Users className="w-4 h-4 text-gold" />
    },
    {
      title: '2nd Prize in State-Level Science Fair',
      subtitle: 'Narasaraopet | Project exhibition',
      year: '2016',
      icon: <Sparkles className="w-4 h-4 text-gold" />
    },
    {
      title: 'LIC Best Student of the Year Award',
      subtitle: 'Academic Excellence',
      year: '2016 – 2018',
      icon: <BookOpen className="w-4 h-4 text-gold" />
    },
    {
      title: '1st Place in Elocution Competition',
      subtitle: 'Showcasing public speaking & communication skills among 600 members',
      year: '2019',
      icon: <Award className="w-4 h-4 text-gold" />
    },
    {
      title: '1st Place in State-Level Quiz Competition',
      subtitle: 'Outperforming 50+ teams and demonstrating strong knowledge',
      year: '2019',
      icon: <HelpCircle className="w-4 h-4 text-gold" />
    }
  ];

  function SettingsIcon() {
    return (
      <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  return (
    <section className="bg-white py-12 px-6 select-none border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Leadership Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Positions of Responsibility</h2>
            <p className="text-sm text-text-secondary mt-2">Campus leadership roles, society management, and tech festival execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipRoles.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-[#F8FAFC] border border-border-light p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 border border-border-light bg-[#0B1E2E] flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-navy tracking-tight leading-none mb-1.5">
                            {item.role}
                          </h3>
                          <span className="text-xs font-mono font-bold text-[#0170B9] block">
                            {item.org}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-[10px] font-mono font-semibold text-text-secondary sm:text-right">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#0170B9]" />
                          {item.duration}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#0170B9]" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 pl-1">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-text-secondary leading-relaxed font-semibold">
                          <span className="w-1.5 h-1.5 bg-gold shrink-0 mt-1.5"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="pt-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Awards & Recognition</h2>
            <p className="text-sm text-text-secondary mt-2">Honors, sports achievements, and regional certifications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsList.map((award, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-[#F8FAFC] border border-border-light p-5 hover:shadow-md transition-all duration-300 flex items-start gap-4 h-full">
                  <div className="w-9 h-9 border border-border-light bg-[#0B1E2E] flex items-center justify-center shrink-0">
                    {award.icon}
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] font-semibold text-gold font-mono block">
                      {award.year}
                    </span>
                    <h3 className="text-xs md:text-sm font-bold text-navy tracking-tight mt-1 leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs text-text-secondary font-semibold mt-1">
                      {award.subtitle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
