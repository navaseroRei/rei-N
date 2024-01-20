import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Exp from './components/Exp'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Tech from './components/Tech'

function App() {
  return (
    <BrowserRouter>
      <div className='text-white relative z-0 bg-primary  '>
        <Nav />
        <Hero />
        <About />
        <Exp />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
