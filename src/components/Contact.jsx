import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className='border-b border-neutral-900 pb-12'>
      <motion.h1
        className='my-10 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>
      <motion.div
        className='max-w-md mx-auto bg-neutral-900/70 backdrop-blur-lg rounded-xl p-8 shadow-lg text-center tracking-tight'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.p
          className='my-4 text-lg text-neutral-300 hover:text-cyan-400 transition-colors duration-300'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          {CONTACT.address}
        </motion.p>
        {/* <motion.p
          className='my-4 text-lg text-neutral-300 hover:text-cyan-400 transition-colors duration-300'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          {CONTACT.phoneNo}
        </motion.p> */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className='text-lg text-neutral-300 relative group'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          aria-label={`Send email to ${CONTACT.email}`}
        >
          {CONTACT.email}
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300' />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Contact