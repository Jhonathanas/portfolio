import { motion } from 'framer-motion'
import './service.scss'

const variants ={
    initial:{
        x:-200,
        y:100,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1 ,
        y:0,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    }
}
const Service = () => {
  return (
    <motion.div className='service' variants={variants} initial="initial" whileInView='animate'>
        <motion.div className='textContainer' variants={variants}>
            <p>I Focus on helping your brand grow
            <br />and move forward</p>
            <hr />
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <motion.div className='title'>
                <img src='/people.webp'/>
                <h1>
                    <motion.b whileHover={{ color:'chartreuse' }}>Unique</motion.b> Ideas
                </h1>
            </motion.div>
            <motion.div className='title'>
                <h1>
                    <motion.b whileHover={{ color:'chartreuse' }}>For Your</motion.b> Business
                </h1>
                <button>WHAT WE DO?</button>
            </motion.div>
        </motion.div>
        <motion.div className='listContainer'>
            <div className='box'>
                <h2>FrontEnd Development</h2>
                <p>Craft intuitive and user-friendly interfaces. Elevate user experience through thoughtful design and interaction.</p>
                <button>GO</button>
            </div>
            <div className='box'>
                <h2>Backend Development</h2>
                <p>Build robust and scalable backend systems to power your applications. We handle the technical backbone of your project.</p>
                <button>GO</button>
            </div>
            <div className='box'>
                <h2>Full Stack</h2>
                <p>Combine the power of design and technology. From graphics to backend, we offer end-to-end solutions for your digital needs.</p>
                <button>GO</button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Service