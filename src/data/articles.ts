export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  link: string;
  details?: string[];
}

export const articles: Article[] = [
  // Leadership & Ownership
  {
    id: 1,
    title: "My Team Doesn't Take Ownership",
    excerpt: "Why ownership is usually a leadership and systems problem—not a people problem.",
    category: "Leadership & Ownership",
    categoryColor: "#1e3a8a",
    date: "Jun 2026",
    readTime: "6 min",
    link: "/contact?topic=team-ownership",
  },
  {
    id: 2,
    title: "The Owner Is the Bottleneck",
    excerpt: "How excessive involvement prevents businesses from scaling and locking in growth.",
    category: "Leadership & Ownership",
    categoryColor: "#1e3a8a",
    date: "May 2026",
    readTime: "5 min",
    link: "/contact?topic=owner-bottleneck",
  },
  {
    id: 3,
    title: "Meetings Don't Create Accountability. Systems Do.",
    excerpt: "Why most review meetings fail and what successful retail businesses do differently.",
    category: "Leadership & Ownership",
    categoryColor: "#1e3a8a",
    date: "May 2026",
    readTime: "7 min",
    link: "/contact?topic=meetings-accountability",
  },
  {
    id: 4,
    title: "Stop Solving Every Problem Yourself",
    excerpt: "The hidden cost of becoming the answer to every operational issue in your jewellery stores.",
    category: "Leadership & Ownership",
    categoryColor: "#1e3a8a",
    date: "Apr 2026",
    readTime: "5 min",
    link: "/contact?topic=solve-problems-systems",
  },

  // Inventory & Procurement
  {
    id: 5,
    title: "Dead Stock Isn't an Inventory Problem",
    excerpt: "The decision-making patterns and lack of velocity visibility that create dead inventory.",
    category: "Inventory & Procurement",
    categoryColor: "#8bc34a",
    date: "Jun 2026",
    readTime: "8 min",
    link: "/contact?topic=dead-stock-analysis",
  },
  {
    id: 6,
    title: "Why Fast-Moving Products Go Out of Stock",
    excerpt: "Understanding replenishment failures, lead-time gaps, and inventory visibility lapses.",
    category: "Inventory & Procurement",
    categoryColor: "#8bc34a",
    date: "Jun 2026",
    readTime: "6 min",
    link: "/contact?topic=fast-stockouts",
  },
  {
    id: 7,
    title: "Your Inventory Is Talking. Are You Listening?",
    excerpt: "How stock movement patterns and customer selection behaviour reveal opportunities and margin risks.",
    category: "Inventory & Procurement",
    categoryColor: "#8bc34a",
    date: "May 2026",
    readTime: "7 min",
    link: "/contact?topic=inventory-feedback",
  },
  {
    id: 8,
    title: "Most Procurement Teams Track Cost. Few Track Productivity.",
    excerpt: "Shifting purchasing decisions from cost-focused discounts to asset-turnover outcomes.",
    category: "Inventory & Procurement",
    categoryColor: "#8bc34a",
    date: "May 2026",
    readTime: "9 min",
    link: "/contact?topic=procurement-productivity",
  },
  {
    id: 9,
    title: "Inventory Productivity: The Metric Every Jeweller Should Track",
    excerpt: "Why capital turnover velocity and gross margin return on investment matter more than total stock value.",
    category: "Inventory & Procurement",
    categoryColor: "#8bc34a",
    date: "Apr 2026",
    readTime: "7 min",
    link: "/contact?topic=inventory-gmroi",
  },

  // Data & Decision Making
  {
    id: 10,
    title: "Every Business Is Already Generating Answers",
    excerpt: "Most businesses don't have a data collection problem—they have an interpretation and query problem.",
    category: "Data & Decision Making",
    categoryColor: "#1f5fbf",
    date: "Jun 2026",
    readTime: "6 min",
    link: "/contact?topic=generating-answers",
  },
  {
    id: 11,
    title: "Most Dashboards Fail Before They Are Built",
    excerpt: "Why jewellery businesses track too many vanity metrics and too few actionable insights.",
    category: "Data & Decision Making",
    categoryColor: "#1f5fbf",
    date: "May 2026",
    readTime: "7 min",
    link: "/contact?topic=dashboard-failures",
  },
  {
    id: 12,
    title: "What Data Actually Matters?",
    excerpt: "Identifying the few leverage-point metrics that actually influence bottom-line business outcomes.",
    category: "Data & Decision Making",
    categoryColor: "#1f5fbf",
    date: "May 2026",
    readTime: "6 min",
    link: "/contact?topic=metrics-that-matter",
  },
  {
    id: 13,
    title: "Data Is the New Utility",
    excerpt: "Why future-ready jewellery brands will compete on operational insight, not just stock information.",
    category: "Data & Decision Making",
    categoryColor: "#1f5fbf",
    date: "Apr 2026",
    readTime: "8 min",
    link: "/contact?topic=data-as-utility",
  },

  // Customer Experience & CRM
  {
    id: 14,
    title: "Why Customers Walk Out Without Buying",
    excerpt: "Understanding the subtle operational reasons and service lags behind low store conversion rates.",
    category: "Customer Experience & CRM",
    categoryColor: "#e11d48",
    date: "Jun 2026",
    readTime: "7 min",
    link: "/contact?topic=customer-walkouts",
  },
  {
    id: 15,
    title: "You Don't Have a Sales Problem. You Have a Follow-Up Problem.",
    excerpt: "How standardizing CRM customer touchpoint discipline directly multiplies repeat buyer revenue.",
    category: "Customer Experience & CRM",
    categoryColor: "#e11d48",
    date: "Jun 2026",
    readTime: "6 min",
    link: "/contact?topic=sales-followup",
  },
  {
    id: 16,
    title: "Customer Experience Is an Operational Function",
    excerpt: "Why consistent customer satisfaction starts with systems long before a client enters the store.",
    category: "Customer Experience & CRM",
    categoryColor: "#e11d48",
    date: "May 2026",
    readTime: "8 min",
    link: "/contact?topic=cx-operations",
  },
  {
    id: 17,
    title: "Retention Is More Profitable Than Acquisition",
    excerpt: "Why repeat customers and lifetime value systems should be a jeweller's primary strategic focus.",
    category: "Customer Experience & CRM",
    categoryColor: "#e11d48",
    date: "Apr 2026",
    readTime: "6 min",
    link: "/contact?topic=retention-profit",
  },

  // Operations & Growth
  {
    id: 18,
    title: "Growth Creates Chaos When Systems Don't Scale",
    excerpt: "The critical operational warning signs businesses ignore before opening new branches.",
    category: "Operations & Growth",
    categoryColor: "#d97706",
    date: "Jun 2026",
    readTime: "7 min",
    link: "/contact?topic=growth-chaos",
  },
  {
    id: 19,
    title: "SOPs Are Not Documents. They Are Business Assets.",
    excerpt: "How standard operating workflows create execution consistency, branch autonomy, and equity value.",
    category: "Operations & Growth",
    categoryColor: "#d97706",
    date: "May 2026",
    readTime: "8 min",
    link: "/contact?topic=sops-as-assets",
  },
  {
    id: 20,
    title: "If a Key Employee Leaves, Does the Business Slow Down?",
    excerpt: "Building decoupled operations that protect intellectual capital and are not dependent on individuals.",
    category: "Operations & Growth",
    categoryColor: "#d97706",
    date: "May 2026",
    readTime: "6 min",
    link: "/contact?topic=individual-dependency",
  },
  {
    id: 21,
    title: "Why Operational Excellence Wins",
    excerpt: "The clear statistical link between standardized systems, net profitability, and customer retention.",
    category: "Operations & Growth",
    categoryColor: "#d97706",
    date: "Apr 2026",
    readTime: "7 min",
    link: "/contact?topic=operational-excellence",
  },

  // Philosophy
  {
    id: 22,
    title: "Building Better Systems For The Future Of Retail Jewellery Businesses",
    excerpt: "A business grows to the extent its systems allow. Most business challenges are system challenges.",
    category: "Philosophy",
    categoryColor: "#6366f1",
    date: "Jun 2026",
    readTime: "10 min",
    link: "/contact?topic=future-retail-systems",
    details: [
      "Growth is not a sales problem.",
      "Profitability is not a finance problem.",
      "Customer experience is not a marketing problem.",
      "Most business challenges are system challenges.",
      "The businesses that will thrive in the future are the ones that understand their data, build strong operating systems, empower their teams, and continuously improve how they serve customers."
    ]
  }
];
