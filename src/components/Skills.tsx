import { Code2, Brain, Layout, Server, Database, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Layout,
  Server,
  Database,
  Cpu,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 lg:py-28 bg-cream-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <span className="font-mono text-sm text-forest-600 mb-2 block">02 / Skills</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-charcoal-700 max-w-2xl">
            A breakdown of the technologies and concepts I work with across programming,
            web development, databases, and machine learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] ?? Code2;
            return (
              <div
                key={skill.category}
                className={`group bg-cream-100 border border-cream-300 rounded-2xl p-6 transition-all duration-300 hover:border-forest-400 hover:shadow-lg hover:-translate-y-1 reveal reveal-delay-${
                  (index % 3) + 1
                } ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-forest-500/10 rounded-xl group-hover:bg-forest-500/20 transition-colors">
                    <Icon size={22} className="text-forest-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal-900">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-cream-200/70 border border-cream-300 text-sm font-mono text-charcoal-700 rounded-lg group-hover:border-sage-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
