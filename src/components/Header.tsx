import { useState, useEffect } from 'react';
import { Sprout } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sprout className="h-8 w-8 text-verde-escuro" />
          <span className="ml-2 text-lg font-medium text-verde-escuro">Crislaine de Carvalho</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {site.header.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-preto-suave hover:text-verde-escuro transition-colors">{item.label}</a>
          ))}
        </nav>
        <a
          href={whatsappLink(site.hero.waMessage)}
          className="hidden md:block bg-verde-escuro hover:opacity-95 text-white px-4 py-2 rounded-md transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar
        </a>
      </div>
    </header>
  );
};

export default Header;