import { useState } from 'react'
import Links from './Links/Links'
import ToggleButtn from './ToggleButton/ToggleButtn'
import { motion } from 'framer-motion'
import './sidebar.scss'

const SideBar = () => {
    const [open,setOpen]=useState(false);
    const variant={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:'spring',
                stiffness:20,
            }
        },
        closed:{
            clipPath:'circle(30px at 50px 50px)',
            transition:{
                delay:0.3,
                type:'spring',
                stiffness:400,
                damping:40,
            }
        },

    }
  return (
    <motion.div className="sidebar" animate={open?'open':'closed'} >
        <motion.div className="bg" variants={variant}>
            <Links/>
        </motion.div>
        <ToggleButtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default SideBar