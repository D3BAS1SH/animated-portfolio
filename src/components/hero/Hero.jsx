import React from 'react'
import { motion } from 'framer-motion'
import './hero.scss'
const Textvariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildern:0.18,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const sliderVariant={
  initial:{
    x:0,
  },
  animate:{
    x:'-220%',
    transition:{
      repeat:Infinity,
      repeatType:'mirror',
      duration:10,
    }
  }
}
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={Textvariants} initial='initial' animate='animate'>
          <motion.h2 variants={Textvariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={Textvariants}>WEB DEVELOPER AND UI DESIGNER</motion.h1>
          <motion.div className="buttons" variants={Textvariants}>
            <motion.button variants={Textvariants}>See the Latest Work</motion.button>
            <motion.button variants={Textvariants}>Contact me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={Textvariants} animate='scrollButton'/>
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={sliderVariant} initial='initial' animate='animate'>
        Write Content Creator influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Not me someone Else." />
      </div>
    </div>
  )
}

export default Hero