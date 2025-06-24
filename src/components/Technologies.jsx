import React from 'react'
import { RiReactjsFill } from "react-icons/ri"
import { TbBrandJavascript } from "react-icons/tb"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNode } from "react-icons/fa6"
import { DiPostgresql } from "react-icons/di"
import { SiMysql } from "react-icons/si"
import { CgCPlusPlus } from "react-icons/cg"
import { FaPython } from "react-icons/fa6"
import { motion } from 'framer-motion'

const Technologies = () => {
  const iconAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  }

  const hoverEffect = {
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { duration: 0.3 }
  }

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        {/* ReactJS Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          variants={iconAnimation}
          {...hoverEffect}
        >
          <RiReactjsFill className='text-7xl text-cyan-400' />
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <TbBrandJavascript className='text-7xl text-yellow-400' />
        </motion.div>

        {/* TailwindCSS Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <RiTailwindCssFill className='text-7xl text-cyan-400' />
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>

        {/* Node.js Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <FaNode className='text-7xl text-blue-500' />
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <DiPostgresql className='text-7xl text-slate-400' />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <SiMysql className='text-7xl text-cyan-400' />
        </motion.div>

        {/* C++ Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <CgCPlusPlus className='text-7xl text-white' />
        </motion.div>

        {/* Python Icon */}
        <motion.div 
          className='rounded-2xl border-4 border-neutral-800 p-4'
          variants={iconAnimation}
          {...hoverEffect}
        >
          <FaPython className='text-7xl text-green-500' />
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
