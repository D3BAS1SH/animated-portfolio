import React from 'react'
import { motion } from 'framer-motion';

const Test = () => {
  return (
    <div className='course'>
        <motion.div className="box" initial={{opacity:0.3,scale:0.2}}  transition={{duration:1}} whileInView={{opacity:1,scale:1.5}} drag>
        </motion.div>
    </div>
  )
}

export default Test