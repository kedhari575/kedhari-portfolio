import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-20 lg:py-28 bg-cream-100">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <span className="font-mono text-sm text-forest-600 mb-2 block">05 / Education</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900">
            Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-cream-50 border rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal reveal-delay-${
                index + 1
              } ${
                edu.isPrimary
                  ? 'border-forest-500/30 ring-1 ring-forest-500/20'
                  : 'border-cream-300 hover:border-sage-300'
              } ${isVisible ? 'is-visible' : ''}`}
            >
              {edu.isPrimary && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-forest-600 text-cream-50 text-xs font-semibold rounded-full">
                  Current
                </span>
              )}

              <div
                className={`p-3 rounded-xl w-fit mb-4 ${
                  edu.isPrimary ? 'bg-forest-500/15' : 'bg-cream-200'
                }`}
              >
                <GraduationCap
                  size={22}
                  className={edu.isPrimary ? 'text-forest-600' : 'text-charcoal-700/60'}
                />
              </div>

              <h3 className="font-heading text-base lg:text-lg font-semibold text-charcoal-900 mb-2 leading-snug">
                {edu.degree}
              </h3>

              <p className={`text-sm mb-1 ${edu.isPrimary ? 'text-forest-600' : 'text-charcoal-700'}`}>
                {edu.institution}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-charcoal-700/60 mb-1">
                <MapPin size={12} />
                <span>{edu.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-charcoal-700/60 mb-4">
                <Calendar size={12} />
                <span>{edu.duration}</span>
              </div>

              {edu.detail && (
                <div
                  className={`flex items-center gap-2 pt-4 border-t border-cream-200 ${
                    edu.isPrimary ? 'text-forest-600' : 'text-charcoal-700/70'
                  }`}
                >
                  <Award size={16} />
                  <span className="text-sm font-semibold">{edu.detail}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
