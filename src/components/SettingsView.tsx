import React, { useState } from 'react';
import { Search, Mic, MicOff, X, Play } from 'react-icons/all';

export default function SettingsView({ songs, onPlaySong }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("आपका ब्राउज़र वॉइस सर्च सपोर्ट नहीं करता है।");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN' || 'en-US';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      setSearchQuery(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Search & Settings</h2>
        <p className="text-xs text-gray-400">गाने खोजें या ऐप सेटिंग्स बदलें।</p>
      </div>

      {/* Search Input Box with Mic */}
      <div className="relative flex items-center bg-white/10 border border-white/20 rounded-xl p-2">
        <Search className="text-gray-400 ml-2 mr-3 w-5 h-5" />
        <input
          type="text"
          placeholder={isListening ? "Listening... Speak now" : "Search songs, artists..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent text-sm w-full focus:outline-none text-white placeholder-gray-400"
        />
        {searchQuery && <X className="w-4 h-4 text-gray-400 mr-2 cursor-pointer" onClick={() => setSearchQuery('')} />}
        <button onClick={startVoiceSearch} className={`p-2 rounded-lg ${isListening ? 'bg-red-600 animate-pulse' : 'bg-purple-600'}`}>
          {isListening ? <MicOff className="w-4 h-4"/> : <Mic className="w-4 h-4"/>}
        </button>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {filteredSongs.map(song => (
          <div key={song.id} onClick={() => onPlaySong(song)} className="flex items-center justify-between p-2.5 bg-white/5 rounded-lg cursor-pointer">
            <div>
              <p className="font-medium text-sm">{song.title}</p>
              <p className="text-xs text-gray-400">{song.artist}</p>
            </div>
            <Play className="text-gray-400 w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
