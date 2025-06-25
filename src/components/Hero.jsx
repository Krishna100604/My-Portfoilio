import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/Krishna_Photo(1).png"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2'>
          <motion.div 
            className='flex flex-col items-center lg:items-start'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Heading */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
            >
              Shikrushna Prajapati
            </motion.h1>
            
            {/* Animated Description */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className='my-0 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left'
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section - Profile Image */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
            className='flex justify-center'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.img 
              src={profilePic} 
              alt="Shikrushna" 
              className='w-72 h-auto lg:w-96 lg:h-auto'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero