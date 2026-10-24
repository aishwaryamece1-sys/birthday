import { useState } from 'react';
import StarryCanvas from './components/StarryCanvas';
import AudioPlayer from './components/AudioPlayer';
import Lightbox from './components/Lightbox';

import Section1HeroEnvelope from './components/Section1HeroEnvelope';
import Section2BirthdayReveal from './components/Section2BirthdayReveal';
import Section3WishICouldBeThere from './components/Section3WishICouldBeThere';
import Section4Timeline from './components/Section4Timeline';
import Section5ScrapbookGallery from './components/Section5ScrapbookGallery';
import Section6HeartLetter from './components/Section6HeartLetter';
import Section7DaysYouForget from './components/Section7DaysYouForget';
import Section8WishesSunrise from './components/Section8WishesSunrise';
import Section9HiddenSurprise from './components/Section9HiddenSurprise';
import Section10FinalSurprise from './components/Section10FinalSurprise';

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [activeModalPhoto, setActiveModalPhoto] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true);
    // Smoothly scroll down after envelope animation
    setTimeout(() => {
      scrollTo('section-birthday-reveal');
    }, 900);
  };

  const handleReplay = () => {
    setIsEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#080c18] text-slate-100 selection:bg-rose-500/30 selection:text-rose-200">
      {/* Background Starry Canvas & Floating Particles */}
      <StarryCanvas />

      {/* Floating Audio Player (OFF by default) */}
      <AudioPlayer />

      {/* SECTION 1 — A Little World Made Just For You */}
      <Section1HeroEnvelope
        isOpened={isEnvelopeOpened}
        onOpen={handleOpenEnvelope}
        onProceed={() => scrollTo('section-birthday-reveal')}
      />

      {/* Progressive Revelation: Unlocks after envelope is opened or upon scroll */}
      <div 
        className={`transition-opacity duration-1000 ${
          isEnvelopeOpened ? 'opacity-100 pointer-events-auto' : 'opacity-25 pointer-events-none'
        }`}
      >
        {/* SECTION 2 — The Birthday Reveal */}
        <Section2BirthdayReveal
          onNext={() => scrollTo('section-wish-i-could-be-there')}
        />

        {/* SECTION 3 — I Wish I Could Be There */}
        <Section3WishICouldBeThere
          onNext={() => scrollTo('section-timeline')}
        />

        {/* SECTION 4 — Four Years. So Many Things We Never Gave Up On */}
        <Section4Timeline
          onNext={() => scrollTo('section-photographs')}
        />

        {/* SECTION 5 — Three Photographs, Three Little Pieces of Forever */}
        <Section5ScrapbookGallery
          onNext={() => scrollTo('section-heart-letter')}
        />

        {/* SECTION 6 — A Letter From My Heart */}
        <Section6HeartLetter
          onNext={() => scrollTo('section-days-you-forget')}
        />

        {/* SECTION 7 — On The Days You Forget How Much You Matter */}
        <Section7DaysYouForget
          onNext={() => scrollTo('section-wishes-sunrise')}
        />

        {/* SECTION 8 — If I Could Wish One Thing For You */}
        <Section8WishesSunrise
          onNext={() => scrollTo('section-hidden-surprise')}
        />

        {/* SECTION 9 — A Little Surprise Inside The Surprise */}
        <Section9HiddenSurprise
          onNext={() => scrollTo('section-final-surprise')}
        />

        {/* SECTION 10 — The Final Surprise */}
        <Section10FinalSurprise
          onReplay={handleReplay}
          onPhotoClick={(src, title, caption) =>
            setActiveModalPhoto({ src, title, caption })
          }
        />
      </div>

      {/* Global Lightbox for Section 10 collage clicks */}
      <Lightbox
        isOpen={!!activeModalPhoto}
        onClose={() => setActiveModalPhoto(null)}
        imageSrc={activeModalPhoto?.src || ''}
        title={activeModalPhoto?.title || ''}
        caption={activeModalPhoto?.caption || ''}
      />
    </div>
  );
}
