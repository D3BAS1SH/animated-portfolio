import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

const Test = () => {
  const [open,setOpen]=useState(false);
  const variants={
    visible:(i)=>({opacity:1,x:100,transition:{delay:i*0.5}}),
    hidden:{opacity:0},
  }

  const Items=['Item1','Item2','Item3','Item4'];

   return (//<>
  // <button onClick={()=>setOpen(prev=>!prev)}>SHOW</button>
  //   <div className='course'>
  //       {/* <motion.div className="box" initial={{opacity:0.3,scale:0.2}}  transition={{duration:1}} whileInView={{opacity:1,scale:1.5}} drag>
  //       </motion.div> */}
  //       <motion.div className="box"
  //       variants={variants}
  //       /* animate={open?'visible':'hidden'} */
  //       whileInView='visible'
  //       ></motion.div>
  //   </div>
    
  //   </>
  <>
  <div className="course">
    <motion.ul variants={variants} initial='hidden' animate='visible'>
      {
        Items.map((Item,i)=>{
          return <motion.li variants={variants} key={Item} custom={i}>{Item}</motion.li>
        })
      }
    </motion.ul>
  </div>
  </>
  )
}

export default Test