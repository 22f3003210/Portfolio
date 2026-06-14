import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight,
  X,
  Users,
  Package,
  ShoppingCart,
  Heart,
  BarChart2,
  Settings,
  TrendingUp,
  Building2,
  Rocket,
  DollarSign,
  Cpu,
  Target,
  Layers
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { articles } from '../../data/articles';
import type { Article } from '../../data/articles';
import { motion, AnimatePresence } from 'framer-motion';

// Types for the rich text and standard consulting modal layouts
interface RichTextBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

interface RichTextContent {
  type: "rich-text";
  blocks: RichTextBlock[];
}

interface StandardContent {
  type: "standard";
  diagnosis: string;
  playbookTitle: string;
  steps: string[];
  outcome: string;
}

type ArticleModalContent = RichTextContent | StandardContent;

// Dynamic McKinsey-style thought leadership article content generator based on category and title
function getArticleContent(article: Article): ArticleModalContent {
  const title = article.title;
  const category = article.category;

  // 1. Philosophy / Core Operating Model Special Essay
  if (title.includes("Building Better Systems")) {
    return {
      type: "rich-text",
      blocks: [
        { type: "paragraph", text: "We believe any retail jewellery business can achieve rapid and sustainable growth when it has access to the right data and understands the operational patterns within its daily workflows." },
        { type: "paragraph", text: "Data is more than numbers—it reveals what is happening in the business, where opportunities exist, what challenges need attention, and what actions should be taken next. The quality of decisions a business makes is directly linked to the quality of information it has." },
        
        { type: "heading", text: "Most Business Challenges Are System Challenges" },
        { type: "paragraph", text: "Growth is not a sales problem. Profitability is not a finance problem. Customer experience is not a marketing problem. Most business bottlenecks are symptoms of system fatigue." },
        { type: "list", items: [
          "Growth without systems creates operational chaos.",
          "Profitability is won or lost in inventory and buying discipline.",
          "Customer experience is an operational function that starts long before a customer enters the store."
        ]},
        
        { type: "heading", text: "The Future Belongs to System Thinkers" },
        { type: "paragraph", text: "The competitive advantage will not come from simply collecting data, but from knowing which data matters, how to interpret it, and how to act on it. The businesses that will thrive in the future are the ones that understand their data, build strong operating systems, empower their teams, and continuously improve how they serve customers." },
        { type: "paragraph", text: "Our mission is to help retail jewellery businesses build a data-driven operating model by identifying the right metrics, creating visibility through dashboards, and translating insights into meaningful action." }
      ]
    };
  }

  // 2. "Why Do Employees Stop Taking Initiative?" Full Detailed Essay
  if (title.includes("Why Do Employees Stop Taking Initiative?")) {
    return {
      type: "rich-text",
      blocks: [
        { type: "paragraph", text: "One of the most common concerns I hear from business owners is: \"My employees don't take initiative.\"" },
        { type: "paragraph", text: "At some point, almost every owner has experienced this." },
        { type: "paragraph", text: "Problems are visible, but nobody acts. Opportunities exist, but nobody pursues them. Issues are identified, but everyone waits for instructions." },
        { type: "paragraph", text: "Eventually, the owner becomes the person responsible for solving everything." },
        { type: "paragraph", text: "The immediate conclusion is usually: \"My team lacks ownership.\"" },
        { type: "paragraph", text: "But over the years, I've observed that employees rarely start their careers without initiative. Most people join organizations with enthusiasm, ideas, and a willingness to contribute. Something happens along the way." },
        { type: "paragraph", text: "The real question isn't: \"Why don't employees take initiative?\" The better question is: \"What causes employees to stop taking initiative?\"" },
        
        { type: "heading", text: "Initiative Dies When It Is Not Rewarded" },
        { type: "paragraph", text: "Many organizations unknowingly discourage initiative. An employee identifies a problem and proposes a solution. Instead of encouragement, they receive criticism. They make a decision and get questioned for taking action. They attempt something new and are blamed when it doesn't work perfectly." },
        { type: "paragraph", text: "After a few experiences like this, people learn a simple lesson: \"It's safer to wait for instructions.\"" },
        { type: "paragraph", text: "The result is predictable. Employees stop thinking ahead, stop solving problems, and stop taking risks. Not because they are incapable—but because the environment teaches them not to." },
        
        { type: "heading", text: "Initiative Requires Clarity" },
        { type: "paragraph", text: "People cannot take initiative when expectations are unclear. When goals are vague, employees spend more time trying to understand what success looks like than actually achieving it. Questions begin to emerge:" },
        { type: "list", items: [
          "Am I allowed to make this decision?",
          "Is this my responsibility?",
          "What happens if I make a mistake?",
          "How will my performance be measured?"
        ]},
        { type: "paragraph", text: "Without clarity, hesitation becomes normal." },
        
        { type: "heading", text: "Initiative Requires Authority" },
        { type: "paragraph", text: "A common contradiction exists in many businesses. Employees are expected to solve problems, but they are not empowered to make decisions. Every decision requires approval, every exception requires escalation, and every action requires permission." },
        { type: "paragraph", text: "Eventually, employees stop trying. Why solve a problem when the final decision belongs to someone else? Initiative cannot survive inside a culture where authority is centralized." },
        
        { type: "heading", text: "Initiative Requires Capability" },
        { type: "paragraph", text: "Sometimes employees genuinely want to contribute more but lack the knowledge, skills, or confidence. Businesses often mistake capability gaps for attitude problems. The employee may not need motivation—they may need training, coaching, or a better understanding of the business. People are more likely to take initiative when they feel competent." },
        
        { type: "heading", text: "Initiative Requires Accountability" },
        { type: "paragraph", text: "Ownership is difficult to create when performance is invisible. If nobody knows what success looks like, nobody feels responsible for achieving it. This is why KPIs, scorecards, dashboards, and review systems matter. Not because businesses need more reports, but because people need visibility into outcomes. What gets measured gets discussed. What gets discussed gets improved." },
        
        { type: "heading", text: "The Hidden Impact of Micromanagement" },
        { type: "paragraph", text: "In many businesses, the owner unintentionally becomes the biggest obstacle to initiative. Every decision flows through them. Every problem returns to them. Every exception requires their involvement." },
        { type: "paragraph", text: "Over time, employees learn a dangerous habit: \"If I wait long enough, the owner will handle it.\" This creates dependency, and dependency destroys initiative. The more owners solve every problem, the less their teams learn to solve problems independently." },
        
        { type: "heading", text: "What I've Observed" },
        { type: "paragraph", text: "In businesses where employees consistently take initiative, a few patterns almost always exist:" },
        { type: "list", items: [
          "Clear expectations and defined responsibilities",
          "Decentralized authority to make decisions within boundaries",
          "Structured, outcome-based review systems",
          "Access to direct operational information",
          "Constructive feedback and trust from leadership"
        ]},
        { type: "paragraph", text: "These businesses don't rely on motivation alone. They build systems and environments where initiative becomes natural." },
        
        { type: "heading", text: "Final Thought" },
        { type: "paragraph", text: "Most employees do not wake up and decide to avoid responsibility. More often, they adapt to the systems around them. If initiative is missing across an entire organization, the issue is rarely a people problem—it is a leadership, process, visibility, or accountability problem." },
        { type: "paragraph", text: "Employees rarely stop taking initiative overnight. It usually disappears one experience, one decision, and one system failure at a time. The good news is that the same systems that suppress initiative can also be redesigned to encourage it." }
      ]
    };
  }

  // Fallback templates tailored to each of the 13 categories
  switch (category) {
    case "People & Leadership":
      return {
        type: "standard",
        diagnosis: "The main bottleneck in growing jewellery businesses is centralized decision-making. When the owner is the sole answer to every operational question, department heads stop taking initiative, creating a learned dependency that halts execution velocity.",
        playbookTitle: "Leadership & Decentralization Playbook",
        steps: [
          "Define explicit decision-making thresholds and purchasing authority limits for store managers.",
          "Transition performance reviews from daily qualitative inputs to weekly outcome KPI dashboards.",
          "Institute weekly structured alignment sessions rather than constant daily ad-hoc fire-fighting.",
          "Document standard process knowledge to decouple business operations from the presence of specific individuals."
        ],
        outcome: "By delegating control within structured boundaries, you build a culture of accountability and free up executive capacity for long-term growth."
      };
    case "Inventory":
      return {
        type: "standard",
        diagnosis: "In retail jewellery, stagnant inventory is a silent profit killer. Trapping working capital in slow-moving or aged stock prevents investment in high-velocity categories, directly impacting operational liquidity and Gross Margin Return on Investment (GMROI).",
        playbookTitle: "Inventory Excellence & Capital Velocity Plan",
        steps: [
          "Implement a rolling 90-day inventory velocity check to flag stagnant gold and diamond stock.",
          "Establish clear GMROI tracking parameters by category, vendor, and retail branch weekly.",
          "Create a formal liquidation and melting protocol for stock aged beyond 365 days to reclaim metal weights.",
          "Align procurement budgets directly with localized category velocity metrics rather than buyer intuition."
        ],
        outcome: "Optimizing inventory velocity can free up to 30% of locked capital, significantly increasing net margins without requiring new external financing."
      };
    case "Procurement":
      return {
        type: "standard",
        diagnosis: "Procurement decisions are frequently made late and based on cost discounts rather than productivity. Buying excess weight just to secure a volume discount often leads to dead inventory that eats up your cash flow.",
        playbookTitle: "Data-Driven Buying & Procurement Protocol",
        steps: [
          "Develop a strict open-to-buy (OTB) framework based on historical sales velocity and seasonal trends.",
          "Create a vendor performance scorecard tracking lead times, quality failure rates, and margin productivity.",
          "Prioritize ordering high-velocity base items over speculative or custom designs with long replenishment cycles.",
          "Integrate automatic stock-level trigger alerts between the retail floor and the buying team."
        ],
        outcome: "Shifting to structured procurement reduces over-purchasing, minimizes stockouts of hot sellers, and keeps capital flowing productively."
      };
    case "CRM & Customer Experience":
      return {
        type: "standard",
        diagnosis: "Most jewellery stores suffer from a low walk-in conversion rate and poor customer retention. Chasing new leads is expensive; the real growth opportunity lies in converting existing traffic and building lifetime client value through systemized follow-ups.",
        playbookTitle: "Customer Retention & Conversion Strategy",
        steps: [
          "Standardize store floor greetings and qualification workflows to understand customer intent instantly.",
          "Implement a mandatory post-visit follow-up sequence inside the CRM within 48 hours of any client interaction.",
          "Segment the customer database by purchase history and lifecycle status to run highly targeted, low-cost campaigns.",
          "Train staff to document client preferences and important anniversary dates to build personalized recall."
        ],
        outcome: "Consistent CRM follow-up discipline can double repeat purchase rates and increase overall traffic conversion by 15-20%."
      };
    case "Data & Analytics":
      return {
        type: "standard",
        diagnosis: "Most jewellers are drowning in raw data but starving for actionable insights. Monthly accounting sheets and endless report spreadsheets fail to guide daily decisions, leading to analysis paralysis and reactive management.",
        playbookTitle: "Decision Intelligence & KPI Framework",
        steps: [
          "Consolidate fragmented database reports into a single, visual real-time executive dashboard.",
          "Define and monitor the top 5 leading indicators (like inventory turn, conversion rate, and average ticket size).",
          "Remove vanity metrics that do not directly influence cash flow or operational decisions.",
          "Train the management team to run structured review sessions centered on insights, not information."
        ],
        outcome: "Transitioning to insight-driven dashboards replaces guesswork with mathematical clarity, enabling rapid and confident executive decision-making."
      };
    case "Operations":
      return {
        type: "standard",
        diagnosis: "Daily operational friction and process bottlenecks slow down handoffs, increase customer wait times, and lead to critical human errors. Standard operating models are business assets that ensure consistent performance across all shifts.",
        playbookTitle: "Process Standardization & SOP System",
        steps: [
          "Map out the end-to-end customer journey and backend logistics to locate operational delays.",
          "Draft clear, visual Standard Operating Procedures (SOPs) for inventory receiving, tagging, and cashiering.",
          "Institute weekly system-gap audits to diagnose repeat errors and resolve them at the root.",
          "Decouple critical operational tasks from individual dependency through standard training models."
        ],
        outcome: "Standardized operational workflows reduce error rates by up to 80% and build a scalable foundation for opening new retail branches."
      };
    case "Sales":
      return {
        type: "standard",
        diagnosis: "Sales targets in retail jewellery often focus exclusively on top-line revenue numbers, which can incentivize heavy discounting and margin erosion. Effective sales models measure conversion metrics, margin preservation, and outcome efficiency.",
        playbookTitle: "Sales Performance & Margin Preservation Plan",
        steps: [
          "Align staff incentive programs directly with gross margin preservation rather than simple sales volume.",
          "Track individual staff traffic conversion rates to diagnose sales training gaps.",
          "Establish strict floor rules for discounting authority, requiring process checks before price cuts.",
          "Implement structured cross-selling and up-selling scripts for high-margin categories."
        ],
        outcome: "Focusing sales teams on conversion and margin productivity increases net profit margins while elevating the brand's premium positioning."
      };
    case "Multi-Store Operations":
      return {
        type: "standard",
        diagnosis: "Scaling from a single store to a multi-store network frequently results in varying customer experiences and local operational drift. Maintaining brand consistency and cross-branch visibility is the key challenge of multi-store operators.",
        playbookTitle: "Multi-Store Governance & Standardisation Blueprint",
        steps: [
          "Consolidate multi-store databases to enable real-time cross-branch stock lookups and transfers.",
          "Establish a centralized audit team to run weekly operations checklists across all locations.",
          "Implement standardized store manager dashboards to monitor regional performance variations.",
          "Deploy a unified CRM database to track customer journeys seamlessly across the entire network."
        ],
        outcome: "Standardizing operations across all stores ensures a consistent customer experience and prevents localized management failures."
      };
    case "Growth & Expansion":
      return {
        type: "standard",
        diagnosis: "Opening a new retail store will only multiply your existing operational weaknesses. Expansion requires a proven, highly structured operating system that can be duplicated without the direct daily supervision of the owner.",
        playbookTitle: "Scale Readiness & Replicability Framework",
        steps: [
          "Complete an operational audit of the primary store to confirm it can run autonomously for 30 days.",
          "Standardize all retail workflows and document them into a replication handbook.",
          "Build a centralized procurement and warehousing system to support multi-branch supply chains.",
          "Secure a pipeline of trained managers ready to deploy to new locations."
        ],
        outcome: "Replicating a stabilized, systems-driven store ensures that new branches become profitable rapidly and scale without causing organizational chaos."
      };
    case "Profitability":
      return {
        type: "standard",
        diagnosis: "Top-line revenue growth doesn't guarantee bottom-line profit growth. Hidden operational leaks, excess discounting, and inventory storage overhead silently drain retail jewellery margins, leaving owners wondering where the cash went.",
        playbookTitle: "Margin Recovery & Leakage Prevention Protocol",
        steps: [
          "Perform a comprehensive billing and discount audit to trace margin leakage points.",
          "Optimize store utility, security, and storage overhead using lean operational practices.",
          "Calculate the true cost of inventory storage to identify the tipping point for aged stock.",
          "Train sales associates in value-based selling to reduce dependency on discounts."
        ],
        outcome: "Systematically plugging operational leaks can recover 3-5% in net profit margin, directly boosting your business's cash flow."
      };
    case "Technology":
      return {
        type: "standard",
        diagnosis: "Many jewellery owners buy expensive software hoping it will solve their problems, only to find it creates more complexity. Technology must support and automate clean, pre-existing operational processes, not replace them.",
        playbookTitle: "Technology Alignment & Systems Integration",
        steps: [
          "Standardize all store processes manually before introducing software automation.",
          "Audit current ERP usage to ensure all key inventory and sales features are fully utilized.",
          "Clean and structure database schemas to enable clean, accurate business intelligence queries.",
          "Integrate point-of-sale, CRM, and inventory databases to eliminate double-data entry."
        ],
        outcome: "Properly integrated technology reduces administrative time, cuts data entry errors, and provides managers with real-time operational clarity."
      };
    case "Strategy":
      return {
        type: "standard",
        diagnosis: "Retail jewellery brands often get distracted by pursuing too many product categories, customer segments, or marketing channels. Long-term competitive advantage comes from defining a clear strategic focus and building systems to support it.",
        playbookTitle: "Strategic Focus & Competitive Advantage Blueprint",
        steps: [
          "Identify your most profitable 20% of products and customer segments to focus resources.",
          "Eliminate low-margin, high-friction operational distractions that dilute team energy.",
          "Build proprietary operational systems and databases that competitors cannot copy.",
          "Align your brand marketing message directly with your core system capabilities."
        ],
        outcome: "A focused strategy backed by tailored operating systems builds a defensible market position, driving sustainable long-term cash flow."
      };
    case "Personal Notes":
    default:
      return {
        type: "standard",
        diagnosis: "After advising over 200 retail jewellery stores, the same patterns repeat. The best operators don't focus on buying gold or chasing sales numbers—they focus on engineering scalable business systems.",
        playbookTitle: "Systems Engineering Playbook",
        steps: [
          "Shift your perspective from being a merchant to being a systems architect.",
          "Document your processes, empower your team, and manage through visibility and dashboards.",
          "Liquidate aged assets and keep your inventory capital flowing rapidly.",
          "Focus your brand on a clear strategic niche and execute with daily operational discipline."
        ],
        outcome: "Building better systems is the only way to transform a stressful, owner-dependent shop into a highly profitable, scalable retail asset."
      };
  }
}

