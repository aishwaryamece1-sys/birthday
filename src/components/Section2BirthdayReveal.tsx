import { useEffect } from 'react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section2BirthdayRevealProps {
  onNext: () => void;
}

export default function Section2BirthdayReveal({ onNext }: Section2BirthdayRevealProps) {
  useEffect(() => {
    // Gentle soft celebration sparkle when revealed
    const timer = setTimeout(() => {
      confetti({
        particleCount: 28,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#f472b6', '#fbbf24', '#fbcfe8', '#fef3c7'],
        shapes: ['circle'],
        scalar: 0.8,
        disableForReducedMotion: true,
      });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="section-birthday-reveal"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-[#121630] via-[#1a1429] to-[#21162b] overflow-hidden"
    >
      {/* Delicate floating background elements */}
      <div className="absolute top-1/4 left-10 sm:left-24 text-rose-300/20 animate-float">
        <Heart className="w-16 h-16 fill-rose-300/10" />
      </div>
      <div className="absolute bottom-1/3 right-10 sm:right-24 text-amber-300/20 animate-float-delayed">
        <Sparkles className="w-14 h-14" />
      </div>

      {/* Ambient pink and gold lighting blurs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Heart Seal Accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-200 text-xs sm:text-sm mb-6 shadow-sm">
          <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
          <span>October 24 · Celebrating You</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Big Birthday Header */}
        <h2 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-amber-100 to-rose-100 text-glow-pink mb-6 leading-tight">
          HAPPY BIRTHDAY TO MY PERSON ♡
        </h2>

        {/* Message Card */}
        <div className="dark-paper-texture p-6 sm:p-10 rounded-3xl border border-rose-300/20 shadow-2xl backdrop-blur-md max-w-xl mx-auto space-y-5">
          <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Today is your day, and I wish I could be right there beside you to celebrate every little moment.
          </p>

          <p className="text-sm sm:text-base text-slate-300/90 font-light leading-relaxed">
            Even though I can't be there physically, please know that someone is thinking of you with the biggest smile, the warmest wishes, and a heart full of gratitude for having you in their life.
          </p>

          <div className="pt-3 border-t border-rose-400/20">
            <p className="font-serif-title italic text-xl sm:text-2xl text-amber-200 font-normal">
              “If I could be anywhere today, I would choose to be right there with you.”
            </p>
          </div>
        </div>

        {/* Animated Action Button */}
        <div className="mt-10">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-medium text-slate-900 bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 hover:from-rose-100 hover:to-amber-100 shadow-xl glow-pink hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>There's something I really want you to know...</span>
            <ArrowDown className="w-4 h-4 text-slate-800 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
