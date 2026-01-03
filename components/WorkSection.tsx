
import React from 'react';
import { CASE_STUDIES } from '../constants';

interface WorkSectionProps {
  onViewAll: () => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ onViewAll }) => {
  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="work" className="py-40 px-6 bg-[#fafafa] text-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl reveal">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30 mb-6">Intelligence Dossier</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              Proven <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>Impact.</span>
            </h3>
          </div>
          <div className="flex flex-col items-end reveal reveal-delay-1">
             <p className="text-black/40 text-sm max-w-[280px] text-right mb-8 leading-relaxed font-medium">
               Select tactical data points from our most recent deployments across development and marketing sectors.
             </p>
             <button 
                onClick={onViewAll}
                className="group flex items-center gap-6 px-10 py-5 bg-black text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Access Full Archive
                <i className="fa-solid fa-arrow-right-long text-white/40 group-hover:translate-x-2 transition-transform"></i>
              </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CASE_STUDIES.slice(0, 3).map((study, index) => (
            <div 
              key={study.id} 
              className={`group cursor-pointer reveal reveal-delay-${index + 1}`}
              onClick={() => handleProjectClick(study.link)}
            >
              <div className="relative overflow-hidden aspect-[4/5] rounded-[2rem] mb-8 bg-black/5 shadow-2xl shadow-black/5">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute top-8 left-8 flex flex-col items-start gap-2">
                   <div className="px-5 py-2.5 bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl">
                    {study.result}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6">
                    <i className="fa-solid fa-eye text-white text-sm"></i>
                  </div>
                  <span className="text-white font-black text-xs uppercase tracking-[0.4em] mb-4">Read Protocol</span>
                  <p className="text-white/40 text-[10px] uppercase leading-relaxed max-w-[150px]">
                    Detailed case brief and outcome analysis
                  </p>
                </div>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-black/10"></span>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black/30">OP_V_00{index + 1} // {study.client}</h4>
                </div>
                <h5 className="text-3xl font-black tracking-tighter leading-none group-hover:text-cyan-600 transition-colors uppercase">{study.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none -translate-y-1/2">
        <span className="text-[20rem] font-black leading-none tracking-tighter text-black">PERFORMANCE_ENGINEERING</span>
      </div>
    </section>
  );
};

export default WorkSection;
