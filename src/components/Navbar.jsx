import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { SiGeeksforgeeks } from "react-icons/si";
import { motion } from 'framer-motion'
// import logo from "../assets/kevinRushLogo.png"

const Navbar = () => {
  return (
    <motion.nav 
      className='mb-20 flex items-center justify-between py-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='flex flex-shrink-0 items-center'>
        {/* <img src={logo} alt='logo'/> */}
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a
          href="https://www.linkedin.com/in/shrikrushna-p-89a667334"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/Krishna100604"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/Shrikrishna2004/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiLeetcode />
        </motion.a>
        <motion.a
          href="https://www.geeksforgeeks.org/user/shrikrishna_10/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiGeeksforgeeks />
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navbar
