import { Menu, X } from 'lucide-react'

interface ToggleMenuMobileProps {
  onClick: () => void
  style?: React.CSSProperties
  isMenuMobileOpen: boolean
}

const ToggleMenuMobile: React.FC<ToggleMenuMobileProps> = ({
  onClick,
  style,
  isMenuMobileOpen,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${!isMenuMobileOpen && 'rotate-180'} ml-5 h-7 w-fit cursor-pointer bg-[#F0EBE3] transition duration-300 dark:bg-[#222831] lg:ml-0 lg:hidden`}
      style={style}
    >
      {isMenuMobileOpen ? (
        <X size={30} strokeWidth={2.5} />
      ) : (
        <Menu size={30} strokeWidth={2.5} />
      )}
    </div>
  )
}

export default ToggleMenuMobile
