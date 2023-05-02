import { motion } from "framer-motion"

type RenderMotionProps = {
  children: React.ReactNode
  delay?: number
}

const RenderMotion: React.FC<RenderMotionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        marginTop: "-10px",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        duration: 0.56,
        delay,
      }}
      animate={{
        opacity: 1,
        marginTop: 0,
      }}
    >
      {children}
    </motion.div>
  )
}

export default RenderMotion
