import DigitalBall from '~/components/ui/DigitalBall'

const About = () => {
  return (
    <section id='about' className='relative h-fit w-full py-32'>
      <div className='relative mx-auto h-full xxs:w-[300px] xs:w-[450px] sm:w-[600px] md:w-[750px] md:pt-10 lg:w-[950px] xl:w-[1200px]'>
        <div className='mb-4 text-center text-5xl font-bold capitalize'>
          about me
        </div>
        <div className='mb-16 text-center text-2xl capitalize text-[#262626] dark:text-white'>
          my introduction
        </div>
        <div className='relative'>
          <DigitalBall />
        </div>
        {/* <div className='flex items-start gap-4'>
          <div className='flex flex-1 items-center justify-center'>
            <img
              src='/avatar1.png'
              alt='avatar'
              className='w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]'
            />
          </div>
          <div className='flex-1 text-xl leading-8'>
            Hello, I'm Nairobi, I'm a web designer and developer based in NYC,
            USA. I have a passion for web design and love to create for web and
            mobile devices.If you have a web based project that you want to get
            started.
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About
