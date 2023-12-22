import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';
import { siteConfig } from './site.config';
import Script from 'next/script';
import { Widget } from './components/whatsapp-widget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: `Hey 👋 je suis Dereje Getu Tadesse, développeur frontend dans le Doubs. J'aime transformer des idées en réalités visuelles sur le web.`,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.site_url,
    title: siteConfig.title,
    images: [
      {
        url: `${siteConfig.site_url}/favicon.ico`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    description: `Hey 👋 je suis Dereje Getu Tadesse, développeur frontend dans le Doubs. J'aime transformer des idées en réalités visuelles sur le web.`,
  },
  twitter: {
    title: siteConfig.title,
    site: siteConfig.site_url,
    images: [
      {
        url: `${siteConfig.site_url}/favicon.ico`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    description: `Hey 👋 je suis Dereje Getu Tadesse Un développeur frontend. J'aime transformer des idées en réalités visuelles sur le web.`,
  },
  creator: siteConfig.title,
  robots: 'index, follow',
};

export const viewport: Viewport = {
  themeColor: '#1c1917',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <head>
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='d76e4153-562f-4dcc-b239-d346dfe85bb8'
        />
      </head>
      <body
        className={clsx(
          inter.className,
          'h-full bg-zinc-900 selection:bg-[#1db954]/90'
        )}
      >
        {children}
        <Widget />
      </body>
    </html>
  );
}
