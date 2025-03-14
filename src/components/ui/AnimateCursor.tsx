'use client'

import AnimatedCursor from 'react-animated-cursor'
import { useTheme } from 'next-themes'

const AnimateCursor = () => {
  const { theme } = useTheme()

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color={theme === 'light' ? '41, 165, 135' : '255, 182, 193'}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
  )
}

export default AnimateCursor
