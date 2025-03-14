import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { paths } from '~/utils/paths'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

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

const MenuMobile: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  if (!isOpen) return null

  return (
    <nav
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
              href={`#${link}`}
              className='block w-full py-4 capitalize hover:bg-[#eee] dark:text-zinc-200 dark:hover:bg-zinc-600'
              style={{ transition: '0.5s ease' }}
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
