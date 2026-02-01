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

          <div className="space-y-5 sm:space-y-6 px-4">
            {site.afterTest.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterTest;
