import { Container, Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import './About.css'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "FULLSTACK DEVELOPMENT",
      description: "We specialize in end-to-end web development using modern technologies like React, Node.js, and cloud platforms. Our team creates responsive, scalable applications that deliver exceptional user experiences across all devices. From frontend interfaces to backend APIs, we handle every aspect of development with precision and expertise. We follow industry best practices and agile methodologies to ensure timely delivery and maintainable code. Our fullstack solutions are designed to grow with your business and adapt to changing market demands.End-to-end development covering both front-end and back-end technologies. Build scalable, secure, and responsive web applications from scratch.",
      image: "/assets/images/web-devs.jpg"
    },
    {
      title: "DATA SCIENCE & ANALYTICS",
      description: "Transform your raw data into actionable insights with our comprehensive data science solutions. We build robust data pipelines, implement machine learning models, and create intelligent analytics dashboards that drive business decisions. Our expertise spans from data collection and preprocessing to advanced predictive modeling and visualization. We help organizations unlock the hidden value in their data through statistical analysis, pattern recognition, and automated reporting systems. Our data-driven approach ensures measurable results and competitive advantages in today's data-centric world. Transform raw data into actionable insights using statistics, ML, and visualization.Helps organizations make smarter, data-driven decisions.",
      image: "/assets/images/datascience.png"
    },
    {
      title: "FINACLE TRAINING",
      description: "Master the world's leading core banking solution with our comprehensive Finacle training programs. We provide hands-on experience with Finacle's complete suite including Corporate Internet Banking, Retail Banking, Treasury, and Risk Management modules. Our expert trainers guide you through real-world scenarios, configuration techniques, and best practices used in major banking institutions. Whether you're a banking professional, IT specialist, or fresh graduate, our structured curriculum ensures you gain practical skills in Finacle implementation, customization, and support. Hands-on training for core banking operations using the Finacle platform. Designed for banking professionals to master CBS workflows and modules.",
      image: "/assets/images/finance.jpg"
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      description: "Harness the power of artificial intelligence to revolutionize your business operations. Our AI solutions include machine learning algorithms, natural language processing, computer vision, and predictive analytics. We develop intelligent systems that automate complex processes, enhance decision-making, and provide personalized user experiences. From chatbots and recommendation engines to advanced neural networks, our AI expertise helps businesses stay competitive in the digital age. Transform your data into intelligent insights and automated solutions that drive innovation and efficiency. Develop intelligent systems that learn, adapt, and automate complex tasks. Used to enhance decision-making, efficiency, and customer experiences.",
      image: "/assets/images/ai5.png"
    },
    {
      title: "IOT SOLUTIONS",
      description: "Connect and control your physical world with our comprehensive Internet of Things solutions. We design and implement smart device ecosystems that collect real-time data, automate processes, and provide remote monitoring capabilities. Our IoT expertise covers sensor integration, device connectivity, cloud platforms, and mobile applications. From smart homes and industrial automation to healthcare monitoring and environmental sensing, we create intelligent networks that transform how businesses operate and interact with their environment. Connect and manage smart devices with cloud-based IoT integrations. Enables automation, monitoring, and real-time data exchange across systems.",
      image: "/assets/images/iot1.png"
    },
    {
      title: "SALESFORCE SOLUTIONS",
      description: "Maximize your customer relationships with our expert Salesforce implementation and customization services. We help businesses leverage the full power of Salesforce CRM to streamline sales processes, enhance customer service, and drive marketing automation. Our certified consultants provide end-to-end solutions including system setup, data migration, custom development, and user training. Transform your customer management with powerful analytics, workflow automation, and integrated communication tools that boost productivity and revenue growth. Implement and customize Salesforce CRM to streamline sales and customer operations. Improve productivity with automation, dashboards, and cloud-based workflows.",
      image: "/assets/images/sales.png"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="about-section container-fluid">
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      <Container fluid >
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="mb-3">
            <h2 className="section-heading">About Us</h2>
          </Col>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-100"
            >
              <Row className="align-items-center g-3 justify-content-center">
                <Col lg={5}>
                  <div className="about-box rounded-4 p-4">
                    <h3 className="fw-bold text-dark mb-3">{slides[currentSlide].title}</h3>
                    <p className="text-muted mb-4 about-description">{slides[currentSlide].description}</p>
                    <div className="d-flex gap-2">
                      {slides.map((_, index) => (
                        <div
                          key={index}
                          className={`rounded-circle ${index === currentSlide ? 'bg-primary' : 'bg-secondary bg-opacity-50'}`}
                          style={{ width: '8px', height: '8px' }}
                        />
                      ))}
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="img-fluid rounded-4 shadow-lg"
                      style={{ maxWidth: '470px', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                </Col>
              </Row>
            </motion.div>
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  )
}

export default About