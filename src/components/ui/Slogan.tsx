import React from 'react'

interface SloganProps {
  className?: string
  children?: React.ReactNode
}

const Slogan: React.FC<SloganProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} absolute h-fit w-fit text-nowrap rounded-full border-2 border-[#29a587] bg-[#f2f4f7] p-2 text-sm font-semibold italic dark:border-[#fb6f92] dark:bg-[#1c1c1d] lg:p-4`}
    >
      {children}
    </div>
  )
}

export default Slogan
