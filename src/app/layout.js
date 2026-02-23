import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundMusic from '../components/BackgroundMusic';
import MeteorShower from '@/components/MeteorShower';
import { Geist, Geist_Mono, Ubuntu_Mono, Fira_Code } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

const ubuntuMono = Ubuntu_Mono({
  variable: '--font-ubuntu-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'ReCreat0rz',
  description: 'A personal blog about cybersecurity and tech.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-content'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntuMono.variable} ${firaCode.variable}`}>
        <Header />
        <MeteorShower />
        <main style={{ minHeight: '100vh', paddingTop: '1rem', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <BackgroundMusic />
      </body>
    </html>
  )
}
