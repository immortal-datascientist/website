import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GradualSpacing } from './GradualSpacing'
import './Hero.css'

const IMAGES = [
  '/assets/images/ai1.jpg',
  '/assets/images/point-girl.jpg',
  // '/src/assets/images/point-girl.jpg',
  '/assets/images/women-with-laptop.jpg'
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const buttonContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const buttonItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Hero = () => {
  const [idx, setIdx] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % IMAGES.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero-section">
      <div className="container-fluid px-2 py-2 d-flex justify-content-center">
        <div className="hero-wrap">
          <div className="hero-left">
            <h1 className="hero-title">
              <div className="animated-text">
                <GradualSpacing
                  text="Immortal Future"
                  className="text-line hero-text-primary"
                  delay={0}
                />
                <GradualSpacing
                  text="Infotech"
                  className="text-line highlight-line hero-text-highlight"
                  delay={1.4}
                />
              </div>
            </h1>

            <motion.p
              className="hero-sub"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              At Immortal Future Infotech, we craft digital solutions that transcend time and technology boundaries.
              Our innovative approach combines cutting-edge development with timeless design principles to deliver
              exceptional web experiences. We believe in creating technology that evolves with your business needs,
              ensuring your digital presence remains future-ready and competitive.
            </motion.p>

            <motion.div
              className="btn-row"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 3.6 }}
            >
              <button className="btn primary" onClick={() => navigate('/services')}>
                Explore Services
              </button>
              <button className="btn ghost" onClick={() => navigate('/contact')}>
                Get Started
              </button>
            </motion.div>
          </div>

          <div className="hero-right">
            <div className="phone">
              <div className="phone-bevel" />
              <div className="phone-screen">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={IMAGES[idx]}
                    src={IMAGES[idx]}
                    alt="feature"
                    className="slide"
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                    exit={{ opacity: 0, scale: 0.98, y: -10, transition: { duration: 0.4, ease: 'easeIn' } }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero