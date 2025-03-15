import { Menu, X } from 'lucide-react'

interface ToggleMenuMobileProps {
  onClick: () => void
  isMenuMobileOpen: boolean
}

const ToggleMenuMobile: React.FC<ToggleMenuMobileProps> = ({
  onClick,
  isMenuMobileOpen,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${!isMenuMobileOpen && 'rotate-180'} ml-5 h-7 w-fit cursor-pointer bg-transparent transition duration-300 lg:ml-0 lg:hidden`}
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
