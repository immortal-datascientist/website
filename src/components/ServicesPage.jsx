import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import Navigation from './Navigation';
import Footer from './Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      icon: "💻",
      shortDesc: "End-to-end web applications with modern technology stacks",
      fullDesc: "We build robust, scalable web applications using cutting-edge technologies like React, Node.js, Python, and cloud platforms. Our full-stack solutions cover everything from responsive frontend interfaces to powerful backend APIs and database architecture.",
      features: ["React & Vue.js Frontend", "Node.js & Python Backend", "Database Design & Optimization", "API Development & Integration", "Cloud Deployment & Scaling"],
      image: "/assets/images/web-devs.jpg",
      technologies: ["React", "Node.js", "Python", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      icon: "📊",
      shortDesc: "Transform data into actionable business insights",
      fullDesc: "Our data science team helps organizations unlock the value in their data through advanced analytics, machine learning models, and intelligent dashboards. We create data pipelines that turn raw information into strategic advantages.",
      features: ["Machine Learning Models", "Predictive Analytics", "Data Visualization", "Business Intelligence", "Real-time Dashboards"],
      image: "/assets/images/datascience.png",
      technologies: ["Python", "R", "TensorFlow", "Tableau", "Power BI", "Apache Spark"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      icon: "📱",
      shortDesc: "Native and cross-platform mobile solutions",
      fullDesc: "We develop high-performance mobile applications for iOS and Android platforms. Whether you need native apps for optimal performance or cross-platform solutions for faster deployment, we deliver exceptional mobile experiences.",
      features: ["iOS Native Development", "Android Native Development", "React Native Apps", "Flutter Development", "App Store Optimization"],
      image: "/assets/images/mob-app-dev.jpg",
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Redux"]
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      icon: "🤖",
      shortDesc: "AI-powered solutions for business automation",
      fullDesc: "Harness the power of artificial intelligence to automate processes, enhance decision-making, and create intelligent user experiences. Our AI solutions include chatbots, recommendation systems, and predictive models.",
      features: ["Natural Language Processing", "Computer Vision", "Chatbot Development", "Recommendation Systems", "Predictive Modeling"],
      image: "/assets/images/ai5.png",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "scikit-learn", "NLTK"]
    },
    {
      id: 5,
      title: "Cloud Infrastructure",
      icon: "☁️",
      shortDesc: "Scalable cloud solutions and DevOps",
      fullDesc: "We design and implement robust cloud infrastructure that scales with your business. Our DevOps practices ensure reliable deployments, monitoring, and maintenance of your applications in the cloud.",
      features: ["AWS/Azure/GCP Setup", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
      image: "/assets/images/service-three-bg.jpg",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"]
    },
    {
      id: 6,
      title: "Finacle Training",
      icon: "🏦",
      shortDesc: "Comprehensive banking software training",
      fullDesc: "Master Finacle, the world's leading core banking solution, with our expert-led training programs. We provide hands-on experience with real-world banking scenarios and industry best practices.",
      features: ["Core Banking Modules", "Internet Banking", "Treasury Management", "Risk Management", "Certification Programs"],
      image: "/assets/images/finance.jpg",
      technologies: ["Finacle", "Oracle", "Java", "SQL", "Banking APIs", "Financial Systems"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user experience"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution with rigorous testing at every stage"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing maintenance"
    }
  ];

  return (
    <>
      {/* <Navigation /> */}
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container-fluid">

          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container-fluid">
            <h1 className='service'>Our Services</h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-header"
            >
              <h2>What We Offer</h2>
              <p>Cutting-edge solutions tailored to your business needs</p>
            </motion.div>

            <div className="services-circles-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="service-circle"
                  onClick={() => setActiveService(index)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-circle-image"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* Selected Service Details */}
        < section className="service-details-section" >
          <div className="container-fluid">
            <div className="service-connection-wrapper">
              <div className="connection-line"></div>
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="selected-service-card"
              >
                <div className="service-header">
                  {/* <div className="service-icon-large">{services[activeService].icon}</div> */}
                  <h3>{services[activeService].title}</h3>
                </div>
                <div className="service-features-list">
                  {services[activeService].features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="feature-line"
                    >
                      <span className="feature-bullet">•</span>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section >

        {/* Process Section */}
        {/* < section className="process-section" >
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-header"
            >
              <h2>Our Process</h2>
              <p>How we deliver exceptional results</p>
            </motion.div>

            <div className="process-grid">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="process-card"
                >
                  <div className="process-step">{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section > */}

        {/* CTA Section */}
        < section className="services-cta" >
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="cta-content"
            >
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how our services can help transform your business</p>
              <button className="cta-button" onClick={() => navigate('/contact')}>Contact Us Today</button>
            </motion.div>
          </div>
        </section >
      </div >
      <Footer />
    </>
  );
};

export default ServicesPage;