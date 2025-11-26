import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
}

export default function VideoPlayerPlaceholder({ title, videoUrl }: VideoPlayerProps) {
  
  // Funzione helper per convertire automaticamente i link di YouTube
  const getEmbedUrl = (url: string) => {
    if (!url) return '';

    // Caso 1: È già un file locale MP4
    if (url.endsWith('.mp4')) return url;

    // Caso 2: Rileva link YouTube (sia youtu.be che youtube.com/watch)
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);

    // Se è un link YouTube, restituisci il formato embed corretto
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    // Caso 3: Restituisci l'URL originale (es. per Vimeo, Loom o link già corretti)
    return url;
  };

  // Calcola l'URL finale da usare
  const finalUrl = videoUrl ? getEmbedUrl(videoUrl) : '';

  // 1. Nessun video
  if (!finalUrl || finalUrl === '#') {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-black/5" />
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
          <Play className="ml-1 w-8 h-8 text-pink-500" fill="currentColor" />
        </div>
        <p className="mt-4 font-medium text-gray-500 z-10">Video Tutorial: {title}</p>
        <p className="text-xs text-gray-400 mt-2 z-10">Video coming soon</p>
      </div>
    );
  }

  // 2. Video Locale MP4
  if (finalUrl.endsWith('.mp4')) {
    return (
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <video 
          controls 
          className="w-full h-full"
          playsInline
          key={finalUrl}
        >
          <source src={finalUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // 3. Embed (YouTube, Vimeo, ecc.)
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <iframe
        src={finalUrl}
        title={`Video tutorial: ${title}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}