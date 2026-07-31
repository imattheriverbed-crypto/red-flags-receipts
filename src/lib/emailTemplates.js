// Beautiful brand-styled HTML email templates for Red Flags & Receipts.
// NOTE: SendEmail only delivers to registered app users — see platform docs.

const BRAND_MARK = 'RED FLAGS &amp; RECEIPTS';
const ACCENT = '#E2211C';
const INK = '#0A0A0A';
const PARCHMENT = '#F5F2EC';

function shell({ preheader, hero, body, footerQuote }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${BRAND_MARK}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;600&display=swap');
</style>
</head>
<body style="margin:0;padding:0;background:${INK};font-family:Georgia,'Times New Roman',serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PARCHMENT};">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${INK};">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${INK};border:1px solid ${ACCENT};">
        <!-- Top warning tape -->
        <tr><td style="height:6px;background:repeating-linear-gradient(45deg,${INK},${INK} 16px,${ACCENT} 16px,${ACCENT} 32px);font-size:0;line-height:0;">&nbsp;</td></tr>
        <!-- Brand mark -->
        <tr><td align="center" style="padding:40px 32px 8px;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.35em;color:${ACCENT};text-transform:uppercase;">&#9670;&nbsp;&nbsp;FIRST DROP&nbsp;&nbsp;&#9670;</div>
          <div style="font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:26px;color:${PARCHMENT};letter-spacing:0.02em;margin-top:14px;line-height:1.05;">${BRAND_MARK}</div>
        </tr>
        <!-- Hero -->
        <tr><td align="center" style="padding:24px 32px 20px;">
          ${hero}
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:0 32px 24px;color:${PARCHMENT};font-family:'Playfair Display',Georgia,serif;font-size:16px;line-height:1.7;">
          ${body}
        </td></tr>
        <!-- Footer quote -->
        <tr><td align="center" style="padding:28px 32px;border-top:1px solid rgba(245,242,236,0.12);">
          <div style="font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:15px;color:rgba(245,242,236,0.75);line-height:1.5;">
            &ldquo;Look at this scarf made of all the red flags you gave me.&rdquo;
          </div>
        </td></tr>
        <!-- CTA strip -->
        <tr><td align="center" style="padding:0 32px 36px;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.3em;color:rgba(245,242,236,0.4);text-transform:uppercase;">
            WARNING: WEARING THIS SCARF MAY CAUSE UNRESOLVED EXES TO TEXT YOU.
          </div>
        </td></tr>
        <!-- Bottom warning tape -->
        <tr><td style="height:6px;background:repeating-linear-gradient(45deg,${INK},${INK} 16px,${ACCENT} 16px,${ACCENT} 32px);font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function cta(label) {
  return `<a href="https://redflagsandreceipts.com" target="_blank" style="display:inline-block;padding:14px 32px;background:${ACCENT};color:${PARCHMENT};font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;">${label}</a>`;
}

function ticket({ spot }) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:24px 0;border:1px dashed rgba(245,242,236,0.25);">
    <tr>
      <td style="padding:18px 20px;vertical-align:top;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:0.3em;color:rgba(245,242,236,0.5);text-transform:uppercase;">Pre-Launch Spot</div>
        <div style="font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:22px;color:${PARCHMENT};line-height:1;">#${spot}</div>
      </td>
      <td style="padding:18px 20px;vertical-align:top;text-align:right;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:0.3em;color:rgba(245,242,236,0.5);text-transform:uppercase;">Status</div>
        <div style="font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:22px;color:${ACCENT};line-height:1;">CONFIRMED</div>
      </td>
    </tr>
  </table>`;
}

function discountPanel({ firstDrop, code }) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:8px 0 28px;background:${ACCENT};">
    <tr><td style="padding:22px 24px;text-align:center;">
      <div style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.35em;color:${PARCHMENT};text-transform:uppercase;">Exclusive Pre-Launch Discount</div>
      <div style="font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:30px;color:${PARCHMENT};line-height:1.05;margin:8px 0 4px;">UNLOCKED FOR <span style="font-style:italic;">${firstDrop}</span></div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.2em;color:${PARCHMENT};text-transform:uppercase;margin-top:6px;">USE CODE&nbsp;&nbsp;<strong style="border:1px solid ${PARCHMENT};padding:4px 10px;">${code}</strong></div>
    </td></tr>
  </table>`;
}

