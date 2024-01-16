import Links from './links/links'
import ToggleButton from './toogleButton/toggleButton'
import './sidebar.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Sidebar = () => {
  const [open,setOpen] = useState(false);

  const variant = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
          type: "spring",
          stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping:40,
        },
    },
  };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={variant}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar