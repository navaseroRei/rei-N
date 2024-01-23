import { react, reactLogo, reiLogo, tailwindcss, vite } from '../assets'
import { SectionWrapper } from '../hoc'

const Hero = () => {
  return (
    <div className=''>
      <div className='absolute hover:animate-pulse  z-[50] w-[32%] h-[18%] left-[33%] rounded-full blue2__gradient bottom-[25px] ' />

      <div className='absolute -z-[40] w-[50%] h-[100%] left-[66%] rounded-full blue__gradient bottom-80' />
      <div className='absolute -z-[40] w-[50%] h-[140%] rounded-full blue__gradient top-96 right-[60%] ' />
      <div className='grid flex-row items-center justify-center gap-x-6'>
        <div className='flex items-center justify-center mt-20 '>
          <img
            src={reiLogo}
            alt='reilogo'
            className='hover:animate-spin-slow w-60 lg:w-80'
          />
        </div>
        <div className='   mt-10 space-y-2 '>
          <h1 className='text-4xl  text-[#00FFC2] font-merienda font-bold '>
            Reister Navasero
          </h1>

          <h2 className='text-2xl text-center font-lexend font-bold'>
            Front End Developer
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Hero, 'hero')
