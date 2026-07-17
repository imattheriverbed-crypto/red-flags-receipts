import React from 'react';

const TRAITS = [
  ['MIXED SIGNALS', 'HOT & COLD', 'I NEED SPACE.', 'MY PHONE DIED.', "READ AT 2:17 PM ✓", "YOU'RE TOO SENSITIVE."],
  ['ACCOUNTABILITY', 'COMMITMENT ISSUES', 'I CAN CHANGE.', 'TRUST ME.', 'I WAS JUST DRUNK.', "YOU'RE CRAZY."],
  ["IT'S COMPLICATED", 'WE NEED TO TALK LATER.', "LET'S JUST BE FRIENDS.", 'I NEVER SAID THAT.', 'YOU IMAGINE THINGS.', 'I DON\'T WANT A RELATIONSHIP RIGHT NOW.'],
  ["I'M JUST BUSY.", 'SILENT TREATMENT', 'I FELL ASLEEP.', 'I WANT DIFFERENT THINGS.', 'BOUNDARIES? WHAT BOUNDARIES?', "YOU'RE OVERREACTING."],
  ['I WAS TESTING YOU.', 'FINANCIAL CONTROL', 'JEALOUSY DISGUISED AS LOVE', 'EMOTIONALLY UNAVAILABLE.', 'ALWAYS THE VICTIM', 'FLAKY'],
  ['LOVE WITHDRAWAL', 'KEEPING SCORE.', 'PASSIVE AGGRESSIVE', 'YOU DESERVE BETTER. BUT NOT ME.', 'I NEED TO WORK ON MYSELF.', 'WALKING RED FLAG'],
];

export default function ScarfWeave({ className = '' }) {
  return (
    <div className={`grid grid-cols-3 sm:grid-cols-6 border-2 border-primary ${className}`}>
      {TRAITS.flat().map((trait, i) => {
        const row = Math.floor(i / 6);
        const col = i % 6;
        const isDark = (row + col) % 2 === 0;
        return (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center p-2 sm:p-3 text-center border border-primary/20 ${isDark ? 'bg-ink' : 'bg-[#7a1d1d]'}`}
          >
            <span className="font-mono-flag text-[7px] sm:text-[9px] uppercase tracking-wide leading-tight text-[#dcd0bc]">
              {trait}
            </span>
          </div>
        );
      })}
    </div>
  );
}