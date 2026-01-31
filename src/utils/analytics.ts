export const GTAG_ID = 'AW-17919491404';

export function loadGtag(id: string = GTAG_ID) {
    if (typeof window === 'undefined') return;
    if ((window as any).__gtagLoaded) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`;
    document.head.appendChild(inline);

    (window as any).__gtagLoaded = true;
}

export function trackConversion(conversionLabel: string) {
    if (typeof (window as any).gtag !== 'function') return;
    (window as any).gtag('event', 'conversion', { send_to: conversionLabel });
}
