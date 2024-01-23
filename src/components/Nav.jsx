import { useEffect, useState } from 'react'
import { styles } from '../styles'
import { reiDragon } from '../assets'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center  py-5 fixed  top-0 z-20 ${
          scrolled ? 'bg-slate-300/10' : 'bg-slate-200/10'
        }`}
      >
        <div className=' flex  w-full flex-row justify-between text-white'>
          <Link
            className='flex gap-2 items-center '
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img src={reiDragon} className='w-6 h-6' alt='logo'></img>
            <h1 className='uppercase font-lexend font-black text-xl '>RN</h1>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent'
                    : 'text-white'
                }     cursor-pointer font-lexend font-bold hover:scale-110 `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
