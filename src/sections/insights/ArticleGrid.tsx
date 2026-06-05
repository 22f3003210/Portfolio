import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { articles } from '../../data/articles';

export function ArticleGrid() {
  return (
    <section className="bg-warm-white section-padding-lg">
      <div className="content-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.08}>
              <Link
                to={article.link}
                className="block bg-white rounded-none border border-border-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                {/* Category banner */}
                <div
                  className="h-[120px] flex items-center justify-center relative"
                  style={{ backgroundColor: article.categoryColor }}
                >
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-none backdrop-blur-sm">
                    {article.category}
                  </span>
                  <BookOpen className="w-10 h-10 text-white/80" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                    <span className="text-gold font-medium">Read →</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
