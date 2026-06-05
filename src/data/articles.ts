export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  link: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: '₹9.8 Cr Loss Leakage Elimination: A Playbook',
    excerpt: 'Six leakage archetypes inside jewellery retail — and the rule-engine + ML detection stack that recovers margin in 90 days.',
    category: 'Loss Prevention',
    categoryColor: '#1e293b',
    date: 'May 2025',
    readTime: '8 min',
    link: '/contact?topic=loss-leakage-elimination',
  },
  {
    id: 2,
    title: 'Live MCX Costing Engine: 15-min Refresh in Production',
    excerpt: 'Wiring MCX into ERP for multi-purity, multi-store live pricing without manual override. Architecture + approval matrix.',
    category: 'Pricing',
    categoryColor: '#c9a55a',
    date: 'Apr 2025',
    readTime: '6 min',
    link: '/contact?topic=mcx-costing-engine',
  },
  {
    id: 3,
    title: 'CRM-Led 64% Walkout-to-Sale Conversion',
    excerpt: 'How Zithara journeys + Synergics handshake created the unified buyer journey across 200+ stores.',
    category: 'CRM',
    categoryColor: '#e87040',
    date: 'Apr 2025',
    readTime: '7 min',
    link: '/contact?topic=crm-conversion-boost',
  },
  {
    id: 4,
    title: '90% Reconciliation Reduction: Token-Based Inventory',
    excerpt: 'Why per-piece tokenisation collapsed reconciliation cycles from days to minutes — and what stopped working.',
    category: 'Inventory',
    categoryColor: '#1e3a5f',
    date: 'Mar 2025',
    readTime: '5 min',
    link: '/contact?topic=reconciliation-reduction',
  },
  {
    id: 5,
    title: 'The Integrated Revenue Engine — ERP + CRM + Finance',
    excerpt: 'A blueprint for treating three systems as one. Event bus, identity, reconciliation, observability.',
    category: 'Architecture',
    categoryColor: '#8b7355',
    date: 'Mar 2025',
    readTime: '10 min',
    link: '/contact?topic=integrated-revenue-engine',
  },
  {
    id: 6,
    title: 'Token-Based Inventory Control — The Anti-Fraud Lever',
    excerpt: 'Why every gram needs an attributable identity, and the operating model that enforces it.',
    category: 'Operations',
    categoryColor: '#d4a574',
    date: 'Feb 2025',
    readTime: '6 min',
    link: '/contact?topic=token-inventory-control',
  },
];
