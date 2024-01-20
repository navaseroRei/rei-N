import { reiLogo } from '../assets'
import { SectionWrapper } from '../hoc'

const Hero = () => {
  return (
    <div className=''>
      <div className='flex flex-row items-center justify-center gap-x-6'>
        <div className='flex items-center mt-20 '>
          <img
            src={reiLogo}
            alt='reilogo'
            className='hover:animate-spin-slow w-60 lg:w-80'
          />
        </div>
        <div className=' hover:animate-pulse '>
          <h1 className='text-4xl text-[#00FFC2] font-merienda font-bold '>
            Reister Navasero
          </h1>
          <h2 className='text-2xl font-lexend font-bold'>
            Front End Developer
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Hero, 'hero')
