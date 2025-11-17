import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-blob-1"></div>
      <div className="footer-blob-2"></div>

      <div className="container-fluid">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4">
            <Col lg={4} md={6}>
              <motion.div variants={itemVariants} className="footer-brand">
                <img src="/assets/images/Company_logo.png" alt="Company Logo" className="footer-logo" />
                <p className="brand-tagline">
                  Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
                </p>

              </motion.div>
            </Col>

            <Col lg={2} md={6}>
              <motion.div variants={itemVariants} className="footer-links">
                <h5>Services</h5>
                <ul>
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">Mobile Apps</a></li>
                  <li><a href="#services">UI/UX Design</a></li>
                  <li><a href="#services">Data Science</a></li>
                </ul>
              </motion.div>
            </Col>

            <Col lg={2} md={6}>
              <motion.div variants={itemVariants} className="footer-links">
                <h5>Industries</h5>
                <ul>
                  <li><a href="#industries">Fullstack Development</a></li>
                  <li><a href="#industries">Finacle</a></li>
                  <li><a href="#industries">E-commerce</a></li>
                  <li><a href="#industries">Education</a></li>
                </ul>
              </motion.div>
            </Col>

            <Col lg={2} md={6}>
              <motion.div variants={itemVariants} className="footer-links">
                <h5>Company</h5>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </motion.div>
            </Col>

            <Col lg={2} md={6}>
              <motion.div variants={itemVariants} className="footer-contact">
                <h5>Contact Info</h5>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Tamilnadu, India</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>hr@ifit.co.in</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 9087875353</span>
                </div>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            variants={itemVariants}
            className="footer-bottom"
          >
            <Row className="align-items-center">
              <Col md={6}>
                <p className="copyright">
                  © {currentYear} Company Name. All rights reserved.
                </p>
              </Col>
              <Col md={6}>
                <div className="footer-bottom-links">
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                  <a href="#cookies">Cookie Policy</a>
                </div>
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer