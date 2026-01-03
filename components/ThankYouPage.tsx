
import React, { useEffect, useState } from 'react';

interface ThankYouPageProps {
  companyName: string;
  onReturn: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ companyName, onReturn }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-[#050505]">
      {/* Background Grid & FX */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10 flex flex-col items-center">
        {/* Animated Status Header */}
        <div className="mb-12 text-center animate-reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Transmission Verified</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-6">
            PROTOCOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">INITIATED.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed">
            Identity confirmed: <span className="text-white font-bold">{companyName}</span>. Your request has been queued for elite strategic analysis.
          </p>
        </div>

        {/* Technical Progress Section */}
        <div className="w-full max-w-2xl mb-16 space-y-4">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/20">
            <span>Encrypting Data Packets</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Timeline / Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {[
            { step: '01', title: 'Market Audit', desc: 'Our AI engine scans your industry landscape.', icon: 'fa-radar' },
            { step: '02', title: 'Strategy Build', desc: 'Elite consultants craft your growth blueprint.', icon: 'fa-microchip' },
            { step: '03', title: 'Direct Sync', desc: 'We reach out via secure channel to execute.', icon: 'fa-shuttle-space' },
          ].map((item, idx) => (
            <div key={idx} className="bento-card p-8 rounded-3xl border-white/5 flex flex-col gap-4 group">
              <div className="text-[10px] font-black text-cyan-400/40 uppercase tracking-widest">Phase {item.step}</div>
              <div className="flex items-center gap-4">
                <i className={`fa-solid ${item.icon} text-xl text-white/20 group-hover:text-cyan-400 transition-colors`}></i>
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
              <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button 
            onClick={onReturn}
            className="group px-12 py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-4 shadow-2xl shadow-white/10"
          >
            Terminal Home
            <i className="fa-solid fa-house-chimney text-xs opacity-40 group-hover:opacity-100 transition-opacity"></i>
          </button>
          
          <button 
            onClick={() => window.open('https://linkedin.com', '_blank')}
            className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-sm tracking-widest rounded-full hover:bg-white/10 transition-all flex items-center gap-4"
          >
            Follow Protocol
            <i className="fa-brands fa-linkedin-in text-xs opacity-40"></i>
          </button>
        </div>

        {/* Security Footer */}
        <div className="mt-20 flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
          <i className="fa-solid fa-shield-halved"></i>
          <span>End-to-End Encryption Active</span>
        </div>
      </div>

      {/* Extreme Background FX */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-reveal"></div>
    </div>
  );
};

export default ThankYouPage;
