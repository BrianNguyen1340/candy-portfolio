'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

const floatingVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  },
}

interface FloatingShapeProps {
  className?: string
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ className }) => {
  return (
    <motion.div
      className={`${className} pointer-events-none absolute hidden rounded-full sm:block`}
      variants={floatingVariants}
      animate='animate'
    />
  )
}

export default FloatingShape
