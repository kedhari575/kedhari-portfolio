import { Mail, Linkedin, Download, MessageCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-cream-50 to-cream-100">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-10">
          <span className="font-mono text-sm text-forest-600 mb-2 block">07 / Contact</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4">
            Let's build something useful.
          </h2>
          <p className="text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            I am interested in software engineering internship opportunities where I can
            contribute, learn from a team, and grow through practical development experience.
          </p>
        </div>

        <div className="bg-cream-50 border border-cream-300 rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 p-5 bg-cream-100 border border-cream-300 rounded-2xl hover:border-forest-400 hover:shadow-md transition-all duration-200"
            >
              <div className="p-3 bg-forest-500/10 rounded-xl group-hover:bg-forest-500/20 transition-colors">
                <Mail size={22} className="text-forest-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-charcoal-700/60 mb-0.5">Email</p>
                <p className="text-sm font-medium text-charcoal-900 truncate">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-cream-100 border border-cream-300 rounded-2xl hover:border-forest-400 hover:shadow-md transition-all duration-200"
            >
              <div className="p-3 bg-forest-500/10 rounded-xl group-hover:bg-forest-500/20 transition-colors">
                <Linkedin size={22} className="text-forest-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-charcoal-700/60 mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-charcoal-900 truncate">Kedhari Manne</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest-600 hover:bg-forest-700 text-cream-50 font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream-100 hover:bg-cream-200 border border-cream-300 text-charcoal-800 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
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

          <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-cream-200 text-sm text-charcoal-700/60">
            <MessageCircle size={16} />
            <span>Open to internship opportunities and collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
