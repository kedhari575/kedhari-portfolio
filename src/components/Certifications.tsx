import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-cream-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <span className="font-mono text-sm text-forest-600 mb-2 block">06 / Certifications</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900">
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group flex gap-3 bg-cream-100 border border-cream-300 rounded-xl p-5 transition-all duration-300 hover:border-forest-400 hover:shadow-md hover:-translate-y-0.5 reveal reveal-delay-${
                (index % 3) + 1
              } ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="shrink-0 p-2 bg-forest-500/10 rounded-lg group-hover:bg-forest-500/20 transition-colors">
                <BadgeCheck size={20} className="text-forest-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-charcoal-900 leading-snug mb-1">
                  {cert.title}
                </p>
                <p className="text-xs text-charcoal-700/70 font-medium">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-charcoal-700/60">
          <Award size={16} />
          Certificate images can be added as they become available.
        </p>
      </div>
    </section>
  );
}
