import React from 'react'
import { reactLogo, tailwindcss, vite } from '../assets'
import { SectionWrapper } from '../hoc'

const PoweredBy = () => {
  return (
    <div className=' space-y-2 bg-transparent -z-[30]  w-[32%]  h-[20%]'>
      <p className='font-bold text-xs bg-gradient-to-r from-sky-500 to-emerald-300 bg-clip-text text-transparent font-lexend'>
        Powered by
      </p>
      <div className='flex space-x-2'>
        <img src={vite} alt='react' className='   max-w-10' />
        <img src={reactLogo} alt='react' className='animate-spin  max-w-10' />
        <img src={tailwindcss} alt='react' className='   max-w-10' />
      </div>
    </div>
  )
}

export default SectionWrapper(PoweredBy, 'poweredby')
