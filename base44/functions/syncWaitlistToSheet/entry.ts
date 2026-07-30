import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

const SHEET_ID = '11EbKzAhq1enpfYlHDkLS9pPb2Taj2U9OlJ5yvoYYpmA';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlesheets');

    const body = await req.json();
    const traits = Array.isArray(body.interested_traits)
      ? body.interested_traits.join('; ')
      : (body.interested_traits || '');

    const row = [
      new Date().toISOString(),
      body.email || '',
      body.phone || '',
      body.contact_method || 'email',
      body.source || 'waitlist',
      traits,
      body.red_flag_note || ''
    ];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Waitlist!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [row] })
      }
    );

    const data = await res.json();
    return Response.json({ ok: true, appended: data.updates?.updatedRows || 0 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}