
import React from 'react';

const technologies = [
  { 
    name: 'AWS', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    invert: false 
  },
  { 
    name: 'Docker', 
    logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
    invert: false
  },
  { 
    name: 'TypeScript', 
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
    invert: false
  },
  { 
    name: 'TailwindCSS', 
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    invert: false
  },
  { 
    name: 'React', 
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
    invert: false
  },
  { 
    name: 'Next.js', 
    logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg',
    invert: true 
  },
  { 
    name: 'Node.js', 
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
    invert: false
  },
  { 
    name: 'MongoDB', 
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    invert: false
  },
  { 
    name: 'Python', 
    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
    invert: false
  },
  { 
    name: 'GitHub', 
    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
    invert: true
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Core Infrastructure</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white">
              ENGINEERED FOR <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>SUPREMACY.</span>
            </h3>
          </div>
          <p className="text-white/40 max-w-sm text-sm md:text-base leading-relaxed font-light mb-2">
            We don't just write code. We architect scalable digital assets using a bleeding-edge tech stack designed for high-frequency growth.
          </p>
        </div>
      </div>

      <div className="relative z-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20"></div>

        <div className="animate-marquee flex gap-6 md:gap-8 py-6">
          {/* Tripled list for infinite scroll smoothness */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-36 h-44 md:w-48 md:h-56 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center group hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all duration-700 cursor-default relative overflow-hidden"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/[0.02] transition-colors duration-700"></div>
              
              <div className="w-14 h-14 md:w-20 md:h-20 mb-5 relative flex items-center justify-center">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className={`w-full h-full object-contain transition-all duration-700 filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 ${tech.invert ? 'invert brightness-0 group-hover:invert-0 group-hover:brightness-100' : ''}`}
                />
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-cyan-400 transition-colors duration-500 mb-1">
                  Technology
                </span>
                <span className="text-xs md:text-sm font-bold text-white/40 group-hover:text-white transition-colors duration-500">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
    </section>
  );
};

export default TechStack;
