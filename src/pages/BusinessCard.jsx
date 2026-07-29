import React from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScarfWeave from '@/components/coming-soon/ScarfWeave';

export default function BusinessCard() {
  const handlePrint = () => window.print();

  return (
    <div className="dark bg-ink text-parchment min-h-screen flex flex-col items-center justify-center px-4 py-12 print:py-0 print:min-h-screen print:bg-white">
      {/* Non-print controls */}
      <div className="print:hidden flex items-center gap-4 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/50 hover:text-primary transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-primary text-parchment font-mono-flag text-xs uppercase tracking-[0.2em] px-6 py-3 hover:bg-parchment hover:text-ink transition-colors">
          
          <Printer className="w-4 h-4" /> Print Cards
        </button>
      </div>

      {/* Card sheet */}
      <div className="flex flex-col items-center gap-12 print:gap-0">
        {/* Card Front */}
        <div className="business-card relative bg-ink grain-overlay overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
          <div className="absolute top-2 left-0 right-0 h-px bg-[repeating-linear-gradient(45deg,#E2211C,#E2211C_4px,transparent_4px,transparent_8px)]" />

          <div className="card-content flex flex-col justify-between h-full pt-5 pb-4 px-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono-flag text-[7px] uppercase tracking-[0.25em] text-parchment/50">Est. August 2026</span>
              </div>
              <img src="https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f69e0d30b_red-flags-receipts.png" alt="Red Flags & Receipts" className="w-full max-w-[150px] object-contain mb-1" />
            </div>

            <p className="font-mono-flag text-[6.5px] uppercase tracking-[0.15em] text-parchment/40 leading-relaxed">
              Look at this scarf made of<br />all the red flags you gave me.
            </p>

            <div className="space-y-0.5">
              <p className="font-body text-[8px] text-parchment/70">hello@redflagscarf.com</p>
              <p className="font-body text-[8px] text-parchment/70">@redflagscarfco</p>
              <p className="font-mono-flag text-[6px] uppercase tracking-[0.15em] text-primary mt-1">
                redflagscarf.com
              </p>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div className="business-card relative bg-ink overflow-hidden">
          <div className="card-content h-full px-1">
            <ScarfWeave />
          </div>
          <div className="absolute bottom-1 right-2">
            <span className="font-mono-flag text-[5px] uppercase tracking-[0.2em] text-[#dcd0bc]/60">Made with Printify</span>
          </div>
        </div>
      </div>

      {/* Non-print hint */}
      <p className="print:hidden font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/30 mt-12 text-center max-w-xs">
        Standard 3.5" × 2" card stock · 2-sided · Set margins to "None" in print dialog
      </p>
    </div>);

}