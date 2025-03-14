'use client'

import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useTheme } from 'next-themes'

import Social from '~/components/ui/Social'
import { Download } from 'lucide-react'

const Home = () => {
  const { theme } = useTheme()

  return (
    <section id='home' className='relative h-fit w-full'>
      <div className='relative mx-auto flex h-full w-fit flex-col items-start justify-between gap-8 xxs:w-[300px] xs:w-[450px] sm:w-[600px] md:w-[750px] md:flex-row md:gap-4 md:pt-10 lg:w-[950px] xl:w-[1200px]'>
        <div className='flex flex-1 flex-col'>
          <div className='title mb-4 md:mb-8'>
            <div className='mb-2 text-lg font-semibold uppercase md:mb-4'>
              <span className='mr-2'>hello,</span>
              <span className='text-[#29a587] dark:text-[#fb6f92]'>
                my name is
              </span>
            </div>
            <div
              style={{
                textShadow:
                  theme === 'dark' ? '2px 2px 2px #06d6a0' : '2px 2px 2px #000',
              }}
              className='text-2xl font-bold capitalize tracking-wide text-[#29a587] dark:text-[#fb6f92] sm:text-3xl lg:text-4xl xl:text-5xl'
            >
              nguyen nhu huynh.
            </div>
          </div>
          <div className='mb-4 hidden items-center justify-start gap-4 md:mb-8 md:flex'>
            <Image src='/designer-tool.svg' alt='hand' width={50} height={50} />
          </div>
          <div className='relative left-0 mb-8 pl-0 text-base font-semibold uppercase tracking-widest before:absolute before:left-0 before:top-3 before:h-[2px] before:w-0 before:bg-gray-500 dark:text-white md:pl-20 md:text-lg md:before:top-6 md:before:w-16 lg:text-xl xl:text-2xl'>
            <TypeAnimation
              sequence={[
                `i am ux/ui designer`,
                2000,
                `i am developer`,
                2000,
                `i am freelancer`,
                2000,
              ]}
              wrapper='span'
              speed={90}
              repeat={Infinity}
            />
          </div>
          <Social />
          <div className='mb-4 text-lg text-[#262626] dark:text-[#eaeaea] md:mb-8'>
            I'm a designer, developer, freelancer in Vietnam, and I'm very
            passionate and dedicated to my work.
          </div>
          <div
            className='mb-4 flex items-center justify-start gap-4 text-[13px] font-bold md:mb-0'
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            <Link
              href='/CV.pdf'
              download='CV.pdf'
              className='flex items-center rounded-full border-2 border-black px-4 py-6 uppercase transition-all duration-300 hover:bg-[#29a587] hover:text-white dark:border-white md:px-8'
            >
              download cv
              <Download className='ml-2' size={16} />
            </Link>
            <Link
              href='#contact'
              className='rounded-full px-4 py-6 uppercase text-[#ff006e] transition-all duration-300 md:px-8'
            >
              hire me
            </Link>
          </div>
        </div>
        <div className='relative mx-auto flex flex-1 items-center justify-center xs:absolute xs:right-0 md:relative md:justify-end'>
          <div className='flex h-fit w-fit items-center justify-center rounded-full bg-[#29a587] dark:bg-[#ff006e]'>
            <img
              src='/avatar1.png'
              alt='avatar'
              className='w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
