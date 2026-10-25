
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { getArtisticCritique } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input };
    setHistory(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getArtisticCritique(input);
    const modelMsg: ChatMessage = { role: 'model', text: aiResponse || '' };
    setHistory(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div id="oracle" className={`glass p-6 rounded-3xl transition-all duration-700 ${isExpanded ? 'lg:col-span-12' : 'w-full'}`}>
      <div className="flex items-center justify-between mb-4 text-[#a8d5ba]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <h3 className="font-serif text-lg tracking-widest uppercase">Art Curator Oracle</h3>
        </div>
        <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
      
      <div className={`space-y-4 overflow-y-auto mb-4 pr-2 custom-scrollbar transition-all duration-500 ${isExpanded ? 'max-h-[500px]' : 'max-h-64'}`}>
        {history.length === 0 && (
          <div className="text-center py-8">
            <p className="text-sm italic opacity-40 font-light">"Ask me about the textures of nature, the soul of a piece, or the future of botanical art..."</p>
          </div>
        )}
        {history.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] text-xs p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-[#a8d5ba]/10 text-[#a8d5ba] border border-[#a8d5ba]/20' 
                : 'bg-white/5 text-[#d1c7b7] border border-white/5 shadow-inner'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <Loader2 className="w-4 h-4 animate-spin text-[#a8d5ba]" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="relative group">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Inquire with the Curator..."
          className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 px-6 pr-14 text-sm focus:outline-none focus:border-[#a8d5ba]/50 transition-all placeholder:opacity-30"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#a8d5ba] text-[#0d1a16] rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#a8d5ba]/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GeminiAssistant;
