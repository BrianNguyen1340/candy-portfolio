import Link from 'next/link'
import { FaFacebook, FaGithub } from 'react-icons/fa'

const listItems = [
  {
    link: 'https://www.facebook.com/profile.php?id=100042009667753',
    icon: <FaFacebook size={28} />,
  },
  {
    link: 'https://github.com/nhuuhuynhh',
    icon: <FaGithub size={28} />,
  },
]

const Social = () => {
  return (
    <ul className='mb-4 flex animate-bounce items-center gap-4 xs:mb-8'>
      {listItems.map(({ link, icon }, index) => (
        <li
          key={index}
          className='transition-all duration-300 hover:scale-[1.5]'
        >
          <Link
            href={link}
            className='flex items-center justify-center transition-all duration-300 hover:text-[#29a587]'
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Social
