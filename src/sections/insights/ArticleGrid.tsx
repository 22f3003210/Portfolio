import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Users, 
  Coins, 
  Cpu, 
  UserCheck, 
  Zap, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { articles } from '../../data/articles';
import { motion, AnimatePresence } from 'framer-motion';

const GREEN = '#8bc34a';

export function ArticleGrid() {
  const [activeTab, setActiveTab] = useState<string>('leadership');

  const tabs = [
    { id: 'leadership', label: 'Leadership & Ownership', icon: Users, categoryName: 'Leadership & Ownership' },
    { id: 'inventory', label: 'Inventory & Procurement', icon: Coins, categoryName: 'Inventory & Procurement' },
    { id: 'data', label: 'Data & Decision Making', icon: Cpu, categoryName: 'Data & Decision Making' },
    { id: 'crm', label: 'Customer Experience & CRM', icon: UserCheck, categoryName: 'Customer Experience & CRM' },
    { id: 'operations', label: 'Operations & Growth', icon: Zap, categoryName: 'Operations & Growth' },
    { id: 'philosophy', label: 'Philosophy', icon: Compass, categoryName: 'Philosophy' }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const filteredArticles = articles.filter(article => article.category === currentTab.categoryName);

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-t border-slate-100">
      {/* Slicer Tabs Capsule Bar (Matching About Section Design) */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center bg-slate-100 p-1.5 rounded-full border border-slate-200/60 shadow-sm gap-1.5 max-w-full overflow-x-auto">
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

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeTab === 'philosophy' ? (
            /* Custom Premium Editorial Layout for Philosophy Tab */
            <motion.div
              key="philosophy-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-[800px] mx-auto bg-white border border-slate-200/60 shadow-xl rounded-none p-8 md:p-14 relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: GREEN }} />
              
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-6">
                <span className="text-xs uppercase tracking-widest font-black text-slate-400">Knowledge Vault • Core Statement</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 10 min read
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2341] tracking-tight leading-tight mb-6">
                Building Better Systems For The Future Of Retail Jewellery Businesses
              </h2>

              <p className="text-base md:text-lg text-[#0b2341] font-bold italic leading-relaxed mb-8 border-l-4 pl-4 border-[#8bc34a]">
                "A business grows to the extent its systems allow."
              </p>

              <div className="my-10 space-y-4">
                {[
                  "Growth is not a sales problem.",
                  "Profitability is not a finance problem.",
                  "Customer experience is not a marketing problem.",
                  "Most business challenges are system challenges."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full" style={{ background: GREEN }} />
                    <span className="text-sm md:text-base text-[#0b2341] font-black uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                <p>
                  The businesses that will thrive in the future are the ones that understand their data, build strong operating systems, empower their teams, and continuously improve how they serve customers.
                </p>
                <p>
                  That is the future we are helping build. Every operational issue you face is a symptom of system fatigue. Let's fix the root cause.
                </p>
              </div>

              <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xs uppercase tracking-widest font-black text-slate-400">Scale With Abraham Operating Model</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0b2341] hover:text-[#8bc34a] transition-colors"
                >
                  Discuss this Philosophy <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ) : (
            /* Article Grid Layout for standard categories */
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.05}>
                  <Link
                    to={article.link}
                    className="flex flex-col h-full bg-white rounded-none border border-slate-200/75 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#8bc34a]/30 group"
                  >
                    {/* Header Banner - Category specific color strip */}
                    <div
                      className="h-[100px] flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: article.categoryColor }}
                    >
                      {/* Subtle geometry decoration */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
                      <span className="absolute top-3 left-3 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white bg-white/10 border border-white/10 rounded-sm backdrop-blur-sm">
                        {article.category}
                      </span>
                      <BookOpen className="w-8 h-8 text-white/55 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-base md:text-lg font-black text-[#0b2341] mb-3 line-clamp-2 group-hover:text-[#8bc34a] transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-[10.5px] text-slate-400 font-bold border-t border-slate-100 pt-4 mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {article.readTime}
                        </span>
                        <span className="text-[#0b2341] group-hover:text-[#8bc34a] transition-colors flex items-center gap-0.5">
                          Read <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
