import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ambientMusic } from '../utils/audio';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show a subtle hint after 4 seconds to let them know music is optional
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const active = ambientMusic.toggle();
    setIsPlaying(active);
    setShowHint(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {showHint && !isPlaying && (
        <div 
          onClick={handleToggle}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-200/90 text-xs shadow-lg backdrop-blur-md cursor-pointer animate-fade-in hover:border-amber-400 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Play soft ambient music?</span>
        </div>
      )}

      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Mute ambient melody' : 'Play soft ambient melody'}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-amber-500/20 border border-amber-400/50 text-amber-200 shadow-amber-500/20'
            : 'bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
        }`}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-0.5 bg-amber-300 rounded-full animate-bounce [animation-delay:0ms] h-3"></span>
              <span className="w-0.5 bg-amber-300 rounded-full animate-bounce [animation-delay:150ms] h-2"></span>
              <span className="w-0.5 bg-amber-300 rounded-full animate-bounce [animation-delay:300ms] h-3.5"></span>
              <span className="w-0.5 bg-amber-300 rounded-full animate-bounce [animation-delay:200ms] h-2.5"></span>
            </div>
            <Volume2 className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-medium tracking-wide">Melody: On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-medium tracking-wide">Sound: Off</span>
          </>
        )}
      </button>
    </div>
  );
}
