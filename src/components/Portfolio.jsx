
import React from 'react'
import { motion } from 'framer-motion'
import './Portfolio.css'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Finacle",
    image: "/assets/images/bank1.png",
    description: "Comprehensive banking solutions using Finacle core banking system. We implement secure, scalable financial services with real-time processing, regulatory compliance, and seamless customer experiences."
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    image: "/assets/images/ai6.png",
    description: "Advanced AI and machine learning solutions that automate processes and provide intelligent insights. From chatbots to predictive analytics, we harness the power of AI for business transformation."
  },
  {
    id: 3,
    title: "Data Science",
    image: "/assets/images/dataanalysis.png",
    description: "Data-driven insights and analytics solutions that transform raw data into actionable business intelligence. We build predictive models, dashboards, and reporting systems for informed decision-making."
  },
  {
    id: 4,
    title: "E-commerce",
    image: "/assets/images/ecommerce.png",
    description: "Complete e-commerce solutions with secure payment gateways, inventory management, and analytics. We build online stores that convert visitors into customers and drive sales growth."
  },
  {
    id: 5,
    title: "Fullstack Development",
    image: "/assets/images/fullstack.png",
    description: "End-to-end web development using modern technologies like React, Node.js, and cloud services. We create responsive, scalable applications that deliver exceptional user experiences."
  },
  {
    id: 6,
    title: "Data Analysis",
    image: "/assets/images/data1.png",
    description: "Professional data analysis and visualization services that uncover patterns, trends, and insights. We help businesses make data-driven decisions through comprehensive statistical analysis."
  }
]

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="section-heading">Our <span style={{ color: 'var(--immortal-dark)' }}>Portfolio</span></h2>
          <p className="portfolio-subtitle">
            Showcasing our innovative projects and digital solutions
          </p>
        </motion.div>

        <div className="portfolio-container">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-card"
            >
              <div className="img-container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio