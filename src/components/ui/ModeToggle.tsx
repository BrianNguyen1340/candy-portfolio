'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='rounded-full p-2 transition-all duration-300 hover:bg-white dark:hover:bg-black'
    >
      {currentTheme === 'dark' ? (
        <Sun className='transition-all duration-300' size={20} />
      ) : (
        <Moon className='transition-all duration-300' size={20} />
      )}
    </button>
  )
}

export default ModeToggle
