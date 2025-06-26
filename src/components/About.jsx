import React from 'react'
import aboutImg from "../assets/About-Me.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 
              className='my-20 text-center text-4xl'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                About Me
            </motion.h1>

            <div className='flex flex-wrap'>
                {/* Left Section - Image */}
                <motion.div 
                    className='w-full lg:w-1/2 lg:p-8'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className='flex items-center justify-center'>
                        <motion.img 
                          className="rounded-2xl" 
                          src={aboutImg} 
                          alt='' 
                          whileHover={{ scale: 1.05 }} 
                          transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>

                {/* Right Section - Text */}
                <motion.div 
                    className='w-full lg:w-1/2'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p 
                          className='my-2 max-w-xl py-6'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.6 }}
                        >
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
