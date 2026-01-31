import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const waLink = whatsappLink(site.hero.waMessage);
  const items = site.process.items;

  return (
    <section className="py-16 bg-bege-claro overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-verde-escuro mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {site.process.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-verde-escuro mr-3 text-2xl opacity-75">•</div>
                <p className="text-gray-800 font-normal">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              text={site.process.ctaText}
              href={waLink}
              variant="primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;