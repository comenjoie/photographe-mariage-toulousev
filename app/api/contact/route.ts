import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  dateMarriage: z.string().min(1),
  lieu: z.string().min(2),
  message: z.string().min(20),
  source: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const data = schema.parse(body)

    // Send email via Resend
    // TODO: configure RESEND_API_KEY in .env.local and set your verified domain
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      // In development without API key, just log and return success
      console.log('Contact form submission:', data)
      return NextResponse.json({ success: true })
    }

    const emailBody = `
Nouvelle demande de contact — Yakastudio

Prénom : ${data.prenom}
Nom : ${data.nom}
E-mail : ${data.email}
Téléphone : ${data.telephone ?? 'Non renseigné'}
Date du mariage : ${data.dateMarriage}
Lieu : ${data.lieu}
Source : ${data.source ?? 'Non renseigné'}

Message :
${data.message}
    `.trim()

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site Web Yakastudio <noreply@photographe-mariage-toulouse.com>',
        to: ['contact@photographe-mariage-toulouse.com'],
        reply_to: data.email,
        subject: `Nouvelle demande — ${data.prenom} ${data.nom} — ${data.dateMarriage}`,
        text: emailBody,
      }),
    })

    if (!response.ok) {
      throw new Error('Resend API error')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.issues }, { status: 400 })
    }
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
