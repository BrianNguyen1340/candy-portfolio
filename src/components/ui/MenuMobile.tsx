import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { paths } from '~/utils/paths'

const listItems = [
  {
    delay: 0.1,
    link: paths.home,
    name: 'home',
  },
  {
    delay: 0.2,
    link: paths.about,
    name: 'about',
  },
  {
    delay: 0.3,
    link: paths.services,
    name: 'services',
  },
  {
    delay: 0.4,
    link: paths.projects,
    name: 'projects',
  },
  {
    delay: 0.5,
    link: paths.experience,
    name: 'experience',
  },
  {
    delay: 0.6,
    link: paths.contact,
    name: 'contact',
  },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeMenu: string
  // eslint-disable-next-line no-unused-vars
  setActiveMenu: (path: string) => void
}

const MenuMobile: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeMenu,
  setActiveMenu,
}) => {
  const menuRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  if (!isOpen) return null

  return (
    <nav
      ref={menuRef}
      className={`absolute left-0 top-[100%] z-20 h-screen w-full bg-[#f2f4f7] dark:bg-[#1c1c1d] lg:hidden`}
    >
      <ul className='mt-16'>
        {listItems.map(({ delay, link, name }, index) => (
          <motion.li
            key={index}
            variants={listVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.3, delay }}
            className='text-center'
            onClick={onClose}
          >
            <Link
              onClick={() => setActiveMenu(link)}
              href={`${link}`}
              className={`${activeMenu === link ? 'text-[#ff0a54]' : ''} block w-full py-4 font-semibold capitalize transition-all duration-500 ease-in hover:bg-[#eee] dark:hover:bg-zinc-600`}
            >
              {name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuMobile
