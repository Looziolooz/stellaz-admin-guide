import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
}

export default function VideoPlayerPlaceholder({ title, videoUrl }: VideoPlayerProps) {
  
  console.log('🎬 VideoPlayer riceve:', { title, videoUrl }); // DEBUG
  
  if (!videoUrl || videoUrl === '#' || videoUrl === '') {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Play className="ml-1 w-8 h-8 text-pink-500" fill="currentColor" />
        </div>
        <p className="mt-4 font-medium text-gray-500">Video Tutorial: {title}</p>
        <p className="text-xs text-gray-400 mt-2">Video coming soon</p>
      </div>
    );
  }

  // TEST: Video semplice senza div wrapper
  if (videoUrl.endsWith('.mp4')) {
    return (
      <video 
        controls 
        width="100%"
        style={{ maxWidth: '100%', display: 'block' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Il tuo browser non supporta i video HTML5.
      </video>
    );
  }

  return (
    <div className="w-full aspect-video bg-black">
      <iframe
        src={videoUrl}
        title={`Video tutorial: ${title}`}
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
