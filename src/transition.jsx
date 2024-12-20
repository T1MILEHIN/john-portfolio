/* eslint-disable react/display-name */
import { motion } from "framer-motion";

const transition = (Components) => {
  return () => (
    <>
      <Components />
      <motion.div className="slide-in z-[99999999999]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>
      <motion.div className="slide-out z-[99999999999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>
    </>
  )
}

export default transition;