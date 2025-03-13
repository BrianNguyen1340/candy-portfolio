'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from './Navigation'
import MenuMobile from './MenuMobile'
import ToggleMenuMobile from '../ui/ToggleMenuMobile'

const Header = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false)

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`left-0 top-0 z-10 h-fit w-full py-6 transition-all duration-300 ${
        isFixed
          ? 'animate-slideDown fixed bg-[#F0EBE3] shadow-xl dark:bg-[#222831]'
          : 'absolute bg-transparent'
      }`}
    >
      <div className='mx-auto flex h-full w-full items-center justify-between xxs:w-[300px] xs:w-[450px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'>
        <Link
          href={`#home`}
          className='mr-5 flex items-center justify-center lg:mr-0'
        >
          <div className='mr-3 flex items-center justify-center'>
            <Image src='/candy.svg' alt='logo' width={50} height={50} />
          </div>
          <div className='text-2xl font-semibold capitalize'>candy</div>
        </Link>
        <Navigation />
        <ToggleMenuMobile
          onClick={toggleMenu}
          isMenuMobileOpen={isMenuMobileOpen}
        />
        {isMenuMobileOpen && <MenuMobile />}
      </div>
    </header>
  )
}

export default Header
