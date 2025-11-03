import Hero from '../other/Hero'
import image from '../../assets/bgImage/w13.jpg'
import Aboutshort from '../other/Aboutshort'
import Skills from '../other/Skills'
import Projects from '../other/Projectsmall'

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}

    >    
      <Hero />
      <Projects />
      <Aboutshort />
      <Skills />
    </div >
  )
}

export default Home
