import { site } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutTherapist = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="sobre" className="py-section bg-gray-50 overflow-hidden relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="font-display text-display text-black text-center mb-10 sm:mb-16 md:mb-20 px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prazer, sou <span className="text-gray-600">{site.about.name}</span>
          </motion.h2>

          <div className="relative mb-12 sm:mb-16 md:mb-20">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start px-4">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="space-y-5 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    {site.about.bioShort}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  <img
                    src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                    alt="Crislaine de Carvalho - Terapeuta Integrativa"
                    className="w-full aspect-[3/4] object-cover object-center rounded-lg sm:rounded-2xl md:rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutTherapist;