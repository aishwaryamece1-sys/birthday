import { useEffect } from 'react';
import { X, Heart, Sparkles } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption: string;
  subnote?: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  subnote,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300"
    >
      <button
        onClick={onClose}
        aria-label="Close photo view"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md shadow-lg"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center bg-[#151928] border border-white/15 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="relative w-full max-h-[68vh] overflow-hidden bg-black/60 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto max-h-[68vh] object-contain select-none"
            loading="eager"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-amber-200/90 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-handwriting text-sm">{title}</span>
          </div>
        </div>

        <div className="w-full p-5 sm:p-6 bg-gradient-to-b from-[#181d30] to-[#121626] border-t border-white/10 text-center">
          <p className="font-serif-title italic text-xl sm:text-2xl text-amber-100 font-light leading-relaxed">
            "{caption}"
          </p>
          {subnote && (
            <p className="mt-2 font-handwriting text-lg text-rose-300 flex items-center justify-center gap-1.5">
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400 inline" />
              <span>{subnote}</span>
            </p>
          )}
          <p className="mt-3 text-xs text-slate-400 tracking-wider uppercase">
            Click outside or press Esc to close
          </p>
        </div>
      </div>
    </div>
  );
}
