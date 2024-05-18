import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indoor Air Quality Index',
  description: 'Indoor Air Quality Index',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <head>
        <title>Indoor AQI</title>
        <meta name='application-name' content='Indoor Air Quality' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='apple-mobile-web-app-title' content='Indoor Air Quality' />
        <meta name='description' content='Indoor Air Quality' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#000D1A' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/icons/logo.ico' sizes='any' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
