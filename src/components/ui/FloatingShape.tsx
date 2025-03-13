'use client'

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
  size?: number
  color?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  className?: string
}

export default function FloatingShape({
  size,
  color,
  top,
  left,
  right,
  bottom,
  className,
}: FloatingShapeProps) {
  return (
    <motion.div
      className={`${className} pointer-events-none absolute hidden rounded-full sm:block`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top,
        left,
        right,
        bottom,
      }}
      variants={floatingVariants}
      animate='animate'
    />
  )
}
