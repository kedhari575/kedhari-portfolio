import { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Sprout, Cpu, BarChart3, Layers } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const project = projects[0];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-cream-100">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <span className="font-mono text-sm text-forest-600 mb-2 block">03 / Projects</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900">
            Featured Projects
          </h2>
        </div>

        {/* Featured project card */}
        <div className="bg-cream-50 border border-cream-300 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Visual side */}
            <div className="relative p-8 lg:p-10 bg-gradient-to-br from-forest-700 to-forest-600 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-sage-400/10 rounded-full blur-2xl" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cream-50/10 backdrop-blur rounded-2xl">
                    <Sprout size={28} className="text-lime-400" />
                  </div>
                  <span className="font-mono text-xs text-cream-100/70 uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>

                {/* Mini dashboard preview */}
                <div className="space-y-3 pt-4">
                  <div className="bg-cream-50/10 backdrop-blur rounded-xl p-4 border border-cream-50/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-cream-100/70">Stress Classification</span>
                      <BarChart3 size={14} className="text-lime-400" />
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: 'Healthy', pct: '78%', color: 'bg-lime-400' },
                        { label: 'Mild Stress', pct: '15%', color: 'bg-amber-400' },
                        { label: 'Severe Stress', pct: '7%', color: 'bg-red-400' },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center gap-2">
                          <span className="text-xs text-cream-100/80 w-20 shrink-0">{row.label}</span>
                          <div className="flex-1 h-1.5 bg-cream-50/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${row.color} rounded-full`}
                              style={{ width: row.pct }}
                            />
                          </div>
                          <span className="font-mono text-xs text-cream-100/60 w-8 text-right">{row.pct}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-cream-50/10 backdrop-blur rounded-xl p-4 border border-cream-50/10">
                    <Cpu size={18} className="text-lime-400" />
                    <div className="flex-1">
                      <span className="font-mono text-xs text-cream-100/60">Model</span>
                      <p className="text-sm text-cream-50 font-medium">Random Forest Classifier</p>
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-2xl font-bold text-lime-400">97.8%</span>
                      <p className="font-mono text-[10px] text-cream-100/50">test accuracy</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-cream-50/10 backdrop-blur rounded-xl p-3 border border-cream-50/10">
                    <Layers size={14} className="text-lime-400" />
                    <span className="font-mono text-xs text-cream-100/70">Python • Flask • React</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info side */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-5">
                <span className="inline-block px-3 py-1 bg-forest-500/10 text-forest-700 text-xs font-mono rounded-lg">
                  {project.category}
                </span>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal-900 leading-tight">
                  {project.title}
                </h3>

                <p className="text-charcoal-700 leading-relaxed">{project.overview}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-cream-200 border border-cream-300 text-sm font-mono text-charcoal-700 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 p-4 bg-lime-300/20 border border-lime-400/30 rounded-xl">
                  <CheckCircle2 size={22} className="text-forest-600 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-forest-700">Documented Result</p>
                    <p className="text-sm text-charcoal-700">{project.accuracyDetail}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={() => setSelectedProject(0)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-forest-600 hover:bg-forest-700 text-cream-50 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  Project Details
                </button>
                {!project.github && !project.liveDemo && (
                  <div className="inline-flex items-center gap-2 px-5 py-3 bg-cream-200 border border-cream-300 text-charcoal-700/60 text-sm rounded-xl">
                    <AlertCircle size={16} />
                    Links to be added
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-charcoal-900/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-cream-50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-cream-50 border-b border-cream-200">
              <h3 className="font-heading text-lg font-bold text-charcoal-900 pr-8">
                {project.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-cream-200 rounded-lg transition-colors text-charcoal-700"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-heading text-sm font-semibold text-forest-600 mb-2 uppercase tracking-wider">
                  Overview
                </h4>
                <p className="text-charcoal-700 leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-semibold text-forest-600 mb-2 uppercase tracking-wider">
                  Problem Addressed
                </h4>
                <p className="text-charcoal-700 leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-semibold text-forest-600 mb-2 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-charcoal-700">
                      <CheckCircle2 size={18} className="text-forest-500 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-sm font-semibold text-forest-600 mb-2 uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-cream-200 border border-cream-300 text-sm font-mono text-charcoal-700 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-lime-300/20 border border-lime-400/30 rounded-xl">
                <h4 className="font-heading text-sm font-semibold text-forest-600 mb-1 uppercase tracking-wider">
                  Documented Result
                </h4>
                <p className="text-charcoal-700">{project.accuracyDetail}</p>
              </div>

              <div className="flex items-center gap-2 p-3 bg-cream-200/50 border border-cream-300 rounded-xl text-sm text-charcoal-700/70">
                <AlertCircle size={16} />
                GitHub and live demo links will be added when available.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
