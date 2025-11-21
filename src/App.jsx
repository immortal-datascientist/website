import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero'
import About from './components/About'
import AboutPage from './components/AboutPage'
import Services from './components/Services'
import ServicesPage from './components/ServicesPage'
import Products from './components/Products'
import DevelopmentProcess from './components/DevelopmentProcess'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
// import InfoCards from './components/InfoCards'

import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import './App.css'
import Navigation from './components/Navigation'
// import DeploymentShowcase from './components/DeploymentShowcase'

function App() {
  const [loading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)

      if (isScrolled) {
        document.body.classList.add('scrolled')
        document.querySelector('.App').classList.add('scrolled')
      } else {
        document.body.classList.remove('scrolled')
        document.querySelector('.App').classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (

    <Router>

      <div className={`App ${scrolled ? 'scrolled' : ''}`}>
        <AnimatePresence>
          {loading && (
            <LoadingScreen onComplete={() => setLoading(false)} />
          )}
        </AnimatePresence>
        {!loading && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={
                  <>
                    <Navigation />
                    <Hero />
                    <About />
                    <Services />
                    <Products />
                    <DevelopmentProcess />
                    {/* <DeploymentShowcase /> */}
                    <Portfolio />
                    {/* <InfoCards /> */}
                    <Contact />
                    <Footer />
                    <ChatWidget />
                  </>
                } />
                <Route path="/about" element={<><Navigation /><AboutPage /><Footer /></>} />
                <Route path="/services" element={<><Navigation /><ServicesPage /></>} />
                <Route path="/portfolio" element={<><Navigation /><Portfolio /><Footer /></>} />
                <Route path="/contact" element={<><Navigation /><Contact /><Footer /></>} />
              </Routes>
            </motion.div>


          </>
        )}
      </div>
    </Router>
  )
}

export default App