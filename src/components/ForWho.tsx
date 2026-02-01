import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import { site } from '../data/siteData';

const ForWho = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="para-quem" className="py-section bg-white">
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
            Para quem é esse teste
          </motion.h2>

          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 px-4">
            {site.forWho.for.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-gray-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex items-start gap-3 sm:gap-4 bg-gray-100 p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 mx-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed">{site.forWho.notFor}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWho;
