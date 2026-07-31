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
    <div className="flex flex-col rounded-2xl bg-black shadow-lg ring-1 ring-white/10 w-full max-w-[330px] overflow-hidden">
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

      <div className="p-5 flex flex-col gap-3 hidden">
        <p className="font-mono-flag text-[10px] uppercase tracking-[0.25em]" style={{ color: persona.accent }}>
          {persona.tagline}
        </p>
        <p className="font-body text-xs text-parchment/65 leading-relaxed">{persona.desc}</p>
        <button
          type="button"
          onClick={go}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-white text-[10px] font-semibold uppercase tracking-[0.18em] transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: persona.buttonBg }}>
          
          <MessageCircle className="w-3.5 h-3.5" />
          Talk with {persona.name}
        </button>
      </div>
    </div>);

}