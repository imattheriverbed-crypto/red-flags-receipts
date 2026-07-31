import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePine, GraduationCap, Star, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';

const ICONS = { tree: TreePine, cap: GraduationCap, star: Star };

export default function PersonaCard({ persona, onClose }) {
  const navigate = useNavigate();
  const Icon = ICONS[persona.icon];

  return (
    <div className="flex flex-col rounded-2xl bg-[#FDF7F0] shadow-lg ring-1 ring-black/5 w-full max-w-[330px] overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: '4 / 5' }}>
        <Image
          src={persona.img}
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.18}
          className="w-full h-full"
          alt={persona.name}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FDF7F0] to-transparent" />
      </div>

      <div className="relative flex flex-col items-center gap-2.5 px-6 pb-6 pt-9 text-center">
        <span
          className="absolute left-1/2 -top-7 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full ring-4 ring-[#FDF7F0] shadow-md"
          style={{ backgroundColor: persona.badgeBg }}
        >
          <Icon className="w-6 h-6 text-white" />
        </span>

        <h3 className="font-display text-2xl leading-none" style={{ color: persona.nameColor }}>
          {persona.name}
        </h3>
        <p
          className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: persona.taglineColor }}
        >
          {persona.tagline}
        </p>
        <span className="block w-12 h-px" style={{ backgroundColor: persona.taglineColor, opacity: 0.4 }} />

        <p className="font-body text-[13px] leading-relaxed text-[#222]/85">
          {persona.desc}
        </p>

        <button
          onClick={() => {
            onClose();
            navigate(`/contact?advisor=${encodeURIComponent(persona.name)}`);
          }}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-white text-[12px] font-semibold tracking-[0.14em] uppercase transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: persona.buttonBg }}
        >
          <MessageCircle className="w-4 h-4" />
          Talk with {persona.name}
        </button>
      </div>
    </div>
  );
}