import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePine, GraduationCap, Star, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';

const ICONS = { tree: TreePine, cap: GraduationCap, star: Star };

export default function PersonaCard({ persona, onClose }) {
  const navigate = useNavigate();
  const Icon = ICONS[persona.icon];

  const go = () => {
    onClose();
    navigate(`/chat/${persona.slug}`);
  };

  return (
    <div className="flex flex-col rounded-2xl bg-[#FDF7F0] shadow-lg ring-1 ring-black/5 w-full max-w-[330px] overflow-hidden">
      <button
        type="button"
        onClick={go}
        className="relative w-full block group"
        style={{ aspectRatio: '4 / 5' }}
        aria-label={`Talk with ${persona.name}`}>
        
        <Image
          src={persona.img}
          fittingType="fit"
          className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
          alt={persona.name} />
        
        <span
          className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-white text-[10px] font-semibold uppercase tracking-[0.14em]"
          style={{ backgroundColor: persona.badgeBg }}>
          
          <Icon className="w-3 h-3" />
          {persona.name}
        </span>
      </button>

      <div className="flex flex-col items-center gap-2.5 px-6 pb-6 pt-7 text-center hidden">
        <p className="font-display text-base" style={{ color: persona.taglineColor }}>
          {persona.tagline}
        </p>
        <p className="font-body text-[13px] leading-relaxed text-[#222]/85">
          {persona.desc}
        </p>

        <button
          type="button"
          onClick={go}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-white text-[12px] font-semibold tracking-[0.14em] uppercase transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: persona.buttonBg }}>
          
          <MessageCircle className="w-4 h-4" />
          Talk with {persona.name}
        </button>
      </div>
    </div>);

}