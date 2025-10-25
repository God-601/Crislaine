import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div
                className="absolute top-0 left-0 w-full h-[200vh] opacity-5"
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                    background: `radial-gradient(circle at 50% 50%, #22c55e 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />
        </div>
    );
};

export default ParallaxBackground;