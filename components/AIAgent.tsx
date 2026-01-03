
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';
import { ChatMessage, MessageRole } from '../types';

const AIAgent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.AI, content: "**PROTOCOL INITIALIZED.** I am the Vistaario Strategy Engine. Provide your business core objective to begin a high-level growth audit." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stages = [
    "INITIALIZING NEURAL LINK",
    "DECRYPTING MARKET DATA",
    "SYNTHESIZING GROWTH VECTORS",
    "FORMULATING STRATEGIC RESPONSE"
  ];

  useEffect(() => {
    let interval: any;
    if (isLoading) {
      setLoadingStage(0);
      interval = setInterval(() => {
        setLoadingStage(prev => (prev + 1) % stages.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const userMsg: ChatMessage = { role: MessageRole.USER, content: userMessage };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role === MessageRole.USER ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await getAIResponse(userMessage, history);
    const aiMsg: ChatMessage = { role: MessageRole.AI, content: String(response ?? '') };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#0a0a0a] font-mono relative">
      {/* Header Bar */}
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold bg-[#0a0a0a]/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          <span>Strategy Stream v3.1</span>
        </div>
        <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/10 uppercase tracking-[0.4em]">Encrypted Channel</span>
            <span className="flex items-center gap-2 text-cyan-400">
                CORE_ACTIVE
            </span>
        </div>
      </div>

      {/* Message Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scroll-smooth custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.role === MessageRole.USER ? 'items-end' : 'items-start'}`}>
            <span className="text-[9px] uppercase tracking-widest text-white/20 mb-3 font-bold">
                {msg.role === MessageRole.USER ? 'USER_INPUT' : 'VISTAARIO_CORE'}
            </span>
            <div className={`max-w-[90%] md:max-w-[80%] p-6 rounded-2xl ${
              msg.role === MessageRole.USER 
                ? 'bg-cyan-500/5 text-cyan-100 border border-cyan-500/20 shadow-xl' 
                : 'bg-white/[0.03] text-white/80 border border-white/5 shadow-2xl backdrop-blur-md'
            }`}>
              <div className="prose prose-invert prose-sm leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex flex-col items-start space-y-4">
             <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-black animate-pulse">
                   {stages[loadingStage]}
                </span>
             </div>
             <div className="w-48 h-[2px] bg-white/5 overflow-hidden rounded-full">
                <div className="h-full bg-cyan-400 animate-[marquee_1.5s_linear_infinite] w-full"></div>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 md:p-10 bg-black/60 border-t border-white/10 shrink-0">
        <form onSubmit={handleSubmit} className="relative group">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Command: Enter core objective or strategy query"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 pl-8 pr-20 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all text-sm font-mono text-white placeholder:text-white/20"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-400 text-black rounded-xl flex items-center justify-center hover:scale-105 transition-all disabled:opacity-20"
          >
            <i className={`fa-solid ${isLoading ? 'fa-spinner fa-spin' : 'fa-terminal'} text-lg`}></i>
          </button>
        </form>
        <p className="mt-4 text-[8px] text-center text-white/10 uppercase tracking-[0.5em] font-bold">End-to-End Analysis Protocol Active</p>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 211, 238, 0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default AIAgent;
