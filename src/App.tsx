
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemIdentification from './components/ProblemIdentification';
import Benefits from './components/Benefits';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import AboutTherapist from './components/AboutTherapist';
import HowItWorks from './components/HowItWorks';
import Method from './components/Method';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import NavigationButtons from './components/NavigationButtons';
import CookieConsent from './components/CookieConsent';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);
  return (
    <div className="min-h-screen bg-white relative">
      <ParallaxBackground />
      <CookieConsent />
      <NavigationButtons />
      <Header />
      <main>
        <Hero />
        <ProblemIdentification />
        <Method />
        <HowItWorks />
        <Benefits />
        <Approach />
        <Testimonials />
        <AboutTherapist />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;