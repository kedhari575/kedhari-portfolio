import { ArrowRight, Download, Mail, Linkedin, Terminal } from 'lucide-react';
import { profile } from '@/data/portfolio';

const codeLines = [
  { text: 'class Developer:', className: 'text-forest-600' },
  { text: '    name = "Kedhari Manne"', className: 'text-charcoal-800' },
  { text: '    role = "CS Student"', className: 'text-charcoal-800' },
  { text: '    focus = ["Java", "Python", "React"]', className: 'text-charcoal-800' },
  { text: '    ml_model_accuracy = 0.978', className: 'text-sage-600' },
  { text: '', className: '' },
  { text: '    def build(self, idea):', className: 'text-forest-600' },
  { text: '        return idea.implement()', className: 'text-charcoal-800' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-cream-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-lime-300/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-forest-500/10 border border-forest-500/20 rounded-full">
              <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-forest-700">Available for internships</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.1] mb-4">
              Kedhari Manne
            </h1>

            <p className="font-heading text-lg sm:text-xl text-forest-600 font-medium mb-6">
              Computer Science Student <span className="text-sage-400">|</span> Software Developer
            </p>

            <div className="space-y-4 mb-8 max-w-xl">
              {profile.intro.map((para, i) => (
                <p key={i} className="text-base text-charcoal-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest-600 hover:bg-forest-700 text-cream-50 font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowRight size={18} />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream-100 hover:bg-cream-200 border border-cream-300 text-charcoal-800 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 bg-cream-100 hover:bg-forest-500/10 border border-cream-300 rounded-xl text-charcoal-700 hover:text-forest-600 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="p-3 bg-cream-100 hover:bg-forest-500/10 border border-cream-300 rounded-xl text-charcoal-700 hover:text-forest-600 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Code editor visual */}
          <div className="order-1 lg:order-2">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-forest-500/5 rounded-2xl blur-2xl" />
              <div className="relative bg-cream-100 border border-cream-300 rounded-2xl shadow-xl overflow-hidden">
                {/* Editor header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-cream-200 border-b border-cream-300">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <span className="w-3 h-3 rounded-full bg-lime-500/70" />
                  <span className="ml-3 font-mono text-xs text-charcoal-700/60 flex items-center gap-1.5">
                    <Terminal size={12} />
                    developer.py
                  </span>
                </div>
                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div className="flex">
                    <div className="select-none text-charcoal-700/30 pr-4 text-right">
                      {codeLines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <div className="flex-1">
                      {codeLines.map((line, i) => (
                        <div key={i} className={line.className}>
                          {line.text || '\u00A0'}
                        </div>
                      ))}
                      <div className="text-lime-600 animate-blink">▋</div>
                    </div>
                  </div>
                </div>
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-forest-700 text-cream-100 font-mono text-xs">
                  <span>Python • UTF-8</span>
                  <span className="text-lime-400">● model: 97.8% accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
