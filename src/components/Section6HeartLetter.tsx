import { Heart, Sparkles, Feather } from 'lucide-react';

interface Section6HeartLetterProps {
  onNext?: () => void;
}

export default function Section6HeartLetter({ onNext }: Section6HeartLetterProps) {
  const letterParagraphs = [
    { type: 'salutation', text: "Hey, birthday girl," },
    { type: 'body', text: "I honestly don't even know where to start because how do you put four years of friendship, countless feelings, and so many memories into words?" },
    { type: 'highlight', text: "First of all, happy birthday. ♡" },
    { type: 'body', text: "I wish I could be there today. I wish I could celebrate with you, see your smile, annoy you a little, laugh with you, and make this day feel as special as you deserve. It hurts a little that I can't celebrate with you the way I would have wanted to. But even though I can't be there physically, please never mistake my absence for a lack of love." },
    { type: 'body', text: "I miss you. And I genuinely wish the most beautiful things for you." },
    { type: 'body', text: "You have been through SO much in these four years. More than anyone should have to carry sometimes. I know life hasn't always been kind to you, and I know that behind your smiles, there have been moments when things were difficult. I wish I could take away every bit of pain you have ever felt. I wish life would be softer with you, because someone with a heart like yours deserves that softness." },
    { type: 'highlight', text: "And yet, after everything, you were still there." },
    { type: 'body', text: "You were there for me, and I tried to be there for you. We have seen each other through different versions of ourselves, through good days and terrible ones, through moments when we felt strong and moments when we probably had no idea how we were going to get through things." },
    { type: 'body', text: "And somehow, we did." },
    { type: 'callout', text: "I need you to know something: I truly believe I survived these four years because I had you. Having you in my life made things easier in ways I may never fully be able to explain. Sometimes, just knowing that there was someone who understood me, someone I could turn to, someone who had been through things with me, made all the difference." },
    { type: 'body', text: "There is no better friend for me than you. Not because you have always been perfect, or because life between us has to be perfect, but because what we have means something real to me." },
    { type: 'body', text: "I hope I have made you feel even a little of the love, comfort, and support you have given me." },
    { type: 'body', text: "And today, on your birthday, I want to wish you something more meaningful than just happiness for one day." },
    { type: 'wish', text: "I wish you peaceful mornings. I wish you nights when your heart feels light. I wish you people who choose you without making you question your worth. I wish you opportunities that excite you, dreams that come true, laughter that makes your stomach hurt, and moments that remind you how beautiful life can be." },
    { type: 'wish', text: "I wish that the things you have cried about become things you can finally breathe freely about. I wish that the weight you have carried becomes lighter. I wish that you learn to see yourself with the same kindness you so often deserve from others." },
    { type: 'body', text: "And whenever life gets difficult again, I hope you remember that you do not have to be strong every second. You deserve to be cared for, too." },
    { type: 'body', text: "I may not have a perfect gift for you today. I may not be beside you to celebrate. But if there is one thing I hope this little website gives you, it is the feeling of being loved. Of being remembered. Of knowing that your presence in someone's life has made a difference." },
    { type: 'highlight', text: "Because you have made a difference in mine. A very big one." },
    { type: 'body', text: "Thank you for being part of these four years. Thank you for staying through the difficult parts. Thank you for being you." },
    { type: 'callout', text: "If life gave me another chance to live through these four years, knowing everything we would go through, I would still hope to find you somewhere along the way." },
    { type: 'highlight', text: "Happy birthday, my favourite human." },
    { type: 'body', text: "May this new chapter be gentler, happier, brighter, and kinder to you. May you finally receive some of the beautiful things you have always deserved." },
    { type: 'body', text: "I love you, and I am always wishing the best for you." },
    { type: 'body', text: "Today, tomorrow, and in all the chapters we haven't lived yet." },
  ];

  return (
    <section 
      id="section-heart-letter"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-[#fbf7f0] text-slate-800 overflow-hidden"
    >
      {/* Decorative botanical & golden candle glow */}
      <div className="absolute top-10 right-8 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 left-8 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-800/80 mb-3">
            <Feather className="w-4 h-4 text-amber-700" />
            <span>Written In The Quiet Hours</span>
            <span aria-hidden="true">·</span>
            <span>From My Heart</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl text-slate-900 font-light tracking-wide leading-tight">
            THERE ARE SOME THINGS I NEVER WANT YOU TO FORGET.
          </h2>
        </div>

        {/* Vintage Folded Letter Paper */}
        <div className="relative paper-texture p-8 sm:p-14 rounded-3xl shadow-2xl border border-amber-900/15 overflow-hidden">
          {/* Subtle watermarked wax stamp in corner */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-rose-500/10 border border-rose-300/30 flex items-center justify-center transform rotate-12 pointer-events-none">
            <Heart className="w-10 h-10 text-rose-400/40 fill-rose-400/20" />
          </div>

          <div className="space-y-6 sm:space-y-7 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
            {letterParagraphs.map((para, index) => {
              if (para.type === 'salutation') {
                return (
                  <p key={index} className="font-handwriting text-3xl sm:text-4xl text-rose-900 mb-4 font-semibold">
                    {para.text}
                  </p>
                );
              }
              if (para.type === 'callout') {
                return (
                  <div key={index} className="py-2 px-5 my-4 bg-amber-100/60 rounded-2xl border-l-2 border-amber-400">
                    <p className="font-serif-title italic text-xl sm:text-2xl text-slate-900 font-normal leading-relaxed">
                      “{para.text}”
                    </p>
                  </div>
                );
              }
              if (para.type === 'highlight') {
                return (
                  <p key={index} className="font-serif-title text-xl sm:text-2xl text-slate-900 font-medium">
                    {para.text}
                  </p>
                );
              }
              if (para.type === 'wish') {
                return (
                  <p key={index} className="text-slate-800 bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                    {para.text}
                  </p>
                );
              }
              return (
                <p key={index} className="text-slate-700/95 font-light">
                  {para.text}
                </p>
              );
            })}

            {/* Handwritten Sign-off */}
            <div className="pt-8 border-t border-amber-900/10 flex flex-col items-end text-right">
              <p className="font-handwriting text-2xl text-slate-800">
                With all my love,
              </p>
              <p className="font-handwriting text-3xl sm:text-4xl text-rose-800 font-semibold mt-1">
                Your best friend ♡
              </p>
            </div>
          </div>
        </div>

        {onNext && (
          <div className="mt-14 text-center">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
            >
              <span>On the days you forget how much you matter</span>
              <Sparkles className="w-4 h-4 text-amber-600 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
