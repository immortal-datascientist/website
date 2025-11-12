import { motion } from 'framer-motion'
import { useEffect } from 'react'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
    >
      <div className="loading-content">


        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen;