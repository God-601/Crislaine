import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const NavigationButtons = () => {
    const { scrollToNext, scrollToPrevious } = useSmoothScroll();

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            <motion.button
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-gray-200"
                onClick={scrollToPrevious}
                whileHover={{ scale: 1.1, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                }}
            >
                <ChevronUp className="w-6 h-6 text-verde-escuro" />
            </motion.button>

            <motion.button
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-gray-200"
                onClick={scrollToNext}
                whileHover={{ scale: 1.1, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1
                }}
            >
                <ChevronDown className="w-6 h-6 text-verde-escuro" />
            </motion.button>
        </div>
    );
};

export default NavigationButtons;