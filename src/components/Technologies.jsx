import React from 'react'
import { motion } from 'framer-motion'

const Technologies = () => {
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'C++', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'ReactJS', category: 'Programming' },
    { name: 'Node.js', category: 'Programming' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'TailwindCSS', category: 'Tools/Frameworks' },
    { name: 'PowerBI', category: 'Tools/Frameworks' },
    { name: 'Excel', category: 'Tools/Frameworks' },
    { name: 'Tableau', category: 'Tools/Frameworks' },
    { name: 'Canva', category: 'Tools/Frameworks' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        className='my-20 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies & Skills
      </motion.h1>

      <motion.div
        className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='relative bg-neutral-900 rounded-xl p-4 text-center min-w-[120px] shadow-lg hover:shadow-xl hover:bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transition-all duration-300'
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='text-lg font-semibold text-white'>{skill.name}</span>
            <span className='block text-xs text-neutral-400 mt-1'>{skill.category}</span>
            <div className='absolute inset-0 rounded-xl border-2 border-transparent hover:border-cyan-400/50 transition-all duration-300' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies