
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-7xl font-black tracking-tighter mb-8 leading-[0.9] reveal">READY TO <br /><span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>ASCEND?</span></h2>
          <p className="text-xl text-black/60 mb-12 font-medium max-w-md reveal reveal-delay-1">We don't take every project. We only partner with brands that are ready to aggressively scale and challenge their industry norms.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6 reveal reveal-delay-2 group">
                <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <i className="fa-solid fa-magnifying-glass-chart text-2xl"></i>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-1 flex items-center gap-3">
                      <span className="text-[10px] text-black/20 font-black">01</span>
                      Growth Audit
                    </h4>
                    <p className="text-sm text-black/40">We analyze your current stack and identify leakage points.</p>
                </div>
            </div>
            <div className="flex gap-6 reveal reveal-delay-3 group">
                <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <i className="fa-solid fa-drafting-compass text-2xl"></i>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-1 flex items-center gap-3">
                      <span className="text-[10px] text-black/20 font-black">02</span>
                      Blueprint Delivery
                    </h4>
                    <p className="text-sm text-black/40">You receive a full architectural and marketing roadmap.</p>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-[#050505] p-10 md:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden reveal reveal-right">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[100px] pointer-events-none"></div>
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-8">
              <div className="border-b border-white/10 pb-2 group focus-within:border-cyan-400 transition-colors">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-cyan-400">
                  <i className="fa-solid fa-user-tag text-[8px]"></i>
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent text-white/90 text-xl font-bold focus:outline-none placeholder:text-white/20 py-2" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-white/10 pb-2 group focus-within:border-cyan-400 transition-colors">
                  <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-cyan-400">
                    <i className="fa-solid fa-phone-volume text-[8px]"></i>
                    Contact Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent text-white/90 text-xl font-bold focus:outline-none placeholder:text-white/20 py-2" 
                    placeholder="+1 (555) 000-0000" 
                    required 
                  />
                </div>
                <div className="border-b border-white/10 pb-2 group focus-within:border-cyan-400 transition-colors">
                  <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-cyan-400">
                    <i className="fa-solid fa-paper-plane text-[8px]"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent text-white/90 text-xl font-bold focus:outline-none placeholder:text-white/20 py-2" 
                    placeholder="hello@company.com" 
                    required 
                  />
                </div>
              </div>

              <div className="border-b border-white/10 pb-2 group focus-within:border-cyan-400 transition-colors">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-cyan-400">
                  <i className="fa-solid fa-message text-[8px]"></i>
                  Your Message
                </label>
                <textarea 
                  className="w-full bg-transparent text-white/90 text-xl font-bold focus:outline-none placeholder:text-white/20 min-h-[120px] resize-none py-2" 
                  placeholder="Tell us about your project goals..."
                  required
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="w-full py-6 bg-cyan-400 text-black font-black text-xl rounded-full hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-cyan-400/20 flex items-center justify-center gap-4">
              SUBMIT PROTOCOL <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
            <p className="text-center text-[10px] text-white/30 uppercase tracking-widest font-bold">Responds within 12 business hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
