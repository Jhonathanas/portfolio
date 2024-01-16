import './hero.scss'
import { motion } from 'framer-motion'
const textVariants = {
  initial:{
    x: -500,
    opacity: 0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren:0.1
    }
  }
}

const sliderVariants = {
  inital:{
    x: 0,
  },
  animate:{
    x:"220%",
    transition:{
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    }
  }
}


const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants}
        initial='initial'
        animate="animate">
            <motion.h2 variants={textVariants}>Jonathan adi saputro</motion.h2>
            <motion.h1 variants={textVariants}>SOFTWARE ENGINER</motion.h1>
                <motion.div variants={textVariants} className='buttons'>
                    <motion.button variants={textVariants}>See The Latest Woke</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
        </motion.div>
      </div>
      <motion.div className='sliding' variants={sliderVariants} initial="initial" animate="animate">
          WEB AND SOFTWARE DEVELOPERS
      </motion.div>
        <div className='imgContainer'>
            <img src='/C.jpg'></img>
        </div>
    </div>
  )
}

export default Hero