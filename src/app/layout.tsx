
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zynin AI Solutions',
  description: 'AI-powered customized solutions for web and app development.',
  keywords: ['AI', 'Web Development', 'App Development', 'Zynin', 'Solutions', 'Futuristic'],
  authors: [{ name: 'Zynin AI' }],
  creator: 'Zynin AI',
  openGraph: {
    title: 'Zynin AI Solutions',
    description: 'AI-powered customized solutions for web and app development.',
    url: 'https://zynin.ai', // Replace with your actual URL
    siteName: 'Zynin AI Solutions',
    images: ['https://picsum.photos/1200/630'], // Replace with a relevant image URL
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zynin AI Solutions',
    description: 'AI-powered customized solutions for web and app development.',
    images: ['https://picsum.photos/1200/630'], // Replace with a relevant image URL
    creator: '@ZyninAI', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 'standard',
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Replace with your favicon path
    shortcut: '/shortcut-icon.png', // Replace with your shortcut icon path
    apple: '/apple-icon.png', // Replace with your Apple touch icon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar/>
        {children}
        <Footer/>
      </ThemeProvider>
      </body>
    </html>
  );
}
