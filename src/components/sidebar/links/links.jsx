import { motion } from "framer-motion";

const variants = {
  open:{
    transition:{
      staggerChildren:0.1,
    },
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    },
  },
};

  const itemVariants = {
    open:{
      transition:{
        staggeredChildren:0.1,
      },
    },
    closed:{
      transition:{
        staggeredChildren:0.05,
        staggeredDirection:-1
      }
    }}

const Links = () => {
  const items = ["Homepage", "Service", "Portofolio", "Contact", "About"];

  

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item)=> (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{  scale:1.1 }} whileTap={{ scale:0.9 }}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links