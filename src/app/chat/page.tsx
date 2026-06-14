'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Briefcase, PenTool, Zap, ArrowLeft, Bot, Send } from 'lucide-react';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const updateViewportHeight = () => {
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty('--chat-viewport-height', `${viewportHeight}px`);
    };

    updateViewportHeight();

    window.visualViewport?.addEventListener('resize', updateViewportHeight);
    window.visualViewport?.addEventListener('scroll', updateViewportHeight);
    window.addEventListener('resize', updateViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener('resize', updateViewportHeight);
      window.visualViewport?.removeEventListener('scroll', updateViewportHeight);
      window.removeEventListener('resize', updateViewportHeight);
      document.documentElement.style.removeProperty('--chat-viewport-height');
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const keepInputAboveKeyboard = () => {
    window.setTimeout(() => {
      inputRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 120);
  };

  return (
    <div 
      className="relative flex flex-col overflow-hidden bg-[#0a0a0a] text-white" 
      style={{ height: 'var(--chat-viewport-height, 100svh)' }}
    >
      {/* Header */}
      <div className="relative z-10 flex items-center justify-center px-4 pt-4 pb-3 md:px-6">
        <div className="flex w-full max-w-[720px] min-h-[4.2rem] items-center gap-4 rounded-full border border-neutral-800 bg-[#111111]/90 px-4 py-2 shadow-lg backdrop-blur-xl">
          <Link href="/" className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-[#1a1a1a] hover:bg-[#ff5500] transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div className="relative flex items-center justify-center w-[2.85rem] h-[2.85rem] shrink-0 rounded-full border border-neutral-700 bg-[#1a1a1a]">
            <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full border-2 border-[#111] bg-green-500" />
            <Bot className="w-5 h-5 text-[#ffaa00]" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight m-0 leading-tight">Tanya Hilwan</h1>
            <p className="text-neutral-400 text-[0.68rem] tracking-wider uppercase m-0 mt-0.5 font-mono font-semibold">AI Assistant Portofolio</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="relative z-0 flex-1 flex flex-col overflow-y-auto px-4 py-6 scroll-smooth custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center w-full max-w-[620px] mx-auto border border-neutral-800 rounded-[1.8rem] bg-[#111111] p-8 md:p-12 text-center shadow-xl animate-fadeUp">
            <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full border border-neutral-700 bg-[#1a1a1a] shadow-lg text-[#ffaa00]">
              <Bot className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold m-0 mb-4 tracking-tight">Silakan Bertanya!</h2>
            <p className="max-w-[500px] text-neutral-400 text-sm md:text-base mb-8 leading-relaxed">
              Tanyakan tentang pengalaman saya, skill, edukasi, atau 
              bagikan pertanyaan/tips seputar web design dan UI/UX portofolio.
            </p>
            <div className="flex flex-wrap justify-center gap-3 w-full">
              <button 
                onClick={() => handleInputChange({ target: { value: 'Ceritakan tentang pengalaman kerja kamu!' } } as any)}
                className="flex items-center gap-2 border border-neutral-700 rounded-full bg-[#1a1a1a] px-4 py-2.5 text-xs font-mono font-semibold hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors"
              >
                <Briefcase className="w-4 h-4" /> Pengalaman Kerja
              </button>
              <button 
                onClick={() => handleInputChange({ target: { value: 'Kamu pakai tools desain apa saja?' } } as any)}
                className="flex items-center gap-2 border border-neutral-700 rounded-full bg-[#1a1a1a] px-4 py-2.5 text-xs font-mono font-semibold hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors"
              >
                <PenTool className="w-4 h-4" /> Tools Desain
              </button>
              <button 
                onClick={() => handleInputChange({ target: { value: 'Apa tips desain UI yang bagus?' } } as any)}
                className="flex items-center gap-2 border border-neutral-700 rounded-full bg-[#1a1a1a] px-4 py-2.5 text-xs font-mono font-semibold hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors"
              >
                <Zap className="w-4 h-4" /> Tips UI/UX
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-[820px] mx-auto gap-4 pb-4">
            {messages.map((m: any) => (
              <div
                key={m.id}
                className={`flex items-end gap-3 animate-fadeUp ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role !== 'user' && (
                  <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#1a1a1a] border border-neutral-800 mb-1">
                    <Bot className="w-4 h-4 text-[#ffaa00]" />
                  </div>
                )}
                <div 
                  className={`max-w-[85%] md:max-w-[78%] border rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#ff5500] text-white rounded-br-sm border-transparent' 
                      : 'bg-[#1a1a1a] text-neutral-200 border-neutral-800 rounded-bl-sm'
                  }`}
                >
                  <p className="m-0 whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-3 animate-fadeUp justify-start">
                <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#1a1a1a] border border-neutral-800 mb-1">
                  <Bot className="w-4 h-4 text-[#ffaa00]" />
                </div>
                <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl rounded-bl-sm px-4 py-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            {error && (
              <div className="flex items-end gap-3 animate-fadeUp justify-start">
                 <div className="bg-red-900/20 border border-red-900/50 text-red-400 rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-[78%]">
                  ⚠️ Permintaan gagal. Pastikan <b>OPENAI_API_KEY</b> kamu sudah diatur di file .env lokal.
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="relative z-10 shrink-0 border-t border-neutral-900 bg-[#050505]/95 backdrop-blur-xl pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] px-4 md:px-6">
        <form onSubmit={handleSubmit} className="relative flex w-full max-w-[820px] mx-auto">
          <input
            ref={inputRef}
            className="w-full border border-neutral-800 rounded-full bg-[#111111] text-white px-5 py-4 pr-16 text-sm focus:outline-none focus:border-[#ff5500] transition-colors placeholder:text-neutral-500"
            value={input}
            placeholder="Ketik pertanyaan untuk Hilwan di sini..."
            onChange={handleInputChange}
            onFocus={keepInputAboveKeyboard}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="absolute top-1.5 right-1.5 bottom-1.5 flex items-center justify-center w-11 rounded-full bg-[#ff5500] text-white hover:bg-[#e64d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? (
               <svg className="animate-spin" viewBox="0 0 24 24" width="20" height="20">
                 <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"></circle>
                 <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
            ) : (
              <Send className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </form>
        <p className="w-full max-w-[820px] mx-auto mt-3 text-neutral-600 font-mono text-[0.65rem] text-center">
          Hilwan AI mungkin menampilkan informasi kurang akurat, harap verifikasi info penting.
        </p>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 999px; }
      `}} />
    </div>
  );
}
