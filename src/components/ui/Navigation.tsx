'use client'

import React from 'react'
import Link from 'next/link'

import ModeToggle from '~/components/ui/ModeToggle'
import { paths } from '~/utils/paths'

const navItems = [
  {
    link: paths.home,
    name: 'home',
  },
  {
    link: paths.about,
    name: 'about',
  },
  {
    link: paths.services,
    name: 'services',
  },
  {
    link: paths.projects,
    name: 'projects',
  },
  {
    link: paths.experience,
    name: 'experience',
  },
  {
    link: paths.contact,
    name: 'contact',
  },
]

interface NavigationProps {
  activeNav: string
  // eslint-disable-next-line no-unused-vars
  setActiveNav: (path: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeNav, setActiveNav }) => {
  return (
    <nav className='flex items-center justify-end gap-10'>
      <ul className='hidden h-full items-center justify-center gap-4 text-lg font-semibold capitalize text-zinc-700 dark:text-white md:gap-6 lg:flex'>
        {navItems.map(({ link, name }, index) => (
          <li key={index}>
            <Link
              onClick={() => setActiveNav(link)}
              href={`${link}`}
              className={`${activeNav === link ? 'text-[#ff0a54]' : ''} relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#ff0a54] after:duration-300 hover:after:w-full`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </nav>
  )
}

export default Navigation
