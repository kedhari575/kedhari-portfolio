import { GraduationCap, Sparkles, Target } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-100">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <span className="font-mono text-sm text-forest-600 mb-2 block">01 / About</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-charcoal-700 leading-relaxed">
              I am pursuing a{' '}
              <span className="font-semibold text-forest-700">
                {profile.about.degree}
              </span>{' '}
              at {profile.about.institution}. My journey in computer science is driven
              by a deep curiosity about how things work and a desire to build software
              that solves real problems.
            </p>

            <div className="space-y-4">
              {profile.about.approach.map((text, i) => (
                <div key={i} className="flex gap-3">
                  <Target className="shrink-0 text-forest-500 mt-1" size={20} />
                  <p className="text-charcoal-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-500/10 border border-forest-500/20 rounded-xl">
                <Sparkles size={18} className="text-forest-600" />
                <span className="text-sm font-medium text-forest-700">
                  Seeking software engineering internships
                </span>
              </div>
            </div>
          </div>

          {/* Right column: interests */}
          <div className="lg:col-span-2">
            <div className="bg-cream-50 border border-cream-300 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={22} className="text-forest-600" />
                <h3 className="font-heading text-lg font-semibold text-charcoal-900">
                  Areas of Interest
                </h3>
              </div>
              <ul className="space-y-3">
                {profile.about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-charcoal-700"
                  >
                    <span className="w-1.5 h-1.5 bg-lime-500 rounded-full shrink-0" />
                    <span className="text-sm leading-relaxed">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
