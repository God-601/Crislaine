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
          <h2 className="font-display text-display text-black mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-3 sm:px-4">
            {site.identification.title}
          </h2>
          <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 text-left px-3 sm:px-4">
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
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {parts[0]}Talvez você:
                    </p>
                    <ul className="space-y-2 sm:space-y-3 ml-3 sm:ml-4 md:ml-6">
                      {items.map((item, idx) => (
                        <li key={idx} className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed flex items-start gap-2 sm:gap-3">
                          <span className="text-black mt-1 flex-shrink-0">•</span>
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
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed"
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