
import React from 'react';
import { SERVICES } from '../constants';

const techStack = [
  'React 19', 'TypeScript', 'Next.js', 'Rust', 'Go', 'Python', 'AWS', 'Vercel', 
  'Figma', 'Spline', 'Framer Motion', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker'
];

const Services: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl reveal">
            <h2 className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Elite Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight">Tools for the <br /><span className="opacity-30">Modern Mogul.</span></h3>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed mb-2 reveal reveal-delay-1">
            Standard agencies use templates. We use logic, psychology, and high-end engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Large Feature with Scrolling Tech Stack */}
          <div className="md:col-span-8 bento-card p-10 rounded-[2.5rem] flex flex-col justify-between group overflow-hidden relative reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div>
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <i className="fa-solid fa-code text-2xl text-cyan-400"></i>
              </div>
              <h4 className="text-4xl font-bold mb-4">High-Performance Ecosystems</h4>
              <p className="text-white/50 text-xl max-w-md leading-relaxed">We build custom web architectures that don't just work—they dominate. Blazing fast, ultra-secure, and conversion-optimized from the first line of code.</p>
            </div>
            
            {/* Film Scroll / Marquee Tech Stack */}
            <div className="mt-12 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950/50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950/50 to-transparent z-10"></div>
              
              <div className="animate-marquee gap-4 flex whitespace-nowrap">
                {/* Doubled for seamless loop */}
                {[...techStack, ...techStack].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Vertical Small */}
          <div className="md:col-span-4 bento-card p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center group reveal relative reveal-delay-1">
            <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-cyan-400/20 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-bolt text-3xl text-black"></i>
            </div>
            <h4 className="text-2xl font-bold mb-4">Hyper-Growth <br />Marketing</h4>
            <p className="text-white/40 text-sm">Aggressive acquisition strategies that cut through the noise and deliver measurable ROI.</p>
          </div>

          {/* Card 3: Horizontal Small */}
          <div className="md:col-span-5 bento-card p-10 rounded-[2.5rem] group relative reveal reveal-delay-2">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <i className="fa-solid fa-shopping-cart text-white/60"></i>
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-2">E-Commerce Mastery</h4>
            <p className="text-white/40 text-sm">Scale your store to 7-8 figures with our headless commerce solutions.</p>
          </div>

          {/* Card 4: Horizontal Small */}
          <div className="md:col-span-7 bento-card p-10 rounded-[2.5rem] flex items-center gap-8 group relative reveal reveal-delay-3">
            <div className="w-24 h-24 bg-white/5 rounded-3xl border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/id/1/200/200" className="opacity-20 grayscale group-hover:opacity-60 transition-opacity" alt="Service" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Brand Psychology</h4>
              <p className="text-white/40 text-sm leading-relaxed">Visual identities that create an immediate emotional connection and perceived authority.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
