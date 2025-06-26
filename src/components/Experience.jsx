import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const techVariants = {
    whileHover: { scale: 1.1, borderColor: '#22D3EE', boxShadow: '0 0 8px rgba(34, 211, 238, 0.3)' },
    transition: { duration: 0.3 },
  }

  return (
    <div className='border-b border-neutral-900 pb-10'>
      <motion.h1
        className='my-16 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h1>

      <motion.div
        className='max-w-5xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className='mb-8 bg-neutral-900/50 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300'
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
              {/* Year */}
              <div className='lg:col-span-1'>
                <p className='text-sm text-neutral-400'>{experience.year}</p>
              </div>

              {/* Role and Description */}
              <div className='lg:col-span-3'>
                <h6 className='font-semibold text-lg text-neutral-200'>
                  {experience.role} - <span className='text-sm text-purple-200'>{experience.company}</span>
                </h6>
                <p className='mt-2 text-base text-neutral-300 leading-relaxed'>{experience.description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className='rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-cyan-300 border border-cyan-300/20'
                      variants={techVariants}
                      whileHover='whileHover'
                      aria-label={`Technology: ${tech}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            {index < EXPERIENCES.length - 1 && (
              <div className='mt-6 h-0.5 w-full bg-gradient-to-r from-cyan-300/20 to-purple-400/20' />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience