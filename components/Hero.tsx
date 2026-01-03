
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8 reveal">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Scale_Protocol v2.0</span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-black leading-[0.85] tracking-tighter mb-12">
          <span className="block opacity-20 reveal reveal-delay-1 select-none">BUILDING</span>
          <span className="block reveal reveal-delay-2 text-white">REVENUE</span>
          <span className="block reveal reveal-delay-3 text-cyan-400 text-glitch" data-text="MACHINES.">MACHINES.</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <p className="text-xl md:text-3xl text-white/40 font-light leading-relaxed max-w-2xl reveal reveal-delay-3">
            Vistaario is a precision engineering hub. We synthesize <span className="text-white font-bold">bespoke development</span> and <span className="text-white font-bold">aggressive marketing</span> to dominate market verticals.
          </p>
          
          <div className="flex flex-wrap gap-4 reveal reveal-delay-4">
            <button 
              onClick={onCtaClick}
              className="px-10 py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
            >
              Start Operation
            </button>
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-sm tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              View History
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-white/5 reveal reveal-delay-4">
          {[
            { val: '98%', label: 'Retention' },
            { val: '$42M', label: 'Generated' },
            { val: '12ms', label: 'Avg Latency' },
            { val: '24/7', label: 'Monitoring' }
          ].map((stat, i) => ( stat &&
            <div key={i} className="group">
              <div className="text-3xl md:text-5xl font-black mb-1 text-white/80 group-hover:text-cyan-400 transition-colors">{stat.val}</div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Extreme Background FX */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
