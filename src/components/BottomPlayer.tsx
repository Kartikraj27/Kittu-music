import React, { useEffect } from 'react';
import { Music, Heart, SkipBack, SkipForward, Play } from 'react-icons/all';

export default function BottomPlayer({ currentSong, isPlaying, setIsPlaying }) {
  useEffect(() => {
    if (isPlaying && currentSong && 'mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: currentSong.artist,
        album: 'Kittu Music',
      });
    }
  }, [isPlaying, currentSong]);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-14 left-0 right-0 bg-gradient-to-r from-purple-950 to-indigo-950 p-3 mx-2 my-1 rounded-xl shadow-2xl flex items-center justify-between border border-pink-500/30 z-50 max-w-md md:mx-auto">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
          <Music className="text-white w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold truncate text-white">{currentSong.title}</p>
          <p className="text-[10px] text-gray-300 truncate">{currentSong.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Heart className="w-4 h-4 text-pink-400 cursor-pointer" />
        <SkipBack className="w-4 h-4 text-gray-300" />
        <button onClick={() => setIsPlaying(!isPlaying)} className="bg-white text-black p-2 rounded-full">
          {isPlaying ? <span className="font-bold text-xs px-0.5">||</span> : <Play className="w-3 h-3 fill-black" />}
        </button>
        <SkipForward className="w-4 h-4 text-gray-300" />
      </div>
    </div>
  );
}
