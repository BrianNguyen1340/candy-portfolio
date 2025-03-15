'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`bottom-6 right-6 z-50 hidden h-[60px] w-[60px] items-center justify-center rounded-full border p-3 shadow-xl transition-opacity duration-300 md:fixed md:flex ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ChevronUp size={24} />
    </button>
  )
}

export default ScrollToTop
