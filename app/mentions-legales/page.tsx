import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales · Yakastudio',
  description: 'Mentions légales du site Yakastudio — Photographe de mariage à Toulouse.',
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + clamp(4rem, 8vw, 7rem))', paddingBottom: 'clamp(5rem, 10vw, 9rem)', backgroundColor: 'var(--color-cream)' }}>
      <div className="container-content">
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: '2rem' }}>
          <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem' }}>
            <li><Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}>Accueil</Link></li>
            <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.35)' }} aria-hidden="true">/</li>
            <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.55)' }} aria-current="page">Mentions légales</li>
          </ol>
        </nav>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-anthracite)', marginBottom: '3rem' }}>
          Mentions légales
        </h1>
        <div className="prose-luxury">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Yakastudio — Yannick Blaser</strong><br />
            Entrepreneur individuel<br />
            SIRET : 000 000 000 00000<br />
            Adresse : Toulouse, Haute-Garonne (31), France<br />
            E-mail : contact@photographe-mariage-toulouse.com<br />
            Téléphone : +33 (0)6 00 00 00 00
          </p>
          <h2>Hébergeur</h2>
          <p>
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, photographies, logos, illustrations) sont la propriété exclusive de Yannick Blaser / Yakastudio et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation préalable écrite est strictement interdite.
          </p>
          <h2>Données personnelles</h2>
          <p>
            Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont jamais cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à l'adresse e-mail mentionnée ci-dessus.
          </p>
          <h2>Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.
          </p>
        </div>
      </div>
    </section>
  )
}
