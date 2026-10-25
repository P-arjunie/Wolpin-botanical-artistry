
import React from 'react';
import { NAVIGATION_ICONS } from '../constants';

const Sidebar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-12 border-r border-white/5 bg-white/5 backdrop-blur-xl z-50">
      <div className="flex flex-col gap-1 w-2 mb-12">
        <div className="w-2 h-2 rounded-full bg-white/60"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/60"></div>
      </div>
      
      <div className="flex flex-col gap-12 mt-8">
        {NAVIGATION_ICONS.map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group relative flex flex-col items-center text-[#d1c7b7] hover:text-[#a8d5ba] transition-colors duration-300"
          >
            <div className="p-3 rounded-xl border border-white/5 bg-white/5 group-hover:border-[#a8d5ba]/50 group-hover:bg-[#a8d5ba]/10 transition-all duration-500 shadow-lg">
              {item.icon}
            </div>
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] tracking-[0.3em] uppercase rotate-90 whitespace-nowrap origin-left mt-2 font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center gap-8">
        <div className="w-[1px] h-24 bg-gradient-to-t from-[#a8d5ba] to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Sidebar;
