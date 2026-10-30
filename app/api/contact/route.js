// Contact form endpoint.
// Set ONE of these in Vercel -> Settings -> Environment Variables:
//   RESEND_API_KEY + CONTACT_TO  (optional CONTACT_FROM)   -> email via Resend
//   CONTACT_FORWARD_URL (+ WEB3FORMS_KEY)                  -> Formspree / Web3Forms
// If nothing is set, it returns 501 and the website falls back to copying the message and opening LinkedIn.
export const runtime = 'nodejs'

const bad = (status, reason) => Response.json({ ok: false, reason }, { status })

export async function POST(req) {
  let b
  try { b = await req.json() } catch { return bad(400, 'bad_json') }
  const name = String(b?.name || '').trim().slice(0, 80)
  const email = String(b?.email || '').trim().slice(0, 120)
  const message = String(b?.message || '').trim().slice(0, 1500)
  if (b?.website) return Response.json({ ok: true }) // honeypot
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 10) return bad(422, 'invalid')

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })
    return r.ok ? Response.json({ ok: true }) : bad(502, 'resend_failed')
  }
  if (process.env.CONTACT_FORWARD_URL) {
    const r = await fetch(process.env.CONTACT_FORWARD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, message, ...(process.env.WEB3FORMS_KEY ? { access_key: process.env.WEB3FORMS_KEY } : {}) }),
    })
    return r.ok ? Response.json({ ok: true }) : bad(502, 'forward_failed')
  }
  return bad(501, 'not_configured')
}
