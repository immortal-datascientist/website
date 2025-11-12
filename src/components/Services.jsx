import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaShoppingCart, FaLaptopCode, FaMobileAlt, FaPalette, FaChartBar, FaCloud, FaChartLine, FaHandshake, FaShieldAlt } from 'react-icons/fa'
import './Services.css'
import Industries from './Industries'

const SERVICES = [
  { title: "E-commerce Development", desc: "Custom storefronts that scale reliably with modern frameworks. Built with React, Next.js, and secure payment integrations for optimal user experience.", icon: FaShoppingCart },
  { title: "Full-Stack Development", desc: "Robust web applications with modern technology stacks. From database design to frontend interfaces, we deliver complete solutions.", icon: FaLaptopCode },
  { title: "Mobile App Development", desc: "iOS/Android native and cross-platform solutions. React Native and Flutter apps with seamless performance across all devices.", icon: FaMobileAlt },
  { title: "UI/UX Design", desc: "Human-centered, conversion-focused design experiences. Wireframing, prototyping, and user testing for intuitive digital products.", icon: FaPalette },
  { title: "Data Science & Analytics", desc: "Insights, dashboards, and ML pipeline implementations. Transform raw data into actionable business intelligence and predictive models.", icon: FaChartBar },
  { title: "Cloud & DevOps", desc: "CI/CD, Infrastructure as Code, and reliability engineering. AWS, Azure, and GCP deployments with automated scaling and monitoring.", icon: FaCloud },
  { title: "Digital Marketing", desc: "SEO/SEM strategies for performance and growth. Content marketing, social media management, and conversion optimization campaigns.", icon: FaChartLine },
  { title: "CRM Solutions", desc: "Customer journey automation and retention systems. Salesforce customization, lead nurturing, and customer lifecycle management.", icon: FaHandshake },
  { title: "Cybersecurity", desc: "Security audits, hardening, compliance, and training. Penetration testing, vulnerability assessments, and security protocol implementation.", icon: FaShieldAlt }
]

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-bg-1"></div>
      <div className="services-bg-2"></div>
      <Container fluid className="px-2 py-2">
        <Row className="g-4">
          <Col lg={6}>
            <div className="services-left card-like sticky-left">
              <h2 className="section-heading-left">SERVICES</h2>
              <p className="lead mb-3">
                We're a digital & software company delivering end-to-end solutions across 
                web development, mobile apps, data science, cloud infrastructure, and digital transformation.
              </p>
              <p className="mb-0 text-secondary">
                We constantly upskill to match the changing technology landscape while delivering 
                impeccable quality and comprehensive after-sales support.
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="services-right">
              <div className="services-scroll">
                {SERVICES.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <article className="service-item" key={index}>
                      <div className="service-media">
                        <IconComponent className="service-icon" />
                      </div>
                      <div className="service-copy">
                        <h3 className="h5 fw-bold mb-2">{service.title}</h3>
                        <p className="mb-0 text-secondary">{service.desc}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Industries />
    </section>
  )
}

export default Services