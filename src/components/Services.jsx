import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaShoppingCart, FaLaptopCode, FaMobileAlt, FaPalette, FaChartBar, FaCloud, FaChartLine, FaHandshake, FaShieldAlt, FaUniversity, FaFileInvoiceDollar, FaUsers, FaBoxes, FaSalesforce, FaWifi, FaCogs } from 'react-icons/fa'
import './Services.css'
import Industries from './Industries'

const SERVICES = [
  { title: "E-commerce Development", desc: "Custom storefronts that scale reliably with modern frameworks. Built with React, Next.js, and secure payment integrations for optimal user experience.", icon: FaShoppingCart },
  { title: "Full-Stack Development", desc: "Robust web applications with modern technology stacks. From database design to frontend interfaces, we deliver complete solutions.", icon: FaLaptopCode },
  { title: "Mobile App Development", desc: "iOS/Android native and cross-platform solutions. React Native and Flutter apps with seamless performance across all devices.", icon: FaMobileAlt },
  { title: "Finacle UBS", desc: "Universal Banking Solution implementation and customization. Core banking modules, treasury management, and regulatory compliance solutions.", icon: FaUniversity },
  { title: "Customized Billing Software", desc: "Tailored billing and invoicing solutions with automated workflows. GST compliance, multi-currency support, and integrated payment gateways.", icon: FaFileInvoiceDollar },
  { title: "Payroll Management", desc: "Comprehensive HR and payroll systems with attendance tracking. Automated salary processing, tax calculations, and compliance reporting.", icon: FaUsers },
  { title: "Inventory Management", desc: "Real-time stock tracking and warehouse management systems. Automated reordering, barcode scanning, and supply chain optimization.", icon: FaBoxes },
  { title: "Salesforce Solutions", desc: "CRM implementation, customization, and integration services. Lead management, sales automation, and customer relationship optimization.", icon: FaSalesforce },
  { title: "IoT Solutions", desc: "Internet of Things development and deployment. Smart device connectivity, sensor integration, and real-time data monitoring systems.", icon: FaWifi },
  { title: "SAP Implementation", desc: "Enterprise resource planning with SAP modules. Business process optimization, system integration, and user training programs.", icon: FaCogs },
  { title: "UI/UX Design", desc: "Human-centered, conversion-focused design experiences. Wireframing, prototyping, and user testing for intuitive digital products.", icon: FaPalette },
  { title: "Data Science & Analytics", desc: "Insights, dashboards, and ML pipeline implementations. Transform raw data into actionable business intelligence and predictive models.", icon: FaChartBar },
  { title: "Cloud & DevOps", desc: "CI/CD, Infrastructure as Code, and reliability engineering. AWS, Azure, and GCP deployments with automated scaling and monitoring.", icon: FaCloud },
  { title: "Digital Marketing", desc: "SEO/SEM strategies for performance and growth. Content marketing, social media management, and conversion optimization campaigns.", icon: FaChartLine },
  { title: "Cybersecurity", desc: "Security audits, hardening, compliance, and training. Penetration testing, vulnerability assessments, and security protocol implementation.", icon: FaShieldAlt }
]

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-bg-1"></div>
      <div className="services-bg-2"></div>
      <Container fluid className="px-2 py-2">
        <div className="text-center mb-5">
          <h2 className="section-heading">Our Services</h2>
        </div>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <div className="services-left card-like sticky-left">
              <h3 className="section-heading-left">We Are Providing Services</h3>
              <p className="lead mb-3">
                We're a digital & software company delivering end-to-end solutions across
                web development, mobile apps, data science, cloud infrastructure, and digital transformation.
                We focus on building scalable, high-performance solutions tailored to your business goals.
                Our team combines innovation, precision, and modern technology to deliver impactful results that drive growth.
              </p>
              <p className="mb-0 text-secondary">
                We constantly upskill to match the changing technology landscape while delivering impeccable quality and comprehensive after-sales support.
                Comprehensive solutions designed to streamline your business operations and drive growth.
                We focus on building future-ready systems that enhance efficiency and adaptability.
                Our team follows industry-best practices to ensure reliability, security, and long-term value.
                With a customer-centric approach, we ensure seamless implementation and measurable results for your organization.
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