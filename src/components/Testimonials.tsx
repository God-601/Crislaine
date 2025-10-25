import { useEffect, useRef, useState } from 'react';
import { site } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from './ImageModal';

const Testimonials = () => {
  const testimonials = site.testimonials;

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
        className="py-16 bg-bege-claro overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-verde-escuro mb-8">
                Transformações que inspiram
              </h2>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
                  <AnimatePresence mode="wait">
                    {testimonials.map((t, i) => (
                      i === index && (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="p-8 md:p-12"
                        >
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="md:w-1/3 flex-shrink-0">
                              <motion.img
                                src={t.image}
                                alt={`Depoimento ${i + 1}`}
                                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl mx-auto shadow-md cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedImage(t.image)}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                            <motion.div
                              className="md:w-2/3 text-left"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <p className="text-gray-800 italic text-lg md:text-xl">"{t.quote}"</p>
                            </motion.div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <motion.button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                    onClick={prev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-verde-escuro" />
                  </motion.button>

                  <motion.button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                    onClick={next}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-6 h-6 text-verde-escuro" />
                  </motion.button>
                </div>

                {/* Dots Indicators */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  {testimonials.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setIndex(i)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      aria-label={`Ir para depoimento ${i + 1}`}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === index
                          ? 'bg-verde-escuro scale-125'
                          : 'bg-verde-escuro/30 hover:bg-verde-escuro/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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