import { useState } from 'react';
import { Heart, Sparkles, Maximize2, Camera } from 'lucide-react';
import Lightbox from './Lightbox';

interface Section5ScrapbookGalleryProps {
  onNext?: () => void;
}

export default function Section5ScrapbookGallery({ onNext }: Section5ScrapbookGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    caption: string;
    subnote?: string;
  } | null>(null);

  const photos = {
    one: {
      src: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_11.13.46_PM__1__37f95e78.jpeg",
      title: "Photograph One · The Memory",
      caption: "If I could keep one thing from these years, it would be the moments that have you in them. ♡",
      subnote: "my favourite memories ♡",
    },
    two: {
      src: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_11.13.46_PM_75760e71.jpeg",
      title: "Photograph Two · My Person",
      caption: "Some people become memories. You became a part of my life.",
      subnote: "us, always ♡",
    },
    three: {
      src: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_11.13.45_PM_d5a0b6fa.jpeg",
      title: "Photograph Three · Always A Part of My Story",
      caption: "No matter how much life changes, this part of my story will always mean something to me.",
      subnote: "four years and counting...",
    },
  };

  return (
    <section 
      id="section-photographs"
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0f1424] via-[#161226] to-[#1a1329] text-slate-100 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-300/80 mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-300" />
            <span>Memories In Time</span>
            <span aria-hidden="true">·</span>
            <span>Unfiltered & Real</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl md:text-6xl text-amber-50 font-normal tracking-wide leading-tight">
            THREE PHOTOGRAPHS, THREE LITTLE PIECES OF FOREVER
          </h2>
          <p className="mt-3 font-handwriting text-2xl text-rose-300">
            Click any picture to open in full view ♡
          </p>
        </div>

        {/* Gallery Compositions */}
        <div className="space-y-20 sm:space-y-24">
          {/* LAYOUT 1 & 2: Grid of Polaroid & Scrapbook Layer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 items-center">
            
            {/* PHOTOGRAPH ONE — THE MEMORY (Vintage Polaroid frame, tilted) */}
            <div className="flex flex-col items-center">
              <div
                onClick={() => setSelectedPhoto(photos.one)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPhoto(photos.one)}
                className="group relative cursor-pointer polaroid-frame p-4 sm:p-5 pb-8 rounded-sm max-w-sm w-full transform -rotate-2 hover:rotate-0 transition-transform duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="View Photograph One in lightbox"
              >
                {/* Vintage Tape Accent at top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-100/70 border border-amber-300/30 rotate-1 shadow-sm backdrop-blur-xs -z-0"></div>

                <div className="relative aspect-[3/4] overflow-hidden rounded-xs bg-slate-900 shadow-inner">
                  <img
                    src={photos.one.src}
                    alt="Two best friends sharing a warm affectionate moment in nature"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-2 text-center">
                  <p className="font-handwriting text-2xl text-slate-800 leading-snug">
                    “{photos.one.caption}”
                  </p>
                  <p className="font-handwriting text-lg text-rose-600 mt-1">
                    {photos.one.subnote}
                  </p>
                </div>
              </div>
              <span className="font-script text-2xl text-amber-200/60 mt-4">
                a little piece of forever
              </span>
            </div>

            {/* PHOTOGRAPH TWO — MY PERSON (Layered scrapbook with ribbon & decorative hearts) */}
            <div className="flex flex-col items-center">
              <div
                onClick={() => setSelectedPhoto(photos.two)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPhoto(photos.two)}
                className="group relative cursor-pointer max-w-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                aria-label="View Photograph Two in lightbox"
              >
                {/* Decorative Layered Background Cards */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-900/40 to-amber-900/30 rounded-3xl transform rotate-3 blur-xs"></div>
                <div className="absolute -inset-1 bg-[#1e172e] rounded-2xl transform -rotate-2 border border-rose-300/20 shadow-xl"></div>

                {/* Satin Ribbon Accent at top corner */}
                <div className="absolute -top-3 -right-3 z-20 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-handwriting rounded-md shadow-md transform rotate-12">
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                  <span>My Person</span>
                </div>

                {/* Foreground Photo Card */}
                <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-[#19152b] border border-rose-200/25 shadow-2xl overflow-hidden group-hover:border-rose-400/50 transition-colors">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-950">
                    <img
                      src={photos.two.src}
                      alt="Emotional black and white embrace between best friends"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-center px-2">
                    <p className="font-serif-title italic text-xl sm:text-2xl text-rose-100 leading-snug">
                      “{photos.two.caption}”
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-rose-300 font-handwriting text-xl">
                      <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                      <span>{photos.two.subnote}</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-script text-2xl text-rose-300/60 mt-4">
                through every situation
              </span>
            </div>
          </div>

          {/* PHOTOGRAPH THREE — ALWAYS A PART OF MY STORY (Large Cinematic Image) */}
          <div className="flex flex-col items-center">
            <div
              onClick={() => setSelectedPhoto(photos.three)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPhoto(photos.three)}
              className="group relative cursor-pointer max-w-3xl w-full rounded-3xl overflow-hidden border border-amber-300/25 shadow-2xl bg-[#121626] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="View Photograph Three in lightbox"
            >
              {/* Soft Golden Lens Glow */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={photos.three.src}
                  alt="Playful happy moment together by the scenic river"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Film grain and delicate vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/50 backdrop-blur-md text-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#181d32] to-[#121628] text-center border-t border-white/10">
                <p className="font-serif-title italic text-2xl sm:text-3xl text-amber-100 font-light leading-relaxed">
                  “{photos.three.caption}”
                </p>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <span className="font-handwriting text-xl text-amber-300">
                    {photos.three.subnote}
                  </span>
                  <span className="text-amber-400/40">·</span>
                  <span className="font-handwriting text-xl text-rose-300">
                    us, always ♡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          imageSrc={selectedPhoto?.src || ''}
          title={selectedPhoto?.title || ''}
          caption={selectedPhoto?.caption || ''}
          subnote={selectedPhoto?.subnote}
        />

        {onNext && (
          <div className="mt-16 text-center">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 text-sm text-amber-200/80 hover:text-amber-100 transition-colors cursor-pointer group"
            >
              <span>Read the letter from my heart</span>
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
