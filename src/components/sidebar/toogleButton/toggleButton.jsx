import { motion } from "framer-motion";
const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => { 
      setOpen((prev) => !prev);
    }}>
      <svg width="23" height='23' viewBox="0 0 23 23">
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
      </svg>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          d="M2 3h19"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
          d="M2 10h19"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
          d="M2 17h19"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

export default ToggleButton