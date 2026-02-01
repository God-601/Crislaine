import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const NavigationButtons = () => {
    const { scrollToNext, scrollToPrevious } = useSmoothScroll();

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            <motion.button
                className="p-2 bg-cream/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-beige"
                onClick={scrollToPrevious}
                whileHover={{ scale: 1.1, backgroundColor: '#F9F8F6' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                }}
            >
                <ChevronUp className="w-6 h-6 text-olive" />
            </motion.button>

            <motion.button
                className="p-2 bg-cream/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-beige"
                onClick={scrollToNext}
                whileHover={{ scale: 1.1, backgroundColor: '#F9F8F6' }}
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
                <ChevronDown className="w-6 h-6 text-olive" />
            </motion.button>
        </div>
    );
};

export default NavigationButtons;