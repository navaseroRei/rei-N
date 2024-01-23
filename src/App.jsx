import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Exp from './components/Exp'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Tech from './components/Tech'
import PoweredBy from './components/PoweredBy'

function App() {
  return (
    <BrowserRouter>
      <div className='text-white relative z-0 bg-[#181818]  '>
        <Nav />

        <Hero />
        <About />
        <Exp />
        <Tech />
        <div className='absolute -z-[40] w-[30%] h-[30%] rounded-full blue__gradient  bottom-96 ' />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
