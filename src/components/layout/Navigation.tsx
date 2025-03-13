'use client'

import { useState } from 'react'
import Link from 'next/link'

import { paths } from '~/utils/paths'
import { ModeToggle } from '~/components/ui/ModeToggle'

const navItems = [
  {
    link: paths.home,
    content: 'home',
  },
  {
    link: paths.about,
    content: 'about',
  },
  {
    link: paths.services,
    content: 'services',
  },
  {
    link: paths.projects,
    content: 'projects',
  },
  {
    link: paths.experience,
    content: 'experience',
  },
  {
    link: paths.contact,
    content: 'contact',
  },
]

const Navigation = () => {
  const [active, setActive] = useState<string>(paths.home)

  return (
    <nav className='flex items-center justify-end gap-10'>
      <ul className='hidden h-full items-center justify-center gap-4 text-sm font-semibold capitalize text-zinc-700 dark:text-white md:gap-6 lg:flex xl:text-base'>
        {navItems.map(({ link, content }, index) => (
          <li key={index}>
            <Link
              onClick={() => setActive(link)}
              href={`#${link}`}
              className={`${active === link ? 'text-[#ff0a54]' : ''} relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#ff0a54] after:duration-300 hover:after:w-full`}
            >
              {content}
            </Link>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </nav>
  )
}

export default Navigation
