import Home from '~/components/layout/Home'
import About from '~/components/layout/About'
import Contact from '~/components/layout/Contact'
import Experience from '~/components/layout/Experience'
import Projects from '~/components/layout/Projects'
import Services from '~/components/layout/Services'
import Preloader from '~/components/ui/PreLoader'

const Main = () => {
  return (
    <main className='relative'>
      <Preloader />
      <Home />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default Main
