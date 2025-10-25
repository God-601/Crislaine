import { ArrowRight } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';

const Hero = () => {
  const waLink = whatsappLink(site.hero.waMessage);

  return (
    <section className="pt-28 pb-20 bg-bege-claro overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-verde-escuro mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {site.hero.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-preto-suave mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {site.hero.subtitle}
          </motion.p>
          <motion.a
            href={waLink}
            className="inline-flex items-center px-6 py-3 bg-verde-escuro text-white font-medium rounded-2xl shadow-md transition-all transform hover:scale-105 glow-on-hover shine-effect"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar minha sessão de identificação
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;