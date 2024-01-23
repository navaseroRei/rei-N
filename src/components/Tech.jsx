import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const TechCards = ({ tech, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 0.25)}
      className=' space-y-2 p-2 hover:animate-bounce shrink-0 bg-gradient-to-b  flex items-center justify-center from-sky-900/25 to-emerald-600 rounded-xl  shadow-card '
    >
      <img src={tech.icon} alt={tech.title} className='max-w-10  shrink-0' />
    </motion.div>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' shrink-0'>
        <h2 className={`${styles.heroSubText} font-lexend text-white`}>
          Technologies.
        </h2>
        <div className=' mt-32 flex flex-wrap shrink-0 w-full justify-center gap-4 '>
          {technologies.map((tech, index) => (
            <TechCards key={`tech-${index}`} index={index} tech={tech} />
          ))}
        </div>
      </motion.div>
      <div className='absolute  -z-[30] w-full h-[18%] right-[2%]  blue3__gradient bottom-16' />
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
