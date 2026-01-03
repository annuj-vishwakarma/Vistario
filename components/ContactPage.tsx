
import React, { useState, useEffect } from 'react';

interface ContactPageProps {
  onSuccess?: (companyName: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onSuccess }) => {
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStage, setSubmitStage] = useState(0);

  const stages = [
    "ENCRYPTING DATA...",
    "HANDSHAKE WITH CORE...",
    "TRANSMITTING PROTOCOL...",
    "VERIFYING..."
  ];

  useEffect(() => {
    let interval: any;
    if (isSubmitting) {
      interval = setInterval(() => {
        setSubmitStage(prev => {
          if (prev < stages.length - 1) return prev + 1;
          return prev;
        });
      }, 400);
    } else {
      setSubmitStage(0);
    }
    return () => clearInterval(interval);
  }, [isSubmitting]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess(company || 'your business');
      }
    }, 2500);
  };

  return (
    <div className="pt-40 pb-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column: Context & Info */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Transmission Channel Open</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8">
                LET'S <br />
                <span className="text-cyan-400">CONNECT.</span>
              </h1>
              <p className="text-2xl text-white/40 font-light leading-relaxed max-w-xl">
                Ready to engineer your digital empire? Fill out the protocol request and our strategy team will be in touch within 12 business hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/5 transition-all">
                  <i className="fa-solid fa-envelope text-xl text-cyan-400 group-hover:scale-110 transition-transform"></i>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block">Direct Line</span>
                  <a href="mailto:support@vistaario.com" className="text-xl font-bold hover:text-cyan-400 transition-colors">support@vistaario.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/5 transition-all">
                  <i className="fa-solid fa-phone text-xl text-cyan-400 group-hover:scale-110 transition-transform"></i>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block">Call Us</span>
                  <a href="tel:+918458896761" className="text-xl font-bold hover:text-cyan-400 transition-colors">+91 8458896761</a>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-400/50 transition-all">
                  <i className="fa-solid fa-location-dot text-xl text-cyan-400"></i>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block">HQ Location</span>
                  <span className="text-xl font-bold">Bhopal, MP, India</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 max-w-sm relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/20 group-hover:bg-cyan-400 transition-colors"></div>
               <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                 <span className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></span>
                 Current Availability: Limited
               </h4>
               <p className="text-white/40 text-sm leading-relaxed">
                 We are currently accepting <span className="text-white font-bold">2 new high-scale projects</span> for the upcoming quarter. Secure your slot now.
               </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bento-card p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group/form">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="scanline"></div>
            
            <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 group-focus-within:text-cyan-400 transition-colors">Full Identity</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-bold focus:outline-none focus:border-cyan-400 transition-all placeholder:text-white/10"
                  placeholder="E.g. Alexander Pierce"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 group-focus-within:text-cyan-400 transition-colors">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-bold focus:outline-none focus:border-cyan-400 transition-all placeholder:text-white/10"
                    placeholder="alex@empire.com"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 group-focus-within:text-cyan-400 transition-colors">Mobile Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-bold focus:outline-none focus:border-cyan-400 transition-all placeholder:text-white/10"
                    placeholder="+91 000-000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 group-focus-within:text-cyan-400 transition-colors">Company Name</label>
                <input 
                  required
                  type="text" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-bold focus:outline-none focus:border-cyan-400 transition-all placeholder:text-white/10"
                  placeholder="Empire Tech"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 group-focus-within:text-cyan-400 transition-colors">Project Protocol</label>
                <textarea 
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-bold focus:outline-none focus:border-cyan-400 transition-all placeholder:text-white/10 min-h-[150px] resize-none"
                  placeholder="Describe your revenue goals and requirements..."
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full py-6 bg-cyan-400 text-black font-black text-xl rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-cyan-400/20 disabled:bg-cyan-900 disabled:text-cyan-400/40 disabled:cursor-not-allowed overflow-hidden relative group/btn"
              >
                {isSubmitting ? (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs tracking-widest">{stages[submitStage]}</span>
                    <div className="w-32 h-0.5 bg-black/20 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-400 animate-marquee w-full" style={{ animationDuration: '1s' }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    SUBMIT PROTOCOL
                    <i className="fa-solid fa-arrow-right-long text-sm opacity-40 group-hover/btn:translate-x-2 transition-transform"></i>
                  </div>
                )}
              </button>
              
              <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                Secure Transmission • End-to-End Encryption
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
