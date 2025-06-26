import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav 
      className='mb-10 flex items-center justify-between py-6 bg-transparent backdrop-blur-sm max-w-5xl mx-auto px-6 sm:px-8'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex flex-shrink-0 items-center'>
        {/* Empty as per your update */}
      </div>
      <motion.div 
        className='m-8 flex items-center justify-center gap-6 text-3xl'
        variants={itemVariants}
      >
        {[
          { href: 'https://www.linkedin.com/in/shrikrushna-r-prajapati-789a667334/', icon: <FaLinkedin />, label: 'LinkedIn' },
          { href: 'https://github.com/Krishna100604', icon: <FaGithub />, label: 'GitHub' },
          { href: 'https://leetcode.com/u/Shrikrushna2004/', icon: <SiLeetcode />, label: 'LeetCode' },
          { href: 'https://www.geeksforgeeks.org/user/shrikrishna_10/', icon: <SiGeeksforgeeks />, label: 'GeeksforGeeks' },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className='text-cyan-500 dark:text-purple-400 hover:text-purple-200 dark:hover:text-cyan-300'
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            style={{ textShadow: '0 0 5px rgba(34, 211, 238, 0.4)' }}
            aria-label={`Visit ${social.label} profile`}
          >
            {social.icon}
          </motion.a>
        ))}
        <motion.button
          onClick={toggleTheme}
          className='text-cyan-500 dark:text-purple-400 hover:text-purple-200 dark:hover:text-cyan-300'
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          style={{ textShadow: '0 0 5px rgba(34, 211, 238, 0.4)' }}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </motion.button>
    </motion.div>
    </motion.nav>
  )
}

export default Navbar