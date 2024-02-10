import './Navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="wrapper">
        {/* Sidebar */}
        <Sidebar/>
        <motion.span initial={{opacity:0,scale:0.3}} /* animate={{opacity:1,scale:1}} */ transition={{type:'spring'}} whileInView={{opacity:1,scale:1}}>Debasish</motion.span>
        <div className="social">
          <motion.a href='#' initial={{opacity:0,scale:0.5}} transition={{duration:0.5,delay:0.4}} whileInView={{opacity:1,scale:1}}><img src='/facebook.png' alt='facebook'/></motion.a>
          <motion.a href='#' initial={{opacity:0,scale:0.5}} transition={{duration:0.5,delay:0.6}} whileInView={{opacity:1,scale:1}}><img src='/instagram.png' alt='instagram'/></motion.a>
          <motion.a href='#' initial={{opacity:0,scale:0.5}} transition={{duration:0.5,delay:0.8}} whileInView={{opacity:1,scale:1}}><img src='/youtube.png' alt='youtube'/></motion.a>
          <motion.a href='#' initial={{opacity:0,scale:0.5}} transition={{duration:0.5,delay:1.0}} whileInView={{opacity:1,scale:1}}><img src='/dribbble.png' alt='dribble'/></motion.a>
        </div>
      </div>
    </div>
  )
}

export default Navbar