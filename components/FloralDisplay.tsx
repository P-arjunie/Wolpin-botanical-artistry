
import React from 'react';

const FloralDisplay: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/5] md:aspect-square flex items-center justify-center">
      {/* Background glow layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-[#2d4d44] via-transparent to-transparent rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
      
      {/* Central Glass Composition */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        
        {/* Outer Frosted Frame */}
        <div className="absolute inset-0 glass rounded-[60px] opacity-40 -rotate-2 scale-95"></div>
        <div className="absolute inset-0 glass rounded-[60px] opacity-20 rotate-1 scale-105"></div>

        {/* Main Visual Layer */}
        <div className="relative z-20 w-full h-full glass rounded-[40px] overflow-hidden flex items-center justify-center group shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200" 
                alt="Main Botanical Art"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[2s] ease-out mix-blend-luminosity"
            />
            
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a16] via-transparent to-[#0d1a16]/40"></div>

            {/* Surreal Content */}
            <div className="relative z-30 flex flex-col items-center">
                <div className="w-48 h-72 lg:w-64 lg:h-96 glass rounded-full overflow-hidden border-white/20 p-1 shadow-2xl animate-float">
                    <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" 
                        alt="Ethereal Profile"
                        className="w-full h-full object-cover mix-blend-soft-light grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>

            {/* Floating Glass Fragments */}
            <div className="absolute top-12 left-12 w-20 h-20 glass rounded-full opacity-60 backdrop-blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 glass rounded-full opacity-40 backdrop-blur-3xl"></div>
            
            {/* Labels overlay */}
            <div className="absolute bottom-8 left-8 space-y-2">
                <div className="glass-dark px-3 py-1 rounded-full text-[8px] tracking-[0.4em] uppercase text-[#a8d5ba]">The Muse</div>
                <div className="glass-dark px-3 py-1 rounded-full text-[8px] tracking-[0.4em] uppercase">Archive 0042</div>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloralDisplay;
