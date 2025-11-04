import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://code-in-the-city.fr'),
  title: {
    default: 'Code in the City - Séries, Dev Web & Musique',
    template: '%s | Code in the City'
  },
  description: 'Blog personnel mêlant séries TV cultes, développement web et musiques de bandes originales. Découvrez mes coups de cœur entre Dawson, Grey\'s Anatomy et lignes de code.',
  keywords: ['séries TV', 'développement web', 'musiques de séries', 'blog', 'Dawson\'s Creek', 'Grey\'s Anatomy', 'One Tree Hill', 'code', 'front-end'],
  authors: [{ name: 'Gaëlle' }],
  creator: 'Gaëlle',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://code-in-the-city.fr',
    title: 'Code in the City - Séries, Dev Web & Musique',
    description: 'Blog personnel mêlant séries TV cultes, développement web et musiques de bandes originales.',
    siteName: 'Code in the City',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code in the City - Séries, Dev Web & Musique',
    description: 'Blog personnel mêlant séries TV cultes, développement web et musiques de bandes originales.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="text-black font-serif">
        <Script
          id="service-worker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('SW registered'))
                    .catch(err => console.log('SW registration failed:', err));
                });
              }
            `,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
