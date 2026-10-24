import { useState } from 'react';
import { Heart, MailOpen, Mail, Sparkles } from 'lucide-react';

interface Section3WishICouldBeThereProps {
  onNext?: () => void;
}

export default function Section3WishICouldBeThere({ onNext }: Section3WishICouldBeThereProps) {
  const [isHugOpen, setIsHugOpen] = useState(false);

  const paragraphs = [
    "I wish I could physically be there with you.",
    "I wish I could celebrate your birthday beside you, see your smile, laugh with you, annoy you like I always would, and make even the smallest moments of your day special.",
    "But for some reasons, I can't be there with you today. And honestly, I miss you more than these words can explain.",
    "So, instead of being able to give you a birthday hug in person, I made you this little corner of the internet. A little piece of my heart, made just for you.",
    "I know a website can never replace being there, holding your hand, or celebrating together. But I hope that, as you scroll through these pages, you can feel even a little of the love I would have given you if I were right there beside you.",
    "I didn't want to send you just another birthday message that you read and forget. I wanted to create something you could keep, revisit, and smile at whenever you miss me, too.",
    "Because even though I cannot be physically present on your special day, my wishes for you are as real as they could ever be.",
    "I am thinking of you. I am missing you. I am wishing you the happiest birthday.",
    "And if I could make one wish today, it would be that you feel genuinely loved, deeply appreciated, and happy — because you deserve all of that and so much more.",
    "So, until I can celebrate with you in person, please accept this little world I made for you.",
    "It's not everything I wish I could give you today.",
    "But every word in it comes from my heart.",
    "Happy birthday, my girl. I wish I were there. I really do. ♡",
  ];

  return (
    <section 
      id="section-wish-i-could-be-there"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-[#faf5ee] text-slate-800 transition-colors duration-700 overflow-hidden"
    >
      {/* Decorative Pressed Flowers & Botanical Illustrations in Background */}
      <div className="absolute top-8 left-4 sm:left-12 pointer-events-none opacity-25 select-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#92400e" strokeWidth="1.2">
          <path d="M50 85 C50 60 40 40 25 35 C35 30 50 45 50 65" />
          <path d="M50 70 C50 50 65 35 78 30 C70 40 55 55 50 70" />
          <circle cx="25" cy="35" r="4" fill="#f43f5e" opacity="0.4" />
          <circle cx="78" cy="30" r="4" fill="#f59e0b" opacity="0.4" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-4 sm:right-12 pointer-events-none opacity-20 select-none">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#be123c" strokeWidth="1">
          <circle cx="50" cy="50" r="25" strokeDasharray="3 3" />
          <path d="M50 25 C45 35 45 65 50 75" />
          <path d="M25 50 C35 45 65 45 75 50" />
        </svg>
      </div>

      {/* Gentle Pink & Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/35 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Subtle Section Subtitle */}
        <div className="text-center mb-8">
          <span className="font-handwriting text-2xl text-rose-700 font-medium">
            A quiet conversation between us ♡
          </span>
          <h2 className="mt-2 font-serif-title text-2xl sm:text-4xl text-slate-900 font-light tracking-wide leading-tight">
            IF THERE'S ONE THING I WISH I COULD CHANGE ABOUT TODAY...
          </h2>
        </div>

        {/* The Letter on Handmade Paper */}
        <div className="paper-texture p-7 sm:p-12 rounded-3xl shadow-xl border border-amber-900/10 space-y-6 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
          {paragraphs.map((para, idx) => (
            <p 
              key={idx}
              className={`transition-all duration-700 ${
                idx === paragraphs.length - 1 
                  ? 'font-serif-title italic text-xl sm:text-2xl text-rose-950 font-normal pt-2' 
                  : idx === 0 
                  ? 'font-serif-title text-2xl sm:text-3xl text-slate-900 font-light' 
                  : 'text-slate-700/90'
              }`}
            >
              {para}
            </p>
          ))}

          {/* Signature Line */}
          <div className="pt-6 border-t border-amber-900/10 flex flex-col items-center sm:items-end text-center sm:text-right">
            <p className="font-handwriting text-3xl sm:text-4xl text-rose-800">
              Not beside you today, but always cheering for you. ♡
            </p>
          </div>
        </div>

        {/* Interactive Pocket Hug Envelope */}
        <div className="mt-12 flex flex-col items-center">
          <div 
            onClick={() => setIsHugOpen(!isHugOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsHugOpen(!isHugOpen)}
            className="group cursor-pointer p-6 rounded-2xl bg-white border border-rose-200 shadow-md hover:shadow-xl transition-all duration-300 max-w-md w-full text-center flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-3 group-hover:scale-110 transition-transform">
              {isHugOpen ? (
                <MailOpen className="w-6 h-6 text-rose-600" />
              ) : (
                <Mail className="w-6 h-6 text-rose-500 animate-pulse" />
              )}
            </div>

            <span className="font-handwriting text-xl text-slate-800">
              {isHugOpen ? "Tap to close envelope" : "Open your pocket birthday hug ♡"}
            </span>

            {isHugOpen ? (
              <div className="mt-4 p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-rose-950 animate-in fade-in duration-300">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 mx-auto mb-2" />
                <p className="font-handwriting text-2xl text-rose-900 leading-snug">
                  “If I could, I would be right there giving you the biggest birthday hug. Until then, imagine this page as one.”
                </p>
              </div>
            ) : (
              <p className="text-xs text-slate-500 mt-1">
                A little note folded inside just for you
              </p>
            )}
          </div>

          {onNext && (
            <button
              onClick={onNext}
              className="mt-10 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
            >
              <span>Continue through our four-year journey</span>
              <Sparkles className="w-4 h-4 text-amber-600 group-hover:rotate-45 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
