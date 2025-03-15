import type { Metadata } from 'next'

import './globals.css'
import ThemeProvider from '~/components/ThemeProvider'
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import ScrollToTop from '~/components/ui/ScrollToTop'
import Preloader from '~/components/ui/PreLoader'
// import AnimateCursor from '~/components/ui/AnimateCursor'

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
    <html
      lang='en'
      suppressHydrationWarning
      className='select-none scroll-smooth'
    >
      <body className='font-jost relative h-full w-full bg-[#f6f6f6] dark:bg-[#1c1c1d]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          {/* <AnimateCursor /> */}
          <Preloader />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
