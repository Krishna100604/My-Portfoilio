import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/Krishna_Photo(1).png"
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='border-b border-neutral-900 dark:border-neutral-300 pb-8 mb-10'>
      <motion.div 
        className='max-w-5xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Right Section - Profile Image */}
        <div className='w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 order-first lg:order-none'>
          <motion.div
            className='flex justify-center relative group'
            variants={itemVariants}
          >
            <motion.img 
              src={profilePic} 
              alt="Shikrushna Prajapati, a passionate Business analyst"
              className='rounded-lg shadow-lg object-contain w-full max-w-sm lg:max-w-md h-auto z-10'
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}
              transition={{ duration: 0.3 }}
            />
            <div 
              className='absolute inset-[-8px] rounded-lg'
              style={{ 
                pointerEvents: 'none',
                backgroundSize: '200% 200%',
                WebkitMask: 'radial-gradient(circle, transparent 8px, white 10px)',
                mask: 'radial-gradient(circle, transparent 8px, white 10px)',
              }}
            />
          </motion.div>
        </div>

        {/* Left Section - Text */}
        <div className='w-full lg:w-1/2 mt-4 sm:mt-6 lg:mt-0'>
          <motion.div 
            className='flex flex-col justify-center lg:justify-start'
            variants={itemVariants}
          >
            {/* Animated Heading */}
            <motion.h1
              className='pb-6 sm:pb-8 lg:pb-12 text-4xl sm:text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent'
              variants={itemVariants}
              style={{ textShadow: '0 0 8px rgba(34, 211, 238, 0.4)' }}
            >
              Shikrushna Prajapati
            </motion.h1>
            
            {/* Animated Description */}
            <motion.div
              className='bg-neutral-950/30 dark:bg-neutral-100/30 backdrop-blur-sm rounded-lg max-w-xl w-full shadow-md my-2 py-6'
              variants={itemVariants}
            >
              <p className='text-base sm:text-lg text-neutral-200 dark:text-neutral-900 leading-relaxed text-center lg:text-left'>
                {HERO_CONTENT}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; opacity: 0.8; }
          50% { background-position: 200% 200%; opacity: 1; }
          100% { background-position: 0% 50%; opacity: 0.8; }
        }
        .group:hover .absolute.inset-[-8px] {
          animation-duration: 3s; /* Speed up shimmer on hover */
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6), 0 0 25px rgba(147, 51, 234, 0.5);
        }
      `}</style>
    </div>
  )
}

export default Hero