import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { site } from '../data/siteData';

const AfterTest = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="font-display text-display text-black text-center mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {site.afterTest.title}
          </motion.h2>

          <div className="space-y-6 sm:space-y-8 px-4">
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center font-medium whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {site.afterTest.intro}
            </motion.p>

            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 text-center">
                Ao final, você sai entendendo:
              </p>
              <ul className="space-y-3 text-left">
                {site.afterTest.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                    <span className="text-black mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="space-y-5 sm:space-y-6">
              {site.afterTest.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterTest;
