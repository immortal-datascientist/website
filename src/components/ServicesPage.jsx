import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import Navigation from './Navigation';
import Footer from './Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();
  const serviceDetailsRef = useRef(null);

  const handleServiceClick = (index) => {
    setActiveService(index);
    serviceDetailsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      icon: "💻",
      shortDesc: "End-to-end web applications with modern technology stacks",
      fullDesc: "We build robust, scalable web applications using cutting-edge technologies like React, Node.js, Python, and cloud platforms. Our full-stack solutions cover everything from responsive frontend interfaces to powerful backend APIs and database architecture.",
      features: ["React & Vue.js Frontend", "Node.js & Python Backend", "Database Design & Optimization", "API Development & Integration", "Cloud Deployment & Scaling"],
      image: "/assets/images/fullsk.png",
      technologies: ["React", "Node.js", "Python", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      icon: "📊",
      shortDesc: "Transform data into actionable business insights",
      fullDesc: "Our data science team helps organizations unlock the value in their data through advanced analytics, machine learning models, and intelligent dashboards. We create data pipelines that turn raw information into strategic advantages.",
      features: ["Machine Learning Models", "Predictive Analytics", "Data Visualization", "Business Intelligence", "Real-time Dashboards"],
      image: "/assets/images/data22.png",
      technologies: ["Python", "R", "TensorFlow", "Tableau", "Power BI", "Apache Spark"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      icon: "📱",
      shortDesc: "Native and cross-platform mobile solutions",
      fullDesc: "We develop high-performance mobile applications for iOS and Android platforms. Whether you need native apps for optimal performance or cross-platform solutions for faster deployment, we deliver exceptional mobile experiences.",
      features: ["iOS Native Development", "Android Native Development", "React Native Apps", "Flutter Development", "App Store Optimization"],
      image: "/assets/images/app1.png",
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Redux"]
    },
    {
      id: 4,
      title: "IoT Solutions",
      icon: "🌐",
      shortDesc: "Internet of Things development and smart device connectivity",
      fullDesc: "Connect and control your physical world with our comprehensive IoT solutions. We design smart device ecosystems, sensor integration, and real-time monitoring systems that transform how businesses operate and interact with their environment.",
      features: ["Smart Device Integration", "Sensor Networks", "Real-time Monitoring", "Cloud Connectivity", "Mobile Control Apps"],
      image: "/assets/images/iot1.png",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT", "Node-RED", "InfluxDB"]
    },
    {
      id: 7,
      title: "Salesforce Solutions",
      icon: "⚡",
      shortDesc: "CRM implementation and customization services",
      fullDesc: "Maximize your customer relationships with expert Salesforce implementation and customization. We help businesses leverage CRM power to streamline sales processes, enhance customer service, and drive marketing automation with integrated workflows.",
      features: ["CRM Implementation", "Sales Automation", "Custom Development", "Data Migration", "User Training"],
      image: "/assets/images/sales.png",
      technologies: ["Salesforce", "Apex", "Lightning", "Visualforce", "SOQL", "REST APIs"]
    },
    {
      id: 8,
      title: "SAP Implementation",
      icon: "🏢",
      shortDesc: "Enterprise resource planning and business process optimization",
      fullDesc: "Transform your business operations with comprehensive SAP implementation services. We provide end-to-end ERP solutions, system integration, and process optimization to streamline your enterprise workflows and enhance operational efficiency.",
      features: ["ERP Implementation", "Module Configuration", "System Integration", "Process Optimization", "User Training"],
      image: "/assets/images/sap1.png",
      technologies: ["SAP ERP", "SAP HANA", "ABAP", "SAP Fiori", "SAP S/4HANA", "SAP BW"]
    },
    {
      id: 5,
      title: "Cloud Infrastructure",
      icon: "☁️",
      shortDesc: "Scalable cloud solutions and DevOps",
      fullDesc: "We design and implement robust cloud infrastructure that scales with your business. Our DevOps practices ensure reliable deployments, monitoring, and maintenance of your applications in the cloud.",
      features: ["AWS/Azure/GCP Setup", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
      image: "/assets/images/cloud.png",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"]
    },
    {
      id: 6,
      title: "Finacle Training",
      icon: "🏦",
      shortDesc: "Comprehensive banking software training",
      fullDesc: "Master Finacle, the world's leading core banking solution, with our expert-led training programs. We provide hands-on experience with real-world banking scenarios and industry best practices.",
      features: ["Core Banking Modules", "Internet Banking", "Treasury Management", "Risk Management", "Certification Programs"],
      image: "/assets/images/finacleimgg.png",
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

        {/* Stacked Services Cards */}
        <section className="c-services">
          <h1 className="c-services__title">Our Services</h1>

          <div className="c-services__list">
            {services.map((service, index) => (
              <article key={service.id} className="c-services__item">
                <figure className="c-services__item-figure">
                  <img src={service.image} alt={service.title} />
                </figure>

                <div className="c-services__item-info">
                  <h2 className="c-services__item-title">{service.title}</h2>
                  <p className="c-services__item-subtitle">{service.shortDesc}</p>
                  <p className="c-services__item-excerpt">{service.fullDesc}</p>

                  <div className="c-services__item-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">• {feature}</span>
                    ))}
                  </div>

                  <button
                    className="c-services__item-link"
                    onClick={() => handleServiceClick(index)}
                  >
                    Learn More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Selected Service Details */}
        <section className="service-details-section" ref={serviceDetailsRef}>
          <div className="container-fluid">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="selected-service-details"
            >
              <h3>{services[activeService].title} - Full Details</h3>
              <div className="service-tech-stack">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {services[activeService].technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="service-all-features">
                <h4>All Features:</h4>
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} className="feature-item">• {feature}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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