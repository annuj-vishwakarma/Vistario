
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
  onViewChange: (view: 'home' | 'case-studies' | 'services' | 'contact') => void;
  currentView: 'home' | 'case-studies' | 'services' | 'contact';
}

const Header: React.FC<HeaderProps> = ({ onContactClick, onViewChange, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: 'home' | 'case-studies' | 'services' | 'contact') => {
    onViewChange(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-[#050505]/70 backdrop-blur-md border-b border-white/5' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-black text-lg transition-transform group-hover:rotate-12">V</div>
          <span className="text-xl font-black tracking-tighter">VISTAARIO</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['home', 'services', 'case-studies'].map((item) => (
            <button 
              key={item}
              onClick={() => onViewChange(item as any)}
              className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative ${
                currentView === item ? 'text-cyan-400' : 'text-white/40 hover:text-white'
              }`}
            >
              {item.replace('-', ' ')}
              {currentView === item && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400"></span>
              )}
            </button>
          ))}
          <button 
            onClick={onContactClick}
            className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 transition-colors shadow-lg shadow-white/5"
          >
            Protocol Sync
          </button>
        </nav>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-[#050505] z-[110] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-10 pt-32 gap-12">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-3xl text-white/20"><i className="fa-solid fa-xmark"></i></button>
          {['home', 'services', 'case-studies', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => handleNav(item as any)}
              className="text-left text-5xl font-black tracking-tighter uppercase text-white hover:text-cyan-400 transition-colors"
            >
              {item.replace('-', ' ')}
            </button>
          ))}
          <div className="mt-auto border-t border-white/5 pt-10">
            <p className="text-[10px] text-white/20 font-black tracking-[0.3em] uppercase mb-4">Channel_Status: Active</p>
            <div className="flex gap-6">
              <i className="fa-brands fa-linkedin-in text-white/40"></i>
              <i className="fa-brands fa-instagram text-white/40"></i>
              <i className="fa-brands fa-x-twitter text-white/40"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
