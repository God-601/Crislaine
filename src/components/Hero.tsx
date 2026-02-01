import { ArrowRight } from 'lucide-react';
import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';

const Hero = () => {
  const waLink = whatsappLink(site.hero.waMessage);

  return (

    <section className="min-h-screen flex items-center justify-center bg-white pt-8 sm:pt-12 pb-12 sm:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h1
              className="font-display text-hero text-black mb-6 sm:mb-8 md:mb-12 max-w-5xl mx-auto px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {site.hero.title}
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {site.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={waLink}
                className="btn btn-primary inline-flex items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.hero.ctaText}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
              <img
                src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                alt="Crislaine de Carvalho"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Atendimento 100% online
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;