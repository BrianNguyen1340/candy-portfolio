import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const CVButton = () => {
  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    initial: {
      x: 0,
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='mb-4 flex items-center justify-center text-[13px] font-bold xs:justify-start md:mb-0'>
      <motion.div
        variants={buttonVariants}
        initial='initial'
        whileHover='hover'
      >
        <Link
          href='/CV.pdf'
          download='CV.pdf'
          className='flex items-center rounded-full border-[3px] border-zinc-400 px-4 py-6 uppercase transition-all duration-300 hover:bg-[#29a587] hover:text-white dark:border-white md:px-8'
        >
          download cv
          <motion.div variants={iconVariants}>
            <Download className='ml-2' size={14} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default CVButton
