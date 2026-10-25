
import React from 'react';
import Sidebar from './components/Sidebar';
import FloralDisplay from './components/FloralDisplay';
import GeminiAssistant from './components/GeminiAssistant';
import { FOOTER_SECTIONS, PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d1a16] text-[#d1c7b7] selection:bg-[#a8d5ba] selection:text-[#1a2e28]">
      <Sidebar />

      <main className="pl-20">
        {/* HERO SECTION */}
        <section id="hero" className="container mx-auto px-8 lg:px-16 pt-24 pb-12 min-h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT COLUMN: Narrative */}
            <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
              <div className="glass p-8 rounded-[40px] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#a8d5ba]"></div>
                  <span className="text-[10px] tracking-[0.6em] uppercase text-[#a8d5ba] font-bold">Concept No. 12</span>
                </div>
                <h2 className="text-4xl font-serif italic text-white leading-tight">
                  Where Glass <br/>Meets the Grove.
                </h2>
                <p className="text-sm leading-relaxed opacity-50 font-light">
                  A portfolio curated for the modern etherealist. Exploring the delicate boundaries between digital transparency and biological complexity.
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-4 group">
                    <span className="text-xs tracking-widest uppercase font-semibold text-[#a8d5ba]">Learn More</span>
                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-[#a8d5ba] group-hover:text-[#0d1a16] transition-all duration-500">
                      →
                    </div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-dark p-6 rounded-3xl text-center">
                  <div className="text-2xl font-serif text-white">42+</div>
                  <div className="text-[8px] tracking-widest uppercase opacity-40 mt-1">Installations</div>
                </div>
                <div className="glass-dark p-6 rounded-3xl text-center">
                  <div className="text-2xl font-serif text-white">08</div>
                  <div className="text-[8px] tracking-widest uppercase opacity-40 mt-1">Exhibitions</div>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: Visual */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FloralDisplay />
            </div>

            {/* RIGHT COLUMN: Branding */}
            <div className="lg:col-span-3 space-y-12 order-3 text-right">
              <div className="space-y-2">
                <h1 className="text-7xl lg:text-9xl font-serif tracking-tighter text-white/10 leading-none select-none">
                  WLP
                </h1>
                <h1 className="text-5xl lg:text-7xl font-serif tracking-tight text-[#a8d5ba] leading-none -mt-8 lg:-mt-12">
                  WOLPIN
                </h1>
                <p className="text-[10px] tracking-[1em] uppercase text-white/40 pt-4">
                  Portfolio 2025
                </p>
              </div>

              <div className="pt-12 glass p-8 rounded-[40px] text-left">
                <h4 className="text-xs font-serif italic text-[#a8d5ba] mb-2">Current Focus</h4>
                <p className="text-xs leading-relaxed opacity-60">
                    Bioluminescence and refracted light within organic structures. Capturing the "glow" of life through a frosted lens.
                </p>
                <div className="mt-6 flex gap-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-lg glass border-white/10 hover:bg-[#a8d5ba]/20 transition-all cursor-crosshair"></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GALLERY SECTION */}
        <section id="portfolio" className="container mx-auto px-8 lg:px-16 py-24">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#a8d5ba]"></div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#a8d5ba]">Featured Works</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-serif text-white">The Glass Archive</h2>
            </div>
            <p className="text-sm opacity-40 max-w-xs font-light text-right italic">
              "Every piece is a dialogue between the viewer and the veiled beauty of nature."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group relative glass rounded-[40px] overflow-hidden aspect-[3/4] transition-all duration-700 hover:-translate-y-4 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[8px] tracking-[0.4em] uppercase text-[#a8d5ba] mb-2">{project.category}</span>
                  <h3 className="text-2xl font-serif text-white mb-2">{project.title}</h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-white/30 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ORACLE SECTION (REUSED GEMINI ASSISTANT) */}
        <section id="gallery" className="container mx-auto px-8 lg:px-16 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="relative glass rounded-[50px] overflow-hidden aspect-video group">
                  <img 
                    src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Gallery Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[3s]"
                  />
                  <div className="absolute inset-0 bg-[#0d1a16]/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-20 h-20 glass rounded-full flex items-center justify-center text-[#a8d5ba] cursor-pointer hover:scale-110 transition-transform">
                       <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#a8d5ba] border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10 glass-dark p-6 rounded-3xl">
                     <h4 className="text-lg font-serif italic text-white">Behind the Lens</h4>
                     <p className="text-[10px] tracking-widest opacity-40 uppercase mt-1">Short Film / 2024</p>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <GeminiAssistant />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              <div className="col-span-2">
                <div className="text-8xl font-serif text-white/5 absolute -top-12 -left-4 select-none pointer-events-none">WOLPIN</div>
                <div className="text-4xl font-serif text-[#a8d5ba] relative">WOLPIN.</div>
                <p className="mt-6 text-sm opacity-30 max-w-sm font-light leading-relaxed">
                  A digital sanctuary where art breathes. Experience the intersection of technology and the tactile beauty of the natural world.
                </p>
              </div>
              {FOOTER_SECTIONS.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h5 className="text-[10px] tracking-[0.5em] uppercase text-[#a8d5ba] font-bold">{section.title}</h5>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-xs opacity-40 hover:opacity-100 hover:text-[#a8d5ba] transition-all cursor-pointer font-light">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] opacity-20 uppercase pt-12 border-t border-white/5">
              <p>&copy; 2025 Wolpin Studio. Built for the Ethereal.</p>
              <div className="flex gap-12 font-bold">
                <span className="hover:opacity-100 cursor-pointer transition-opacity">Behance</span>
                <span className="hover:opacity-100 cursor-pointer transition-opacity">Instagram</span>
                <span className="hover:opacity-100 cursor-pointer transition-opacity">Vimeo</span>
              </div>
            </div>
          </div>
          
          {/* Subtle background glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a8d5ba]/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>
        </footer>
      </main>
    </div>
  );
};

export default App;
