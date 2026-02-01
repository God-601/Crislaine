import { useEffect, useState } from 'react';
import { loadGtag } from '../utils/analytics';

const CONSENT_KEY = 'cookie_consent_v1';

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            if (!stored) setShow(true);
            if (stored === 'granted') {
                loadGtag();
            }
        } catch (e) {
            setShow(true);
        }
    }, []);

    function accept() {
        try { localStorage.setItem(CONSENT_KEY, 'granted'); } catch { }
        loadGtag();
        setShow(false);
    }

    function decline() {
        try { localStorage.setItem(CONSENT_KEY, 'denied'); } catch { }
        setShow(false);
    }

    if (!show) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 bg-cream shadow-lg rounded-2xl p-4 border border-beige flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-charcoal">
                Este site usa cookies para melhorar experiência e para medir conversões (Google Ads). Você aceita o uso de analytics?
            </div>
            <div className="flex gap-2">
                <button onClick={decline} className="px-4 py-2 rounded-lg bg-beige text-dark hover:bg-sage/30 transition-colors">Recusar</button>
                <button onClick={accept} className="px-4 py-2 rounded-lg bg-olive text-cream hover:bg-accent transition-colors">Aceitar</button>
            </div>
        </div>
    );
}
