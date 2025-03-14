import Link from 'next/link'
import { FaFacebook, FaGithub } from 'react-icons/fa'

const listItems = [
  {
    link: 'https://www.facebook.com/profile.php?id=100042009667753',
    icon: <FaFacebook size={24} />,
  },
  {
    link: 'https://github.com/nhuuhuynhh',
    icon: <FaGithub size={24} />,
  },
]

const Social = () => {
  return (
    <ul className='mb-8 flex animate-bounce items-center gap-4'>
      {listItems.map(({ link, icon }, index) => (
        <li key={index}>
          <Link
            href={link}
            className='flex items-center justify-center transition-all duration-300 hover:text-[#48cae4] hover:dark:text-[#57cc99]'
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Social
