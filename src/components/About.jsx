import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Seeking an entry-level position to begin my career in a professional
        environment. where I can utilize my technological skills and educational
        background for both personal and professional growth.
      </motion.p>

      <div className=' mt-20 flex sm:flex-nowrap flex-wrap gap-8 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className='w-full bg-gradient-to-b  from-sky-900 to-emerald-600 p-[1px] rounded-[20px] shadow-card'
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16  h-16 object-contain'
      />

      <h3 className='text-white font-lexend text-[20px] text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
)

export default SectionWrapper(About, 'about')
