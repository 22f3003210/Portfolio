import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Tag } from '../../components/Tag';
import { ScrollReveal } from '../../components/ScrollReveal';
import { getWorkflowBySlug } from '../../data/workflows';

export function WorkflowHero() {
  const { slug } = useParams<{ slug: string }>();
  const workflow = getWorkflowBySlug(slug || '');

  if (!workflow) return null;

  return (
    <section className="hero-gradient pt-28 pb-12">
      <div className="content-max">
        {/* Top row */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/#workflows"
              className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Workflows
            </Link>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/30 text-white text-sm rounded-md hover:border-gold hover:text-gold transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center text-3xl flex-shrink-0">
              {workflow.icon}
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold">
                {workflow.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
                {workflow.name}
              </h1>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base text-white/70 mb-4 max-w-2xl">{workflow.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-2">
            {workflow.metrics.map((metric) => (
              <Tag key={metric}>{metric}</Tag>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
