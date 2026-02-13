import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'glass shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-3 md:py-5">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-display text-lg md:text-2xl font-semibold text-black tracking-tight">
              Crislaine
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {site.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsappLink(site.hero.waMessage)}
            className="hidden md:inline-flex btn btn-primary text-sm w-auto max-w-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-3">
                {site.header.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-2 text-base text-gray-600 hover:text-black transition-colors font-medium min-h-[44px] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappLink(site.hero.waMessage)}
                  className="block mt-4 btn btn-primary text-center min-h-[44px] flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Agendar
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;