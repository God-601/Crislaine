import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream shadow-lg backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5 md:py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-sage" />
            <span className="font-display text-xl text-dark">Crislaine</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {site.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-sage transition-colors underline-anim text-sm uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsappLink(site.hero.waMessage)}
            className="hidden md:block btn btn-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-beige">
            {site.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-charcoal hover:text-sage transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink(site.hero.waMessage)}
              className="block mt-4 btn btn-primary text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;