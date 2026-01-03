
import React from 'react';

interface ServicesPageProps {
  onCtaClick?: () => void;
}

const coreServices = [
  {
    title: "Website Development",
    icon: "fa-laptop-code",
    description: "High-performance web architectures engineered for speed and scalability. We build bespoke systems that don't just exist—they dominate.",
    details: ["NEXT.JS & REACT 19", "E-COMMERCE (HEADLESS)", "CUSTOM CMS SOLUTIONS", "PERFORMANCE OPTIMIZATION"]
  },
  {
    title: "App Development",
    icon: "fa-mobile-screen",
    description: "Native and cross-platform mobile experiences that feel like magic. We focus on low-latency, high-utility applications for iOS and Android.",
    details: ["REACT NATIVE", "SWIFT & KOTLIN", "REAL-TIME INTEGRATION", "SCALEABLE BACKENDS"]
  },
  {
    title: "UI/UX Design and Creatives",
    icon: "fa-bezier-curve",
    description: "Visual logic and psychological triggers. Our designs are built to convert users into advocates through seamless, intuitive interfaces.",
    details: ["PROTOTYPING", "BRAND SYSTEMS", "MOTION DESIGN", "3D VISUALS (SPLINE)"]
  },
  {
    title: "Marketing and Branding",
    icon: "fa-magnifying-glass-chart",
    description: "Aggressive growth strategies backed by hard data. We craft narratives that resonate and deploy them where your audience lives.",
    details: ["SEO MASTERY", "GROWTH ARCHITECTURE", "CONTENT STRATEGY", "SOCIAL INFLUENCE"]
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ onCtaClick }) => {
  const dominanceText = "DOMINANCE.";

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.85] mb-12 reveal">
            CRAFTING <br />
            <div className="inline-flex flex-wrap overflow-hidden">
              {dominanceText.split("").map((char, index) => (
                <span
                  key={index}
                  className="relative inline-block cursor-default group/char select-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(34,211,238,0.3)',
                    color: 'transparent',
                  }}
                >
                  <span className="relative z-0">{char}</span>
                  <span 
                    className="absolute inset-0 z-10 text-white transition-all duration-700 ease-out pointer-events-none"
                    style={{
                      WebkitTextStroke: '1.5px white',
                      clipPath: 'inset(100% 0 0 0)',
                    }}
                  >
                    <style dangerouslySetInnerHTML={{ __html: `
                      .group\\/char:hover span:nth-child(2) { clip-path: inset(0% 0 0 0) !important; }
                    `}} />
                    {char}
                  </span>
                </span>
              ))}
            </div>
          </h1>
          <p className="text-xl md:text-3xl text-white/40 max-w-2xl font-light leading-relaxed reveal reveal-delay-2">
            Every choice we make is a strategic move towards market leadership. We deliver <span className="text-white font-bold">competitive advantages</span>, not just code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className={`group bento-card p-10 md:p-14 rounded-[3rem] relative flex flex-col justify-between min-h-[450px] reveal reveal-delay-${(index % 2) + 1}`}
            >
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:rotate-12 transition-all duration-500">
                  <i className={`fa-solid ${service.icon} text-2xl text-cyan-400 group-hover:text-black transition-colors duration-500`}></i>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight group-hover:text-cyan-400 transition-colors duration-500">{service.title}</h2>
                <p className="text-lg text-white/40 leading-relaxed font-light mb-10 max-w-sm">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.details.map((detail, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-all">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Footer CTA */}
        <div className="mt-32 p-16 rounded-[4rem] bg-cyan-400 text-black flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden reveal">
          <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-xl relative z-10 text-center lg:text-left">
             <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">READY FOR DOMINATION?</h3>
             <p className="text-black/60 font-bold text-lg">Secure your strategic advantage before your competition does.</p>
          </div>
          <button 
            onClick={onCtaClick}
            className="w-full lg:w-auto relative z-10 px-12 py-6 bg-black text-white rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Deploy Protocol
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
