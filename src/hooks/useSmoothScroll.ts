import { useCallback } from 'react';

/**
 * useSmoothScroll (DEPRECATED behavior removed)
 *
 * Esta versão não intercepta mais o evento de roda do mouse. Em vez disso,
 * expõe duas funções utilitárias que utilizam o scroll nativo (behavior: 'smooth').
 * Isso remove o comportamento de "one-by-one scrolling" que impedia a rolagem
 * natural da página.
 */
export const useSmoothScroll = () => {
    const scrollToNext = useCallback(() => {
        if (typeof window === 'undefined') return;
        window.scrollBy({ top: window.innerHeight * 0.9, left: 0, behavior: 'smooth' });
    }, []);

    const scrollToPrevious = useCallback(() => {
        if (typeof window === 'undefined') return;
        window.scrollBy({ top: -window.innerHeight * 0.9, left: 0, behavior: 'smooth' });
    }, []);

    return {
        scrollToNext,
        scrollToPrevious,
    };
};