function stepList() {
  const steps = [
    ['01', 'Priority Access', 'On launch day you shop the Signature Collection before it goes public.'],
    ['02', 'Your Discount Applies', 'Your pre-launch code drops the price at checkout — automatically.'],
    ['03', 'The Drop Ships', 'Produced and fulfilled by Printify, sent straight to your door.'],
  ];
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:8px 0 4px;">
    ${steps.map(([n, t, d]) => `<tr>
      <td style="padding:12px 0;border-top:1px solid rgba(245,242,236,0.1);vertical-align:top;width:48px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:14px;color:${ACCENT};font-weight:600;">${n}</div>
      </td>
      <td style="padding:12px 0 0 12px;border-top:1px solid rgba(245,242,236,0.1);">
        <div style="font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:15px;color:${PARCHMENT};margin-bottom:2px;">${t}</div>
        <div style="font-family:'Playfair Display',Georgia,serif;font-size:14px;color:rgba(245,242,236,0.7);line-height:1.5;">${d}</div>
      </td>
    </tr>`).join('')}
  </table>`;
}

// Welcome email sent to the person who just signed up
export function buildWelcomeEmail({ firstDrop = 'Tuesday, August 4th at 9:00 PM', spot = '001', code = 'EARLYFLAG15' } = {}) {
  return shell({
    preheader: "You're on the list. Pre-launch spot confirmed — your August 4th discount is unlocked.",
    hero: `<div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.3em;color:${ACCENT};text-transform:uppercase;margin-bottom:14px;">&#10003;&nbsp;&nbsp;PRE-LAUNCH SPOT CONFIRMED</div>
      <div style="font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:38px;color:${PARCHMENT};line-height:1.0;">YOU&rsquo;RE ON<br>THE <span style="color:${ACCENT};font-style:italic;">LIST</span>.</div>`,
    body: `<p style="margin:0 0 4px;">Your pre-launch spot is officially reserved. The first drop of the Red Flag scarf collection opens <strong style="color:${PARCHMENT};">${firstDrop}</strong> &mdash; and as an early subscriber, you get priority access and an exclusive discount before anyone else.</p>
      ${ticket({ spot })}
      ${discountPanel({ firstDrop, code })}
      ${stepList()}
      <p style="margin:24px 0 0;">No spam, no games, no leaving you on read. Just the drop, then we ghost.</p>
      <div style="margin:24px 0 4px;">${cta('Shop The Drop')}&nbsp;&nbsp;${cta('View Collection')}</div>
      <p style="margin:24px 0 0;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(245,242,236,0.5);">Priority access &middot; Exclusive launch discount &middot; ${firstDrop}</p>`,
  });
}

// Owner notification email (sent to the brand inbox)
export function buildOwnerNotificationEmail({ title, lines = [] }) {
  const rows = lines.map((l) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(245,242,236,0.08);font-family:'JetBrains Mono',monospace;font-size:12px;color:${PARCHMENT};vertical-align:top;"><strong style="color:${ACCENT};text-transform:uppercase;letter-spacing:0.1em;">${l.label}</strong></td><td style="padding:10px 0 10px 18px;border-bottom:1px solid rgba(245,242,236,0.08);font-family:'Playfair Display',Georgia,serif;font-size:15px;color:${PARCHMENT};line-height:1.5;">${l.value}</td></tr>`
  ).join('');
  return shell({
    preheader: title,
    hero: `<div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.3em;color:${ACCENT};text-transform:uppercase;margin-bottom:14px;">NEW SIGNAL</div>
      <div style="font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:30px;color:${PARCHMENT};line-height:1.05;">${title}</div>`,
    body: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">${rows}</table>`,
  });
}