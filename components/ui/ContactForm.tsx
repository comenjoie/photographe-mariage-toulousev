'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  prenom: z.string().min(2, 'Prénom requis (2 caractères minimum)'),
  nom: z.string().min(2, 'Nom requis (2 caractères minimum)'),
  email: z.string().email('Adresse e-mail invalide'),
  telephone: z.string().regex(/^[+\d\s()-]{8,20}$/, 'Numéro de téléphone invalide').optional().or(z.literal('')),
  dateMarriage: z.string().min(1, 'Date souhaitée requise'),
  lieu: z.string().min(2, 'Lieu du mariage requis'),
  message: z.string().min(20, 'Merci de nous en dire un peu plus (20 caractères minimum)'),
  source: z.string().optional(),
})

type FormData = z.infer<typeof schema>

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Erreur serveur')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '3rem',
          textAlign: 'center',
          border: '1px solid rgba(184,150,108,0.3)',
          borderRadius: '2px',
        }}
        role="alert"
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '2.5rem',
            color: 'var(--color-gold)',
            display: 'block',
            marginBottom: '1rem',
          }}
          aria-hidden="true"
        >
          ✦
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-anthracite)',
            marginBottom: '0.75rem',
          }}
        >
          Message envoyé avec succès
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(28,28,30,0.65)' }}>
          Merci pour votre confiance. Yannick vous répondra sous 48 heures.
        </p>
      </div>
    )
  }

  const fieldStyle = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.35rem',
    },
    label: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'rgba(28,28,30,0.5)',
    },
    error: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8rem',
      color: '#c0392b',
      marginTop: '0.25rem',
    },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Name row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={fieldStyle.wrapper}>
          <label htmlFor="prenom" style={fieldStyle.label}>Prénom *</label>
          <input
            id="prenom"
            type="text"
            autoComplete="given-name"
            className="form-input"
            placeholder="Camille"
            aria-describedby={errors.prenom ? 'prenom-error' : undefined}
            aria-invalid={!!errors.prenom}
            {...register('prenom')}
          />
          {errors.prenom && <span id="prenom-error" style={fieldStyle.error} role="alert">{errors.prenom.message}</span>}
        </div>
        <div style={fieldStyle.wrapper}>
          <label htmlFor="nom" style={fieldStyle.label}>Nom *</label>
          <input
            id="nom"
            type="text"
            autoComplete="family-name"
            className="form-input"
            placeholder="Dupont"
            aria-describedby={errors.nom ? 'nom-error' : undefined}
            aria-invalid={!!errors.nom}
            {...register('nom')}
          />
          {errors.nom && <span id="nom-error" style={fieldStyle.error} role="alert">{errors.nom.message}</span>}
        </div>
      </div>

      {/* Email & Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={fieldStyle.wrapper}>
          <label htmlFor="email" style={fieldStyle.label}>E-mail *</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="form-input"
            placeholder="votre@email.fr"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && <span id="email-error" style={fieldStyle.error} role="alert">{errors.email.message}</span>}
        </div>
        <div style={fieldStyle.wrapper}>
          <label htmlFor="telephone" style={fieldStyle.label}>Téléphone</label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            className="form-input"
            placeholder="+33 6 00 00 00 00"
            aria-describedby={errors.telephone ? 'telephone-error' : undefined}
            aria-invalid={!!errors.telephone}
            {...register('telephone')}
          />
          {errors.telephone && <span id="telephone-error" style={fieldStyle.error} role="alert">{errors.telephone.message}</span>}
        </div>
      </div>

      {/* Date & Location */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={fieldStyle.wrapper}>
          <label htmlFor="dateMarriage" style={fieldStyle.label}>Date du mariage *</label>
          <input
            id="dateMarriage"
            type="date"
            className="form-input"
            aria-describedby={errors.dateMarriage ? 'date-error' : undefined}
            aria-invalid={!!errors.dateMarriage}
            {...register('dateMarriage')}
          />
          {errors.dateMarriage && <span id="date-error" style={fieldStyle.error} role="alert">{errors.dateMarriage.message}</span>}
        </div>
        <div style={fieldStyle.wrapper}>
          <label htmlFor="lieu" style={fieldStyle.label}>Lieu du mariage *</label>
          <input
            id="lieu"
            type="text"
            className="form-input"
            placeholder="Château de Villeneuve, Toulouse"
            aria-describedby={errors.lieu ? 'lieu-error' : undefined}
            aria-invalid={!!errors.lieu}
            {...register('lieu')}
          />
          {errors.lieu && <span id="lieu-error" style={fieldStyle.error} role="alert">{errors.lieu.message}</span>}
        </div>
      </div>

      {/* Message */}
      <div style={fieldStyle.wrapper}>
        <label htmlFor="message" style={fieldStyle.label}>Votre histoire *</label>
        <textarea
          id="message"
          rows={6}
          className="form-input"
          placeholder="Parlez-nous de vous, de votre mariage, de ce que vous recherchez dans un reportage photo…"
          style={{ resize: 'none' }}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && <span id="message-error" style={fieldStyle.error} role="alert">{errors.message.message}</span>}
      </div>

      {/* Source */}
      <div style={fieldStyle.wrapper}>
        <label htmlFor="source" style={fieldStyle.label}>Comment m'avez-vous trouvé ?</label>
        <select
          id="source"
          className="form-input"
          style={{ backgroundColor: 'transparent' }}
          {...register('source')}
        >
          <option value="">Sélectionnez une option</option>
          <option value="google">Google</option>
          <option value="instagram">Instagram</option>
          <option value="bouche-a-oreille">Bouche à oreille</option>
          <option value="wedding-planner">Wedding planner</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Error */}
      {status === 'error' && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: '#c0392b', padding: '0.75rem', border: '1px solid #c0392b', borderRadius: '2px' }} role="alert">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par e-mail.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
        {status !== 'loading' && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  )
}
