import type { Metadata } from 'next'

import './globals.css'
import ThemeProvider from '~/components/ThemeProvider'
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import ScrollToTop from '~/components/ui/ScrollToTop'
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
    <html lang='en' suppressHydrationWarning>
      <body className='relative bg-[#F0EBE3] dark:bg-[#222831]'>
        {/* <AnimateCursor /> */}
        <ScrollToTop />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
