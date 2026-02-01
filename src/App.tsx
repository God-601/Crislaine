import Header from './components/Header';
import Hero from './components/Hero';
import ProblemIdentification from './components/ProblemIdentification';
import Method from './components/Method';
import HowItWorks from './components/HowItWorks';
import AfterTest from './components/AfterTest';
import ForWho from './components/ForWho';
import Testimonials from './components/Testimonials';
import AboutTherapist from './components/AboutTherapist';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CookieConsent />
      <Header />
      <main>
        <Hero />
        <ProblemIdentification />
        <Method />
        <HowItWorks />
        <AfterTest />
        <ForWho />
        <Testimonials />
        <AboutTherapist />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;