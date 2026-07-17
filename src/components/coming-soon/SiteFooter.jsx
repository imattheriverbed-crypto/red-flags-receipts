import React from 'react';
import { Instagram, Music2 } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-ink border-t border-primary/20 grain-overlay relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Manifesto */}
          <div>
            <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">The Manifesto</h4>
            <p className="font-display text-lg text-parchment/80 leading-snug italic">
              "Look at this scarf made of all the red flags you gave me."
            </p>
            <p className="font-body text-xs text-parchment/40 mt-4 leading-relaxed">
              Every warning you ignored, woven into wearable art. Not a deterrent—a badge of resilience. Made with Printify. Sold little by little.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Follow the Flags</h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-parchment/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="font-mono-flag text-xs uppercase tracking-wider">Instagram</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-parchment/60 hover:text-primary transition-colors">
                <Music2 className="w-4 h-4" />
                <span className="font-mono-flag text-xs uppercase tracking-wider">TikTok</span>
              </a>
            </div>
          </div>

          {/* Drop Schedule */}
          <div>
            <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">The Drop Schedule</h4>
            <ul className="space-y-2">
              <li className="flex justify-between gap-4">
                <span className="font-mono-flag text-xs text-parchment/60">Walking Red Flag</span>
                <span className="font-mono-flag text-xs text-primary">Aug 01</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-mono-flag text-xs text-parchment/60">Emotionally Unavailable</span>
                <span className="font-mono-flag text-xs text-primary">Aug 08</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-mono-flag text-xs text-parchment/60">Always the Victim</span>
                <span className="font-mono-flag text-xs text-primary">Aug 15</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-mono-flag text-xs text-parchment/60">Red's World</span>
                <span className="font-mono-flag text-xs text-primary">Aug 22</span>
              </li>
            </ul>
          </div>

          {/* Printify transparency */}
          <div>
            <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Production</h4>
            <p className="font-body text-xs text-parchment/50 leading-relaxed">
              All scarves are produced and fulfilled through <span className="text-parchment/70 font-medium">Printify</span>—print-on-demand, ethically manufactured, shipped directly to you.
            </p>
            <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/30 mt-4">
              © 2026 Red Flag Scarf Co.<br />All warnings reserved.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-parchment/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono-flag text-[9px] uppercase tracking-[0.3em] text-parchment/30">
            Warning: wearing this scarf may cause unresolved exes to text you.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/30 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/30 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/30 hover:text-primary transition-colors">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}