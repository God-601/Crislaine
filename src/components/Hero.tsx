import { ArrowRight } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';

const Hero = () => {
  const waLink = whatsappLink(site.hero.waMessage);

  return (
    <section className="pt-28 pb-20 bg-bege-claro overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
              Agendar minha sessão gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-verde-escuro/20 to-transparent rounded-2xl transform rotate-3"></div>
              <img
                src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                alt="Crislaine de Carvalho - Terapeuta Integrativa"
                className="relative z-10 w-full h-[500px] object-cover object-[center_25%] rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-verde-escuro text-white p-4 rounded-2xl shadow-lg z-20">
                <span className="font-medium">Atendimento 100% Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;