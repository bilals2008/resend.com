// File: components/Hero/Content/Heading.tsx
import { motion } from 'motion/react'
import React from 'react'

function Heading() {
  return (
     <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" text-4xl font-bold tracking-tighter  sm:text-5xl md:text-6xl leading-12 md:leading-16"
        >
          <p className='tracking-wide'> Email for </p>
          <p className='tracking-wide'> Develpors</p>
        </motion.h1>
  )
}

export default Heading
