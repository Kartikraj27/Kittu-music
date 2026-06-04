import React, { useState } from 'react';
import { Home, Library, Settings, Music } from 'react-icons/all';
import LoginView from './components/LoginView';
import HomeView from './components/HomeView';
import SettingsView from './components/SettingsView';
import BottomPlayer from './components/BottomPlayer';

const mockSongs = [
  { id: 1, title: 'Tum Hi Ho', artist: 'Arijit Singh', genre: 'Pop' },
  { id: 2, title: 'Rockstar', artist: 'Post Malone', genre: 'Rock' },
  { id: 3, title: 'Fly Me to the Moon', artist: 'Frank Sinatra', genre: 'Jazz' },
  { id: 4, title: 'Kesariya', artist: 'Arijit Singh', genre: 'Pop' },
];

export default function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  if (!isVerified) {
    return <LoginView onVerify={setIsVerified} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-28">
      {/* Platform Upper Banner */}
      <div className="p-4 flex justify-between items-center bg-slate-900/50 sticky top-0 backdrop-blur-md z-40 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Music className="text-pink-500 w-6 h-6" />
          <span className="font-bold tracking-wider text-xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Kittu Music</span>
        </div>
        <span className="text-xs bg-white/10 px-2 py-1 rounded-full uppercase text-gray-300">{activeTab}</span>
      </div>

      {/* Dynamic Screen Mounting Node */}
      <div className="p-4 max-w-md mx-auto">
        {activeTab === 'home' && <HomeView songs={mockSongs} onPlaySong={handlePlaySong} />}
        
        {activeTab === 'library' && (
          <div className="text-center py-12">
            <Library className="w-12 h-12 text-pink-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">Your Music Library</h2>
            <p className="text-xs text-gray-400">Your custom local configurations and downloads will render right here.</p>
          </div>
        )}

        {activeTab === 'settings' && <SettingsView songs={mockSongs} onPlaySong={handlePlaySong} />}
      </div>

      {/* Bottom Floating Playback Module */}
      <BottomPlayer currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Navigation Layout Control Rails */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-white/10 flex justify-around p-2.5 z-40 max-w-md mx-auto rounded-t-xl">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center text-xs ${activeTab === 'home' ? 'text-pink-500 font-bold' : 'text-gray-400'}`}>
          <Home className="w-5 h-5 mb-0.5"/>Home
        </button>
        <button onClick={() => setActiveTab('library')} className={`flex flex-col items-center text-xs ${activeTab === 'library' ? 'text-pink-500 font-bold' : 'text-gray-400'}`}>
          <Library className="w-5 h-5 mb-0.5"/>Library
        </button>
        <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center text-xs ${activeTab === 'settings' ? 'text-pink-500 font-bold' : 'text-gray-400'}`}>
          <Settings className="w-5 h-5 mb-0.5"/>Setting
        </button>
      </div>
    </div>
  );
}
