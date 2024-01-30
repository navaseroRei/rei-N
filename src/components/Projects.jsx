import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants'
import { github, pokefinderfilter, pokefinderpage, reiLogo } from '../assets'
import { useState } from 'react'

const Projects = () => {
  console.log(projects[0])
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem optio
          aspernatur amet nam est illum tempore asperiores, cupiditate ipsa odio
          sapiente repellendus quos accusantium quisquam? Cum voluptatibus quod
          fugit odio soluta sapiente incidunt rerum, eos eligendi quasi vitae
          accusamus velit est sed exercitationem repellendus perferendis
          corporis tempora doloribus a ipsa?
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap md:flex-nowrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            firstItem={projects[0]}
          />
        ))}
      </div>
    </>
  )
}

const ProjectCard = ({
  index,
  name,
  firstItem,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <div
          className='relative  bg-gradient-to-b overflow-hidden items-center flex  from-sky-900/25 to-emerald-600/85 rounded-xl h-[230px]'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={
              isHovered && image == pokefinderfilter ? pokefinderpage : image
            }
            alt='project_image'
            className='w-full h-full object-scale-down  mt-2 rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 '>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='bg-[#313131] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Projects, 'proj')
