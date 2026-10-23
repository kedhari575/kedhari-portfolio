import { ArrowUp, Mail, Linkedin, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/data/portfolio';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-heading font-bold text-lg text-lime-400 hover:text-lime-300 transition-colors"
            >
              {profile.wordmark}
            </a>
            <p className="text-sm text-cream-100/70">{profile.name}</p>
            <p className="text-xs text-cream-100/50">Software Developer / Computer Science Student</p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-cream-100/90 mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-cream-100/60 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-cream-100/90 mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-cream-100/60 hover:text-lime-400 transition-colors"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream-100/60 hover:text-lime-400 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-sm text-cream-100/60 hover:text-lime-400 transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-100/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-100/50">
            &copy; {new Date().getFullYear()} Kedhari Manne. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-cream-100/10 hover:bg-lime-500/20 text-cream-100/70 hover:text-lime-400 text-sm rounded-lg transition-all duration-200 ${
              showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
