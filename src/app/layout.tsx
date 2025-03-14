import type { Metadata } from 'next'

import './globals.css'
import ThemeProvider from '~/components/ThemeProvider'
import Header from '~/components/layout/Header'
import ScrollToTop from '~/components/ui/ScrollToTop'
import AnimateCursor from '~/components/ui/AnimateCursor'
import Preloader from '~/components/ui/PreLoader'

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'Modern Portfolio',
  icons: {
    icon: '/candy.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='relative h-screen w-full bg-[#f2f4f7] dark:bg-[#1c1c1d]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <AnimateCursor />
          <Preloader />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
