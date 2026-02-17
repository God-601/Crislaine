import { useEffect, useRef, useState } from 'react';
import { site } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ImageModal from './ImageModal';

interface TextTestimonial {
  type: 'text';
  quote: string;
}

interface VideoTestimonial {
  type: 'video';
  videoUrl: string;
  embedUrl: string;
  quote: string;
  name: string;
}

interface ImageTestimonial {
  type: 'image';
  image: string;
  quote: string;
  name: string;
}

type Testimonial = TextTestimonial | VideoTestimonial | ImageTestimonial;

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const testimonials = site.testimonials as Testimonial[];

  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
      timeoutRef.current = window.setTimeout(next, 5000);
      return () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      };
    }
  }, [index, isPaused, testimonials.length]);

  const prev = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <>
      <section
        className="py-section bg-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={ref}
      >
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
              O que algumas mulheres relatam após o processo
            </motion.h2>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50">
                <AnimatePresence mode="wait">
                  {testimonials.map((t, i) => (
                    i === index && (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="p-4 sm:p-8 md:p-12 lg:p-16"
                      >
                        {t.type === 'text' ? (
                          <div className="text-center max-w-3xl mx-auto px-2 sm:px-4">
                            <motion.p
                              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              "{t.quote}"
                            </motion.p>
                          </div>
                        ) : t.type === 'video' ? (
                          <div className="flex flex-col items-center gap-8">
                            <div className="w-full max-w-4xl mx-auto rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                              <div className="aspect-video bg-black">
                                <iframe
                                  src={`${t.embedUrl}?autoplay=0&controls=1`}
                                  className="w-full h-full"
                                  frameBorder="0"
                                  allowFullScreen
                                  allow="autoplay; fullscreen"
                                />
                              </div>
                            </div>

                            <motion.div
                              className="mt-4 sm:mt-6 text-center max-w-3xl mx-auto px-2 sm:px-0"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-3 sm:mb-4">"{t.quote}"</p>
                              <p className="text-sm sm:text-base text-gray-600 font-medium">— {t.name}</p>
                            </motion.div>
                          </div>
                        ) : (
                          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                            <div className="md:w-1/3 flex-shrink-0">
                              <motion.img
                                src={t.image || ''}
                                alt={`Depoimento de ${t.name}`}
                                className="w-full max-w-xs aspect-square object-cover rounded-lg sm:rounded-2xl mx-auto shadow-lg cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => t.image && setSelectedImage(t.image)}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                            <motion.div
                              className="md:w-2/3 text-center md:text-left px-2 sm:px-0"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic mb-4 sm:mb-6 leading-relaxed">"{t.quote}"</p>
                              <p className="text-sm sm:text-base text-gray-600 font-medium">— {t.name}</p>
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.button
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10 border border-gray-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  onClick={prev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                </motion.button>

                <motion.button
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10 border border-gray-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  onClick={next}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                </motion.button>
              </div>

              {/* Dots Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setIndex(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${i === index
                      ? 'bg-black w-6 sm:w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
        alt="Imagem ampliada do depoimento"
      />
    </>
  );
};

export default Testimonials;