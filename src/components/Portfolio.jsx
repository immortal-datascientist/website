import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import './Portfolio.css'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "E-commerce",
    image: "/assets/images/ecommerce.png",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    image: "/assets/images/ai6.png",
    category: "AI"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    image: "/assets/images/dataanalysis.png",
    category: "Data Science"
  },
  {
    id: 4,
    title: "Banking",
    image: "/assets/images/bank1.png",
    category: "Finacle"
  },
  {
    id: 5,
    title: "Website Development",
    image: "/assets/images/fullstack.png",
    category: "Fullstack Development"
  },
  {
    id: 6,
    title: "Data Analysis",
    image: "/assets/images/data1.png",
    category: "Web Development"
  }
]

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  const modalVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section className="portfolio-section">
      <div className="portfolio-blob-1"></div>
      <div className="portfolio-blob-2"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="section-heading">Portfolio</h2>
          <p className="portfolio-subtitle">
            Showcasing our innovative projects and digital solutions that have transformed businesses worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="portfolio-grid"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`portfolio-card card-${index + 1}`}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <div className="card-overlay">
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <span className="category">{item.category}</span>
                  </div>
                  {/* <button
                    className="expand-btn"
                    onClick={() => setSelectedItem(item)}
                  >
                    +
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="portfolio-expanded-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="portfolio-expanded-content"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="expanded-close"
                  onClick={() => setSelectedItem(null)}
                >
                  ×
                </button>
                <img src={selectedItem.image} alt={selectedItem.title} />
                <div className="expanded-text">
                  <h3>{selectedItem.title}</h3>
                  <p>{selectedItem.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>


    </section>
  )
}

export default Portfolio