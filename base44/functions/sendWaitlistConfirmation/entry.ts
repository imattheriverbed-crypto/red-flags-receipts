import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';
import { buildWelcomeEmail, buildOwnerNotificationEmail } from '../../shared/emailTemplates.ts';

const OWNER_EMAIL = 'castingcallforqueens@gmail.com';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    let body = {};
    try { body = await req.json(); } catch { /* empty body */ }

    const {
      email = null,
      phone = null,
      contact_method = 'email',
      source = 'waitlist',
      interested_traits = [],
      red_flag_note = null,
    } = body;

    const results = { confirmation: null, owner: null };

    // 1) Automatic confirmation email to the signer (best-effort — SendEmail
    //    only delivers to registered app users).
    if (email) {
      try {
        results.confirmation = await base44.asServiceRole.integrations.Core.SendEmail({
          to: email,
          subject: "🚩 You're on the list — Red Flags & Receipts",
          body: buildWelcomeEmail(),
        });
      } catch (e) {
        results.confirmation = { error: e.message };
      }
    }

    // 2) Owner notification so the brand inbox sees every new signup.
    try {
      results.owner = await base44.asServiceRole.integrations.Core.SendEmail({
        to: OWNER_EMAIL,
        subject: '🚩 New Waitlist Signup',
        body: buildOwnerNotificationEmail({
          title: 'New Waitlist Signup',
          lines: [
            { label: 'Contact', value: email || phone || '—' },
            { label: 'Method', value: (contact_method || '—').toUpperCase() },
            { label: 'Interested Traits', value: interested_traits.length ? interested_traits.join(', ') : '—' },
            { label: 'Red Flag Note', value: red_flag_note || '—' },
            { label: 'Source', value: source || '—' },
          ],
        }),
      });
    } catch (e) {
      results.owner = { error: e.message };
    }

    return Response.json({ ok: true, results });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}