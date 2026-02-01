import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const waLink = whatsappLink(site.hero.waMessage);
  const items = site.process.items;

  return (
    <section id="como-funciona" className="py-section bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="font-display text-display text-black text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {site.process.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed flex-1">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={waLink}
              className="btn btn-primary inline-flex items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.process.ctaText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;