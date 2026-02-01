import { site } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProblemIdentification = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-display text-black mb-12 md:mb-16">
            {site.identification.title}
          </h2>
          <div className="space-y-8 md:space-y-10 text-left">
            {site.identification.paragraphs.map((p, i) => {
              if (p.includes('Talvez você:')) {
                const parts = p.split('Talvez você:');
                const items = parts[1]?.split(',').filter(item => item.trim()) || [];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
                      {parts[0]}Talvez você:
                    </p>
                    <ul className="space-y-3 ml-6">
                      {items.map((item, idx) => (
                        <li key={idx} className="text-xl md:text-2xl text-gray-600 leading-relaxed flex items-start gap-3">
                          <span className="text-black mt-1">•</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              }
              return (
                <motion.p
                  key={i}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {p}
                </motion.p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemIdentification;