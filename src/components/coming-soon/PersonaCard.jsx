import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePine, GraduationCap, Star, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';

const ICONS = { tree: TreePine, cap: GraduationCap, star: Star };

export default function PersonaCard({ persona, onClose }) {
  const navigate = useNavigate();
  const Icon = ICONS[persona.icon];
  const color = persona.color;

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white w-full max-w-[340px]">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        <Image src={persona.img} fittingType="fill" className="w-full h-full" alt={persona.name} />
      </div>
      <div className="flex flex-col items-start gap-3 p-6 bg-[#F9F4EE] flex-1">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-5 h-5 text-white" />
        </span>
        <h3 className="font-display text-2xl leading-none" style={{ color }}>{persona.name}</h3>
        <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color }}>
          {persona.tagline}
        </p>
        <p className="font-body text-sm leading-relaxed text-[#1A2226]/80">{persona.desc}</p>
        <button
          onClick={() => {
            onClose();
            navigate(`/contact?advisor=${encodeURIComponent(persona.name)}`);
          }}
          className="mt-1 inline-flex items-center gap-2 rounded-full px-5 py-3 text-white text-[12px] font-semibold tracking-[0.14em] uppercase transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: color }}
        >
          <MessageCircle className="w-4 h-4" />
          Talk with {persona.name}
        </button>
      </div>
    </div>
  );
}