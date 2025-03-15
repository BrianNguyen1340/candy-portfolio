import React from 'react'

interface DecorativeShapesProps {
  children?: React.ReactNode
  className?: string
}

const DecorativeShapes: React.FC<DecorativeShapesProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${className} absolute z-[1] rounded-md bg-[#29a587] dark:bg-[#fb6f92]`}
    >
      {children}
    </div>
  )
}

export default DecorativeShapes
