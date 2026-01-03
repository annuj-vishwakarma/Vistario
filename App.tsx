
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkSection from './components/WorkSection';
import TechStack from './components/TechStack';
import CaseStudiesPage from './components/CaseStudiesPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ThankYouPage from './components/ThankYouPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'case-studies' | 'services' | 'contact' | 'thank-you'>('home');
  const [submittedCompany, setSubmittedCompany] = useState<string>('');
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootProgress(prev => {
        if (prev < 100) return prev + 2;
        clearInterval(interval);
        setTimeout(() => setIsBooting(false), 800);
        return 100;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const handleContactSuccess = (companyName: string) => {
    setSubmittedCompany(companyName);
    setView('thank-you');
  };

  if (isBooting) {
    return (
      <div className="fixed inset-0 bg-[#050505] z-[1000] flex flex-col items-center justify-center font-mono">
        <div className="max-w-xs w-full px-6 text-center">
          <div className="mb-12 relative scale-125">
            <div className="w-16 h-16 bg-white text-black mx-auto rounded-sm flex items-center justify-center font-black text-3xl">V</div>
            <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full animate-pulse"></div>
          </div>
          <div className="mb-4 flex justify-between text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase">
            <span>INIT_PROTOCOL</span>
            <span>{bootProgress}%</span>
          </div>
          <div className="h-[1px] w-full bg-white/5 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${bootProgress}%` }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[200]">
        <div 
          className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all duration-300" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full"></div>
      </div>

      <Header 
        onContactClick={() => setView('contact')} 
        onViewChange={(v) => setView(v as any)}
        currentView={view === 'thank-you' ? 'contact' : view}
      />
      
      <main className="transition-opacity duration-500">
        {view === 'home' ? (
          <>
            <Hero onCtaClick={() => setView('contact')} />
            <Services />
            <WorkSection onViewAll={() => setView('case-studies')} />
            <TechStack />
            <Testimonials />
            <Contact />
          </>
        ) : view === 'services' ? (
          <ServicesPage onCtaClick={() => setView('contact')} />
        ) : view === 'contact' ? (
          <ContactPage onSuccess={handleContactSuccess} />
        ) : view === 'thank-you' ? (
          <ThankYouPage companyName={submittedCompany} onReturn={() => setView('home')} />
        ) : (
          <CaseStudiesPage />
        )}
      </main>

      <Footer />
      
      {/* Navigation & Tools */}
      <ScrollToTop />
      
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
