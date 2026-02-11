import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AuthProvider } from '@/lib/auth-context'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://internadda.com'),
  title: {
    default: 'InternAdda - India\'s #1 Tech Internship Ecosystem | Learn • Intern • Earn 2025',
    template: '%s | InternAdda - India\'s Largest Internship Platform'
  },
  description: '🚀 India\'s most trusted internship ecosystem. 10,000+ students placed. MSME certified (UDYAM-MH-08-XXXXXXXX). Premium stipends up to ₹18,000/month. Direct interviews with 500+ verified tech companies. No middlemen, guaranteed growth.',
  keywords: [
    // Core keywords
    'internship',
    'internships in India',
    'paid internships',
    'tech internships',
    'remote internships',
    
    // Domain specific
    'web development internship',
    'data science internship',
    'python internship',
    'AI ML internship',
    'cloud computing internship',
    'cybersecurity internship',
    'blockchain internship',
    'UI UX design internship',
    'full stack internship',
    'DevOps internship',
    
    // Benefits
    'stipend based internship',
    'work from home internship',
    'online internship',
    'summer internship 2025',
    'winter internship 2025',
    'industrial training',
    'skill development program',
    'placement assistance',
    
    // Platform specific
    'InternAdda',
    'internadda.com',
    'best internship platform India',
    'verified internships',
    'direct interview opportunities',
    'internship with certificate',
    'blockchain certificate internship',
    
    // Student focused
    'first internship for students',
    'internship for college students',
    'fresher internship',
    'entry level tech jobs',
    'student career platform',
    'learn and earn program',
    'professional certification',
    
    // Long tail
    'how to get internship in India',
    'paid remote internships for students',
    'tech internship with high stipend',
    'best platform for internships in India',
    'internship with job guarantee',
  ],
  authors: [
    { name: 'InternAdda Team', url: 'https://internadda.com/about' },
    { name: 'MSME Registered', url: 'https://msme.gov.in' }
  ],
  creator: 'InternAdda',
  publisher: 'InternAdda Technologies',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://internadda.com',
    siteName: 'InternAdda',
    title: 'InternAdda - India\'s Adda for Tech Internships | 10,000+ Students Placed',
    description: '🎓 Launch your tech career with India\'s premium internship ecosystem. Verified companies, ₹8,500 avg. stipend, 24hr response time. Direct mentorship from industry experts.',
    images: [
      {
        url: 'https://internadda.com/og-image-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'InternAdda - India\'s Largest Tech Internship Ecosystem',
        type: 'image/jpeg',
      },
      {
        url: 'https://internadda.com/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'InternAdda - Learn • Intern • Earn',
        type: 'image/jpeg',
      },
    ],
    videos: [
      {
        url: 'https://internadda.com/promo-video.mp4',
        width: 1920,
        height: 1080,
        type: 'video/mp4',
      }
    ],
    countryName: 'India',
    emails: ['careers@internadda.com'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@internadda',
    creator: '@internadda',
    title: 'InternAdda - Learn • Intern • Earn 🚀',
    description: 'India\'s #1 tech internship platform. Join 10,000+ students in verified, high-stipend internships.',
    images: {
      url: 'https://internadda.com/twitter-image.jpg',
      alt: 'InternAdda Internship Platform',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/shortcut-icon.png',
    apple: [
      { url: '/apple-icon-57.png', sizes: '57x57' },
      { url: '/apple-icon-72.png', sizes: '72x72' },
      { url: '/apple-icon-114.png', sizes: '114x114' },
      { url: '/apple-icon-180.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0052CC',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'InternAdda',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/apple-splash-2048-2732.jpg',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  category: 'Education Technology',
  classification: 'Internship Platform',
  applicationName: 'InternAdda',
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://internadda.com',
    languages: {
      'en-IN': 'https://internadda.com',
      'hi-IN': 'https://internadda.com/hi',
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
    other: {
      'facebook-domain-verification': ['your-facebook-domain-verification-code'],
    },
  },
  other: {
    'msapplication-TileColor': '#0052CC',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://analytics.vercel.com" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/hero-illustration.svg"
          as="image"
          type="image/svg+xml"
        />
        
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'InternAdda',
              url: 'https://internadda.com',
              logo: 'https://internadda.com/logo.png',
              description: 'India\'s largest tech internship ecosystem connecting students with verified companies.',
              sameAs: [
                'https://twitter.com/internadda',
                'https://linkedin.com/company/internadda',
                'https://instagram.com/internadda',
                'https://youtube.com/@internadda',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'support@internadda.com',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '2500',
                bestRating: '5',
                worstRating: '1',
              },
              offers: {
                '@type': 'Offer',
                category: 'Internship Program',
                availability: 'https://schema.org/OnlineOnly',
              },
            }),
          }}
        />
        
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://internadda.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Internships',
                  item: 'https://internadda.com/internships',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Tech Internships',
                  item: 'https://internadda.com/internships/tech',
                },
              ],
            }),
          }}
        />
        
        {/* Web App Capabilities */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* PWA Tags */}
        <link rel="apple-touch-startup-image" href="/splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash-1242x2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-1536x2048.png" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)" />
      </head>
      <body 
        className={`
          ${poppins.variable} 
          font-sans 
          antialiased 
          bg-background 
          text-foreground 
          selection:bg-primary/20 
          selection:text-foreground
          min-h-screen
          flex
          flex-col
          overflow-x-hidden
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="internadda-theme"
        >
          <AuthProvider>
            {/* Skip to main content link for accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
            >
              Skip to main content
            </a>
            
            {/* Main content */}
            <div id="main-content" className="flex-1">
              {children}
            </div>
            
            {/* Toast notifications */}
            <Toaster 
              position="top-right"
              richColors
              closeButton
              theme="system"
            />
            
            {/* Back to top button - will be hydrated client-side */}
            <div id="back-to-top-root" />
          </AuthProvider>
        </ThemeProvider>
        
        {/* Vercel Analytics & Speed Insights */}
        <Analytics 
          mode="auto"
          debug={false}
        />
        <SpeedInsights 
          debug={false}
        />
        
        {/* Lazy load non-critical scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Register Service Worker for PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
              
              // Back to top button functionality
              document.addEventListener('DOMContentLoaded', function() {
                const backToTopRoot = document.getElementById('back-to-top-root');
                if (backToTopRoot) {
                  const button = document.createElement('button');
                  button.innerHTML = '↑';
                  button.className = 'fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-50 hidden';
                  button.setAttribute('aria-label', 'Back to top');
                  
                  window.addEventListener('scroll', function() {
                    if (window.scrollY > 400) {
                      button.classList.remove('hidden');
                    } else {
                      button.classList.add('hidden');
                    }
                  });
                  
                  button.addEventListener('click', function() {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  });
                  
                  backToTopRoot.appendChild(button);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
