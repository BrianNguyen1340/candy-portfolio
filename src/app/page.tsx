'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useTheme } from 'next-themes'

import Social from '~/components/ui/Social'
import Slogan from '~/components/ui/Slogan'
import DecorativeShapes from '~/components/ui/DecorativeShapes'
import CVButton from '~/components/ui/CVButton'

const Home = () => {
  const { theme } = useTheme()

  return (
    <section id='home' className='relative h-fit w-full py-32'>
      <div className='relative mx-auto flex h-full flex-col items-start justify-between gap-4 xxs:w-[300px] xs:w-[450px] sm:w-[600px] md:w-[750px] md:flex-row md:gap-4 md:pt-10 lg:w-[950px] xl:w-[1200px]'>
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
                  theme === 'dark' ? '1px 1px 1px #06d6a0' : '1px 1px 1px #000',
              }}
              className='animate-infinite animate-ease-in text-2xl font-bold capitalize tracking-wide text-[#29a587] dark:text-[#fb6f92] sm:text-3xl lg:text-4xl xl:text-5xl'
            >
              nguyen nhu huynh.
            </div>
          </div>
          <div className='mb-4 hidden items-center justify-start gap-4 md:mb-8 md:flex'>
            <Image src='/designer-tool.svg' alt='hand' width={50} height={50} />
          </div>
          <div className='relative left-0 mb-4 pl-0 text-base font-semibold uppercase italic tracking-widest before:absolute before:left-0 before:top-3 before:h-[2px] before:w-0 before:bg-gray-500 dark:text-white xs:mb-8 md:pl-20 md:text-lg md:before:w-16 lg:text-xl xl:text-2xl'>
            <TypeAnimation
              sequence={[
                `i am designer`,
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
          <div className='mb-4 text-base text-[#262626] dark:text-[#eaeaea] md:mb-8 md:text-xl'>
            I'm a designer, developer, freelancer in Vietnam, and I'm very
            passionate and dedicated to my work.
          </div>
          <CVButton />
        </div>
        <div className='relative mx-auto flex flex-1 items-center justify-center xs:absolute xs:right-0 md:justify-end lg:relative'>
          <Slogan className='-bottom-6 xs:bottom-4 sm:-left-28 md:-left-32 md:top-1/2 md:-translate-y-1/2 lg:-left-20'>
            Turning Ideas into Reality
          </Slogan>
          <div className='flex h-fit w-fit items-center justify-center rounded-full'>
            <img
              src='/avatar1.png'
              alt='avatar'
              className='animate-profile w-[200px] bg-[#29a587] shadow-custom-light dark:bg-[#ff006e] dark:shadow-custom-dark md:w-[300px] lg:w-[400px] xl:w-[500px]'
            />
          </div>
          <DecorativeShapes className='-left-10 top-0 h-8 w-8 animate-spin xs:-left-5 sm:-left-10 lg:left-0 lg:h-12 lg:w-12' />
          <DecorativeShapes className='-right-6 top-10 h-5 w-5 animate-ping md:h-7 md:w-7 xl:h-9 xl:w-9' />
          <DecorativeShapes className='-left-10 top-1/2 h-5 w-5 animate-bounce md:top-1/4 lg:left-10' />
          <DecorativeShapes className='-left-8 bottom-2 h-6 w-6 animate-pulse sm:left-1/2 md:-left-12 md:bottom-1/4' />
          <DecorativeShapes className='-right-5 bottom-5 h-4 w-4 md:bottom-20 md:h-6 md:w-6 xl:right-0' />
        </div>
      </div>
    </section>
  )
}

export default Home
