'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import FloatingShape from '~/components/ui/FloatingShape'
import Social from '~/components/layout/Social'
import { Button } from '~/components/ui/Button'
import Link from 'next/link'

const Home = () => {
  return (
    <section
      id='home'
      className='h-fit w-full bg-gradient-to-t from-[#fff] to-[#f0ebe3] dark:from-[#31363c] dark:to-[#222831]'
    >
      <div className='mx-auto flex h-full w-fit flex-col items-start justify-between gap-8 pt-10 xxs:w-[300px] xs:w-[450px] sm:w-[600px] md:w-[780px] md:flex-row md:gap-4 lg:w-[1000px] xl:w-[1200px]'>
        <div className='flex flex-1 flex-col'>
          <div className='title mb-8'>
            <div className='mb-4 text-lg font-semibold uppercase'>
              <span className='mr-1'>hello,</span>
              <span className='text-[#06d6a0] dark:text-[#F4C2C2]'>
                my name is
              </span>
            </div>
            <div
              style={{
                textShadow:
                  '2px 2px #29A587, -2px 2px #29A587, 2px -2px #29A587, -2px -2px #29A587, 5px 5px 0px rgba(0, 0, 0, 0.2)',
              }}
              className='text-xl font-bold capitalize tracking-widest text-[#06d6a0] dark:text-[#fb6f92] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
            >
              nguyen nhu huynh.
            </div>
          </div>
          <div className='mb-8 flex items-center justify-start gap-4'>
            <Image src='/hand.svg' alt='hand' width={36} height={36} />
            <Image src='/smile.svg' alt='hand' width={36} height={36} />
            <Image src='/candy.svg' alt='hand' width={36} height={36} />
          </div>
          <div className='relative left-0 mb-8 pl-20 text-2xl font-bold uppercase before:absolute before:left-0 before:top-3 before:h-[2px] before:w-16 before:bg-gray-500 dark:text-white md:text-3xl md:before:top-6 lg:text-4xl xl:text-5xl'>
            <TypeAnimation
              sequence={[
                `i am ux/ui designer`,
                1000,
                `i am developer`,
                1000,
                `i am freelancer`,
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              style={{ fontFamily: 'Caveat' }}
            />
          </div>
          <Social />
          <div className='mb-8 text-lg text-[#262626] dark:text-[#eaeaea]'>
            I'm a designer in Vietnam, and I'm very passionate and dedicated to
            my work.
          </div>
          <div className='flex items-center justify-start gap-4 tracking-widest'>
            <Button className='rounded-full border-2 border-[#8d99ae] bg-transparent p-8 text-sm font-semibold uppercase text-[#222831] shadow-lg transition-all duration-300 hover:bg-[#06d6a0] hover:text-white'>
              download cv
            </Button>
            <Link
              href='/CV.pdf'
              download='CV.pdf'
              className='block rounded-full border-2 border-[#ff006e] bg-[#ff006e] p-6 text-sm font-semibold uppercase text-white shadow-lg transition-all duration-300 hover:border-[#f8961e] hover:bg-[#f8961e]'
            >
              hire me
            </Link>
          </div>
        </div>
        <div className='relative flex h-full w-full flex-1 items-center justify-center md:w-fit md:justify-end'>
          <FloatingShape className='left-0 top-0 h-28 w-28 bg-[#06d6a0] opacity-20' />
          <FloatingShape className='-right-4 -top-8 h-24 w-24 bg-[#06d6a0] opacity-50' />
          <FloatingShape className='-bottom-2 left-12 h-20 w-20 bg-[#06d6a0] opacity-80' />
          <div className='animate-profile order-1 h-[200px] w-[200px] justify-self-center rounded-full bg-[#06d6a0] bg-[url("/avatar2.png")] bg-cover bg-center bg-no-repeat shadow-custom-light dark:bg-[#F4C2C2] dark:shadow-custom-dark sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]'></div>
        </div>
      </div>
    </section>
  )
}

export default Home
