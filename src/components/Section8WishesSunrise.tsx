import { useState } from 'react';
import { Sparkles, Sun, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section8WishesSunriseProps {
  onNext?: () => void;
}

export default function Section8WishesSunrise({ onNext }: Section8WishesSunriseProps) {
  const [magicCount, setMagicCount] = useState(0);

  const handleSendMagic = () => {
    setMagicCount((prev) => prev + 1);

    // Multi-angle golden & pastel sunrise sparkles
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 70,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#fbbf24', '#f59e0b', '#f472b6', '#fed7aa', '#fde047'],
      shapes: ['star', 'circle'],
      scalar: 1,
      disableForReducedMotion: true,
    });

    confetti({
      particleCount: 50,
      angle: 120,
      spread: 70,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#fbbf24', '#f43f5e', '#ec4899', '#fef08a'],
      shapes: ['star', 'circle'],
      scalar: 1,
      disableForReducedMotion: true,
    });
  };

  return (
    <section 
      id="section-wishes-sunrise"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-gradient-to-b from-[#25163C] via-[#3d193b] to-[#4c1d38] text-slate-100 overflow-hidden"
    >
      {/* Sunrise Warm Horizon Lighting */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-amber-500/20 via-rose-500/15 to-transparent pointer-events-none"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-amber-500/15 via-rose-500/20 to-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-300 mb-3">
            <Sun className="w-4 h-4 text-amber-300" />
            <span>Sunrise of a New Chapter</span>
            <span aria-hidden="true">·</span>
            <span>Unfolding Tomorrow</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl md:text-6xl text-amber-100 font-light tracking-wide leading-tight">
            IF I COULD WISH ONE THING FOR YOU...
          </h2>
        </div>

        {/* The Wishes Message Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-amber-300/25 shadow-2xl backdrop-blur-md space-y-6 text-slate-200 text-base sm:text-lg font-light leading-relaxed">
          <p className="font-serif-title italic text-xl sm:text-2xl text-amber-200 font-normal">
            “I wouldn't wish you a life without difficulties.”
          </p>

          <p>
            I would wish you the strength to face them, the courage to leave behind whatever hurts you, the wisdom to choose what brings you peace, and the happiness of finally seeing your efforts turn into something beautiful.
          </p>

          <p>
            I would wish you a life where you don't have to pretend to be okay, where you feel safe enough to be yourself, and where good things happen to you without you having to fight so hard for every single one.
          </p>

          <p className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-amber-100">
            I hope this new year of your life brings you reasons to smile that you haven't even imagined yet.
          </p>

          <p>
            I hope you find happiness in the smallest things, peace in your own company, and people who make you feel loved without having to ask for it.
          </p>

          <p>
            I hope your dreams become real, your worries become lighter, and the future surprises you in the most beautiful ways.
          </p>

          <p>
            I hope that one day, when you look back at the difficult years, you realise how far you have come and how much beauty was still waiting for you.
          </p>

          <div className="pt-4 border-t border-amber-400/20 text-center">
            <p className="font-handwriting text-3xl sm:text-4xl text-rose-300 font-semibold">
              You deserve beautiful things, my girl. So many of them. ♡
            </p>
          </div>
        </div>

        {/* Send Birthday Magic Button */}
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={handleSendMagic}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium text-slate-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-rose-200 hover:from-amber-200 hover:to-rose-100 shadow-2xl glow-gold hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-900 animate-spin [animation-duration:8s]" />
            <span className="tracking-wide">Send a little birthday magic ✨</span>
          </button>

          {magicCount > 0 && (
            <p className="mt-3 text-xs text-amber-200 font-handwriting text-lg animate-fade-in flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
              <span>Magic sent {magicCount} {magicCount === 1 ? 'time' : 'times'}! Stars and wishes are floating to you.</span>
            </p>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="mt-10 inline-flex items-center gap-2 text-sm text-amber-200/80 hover:text-amber-100 transition-colors cursor-pointer group"
            >
              <span>Discover the secret little surprise</span>
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
