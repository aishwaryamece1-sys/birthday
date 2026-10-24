import { useEffect, useState } from 'react';
import { Heart, Sparkles, RotateCcw, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section10FinalSurpriseProps {
  onReplay: () => void;
  onPhotoClick: (src: string, title: string, caption: string) => void;
}

export default function Section10FinalSurprise({
  onReplay,
  onPhotoClick,
}: Section10FinalSurpriseProps) {
  const [revealedIndex, setRevealedIndex] = useState(0);

  const sentences = [
    "Four years ago, I didn't know how important you would become.",
    "Today, I cannot imagine these four years without you.",
    "We have been through so much, and somehow, we are still here.",
    "I may not be beside you today, but I will always be cheering for you.",
    "And no matter what the next chapters bring, I will always be grateful that our paths crossed.",
  ];

  const photos = [
    {
      src: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_11.13.46_PM__1__37f95e78.jpeg",
      title: "The moments that have you in them",
      caption: "If I could keep one thing from these years, it would be the moments that have you in them. ♡",
    },
    {
      src: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_11.13.46_PM_75760e71.jpeg",
      title: "My person, always",
      caption: "Some people become memories. You became a part of my life.",
    },
    {
      src: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_11.13.45_PM_d5a0b6fa.jpeg",
      title: "Always a part of my story",
      caption: "No matter how much life changes, this part of my story will always mean something to me.",
    },
  ];

  useEffect(() => {
    // Step-by-step reveal of the lines
    const timer = setInterval(() => {
      setRevealedIndex((prev) => {
        if (prev < sentences.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 700);

    // Soft celebration sparkle
    const celebrationTimer = setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#f472b6', '#fbcfe8', '#fed7aa'],
        shapes: ['circle', 'star'],
        scalar: 0.85,
        disableForReducedMotion: true,
      });
    }, 4200);

    return () => {
      clearInterval(timer);
      clearTimeout(celebrationTimer);
    };
  }, []);

  return (
    <section 
      id="section-final-surprise"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-gradient-to-b from-[#1a0f2e] via-[#0f142b] to-[#1e1a38] text-slate-100 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Golden Sunrise Glow Shimmer at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[450px] bg-gradient-to-t from-amber-500/25 via-rose-500/15 to-transparent pointer-events-none"></div>

      {/* Glowing Moon */}
      <div className="absolute top-10 right-10 sm:right-24 pointer-events-none opacity-80">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-100 to-amber-200 glow-moon relative">
          <div className="absolute -top-1 -right-2 sm:-right-3 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#1a0f2e]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-300/80 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>The Final Hug</span>
          <span aria-hidden="true">·</span>
          <span>Four Years and Beyond</span>
        </div>

        {/* Gradual Sentence Reveal */}
        <div className="space-y-4 mb-12 max-w-2xl mx-auto">
          {sentences.map((line, idx) => (
            <p
              key={idx}
              className={`font-serif-title text-xl sm:text-2xl md:text-3xl text-slate-200 font-light leading-relaxed transition-all duration-700 ${
                idx < revealedIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Main Birthday Glowing Message */}
        <div className="my-8 py-6 border-y border-amber-300/20 w-full max-w-3xl">
          <h2 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 text-glow-gold leading-tight">
            HAPPY BIRTHDAY, MY PERSON. ♡
          </h2>

          <p className="mt-6 text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Distance, circumstances, and difficult days may change how we celebrate, but they will never change how much I wish the world for you.
          </p>

          <div className="mt-8 space-y-2 font-serif-title text-lg sm:text-2xl text-amber-100/90 font-light">
            <p>Here's to your happiness.</p>
            <p>Here's to softer days.</p>
            <p>Here's to every dream waiting for you.</p>
            <p className="text-amber-200 font-medium">And here's to many more chapters of us.</p>
          </div>
        </div>

        {/* Final Handwritten Signature */}
        <div className="my-8 text-center">
          <p className="font-handwriting text-2xl sm:text-3xl text-slate-300">
            Made with all my heart, just for you.
          </p>
          <p className="font-handwriting text-3xl sm:text-4xl text-rose-300 font-semibold mt-1">
            Your best friend, always. ♡
          </p>
        </div>

        {/* Collage of the Three Photographs */}
        <div className="w-full my-12">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
            Our Story In Frames · Tap to enlarge
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto items-center">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => onPhotoClick(photo.src, photo.title, photo.caption)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPhotoClick(photo.src, photo.title, photo.caption)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-xl transition-all duration-500 hover:scale-105 hover:border-amber-400/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  index === 1 ? 'sm:-translate-y-4 shadow-2xl' : ''
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-slate-900/90 text-center">
                  <span className="font-handwriting text-base text-amber-200">
                    {index === 0 ? 'The moments' : index === 1 ? 'My person' : 'Our story'} ♡
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Replay Button */}
        <div className="mt-8 pb-12">
          <button
            onClick={onReplay}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-medium text-slate-100 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-amber-300/50 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-amber-300 group-hover:-rotate-90 transition-transform duration-500" />
            <span>Replay our little universe ↺</span>
          </button>
        </div>
      </div>
    </section>
  );
}
