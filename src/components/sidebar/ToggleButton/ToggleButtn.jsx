import React from 'react'
import { motion } from 'framer-motion'

const ToggleButtn = ({setOpen}) => {
  return (
    <button onClick={()=>{setOpen((prev)=>!prev)}}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path strokeWidth="3" stroke='#000000' strokeLinecap='round'
        variants={{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}/>
        <motion.path strokeWidth="3" stroke='#000000' strokeLinecap='round'/>
        <motion.path strokeWidth="3" stroke='#000000' strokeLinecap='round'/>
      </svg>
    </button>
  )
}

export default ToggleButtn