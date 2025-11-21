import React from 'react'
import { FaCode, FaRocket, FaCloud, FaCheckCircle, FaCogs } from 'react-icons/fa'
import './DeploymentShowcase.css'

const DeploymentShowcase = () => {
  return (
    <div className="deployment-showcase">
      <header className="site-header">
        <h1 className="sr-only">Our Development Process</h1>
        
        <div className="fieldset-wrapper">
          <fieldset>
            <legend className="sr-only">Effects</legend>
            
            <input type="radio" id="blink-effect" name="effect" value="blink" defaultChecked className="sr-only" />
            <label htmlFor="blink-effect">Blink</label>
            
            <input type="radio" id="horizontal-scroll-effect" name="effect" value="horizontal-scroll" className="sr-only" />
            <label htmlFor="horizontal-scroll-effect">Horizontal scroll</label>
            
            <input type="radio" id="backwards-scroll-effect" name="effect" value="backwards-scroll" className="sr-only" />
            <label htmlFor="backwards-scroll-effect">Backwards scroll</label>
            
            <input type="radio" id="zoom-scroll-effect" name="effect" value="zoom-scroll" className="sr-only" />
            <label htmlFor="zoom-scroll-effect">Zoom scroll</label>
          </fieldset>
        </div>
        
        <nav>
          <ul className="indicator">
            <li><a href="#planning"><span className="sr-only">Planning</span></a></li>
            <li><a href="#development"><span className="sr-only">Development</span></a></li>
            <li><a href="#testing"><span className="sr-only">Testing</span></a></li>
            <li><a href="#deployment"><span className="sr-only">Deployment</span></a></li>
            <li><a href="#support"><span className="sr-only">Support</span></a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="planning" className="section">
          <div className="content">
            <h2><strong>First</strong>, we analyze your <em>requirements</em></h2>
            <div className="text">
              <FaCogs className="process-icon" />
              <p>We begin with comprehensive project analysis and strategic planning. Our team evaluates your business needs, technical requirements, and creates a detailed roadmap for successful delivery.</p>
              <p>We establish clear milestones, select optimal technologies, and design scalable architecture that aligns with your long-term business objectives.</p>
            </div>
          </div>
        </section>
        
        <section id="development" className="section">
          <div className="content">
            <h2><strong>Next</strong>, we build with <em>modern</em> technologies</h2>
            <div className="text">
              <FaCode className="process-icon" />
              <p>Our developers create robust, scalable solutions using cutting-edge frameworks and best practices. We follow agile methodologies with continuous integration and rigorous code reviews.</p>
              <p>Every line of code is crafted with performance, security, and maintainability in mind, ensuring your application stands the test of time.</p>
            </div>
          </div>
        </section>
        
        <section id="testing" className="section">
          <div className="content">
            <h2><strong>Then</strong>, we ensure <em>quality</em> through testing</h2>
            <div className="text">
              <FaCheckCircle className="process-icon" />
              <p>Comprehensive testing guarantees reliability and performance. We conduct unit tests, integration tests, security audits, and user acceptance testing.</p>
              <p>Our QA process includes automated testing pipelines, performance optimization, and thorough security assessments before deployment.</p>
            </div>
          </div>
        </section>
        
        <section id="deployment" className="section">
          <div className="content">
            <h2><strong>Finally</strong>, we deploy to <em>production</em></h2>
            <div className="text">
              <FaCloud className="process-icon" />
              <p>We deploy your application with zero downtime using modern DevOps practices. Our team ensures optimal performance, scalability, and monitoring across cloud platforms.</p>
              <p>Automated deployment pipelines, infrastructure as code, and comprehensive monitoring ensure your application runs smoothly in production.</p>
            </div>
          </div>
        </section>
        
        <section id="support" className="section">
          <div className="content">
            <h2><strong>Always</strong>, we provide <em>ongoing</em> support</h2>
            <div className="text">
              <FaRocket className="process-icon" />
              <p>Your success is our priority. We provide continuous support, maintenance, and feature enhancements to ensure your application evolves with your business needs.</p>
              <p>Our dedicated support team monitors performance, implements updates, and provides technical assistance whenever you need it.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <p>Ready to start your project? <span className="emoji">🚀</span></p>
      </footer>
    </div>
  )
}

export default DeploymentShowcase