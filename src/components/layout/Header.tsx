'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navigation from '~/components/ui/Navigation'
import MenuMobile from '~/components/ui/MenuMobile'
import ToggleMenuMobile from '~/components/ui/ToggleMenuMobile'
import { paths } from '~/utils/paths'

const Header = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false)
  const [activeNav, setActiveNav] = useState<string>(paths.home)
  const [activeMenu, setActiveMenu] = useState<string>(paths.home)

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
          ? 'animate-slide-down fixed bg-[#fff] shadow-xl dark:bg-[#252728]'
          : 'absolute bg-transparent'
      }`}
    >
      <div className='mx-auto flex h-full w-full items-center justify-between xxs:w-[300px] xs:w-[450px] sm:w-[600px] md:w-[750px] lg:w-[950px] xl:w-[1200px]'>
        <Link
          href={paths.home}
          className='flex items-center justify-center'
          onClick={() => {
            setActiveNav(paths.home)
            setActiveMenu(paths.home)
            setIsMenuMobileOpen(false)
          }}
        >
          <div className='mr-3 flex items-center justify-center'>
            <Image src='/candy.svg' alt='logo' width={50} height={50} />
          </div>
          <div className='font-dancing-script text-4xl font-semibold capitalize tracking-widest'>
            candy
          </div>
        </Link>
        <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
        <ToggleMenuMobile
          onClick={toggleMenu}
          isMenuMobileOpen={isMenuMobileOpen}
        />
        {isMenuMobileOpen && (
          <MenuMobile
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            isOpen={isMenuMobileOpen}
            onClose={() => setIsMenuMobileOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

export default Header
