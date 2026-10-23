import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useScrollReveal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-cream-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-heading font-bold text-lg tracking-tight text-forest-700 hover:text-forest-500 transition-colors"
          >
            {profile.wordmark}
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-forest-700 bg-forest-500/10'
                      : 'text-charcoal-700 hover:text-forest-600 hover:bg-cream-200/60'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-600 hover:bg-forest-700 text-cream-50 text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal-800 hover:text-forest-600 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-cream-50 z-40 animate-slide-in overflow-y-auto">
            <ul className="flex flex-col gap-1 px-5 pt-6 pb-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3.5 text-base font-medium rounded-lg transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-forest-700 bg-forest-500/10'
                        : 'text-charcoal-700 hover:text-forest-600 hover:bg-cream-200'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-forest-600 text-cream-50 text-base font-semibold rounded-lg"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
