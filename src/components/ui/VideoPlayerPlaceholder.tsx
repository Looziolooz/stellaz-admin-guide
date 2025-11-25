import React from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayerPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-gray-200 transition-colors">
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
        <Play className="ml-1 w-8 h-8 text-pink-500" fill="currentColor" />
      </div>
      <p className="mt-4 font-medium text-gray-500 z-10">Video Tutorial: {title}</p>
    </div>
  );
}