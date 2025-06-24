import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  }

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className='mb-8 flex flex-wrap lg:justify-center'
            initial="initial"
            animate="animate"
            variants={containerVariants}
            transition={{ delay: index * 0.2 }}
          >
            {/* Image Section */}
            <div className='w-full lg:w-1/4'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img 
                  src={project.image} 
                  width={150} 
                  height={150} 
                  alt={project.title} 
                  className='mb-6 rounded cursor-pointer'
                  whileHover={{ scale: 1.05 }} // Zoom effect on hover
                  transition={{ duration: 0.3 }}
                />
              </a>
            </div>

            {/* Text Section */}
            <div className='w-full max-w-xl lg:w-3/4'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.h6 
                  className='mb-2 font-semibold cursor-pointer'
                  whileHover={{ color: "#6B21A8" }} // Change color on hover
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h6>
              </a>
              <p className='mb-4 text-neutral-400'>{project.description}</p>

              {/* Technologies Used */}
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
