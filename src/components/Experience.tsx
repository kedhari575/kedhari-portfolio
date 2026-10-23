import { Briefcase, Wrench, Trophy, Clock, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const typeIcons: Record<string, LucideIcon> = {
  'Internship Offer': Briefcase,
  Workshop: Wrench,
  Hackathon: Trophy,
};

export default function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 lg:py-28 bg-cream-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <span className="font-mono text-sm text-forest-600 mb-2 block">04 / Experience</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900">
            Experience & Activities
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-cream-300" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type] ?? Briefcase;
              return (
                <div
                  key={index}
                  className={`relative pl-14 sm:pl-20 reveal reveal-delay-${index + 1} ${
                    isVisible ? 'is-visible' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1 p-2.5 rounded-xl border-2 ${
                      exp.isCompleted
                        ? 'bg-forest-600 border-forest-600 text-cream-50'
                        : 'bg-lime-400 border-lime-500 text-forest-800'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="bg-cream-100 border border-cream-300 rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:shadow-md hover:border-sage-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`px-2.5 py-1 text-xs font-mono rounded-md ${
                          exp.isCompleted
                            ? 'bg-sage-400/20 text-forest-700'
                            : 'bg-lime-400/20 text-forest-700'
                        }`}
                      >
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-charcoal-700/60">
                        <Clock size={12} />
                        {exp.status}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-forest-600 mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-charcoal-700 leading-relaxed">
                      {exp.description}
                    </p>

                    {!exp.isCompleted && (
                      <div className="flex items-center gap-2 mt-4 p-3 bg-lime-300/15 border border-lime-400/25 rounded-lg">
                        <CheckCircle2 size={16} className="text-forest-600 shrink-0" />
                        <span className="text-xs font-medium text-forest-700">
                          Offer received — internship not yet completed
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
