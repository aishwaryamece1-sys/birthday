import { useState } from 'react';
import { Heart, Sparkles, Moon, SunMedium } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section7DaysYouForgetProps {
  onNext?: () => void;
}

export default function Section7DaysYouForget({ onNext }: Section7DaysYouForgetProps) {
  const [showSpecialNote, setShowSpecialNote] = useState(false);

  const reminders = [
    "You are so much more than the difficult things you've been through.",
    "You deserve a love that feels safe, a friendship that feels like home, and a life that feels like yours.",
    "You don't have to be strong every second. You deserve to be taken care of, too.",
    "You have survived days you once thought you couldn't get through.",
    "You make a difference in people's lives, even when you don't realise it.",
    "And I will always be grateful that our paths crossed.",
  ];

  const handleRevealSpecialNote = () => {
    setShowSpecialNote(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#c084fc', '#f472b6', '#fbbf24', '#fbcfe8'],
      shapes: ['circle'],
      scalar: 0.75,
      disableForReducedMotion: true,
    });
  };

  return (
    <section 
      id="section-days-you-forget"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-gradient-to-b from-[#18122B] via-[#1F1435] to-[#25163C] text-slate-100 overflow-hidden"
    >
      {/* Soft Moon and Lavender Stars Glow */}
      <div className="absolute top-16 left-8 sm:left-20 pointer-events-none opacity-80">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-200 to-indigo-100 shadow-[0_0_35px_rgba(233,213,255,0.4)] relative">
          <div className="absolute -top-1 -right-2 w-14 h-14 rounded-full bg-[#18122B]"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-purple-300/80 mb-3">
            <Moon className="w-3.5 h-3.5 text-purple-300" />
            <span>Gentle Reminders</span>
            <span aria-hidden="true">·</span>
            <span>Always True</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl text-purple-100 font-normal tracking-wide leading-tight">
            ON THE DAYS YOU FORGET HOW MUCH YOU MATTER, COME BACK HERE.
          </h2>
          <p className="mt-3 font-handwriting text-2xl text-purple-300/90">
            Bookmark this in your heart ♡
          </p>
        </div>

        {/* 6 Sequential Messages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {reminders.map((reminder, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-purple-300/15 hover:border-purple-300/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-handwriting text-xl text-purple-300">
                  #{idx + 1}
                </span>
                <Sparkles className="w-4 h-4 text-amber-300/70" />
              </div>
              <p className="font-serif-title text-xl sm:text-2xl text-slate-100 font-light leading-relaxed">
                “{reminder}”
              </p>
            </div>
          ))}
        </div>

        {/* Interactive "One more thing... ♡" button */}
        <div className="mt-14 flex flex-col items-center text-center">
          {!showSpecialNote ? (
            <button
              onClick={handleRevealSpecialNote}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base font-medium text-purple-950 bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 hover:from-purple-100 hover:to-amber-100 shadow-xl glow-pink hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-purple-900 fill-purple-900 group-hover:scale-110 transition-transform" />
              <span>One more thing... ♡</span>
            </button>
          ) : (
            <div className="w-full max-w-xl p-8 rounded-3xl bg-gradient-to-br from-purple-900/60 to-pink-950/60 border border-purple-300/30 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-500">
              <p className="font-handwriting text-3xl sm:text-4xl text-amber-200 text-glow-gold leading-relaxed">
                “Please be as kind to yourself as you have been to the people you love. You deserve that, too.”
              </p>
              <div className="mt-4 flex justify-center">
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
              </div>
            </div>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="mt-12 inline-flex items-center gap-2 text-sm text-purple-200/80 hover:text-purple-100 transition-colors cursor-pointer group"
            >
              <span>See my birthday wishes for your new chapter</span>
              <SunMedium className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
