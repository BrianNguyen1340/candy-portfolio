'use client'

import { useEffect, useState } from 'react'

interface TypeWritingProps {
  text: string
  speed?: number
  deleteSpeed?: number
  delay?: number
}

const TypeWriting: React.FC<TypeWritingProps> = ({
  text,
  speed = 100,
  deleteSpeed = 50,
  delay = 800,
}) => {
  const [typedWriting, setTypedWriting] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && index < text.length) {
          setTypedWriting(text.slice(0, index + 1))
          setIndex(index + 1)
        } else if (isDeleting && index > 0) {
          setTypedWriting(text.slice(0, index - 1))
          setIndex(index - 1)
        } else {
          setTimeout(() => setIsDeleting(!isDeleting), delay)
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [index, isDeleting, text, speed, deleteSpeed, delay])

  return (
    <div className='relative flex flex-1 items-center justify-center overflow-hidden bg-[#4A4A4A] text-white'>
      <div className='relative whitespace-nowrap text-4xl font-bold uppercase'>
        {typedWriting}
      </div>
    </div>
  )
}

export default TypeWriting
