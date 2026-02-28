import { site, whatsappLink } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="font-display text-display text-black mb-6 sm:mb-8 md:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {site.contact.finalTitle}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-12 md:mb-16 px-4 whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.contact.finalText}
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={whatsappLink(site.contact.waMessage, site.contact.waNumber)}
              className="btn btn-primary inline-flex items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.contact.ctaText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;