import React from 'react'
import { motion } from 'framer-motion'

const Links = () => {
  const MainList=['Homepage','Services','Portfolio','Contact']
  const variants={
    open:{
      transition:{
        staggerChildren:0.1,
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    }
  }
  const ItemVariants={
    open:{
      y:0,
      opacity:1,
    },
    closed:{
      y:50,
      opacity:0,
    }
  }
  return (
    <motion.div className='links' variants={variants}>
      {
        MainList.map(Item=>{
          return <motion.a href={`#${Item}`} key={Item} variants={ItemVariants}
          whileHover={{scale:1.1}} whileTap={{scale:0.9}}>{Item}</motion.a>;
        })
      }
    </motion.div>
  )
}

export default Links