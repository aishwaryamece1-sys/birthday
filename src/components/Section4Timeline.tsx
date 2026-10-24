import { useState } from 'react';
import { Heart, Sparkles, Compass, Shield, Users, Flame } from 'lucide-react';

interface Section4TimelineProps {
  onNext?: () => void;
}

export default function Section4Timeline({ onNext }: Section4TimelineProps) {
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const chapters = [
    {
      num: "Chapter One",
      title: "WHEN YOU BECAME MY PERSON",
      text: "Somewhere along the way, you became much more than just a friend. You became someone whose presence started meaning more to me than I could have imagined.",
      icon: Compass,
      tag: "Year 1 · The Beginning",
      accent: "from-amber-400 to-rose-400",
    },
    {
      num: "Chapter Two",
      title: "THE DAYS LIFE WASN'T EASY",
      text: "These four years were not always kind to us. There were difficult moments, unexpected challenges, and days when life felt heavier than it should have.",
      icon: Shield,
      tag: "Year 2 · Weathering Storms",
      accent: "from-rose-400 to-purple-400",
    },
    {
      num: "Chapter Three",
      title: "STILL HERE. STILL US.",
      text: "Through everything, we kept showing up for one another. We tried to understand, support, listen, and be there, even when we had our own struggles to deal with.",
      icon: Users,
      tag: "Year 3 · Unbreakable Bond",
      accent: "from-purple-400 to-pink-400",
    },
    {
      num: "Chapter Four",
      title: "FOUR YEARS LATER, I'D STILL CHOOSE YOU.",
      text: "After everything we have been through, I am still grateful that life gave me you. If I could live these four years all over again, knowing how difficult some parts would be, I would still hope to find you somewhere along the way.",
      icon: Flame,
      tag: "Year 4 · Today & Always",
      accent: "from-pink-400 to-amber-300",
    },
  ];

  return (
    <section 
      id="section-timeline"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-[#0f1424] text-slate-100 overflow-hidden"
    >
      {/* Background starlight & soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-300/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Four Years · Four Chapters</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl text-amber-50 font-normal tracking-wide">
            FOUR YEARS. SO MANY THINGS WE NEVER GAVE UP ON.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light max-w-lg mx-auto">
            Click on each milestone to walk through our four years together.
          </p>
        </div>

        {/* Four Milestones Timeline */}
        <div className="relative mb-20">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-400 via-rose-500 to-purple-400 opacity-40"></div>

          <div className="space-y-12 sm:space-y-16">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              const isSelected = activeChapter === index;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  onClick={() => setActiveChapter(index)}
                  className={`relative flex items-start gap-6 sm:gap-0 cursor-pointer group ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Center Node / Icon */}
                  <div className="relative z-10 sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-br ${chapter.accent} text-slate-950 shadow-lg glow-gold scale-110`
                          : 'bg-slate-800 border border-slate-700 text-slate-400 group-hover:border-amber-400/50 group-hover:text-amber-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Milestone Content Card */}
                  <div
                    className={`w-full sm:w-[44%] p-6 sm:p-7 rounded-2xl transition-all duration-300 border ${
                      isSelected
                        ? 'bg-slate-800/90 border-amber-400/40 shadow-xl shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-handwriting text-lg text-amber-300">
                        {chapter.num}
                      </span>
                      <span className="text-xs text-slate-400 font-sans">
                        {chapter.tag}
                      </span>
                    </div>

                    <h3 className="font-serif-title text-xl sm:text-2xl text-slate-100 font-medium tracking-wide mb-3">
                      {chapter.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {chapter.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Longer Heartfelt Reflection Following Timeline */}
        <div className="dark-paper-texture p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
            <span className="font-handwriting text-2xl text-rose-300">
              Four years of us ♡
            </span>
          </div>

          <div className="space-y-4 text-slate-200 text-base sm:text-lg font-light leading-relaxed">
            <p>
              Four years may not sound like a lifetime to everyone, but you and I know how much can happen in four years.
            </p>
            <p>
              We've been through so much. More than I can explain in one little website. There were difficult days, things we had to deal with quietly, and moments when life felt heavier than it should have.
            </p>
            <p>
              But somehow, through all of it, we were there for each other.
            </p>
            <p className="font-serif-title italic text-xl sm:text-2xl text-amber-200 font-normal pt-2">
              “And when I look back at these four years, one thing is certain: I genuinely don't know how I would have survived them without you.”
            </p>
            <p>
              You were not just a friend who happened to be there. You became one of the reasons I could keep going.
            </p>
            <p>
              And I hope you know that, in your own difficult moments, I wanted to be that person for you too.
            </p>
            <p>
              I hope you realise how much your presence matters. Sometimes, we don't even understand how much we help someone just by being there. But you have made a difference in my life that I will always carry with me.
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-rose-300 pt-4 text-center sm:text-right">
              Thank you for being part of my story. ♡
            </p>
          </div>
        </div>

        {onNext && (
          <div className="mt-12 text-center">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 text-sm text-amber-200/80 hover:text-amber-100 transition-colors cursor-pointer group"
            >
              <span>See our three photographs</span>
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
