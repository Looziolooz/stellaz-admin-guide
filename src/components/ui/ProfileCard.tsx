"use client";

import React, { useState } from 'react';
import { Mail, Check, Copy, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

// Palette locale armonizzata per evitare il "nero" e legare i colori
const CARD_PALETTE = {
  bg: '#FFF1F2',        // Rosa Cipria molto chiaro (Rose-50)
  border: '#FECDD3',    // Rosa Pastello per il bordo (Rose-200)
  title: '#9F1239',     // Deep Rose/Burgundy per il titolo (NON Nero)
  text: '#475569',      // Slate Gray morbido per il testo (NON Nero)
  accent: '#F43F5E',    // Rosa Vivace per il bottone e cerchi (Rose-500)
  circle: '#FDA4AF',    // Rosa morbido per il cerchio decorativo
};

export default function ProfileCard() {
  const [copied, setCopied] = useState(false);
  const email = "lorenzo.dastoli@gmail.com";

  const handleContactClick = () => {
    // 1. Funzione di copia robusta
    const copyText = (text: string) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => setCopied(true))
          .catch((err) => {
             console.warn("Clipboard API failed, trying fallback...", err);
             fallbackCopy(text);
          });
      } else {
        fallbackCopy(text);
      }
    };

    const fallbackCopy = (text: string) => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) setCopied(true);
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
    };

    copyText(email);

    // 2. Apre il client di posta dopo breve ritardo
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 300);
    
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div 
      className="w-full rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 shadow-sm border relative overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{ 
        backgroundColor: CARD_PALETTE.bg,
        borderColor: CARD_PALETTE.border
      }}
    >
      {/* Decorative Background Blob (Soft Glow) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none"></div>

      {/* Left Column: Image Area */}
      <div className="shrink-0 relative mt-4 md:mt-0">
        

        {/* Contenitore Immagine */}
        <div 
          className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-lg relative z-10"
          style={{ borderColor: '#9f1239' }} // Bordo bianco per staccare dal fondo rosa
        >
          <Image 
            src="/profile.png" 
            alt="Lorenzo Dastoli" 
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 text-center md:text-left space-y-5 relative z-10">
        <div>
          <h2 
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: CARD_PALETTE.title }}
          >
            Encountering technical issues or anomalies?
          </h2>
        </div>

        <p 
          className="text-lg leading-relaxed max-w-2xl font-medium"
          style={{ color: CARD_PALETTE.text }}
        >
          Hi, I&apos;m Lorenzo Dastoli, and I&apos;m here to help you. 
          If you need troubleshooting assistance or want to implement a new custom section for your store, 
          feel free to reach me out.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
          <button 
            onClick={handleContactClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-95"
            style={{ backgroundColor: copied ? '#10B981' : '#9f1239' }} // Verde se copiato, altrimenti rosso
          >
            {copied ? <Check size={20} /> : <Mail size={20} />}
            <span>
              {copied ? "Email Copied!" : "Contact Me for Support"}
            </span>
            {!copied && <Copy size={16} className="opacity-50 group-hover:opacity-100 transition-opacity ml-1" />}
          </button>

          {/* Social Links - Colorati per matchare la palette */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Looziolooz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white border text-red-900 hover:text-gray-500 transition-all duration-200 hover:-translate-y-1 shadow-sm"
              style={{ borderColor: '#ffffff' }}
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/lorenzo-dastoli/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white border text-red-900 hover:text-gray-500 transition-all duration-200 hover:-translate-y-1 shadow-sm"
              style={{ borderColor: '#ffffff' }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}