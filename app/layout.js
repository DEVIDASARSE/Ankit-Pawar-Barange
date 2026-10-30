import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/dm-sans/300.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/jetbrains-mono/400.css'
import './globals.css'
import site from '../site.config'

export const metadata = {
  metadataBase: new URL(site.url),
  title: 'Ankit Pawar — Portfolio 2026',
  description: 'Ankit Pawar, Nagpur. Machine operator and trained assistant electrician: sheet forming, printing and electrical work.',
  openGraph: {
    title: 'Ankit Pawar — Machine operator & trained electrician',
    description: 'Sheet forming, printing and electrical work. Based in Nagpur.',
    type: 'website',
  },
  twitter: { card: 'summary' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050505',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ankit Pawar',
  alternateName: 'Ankit Pawar Barange',
  jobTitle: 'Machine Operator; Assistant Electrician (trained)',
  address: { '@type': 'PostalAddress', addressLocality: 'Nagpur', addressCountry: 'IN' },
  sameAs: [site.linkedin],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
