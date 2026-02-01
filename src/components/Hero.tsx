import { ArrowRight } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';

const Hero = () => {
  const waLink = whatsappLink(site.hero.waMessage);

  return (
    <section className="min-h-screen bg-cream pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="h1 text-dark mb-8 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {site.hero.title}
            </motion.h1>
            
            <motion.p
              className="text-xl text-charcoal mb-12 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {site.hero.subtitle}
            </motion.p>

            <motion.a
              href={waLink}
              className="btn btn-primary inline-flex items-center gap-3 group"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar minha sessão
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                  alt="Crislaine de Carvalho"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm text-dark p-6 rounded-2xl shadow-lg max-w-xs">
                <p className="font-display text-sm uppercase letter-spacing tracking-wide">
                  Atendimento 100% online
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;