import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeInOut' }
  }

  const techHoverEffect = {
    whileHover: { scale: 1.1, backgroundColor: "#6B21A8", color: "#fff" }, // change color on hover
    transition: { duration: 0.3 }
  }

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            className='mb-8 flex flex-wrap lg:justify-center'
            initial="initial"
            animate="animate"
            variants={containerVariants}
            transition={{ delay: index * 0.2 }} // staggering entries
          >
            {/* Left Section - Year */}
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>

            {/* Right Section - Role and Description */}
            <div className='w-full max-w-full lg:w-3/4'>
              <h6 className='font-semibold mb-2'>
                {experience.role} - <span className='text-sm text-purple-100'>
                  {experience.company}
                </span>
              </h6> 
              <p className='mb-4 text-neutral-400'>{experience.description}</p>

              {/* Technologies */}
              {experience.technologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-500'
                  whileHover="whileHover"
                  {...techHoverEffect} // Apply hover effect to technologies
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
