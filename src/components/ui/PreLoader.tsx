'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-[#F0EBE3] text-[#222831] dark:bg-[#222831] dark:text-[#F0EBE3]'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='flex items-center gap-2 text-2xl font-bold capitalize'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src='/candy.svg' alt='candy' width={36} height={36} />
        <span>sweet candy ...</span>
      </motion.div>
    </motion.div>
  )
}

export default Preloader
