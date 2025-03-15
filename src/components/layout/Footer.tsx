'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='h-full w-full bg-white dark:bg-[#252728]'>
      <div className='relative mx-auto flex h-fit flex-col items-center justify-between gap-y-8 py-10 xxs:w-[300px] xs:w-[450px] sm:w-[600px] sm:flex-row sm:gap-y-0 md:w-[750px] md:flex-row md:gap-4 lg:w-[950px] xl:w-[1200px]'>
        <div className='flex w-full items-center justify-start gap-4'>
          <div>
            <div className='mb-4 text-xs font-semibold uppercase'>version</div>
            <div className='capitalize'>2025 © Edition</div>
          </div>
          <div>
            <div className='mb-4 text-xs font-semibold uppercase'>licience</div>
            <div className='capitalize'>code by brian nguyen</div>
          </div>
        </div>
        <div className='block h-[1px] w-full bg-zinc-400 sm:hidden'></div>
        <div className='flex w-full items-center justify-start sm:justify-end'>
          <div>
            <div className='mb-4 text-start text-xs font-semibold uppercase'>
              socials
            </div>
            <ul className='flex items-center gap-4'>
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Link href='https://www.facebook.com/profile.php?id=100042009667753'>
                  <span className='capitalize'>facebook</span>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Link href='https://github.com/nhuuhuynhh'>
                  <span className='capitalize'>github</span>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
