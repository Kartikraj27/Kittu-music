import React from 'react';
import { Music, Play } from 'react-icons/all';

const genres = ['🔥 Popular', '🎸 Rock', '🎤 Pop', '🎷 Jazz', '🕺 Party'];

export default function HomeView({ songs, onPlaySong }) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 mb-3">Browse Categories</h2>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {genres.map((g, i) => (
            <span key={i} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-purple-600 whitespace-nowrap transition">{g}</span>
          ))}
        </div>
      </div>

      {/* Recent Playlists */}
      <div>
        <h2 className="text-lg font-bold mb-3 text-pink-400">Recent Playlists</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-purple-800 to-slate-900 p-3 rounded-xl cursor-pointer" onClick={() => onPlaySong(songs[0])}>
            <div className="w-full h-24 bg-purple-900/50 rounded-lg mb-2 flex items-center justify-center"><Music className="w-8 h-8 text-purple-300"/></div>
            <p className="font-semibold text-sm truncate">Liked Songs</p>
          </div>
          <div className="bg-gradient-to-br from-pink-800 to-slate-900 p-3 rounded-xl cursor-pointer" onClick={() => onPlaySong(songs[1])}>
            <div className="w-full h-24 bg-pink-900/50 rounded-lg mb-2 flex items-center justify-center"><Music className="w-8 h-8 text-pink-300"/></div>
            <p className="font-semibold text-sm truncate">Recent Hits</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-lg font-bold mb-3">Recommended For You</h2>
        <div className="space-y-2">
          {songs.slice(0, 3).map((song) => (
            <div key={song.id} onClick={() => onPlaySong(song)} className="flex items-center justify-between p-2.5 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center font-bold text-xs">K</div>
                <div>
                  <p className="font-medium text-sm text-gray-200">{song.title}</p>
                  <p className="text-xs text-gray-400">{song.artist} • <span className="text-purple-400">{song.genre}</span></p>
                </div>
              </div>
              <Play className="text-gray-400 w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
