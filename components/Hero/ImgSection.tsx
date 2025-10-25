// File: components/Hero/ImgSection.tsx
"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"
function ImgSection() {
  return (
    <>
     <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0,}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          whileHover={{
           scale:0.90,
           rotate:100.5
          }}
          className="  order-1 lg:order-2 relative"
        >
          <div className="   rounded-xl">
            <div className="px-4"></div>
            <Image
              src={"/images/Home/hero-img.png"}
              alt="Hero Image"
              className="w-full h-full object-cover"
              width={700}
              height={450}
              priority
            />
          </div>
        </motion.div>
    </>
  )
}

export default ImgSection