const iconClass = 'w-10 h-10 text-white/60 group-hover:scale-110 transition-transform duration-300';

const categoryIconMap: Record<string, React.ReactNode> = {
  'People & Leadership': <Users className={iconClass} />,
  'Inventory':           <Package className={iconClass} />,
  'Procurement':         <ShoppingCart className={iconClass} />,
  'CRM & Customer Experience': <Heart className={iconClass} />,
  'Data & Analytics':    <BarChart2 className={iconClass} />,
  'Operations':          <Settings className={iconClass} />,
  'Sales':               <TrendingUp className={iconClass} />,
  'Multi-Store Operations': <Building2 className={iconClass} />,
  'Growth & Expansion':  <Rocket className={iconClass} />,
  'Profitability':       <DollarSign className={iconClass} />,
  'Technology':          <Cpu className={iconClass} />,
  'Strategy':            <Target className={iconClass} />,
  'Personal Notes':      <Layers className={iconClass} />,
};

export function ArticleGrid() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const tabs = [
    { id: 'all', label: 'All', categoryName: 'All' },
    { id: 'leadership', label: 'People & Leadership', categoryName: 'People & Leadership' },
    { id: 'inventory', label: 'Inventory', categoryName: 'Inventory' },
    { id: 'procurement', label: 'Procurement', categoryName: 'Procurement' },
    { id: 'crm', label: 'CRM & Customer Experience', categoryName: 'CRM & Customer Experience' },
    { id: 'data', label: 'Data & Analytics', categoryName: 'Data & Analytics' },
    { id: 'operations', label: 'Operations', categoryName: 'Operations' },
    { id: 'sales', label: 'Sales', categoryName: 'Sales' },
    { id: 'multistore', label: 'Multi-Store Operations', categoryName: 'Multi-Store Operations' },
    { id: 'growth', label: 'Growth & Expansion', categoryName: 'Growth & Expansion' },
    { id: 'profitability', label: 'Profitability', categoryName: 'Profitability' },
    { id: 'technology', label: 'Technology', categoryName: 'Technology' },
    { id: 'strategy', label: 'Strategy', categoryName: 'Strategy' },
    { id: 'personal', label: 'Personal Notes', categoryName: 'Personal Notes' }
  ];

  const getTabCount = (tabId: string, categoryName: string) => {
    if (tabId === 'all') return articles.length;
    return articles.filter(article => article.category === categoryName).length;
  };

  // Memoize shuffled articles list once when component mounts to prevent reshuffling on state updates
  const shuffledArticles = useMemo(() => {
    return [...articles].sort(() => 0.5 - Math.random());
  }, []);

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const filteredArticles = activeTab === 'all'
    ? shuffledArticles
    : shuffledArticles.filter(article => article.category === currentTab.categoryName);

  // Extract featured Philosophy article for special layout if present in the current tab (only in 'personal' tab view)
  const philosophyArticle = activeTab === 'personal'
    ? filteredArticles.find(article => article.title.includes("Building Better Systems"))
    : undefined;

  const displayArticles = philosophyArticle 
    ? filteredArticles.filter(article => !article.title.includes("Building Better Systems"))
    : filteredArticles;

  // Selected article content generation for the popup modal
  const modalContent = selectedArticle ? getArticleContent(selectedArticle) : null;

  return (
    <section className="bg-[#F8F7F4] py-16 md:py-24 border-t border-[#EAE9E4]">
      {/* Individual Pill Switcher (Matching 1st Screenshot Style - Clean Monospace Pills) */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3 max-w-[1150px] mx-auto">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            const count = getTabCount(tab.id, tab.categoryName);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 font-mono text-[11px] transition-all duration-200 rounded-full border whitespace-nowrap ${
                  active
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] font-bold shadow-sm'
                    : 'bg-[#FAF9F6] hover:bg-[#F2F1EC] text-[#2b2b2b] border-[#E2E1DC] font-medium'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[9.5px] ml-1.5 font-normal ${active ? 'text-white/60' : 'text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-12"
          >
            {/* Featured Editorial Block for Philosophy (Building Better Systems) if present */}
            {philosophyArticle && (
              <ScrollReveal>
                <div className="max-w-[800px] mx-auto bg-white border border-[#E2E1DC] shadow-md rounded-none p-8 md:p-14 relative overflow-hidden mb-12">
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#8bc34a]" />
                  
                  <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-6">
                    <span className="text-xs uppercase tracking-widest font-black text-slate-400">Core Philosophy • Field Notes</span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" /> 10 min read
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2341] tracking-tight leading-tight mb-6">
                    {philosophyArticle.title}
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
                        <div className="w-2 h-2 rounded-full bg-[#8bc34a]" />
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
                    <button
                      onClick={() => setSelectedArticle(philosophyArticle)}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0b2341] hover:text-[#8bc34a] transition-colors"
                    >
                      Read full philosophy details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Standard Article Grid */}
            {displayArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayArticles.map((article, index) => (
                  <ScrollReveal key={article.id} delay={index * 0.02}>
                    <div
                      onClick={() => setSelectedArticle(article)}
                      className="cursor-pointer flex flex-col h-full bg-white rounded-none border border-[#E2E1DC] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#8bc34a]/30 group"
                    >
                      {/* Header Banner - Rich editorial card header */}
                      <div
                        className="h-[120px] flex items-center justify-center relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${article.categoryColor} 0%, ${article.categoryColor}dd 60%, ${article.categoryColor}99 100%)` }}
                      >
                        {/* Dot grid pattern */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px]" />
                        {/* Large watermark category text */}
                        <span className="absolute -bottom-2 -right-3 text-[52px] font-black text-white/[0.08] uppercase leading-none select-none pointer-events-none tracking-tight whitespace-nowrap">
                          {article.category}
                        </span>
                        {/* Top-left category pill */}
                        <span className="absolute top-3 left-3 px-2.5 py-1 text-[8.5px] font-black uppercase tracking-widest text-white bg-white/20 border border-white/25 backdrop-blur-sm">
                          {article.category}
                        </span>
                        {/* Corner accents */}
                        <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-white/20 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20 pointer-events-none" />
                        {/* Category-specific icon */}
                        <div className="relative z-10">
                          {categoryIconMap[article.category] ?? <BookOpen className="w-10 h-10 text-white/60 group-hover:scale-110 transition-transform duration-300" />}
                        </div>
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
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 font-mono text-sm">
                No articles found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dynamic Popup Modal for Detailed Article View */}
      <AnimatePresence>
        {selectedArticle && modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border border-[#E2E1DC] max-w-[750px] w-full max-h-[85vh] overflow-y-auto shadow-2xl relative flex flex-col rounded-none"
            >
              {/* Category Color Ribbon */}
              <div className="h-2 w-full shrink-0" style={{ backgroundColor: selectedArticle.categoryColor }} />

              {/* Sticky Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white z-10 shrink-0">
                <span 
                  className="px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white rounded-none"
                  style={{ backgroundColor: selectedArticle.categoryColor }}
                >
                  {selectedArticle.category}
                </span>
                <button 
                  onClick={() => setSelectedArticle(null)} 
                  className="text-slate-400 hover:text-[#0b2341] transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Scrollable Content */}
              <div className="px-6 md:px-10 py-8 overflow-y-auto space-y-8 flex-grow">
                {/* Meta Details */}
                <div className="flex gap-4 text-xs font-semibold text-slate-400 font-mono">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime} Read</span>
                </div>

                {/* Article Headline */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2341] tracking-tight leading-tight">
                  {selectedArticle.title}
                </h2>

                {/* Executive Summary / Excerpt */}
                <p className="text-sm md:text-base text-slate-600 font-medium italic border-l-4 pl-4 border-[#8bc34a] my-6 bg-slate-50/50 py-3 pr-2">
                  "{selectedArticle.excerpt}"
                </p>

                {modalContent.type === "rich-text" ? (
                  /* Render Rich Text Content for fully-written articles */
                  <div className="space-y-6 text-[#2b2b2b] leading-relaxed text-sm md:text-base font-medium">
                    {modalContent.blocks.map((block, idx) => {
                      if (block.type === "heading") {
                        return (
                          <h3 key={idx} className="text-lg md:text-xl font-bold text-[#0b2341] mt-8 pt-4 border-t border-slate-100 first:border-none first:pt-0 first:mt-0">
                            {block.text}
                          </h3>
                        );
                      }
                      if (block.type === "paragraph") {
                        return (
                          <p key={idx} className="text-slate-600 leading-relaxed font-semibold">
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === "list" && block.items) {
                        return (
                          <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-600 font-semibold my-4">
                            {block.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  /* Fallback standard 3-part layout for other articles */
                  <div className="space-y-8">
                    {/* 1. Operational Diagnosis */}
                    <div className="space-y-3">
                      <h3 className="text-xs uppercase tracking-widest font-black text-slate-400">1. Operational Diagnosis</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-semibold">
                        {modalContent.diagnosis}
                      </p>
                    </div>

                    {/* 2. Playbook Action Plan */}
                    <div className="space-y-4">
                      <h3 className="text-xs uppercase tracking-widest font-black text-slate-400">{`2. ${modalContent.playbookTitle}`}</h3>
                      <div className="space-y-3">
                        {modalContent.steps?.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3.5 bg-slate-50 p-4 border border-slate-100 shadow-sm">
                            <div className="w-5 h-5 rounded-full bg-[#0b2341] flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5 shadow-sm">
                              {idx + 1}
                            </div>
                            <span className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Strategic Outcome */}
                    <div className="space-y-3">
                      <h3 className="text-xs uppercase tracking-widest font-black text-slate-400">3. Expected Strategic Outcome</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-semibold">
                        {modalContent.outcome}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky Modal Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Field Note ID: #{selectedArticle.id}
                </span>
                <Link 
                  to={selectedArticle.link} 
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#0b2341] hover:bg-[#8bc34a] transition-all rounded-none shadow-md"
                >
                  Discuss Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
