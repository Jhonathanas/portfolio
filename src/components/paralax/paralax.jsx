import { motion ,useScroll,useTransform} from 'framer-motion'
import './paralax.scss'
import { useRef } from 'react'

const Paralax = ({ type }) => {

const ref = useRef()

const {scrollYProgress} = useScroll({
  target:ref,
  offset:["start start", "end start"]
})

const yBg = useTransform(scrollYProgress, [0,1] , ["0%","100%"])
const yText = useTransform(scrollYProgress, [0,1] , ["0%","500%"])


  return (
    <div className='paralax' 
    ref={ref}
    style={{ background: type === "service" 
    ? "linear-gradient(180deg, #112535 ,#0c0c1d )"
    : "linear-gradient(180deg, #0c0c1d ,#112535)" }}>
        <motion.h1 style={{ y:yText }}>{type ==='service' ? "What I Do" : "What I Did"}</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div className='planets'
        style={{ y:yBg ,
          backgroundImage: `url(${type==='service' ? '/planets.png' : '/sun.png'})` }}
        ></motion.div>
        <motion.div style={{ x:yBg }} className='stars'></motion.div>
      </div>
  )
}

export default Paralax