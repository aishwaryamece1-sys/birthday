import { useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface Section9HiddenSurpriseProps {
  onNext?: () => void;
}

export default function Section9HiddenSurprise({ onNext }: Section9HiddenSurpriseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
      id="section-hidden-surprise"
      className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#4c1d38] via-[#2d1232] to-[#1a0f2e] text-slate-100 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-lg mx-auto text-center flex flex-col items-center">
        {/* The Secret Trigger Pill / Heart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-pink-400/40 text-pink-200 cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
          aria-expanded={isOpen}
          aria-label="Reveal secret message"
        >
          <Heart className={`w-4 h-4 text-rose-400 fill-rose-400 transition-transform ${isOpen ? 'scale-125' : 'group-hover:scale-115 animate-pulse'}`} />
          <span className="font-handwriting text-xl tracking-wide">
            {isOpen ? "Psst... here is my secret note" : "Psst... there's one last little thing."}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Small Folded Note */}
        {isOpen && (
          <div className="mt-8 w-full paper-texture p-7 sm:p-9 rounded-2xl border border-amber-900/15 shadow-2xl text-slate-800 text-left animate-in fade-in zoom-in-95 duration-400 relative">
            {/* Small fold dog-ear in top corner */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-amber-200/60 rounded-bl-xl border-b border-l border-amber-300/40"></div>

            <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-slate-800">
              <p className="font-handwriting text-2xl text-rose-900 font-semibold">
                P.S.
              </p>
              <p>
                If I had to do these four years all over again, knowing everything we would go through, I would still want you in my corner.
              </p>
              <p className="font-serif-title italic text-xl text-slate-900">
                “And if there is one thing I hope you never doubt, it is this: your presence has mattered to me more than you probably know.”
              </p>
              <p className="font-handwriting text-2xl sm:text-3xl text-rose-800 pt-2 text-right">
                Thank you for being my person. ♡
              </p>
            </div>

            {/* Three Small Animated Stars That Gradually Glow Below Note */}
            <div className="mt-6 pt-4 border-t border-amber-900/10 flex items-center justify-center gap-4 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 animate-twinkle [animation-delay:0ms]" />
              <Star className="w-5 h-5 fill-amber-400 animate-twinkle [animation-delay:300ms]" />
              <Star className="w-4 h-4 fill-amber-400 animate-twinkle [animation-delay:600ms]" />
            </div>
          </div>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="mt-12 text-xs text-pink-200/70 hover:text-pink-100 transition-colors uppercase tracking-widest cursor-pointer"
          >
            To The Final Surprise ↓
          </button>
        )}
      </div>
    </section>
  );
}
