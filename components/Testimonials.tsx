
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Social Proof</h2>
            <h3 className="text-4xl font-black mb-6">Companies growing with Vistaario.</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">We measure our success by the scale and velocity of our clients' growth. Don't take our word for it—listen to our partners.</p>
            <div className="flex gap-4">
               <div className="p-3 bg-white/5 border border-white/10 rounded-full text-xl cursor-pointer hover:bg-white/10 transition-colors">
                  <i className="fa-solid fa-chevron-left"></i>
               </div>
               <div className="p-3 bg-white/5 border border-white/10 rounded-full text-xl cursor-pointer hover:bg-white/10 transition-colors">
                  <i className="fa-solid fa-chevron-right"></i>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 glass rounded-3xl border border-white/5">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                </div>
                <p className="text-lg italic text-gray-300 mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
