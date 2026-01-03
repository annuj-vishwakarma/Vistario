
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-[#050505] border-t border-white/5 text-white/60">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About Column */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-6 h-6 bg-white text-black rounded-sm flex items-center justify-center font-black text-xs">V</div>
              Vistaario
            </h4>
            <p className="text-sm leading-relaxed max-w-xs">
              Engineering high-conversion digital assets for the bold. Blending elite development with aggressive growth marketing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all border border-white/10">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all border border-white/10">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all border border-white/10">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-house text-[10px] opacity-20"></i> Home</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-layer-group text-[10px] opacity-20"></i> Services</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-microchip text-[10px] opacity-20"></i> Technologies</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-circle-info text-[10px] opacity-20"></i> About</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-book text-[10px] opacity-20"></i> Case Studies</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-headset text-[10px] opacity-20"></i> Support</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><i className="fa-solid fa-shield-halved text-[10px] opacity-20"></i> Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Global Sync</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                  <i className="fa-solid fa-location-dot text-cyan-400"></i>
                </div>
                <span>Bhopal, Madhya Pradesh<br />India — HQ</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                  <i className="fa-solid fa-phone text-cyan-400"></i>
                </div>
                <a href="tel:+918458896761" className="hover:text-cyan-400 transition-colors">+91 8458896761</a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                  <i className="fa-solid fa-envelope text-cyan-400"></i>
                </div>
                <a href="mailto:support@vistaario.com" className="hover:text-cyan-400 transition-colors">support@vistaario.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
          <p>© 2024 Vistaario. Built for scale.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
