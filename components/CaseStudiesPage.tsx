
import React from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudiesPage: React.FC = () => {
  const handleProtocolClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const featuredProject = CASE_STUDIES[0];
  const otherProjects = CASE_STUDIES.slice(1);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Cinematic Hero */}
      <section className="pt-40 md:pt-56 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-2xl mb-12 reveal">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Tactical Deployments Archive</span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.8] mb-12 select-none reveal reveal-delay-1 italic uppercase">
            Battle <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(34,211,238,0.4)' }}>History.</span>
          </h1>

          <p className="text-xl md:text-3xl text-white/30 font-light leading-relaxed max-w-3xl mx-auto reveal reveal-delay-2">
            Engineered for <span className="text-white font-bold">maximum ROI</span> and market dominance. Explore the protocols that redefined our clients' digital landscape.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
          <span className="text-[25rem] font-black leading-none tracking-tighter">SUCCESS_RELIABILITY_REVENUE_SCALE</span>
        </div>
      </section>

      {/* Featured Deployment */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div 
            onClick={() => handleProtocolClick(featuredProject.link)}
            className="group relative bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden cursor-pointer hover:border-cyan-400/30 transition-all duration-700 reveal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-10 left-10 p-6 bg-cyan-400 text-black font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-2xl rotate-[-4deg]">
                  Primary Objective
                </div>
              </div>
              <div className="p-10 md:p-20 flex flex-col justify-center">
                <span className="text-cyan-400 font-mono text-xs tracking-widest mb-4 block">OP-V-001 // {featuredProject.client.toUpperCase()}</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 group-hover:text-cyan-400 transition-colors">
                  {featuredProject.title}
                </h2>
                <p className="text-xl text-white/40 mb-10 leading-relaxed max-w-xl">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                  {featuredProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white">{featuredProject.result}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/20">Metric_Impact</div>
                  </div>
                  <div className="h-10 w-[1px] bg-white/10"></div>
                  <button className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors">
                    Launch Deployment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Operations */}
      <section className="py-12 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((study, index) => (
            <div 
              key={study.id} 
              onClick={() => handleProtocolClick(study.link)}
              className={`group flex flex-col bg-white/[0.01] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-400/20 transition-all duration-500 cursor-pointer reveal reveal-delay-${(index % 4) + 1}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase text-cyan-400 tracking-widest rounded-xl">
                  {study.result}
                </div>
              </div>
              <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">ID: OP-V-0{index + 2}</span>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{study.client}</span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight mb-4 group-hover:text-cyan-400 transition-colors leading-none">
                    {study.title}
                  </h3>
                  <p className="text-base text-white/30 leading-relaxed line-clamp-2 mb-6 font-light">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[8px] font-bold uppercase tracking-widest text-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-8">
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Protocol Ready</span>
                   <i className="fa-solid fa-arrow-right-long text-white/20 group-hover:text-cyan-400 transition-colors"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tactial Footer CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative group reveal">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0a] p-12 md:p-24 rounded-[3rem] border border-white/5 text-center flex flex-col items-center overflow-hidden">
            <div className="scanline"></div>
            <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mb-10 rotate-12 group-hover:rotate-0 transition-transform shadow-2xl shadow-cyan-400/20">
              <i className="fa-solid fa-terminal text-3xl text-black"></i>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight uppercase">
              Your Operation <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>Starts Here.</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-xl mb-12 font-light">
              We are currently vetting candidates for our next high-scale growth protocol. Positions are highly restricted.
            </p>
            <button 
              onClick={() => window.location.hash = 'contact'}
              className="px-16 py-6 bg-white text-black font-black uppercase text-sm tracking-[0.4em] rounded-full hover:scale-105 hover:bg-cyan-400 transition-all shadow-2xl"
            >
              Request Briefing
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.2), transparent);
          animation: scanner 4s linear infinite;
          pointer-events: none;
          z-index: 5;
        }
        @keyframes scanner {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>
    </div>
  );
};

export default CaseStudiesPage;
