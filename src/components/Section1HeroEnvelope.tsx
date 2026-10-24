import { useState } from 'react';
import { Heart, Sparkles, Moon, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section1HeroEnvelopeProps {
  isOpened: boolean;
  onOpen: () => void;
  onProceed: () => void;
}

export default function Section1HeroEnvelope({
  isOpened,
  onOpen,
  onProceed,
}: Section1HeroEnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpened) {
      onProceed();
      return;
    }
    setIsOpening(true);

    // Fire gentle golden particles
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#f59e0b', '#fbbf24', '#f472b6', '#fef08a'],
      shapes: ['circle'],
      scalar: 0.9,
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 1100);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#060913] via-[#0b1024] to-[#121630]">
      {/* Crescent Moon & Atmospheric Glow */}
      <div className="absolute top-12 sm:top-16 right-8 sm:right-24 pointer-events-none select-none">
        <div className="relative">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-200 to-amber-100 glow-moon opacity-85 relative">
            {/* Cutout shadow to make a delicate crescent moon */}
            <div className="absolute -top-1 -right-2 sm:-right-3 w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-[#060913]"></div>
          </div>
          <div className="absolute -top-3 -left-3 animate-twinkle">
            <Sparkles className="w-5 h-5 text-amber-200/80" />
          </div>
        </div>
      </div>

      {/* Gentle Clouds Effect */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#121630] to-transparent pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Soft Kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm tracking-widest uppercase text-amber-300/80">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>A Secret Digital World</span>
          <span aria-hidden="true">·</span>
          <span>Made With Love</span>
        </div>

        {/* Title & Whispers */}
        <h1 className="font-serif-title text-3xl sm:text-5xl md:text-6xl text-amber-50 font-normal tracking-wide leading-tight mb-4">
          Hey, my favourite human...
        </h1>

        <p className="text-slate-300 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed mb-2">
          Since I can't be there to celebrate with you today, I made you something that comes straight from my heart.
        </p>

        <p className="font-handwriting text-2xl sm:text-3xl text-rose-300/90 mb-8 sm:mb-10">
          It's a little world made just for you. ♡
        </p>

        {/* The Envelope */}
        <div 
          onClick={handleOpenEnvelope}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenEnvelope()}
          className="group relative cursor-pointer my-4 sm:my-6 transition-transform duration-500 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl"
          aria-label="Click to open the surprise envelope"
        >
          {/* Outer Envelope Sleeve */}
          <div className="relative w-72 sm:w-84 h-48 sm:h-52 rounded-xl bg-gradient-to-br from-[#f8f1e5] via-[#ede0cc] to-[#dfcbaf] shadow-2xl border border-amber-200/40 overflow-hidden flex items-center justify-center p-4">
            {/* Paper Texture lines & envelope seams */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#92400e_1px,transparent_1px)] [background-size:12px_12px]"></div>

            {/* Diagonal envelope fold creases */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#dec8a9] to-transparent clip-path-polygon opacity-60"></div>
            <div 
              className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#ecd7bc] to-[#dfcbaf] border-b border-amber-900/10 transition-all duration-700 origin-top ${
                isOpened || isOpening ? '-rotate-180 opacity-40 translate-y-[-10px]' : 'rotate-0'
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            ></div>

            {/* Unfolding Letter emerging if opened or opening */}
            <div
              className={`absolute inset-x-4 bg-white/95 rounded-lg p-4 shadow-md border border-amber-200 transition-all duration-700 flex flex-col items-center justify-center text-center ${
                isOpened || isOpening
                  ? '-translate-y-12 sm:-translate-y-16 scale-105 opacity-100 z-20'
                  : 'translate-y-2 opacity-0 z-0'
              }`}
            >
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mb-1 animate-pulse" />
              <p className="font-handwriting text-xl text-slate-800 leading-tight">
                For my best friend, on her special day.
              </p>
              <p className="text-[11px] text-slate-500 font-sans mt-1">
                Your birthday surprise awaits below ✨
              </p>
            </div>

            {/* Envelope Center Wax Heart Seal */}
            {!isOpened && !isOpening && (
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900 flex items-center justify-center shadow-lg border-2 border-rose-300/40 glow-pink group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-rose-100 fill-rose-200" />
                </div>
                <span className="font-handwriting text-sm text-amber-900/80 mt-2 font-semibold">
                  Tap seal to open ♡
                </span>
              </div>
            )}
          </div>

          {/* Ambient glow underneath */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 rounded-3xl blur-xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity"></div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={handleOpenEnvelope}
            disabled={isOpening}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium text-amber-950 bg-gradient-to-r from-amber-300 via-amber-200 to-rose-200 hover:from-amber-200 hover:to-rose-100 shadow-lg glow-gold hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-75"
          >
            <Sparkles className="w-4 h-4 text-amber-800 animate-spin [animation-duration:6s]" />
            <span className="tracking-wide">
              {isOpened ? 'Scroll down to begin ✨' : 'Open your little surprise ✨'}
            </span>
          </button>

          {isOpened && (
            <button
              onClick={onProceed}
              className="mt-6 flex flex-col items-center gap-1 text-xs text-amber-200/80 hover:text-amber-100 transition-colors animate-bounce cursor-pointer"
            >
              <span>Step inside our universe</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
