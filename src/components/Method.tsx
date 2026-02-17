import { site } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Method = () => {
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
                    <h2 className="font-display text-display text-black text-center mb-8 sm:mb-12 md:mb-16 px-4">
                        {site.method.title}
                    </h2>
                    <div className="space-y-6 sm:space-y-8 md:space-y-10 px-4">
                        {site.method.paragraphs.map((p, i) => {
                            if (p.includes('Importante')) {
                                return (
                                    <motion.div
                                        key={i}
                                        className="bg-gray-100 p-6 md:p-8 rounded-2xl border-l-4 border-gray-400"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">{p}</p>
                                    </motion.div>
                                );
                            }
                            return (
                                <motion.p
                                    key={i}
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
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

export default Method;
