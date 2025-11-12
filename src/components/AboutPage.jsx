import React from 'react';
import { motion } from 'framer-motion';
// import Navigation from './Navigation';
import Footer from './Footer';
import './AboutPage.css';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/src/assets/images/img1.jpg',
      description: 'Visionary leader with 10+ years in tech innovation'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/src/assets/images/img2.jpg',
      description: 'Expert in AI and machine learning technologies'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '/src/assets/images/img3.jpg',
      description: 'Fullstack developer specializing in modern frameworks'
    },
    {
      name: 'Emily Davis',
      role: 'Data Scientist',
      image: '/src/assets/images/img4.jpg',
      description: 'Analytics expert turning data into business insights'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed expectations'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'We help businesses scale and adapt to changing market demands'
    }
  ];

  return (
    <>
      {/* <Navigation /> */}
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-hero-content"
            >
              <h1>About Our Company</h1>
              <p>Transforming businesses through innovative technology solutions and data-driven insights</p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2>Our Story</h2>
                  <p>
                    Founded in 2019, we started as a small team of passionate developers and data scientists 
                    with a vision to help businesses harness the power of technology. What began as a startup 
                    in a small office has grown into a leading technology consultancy serving clients worldwide.
                  </p>
                  <p>
                    Our journey has been marked by continuous learning, innovation, and a commitment to 
                    delivering exceptional results. We've helped hundreds of companies transform their 
                    operations, improve efficiency, and achieve their digital transformation goals.
                  </p>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  src="/src/assets/images/welcome.jpeg"
                  alt="Our Story"
                  className="story-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="container">
            <div className="row">
              {stats.map((stat, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="stat-card"
                  >
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-header"
            >
              <h2>Our Values</h2>
              <p>The principles that guide everything we do</p>
            </motion.div>
            <div className="row">
              {values.map((value, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="value-card"
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-header"
            >
              <h2>Meet Our Team</h2>
              <p>The talented individuals behind our success</p>
            </motion.div>
            <div className="row">
              {team.map((member, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="team-card"
                  >
                    <img src={member.image} alt={member.name} />
                    <h4>{member.name}</h4>
                    <h5>{member.role}</h5>
                    <p>{member.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2>Our Mission</h2>
                  <p>
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage. We believe in the transformative power 
                    of technology and data, and we're committed to making these tools accessible 
                    and valuable for organizations of all sizes.
                  </p>
                  <p>
                    Through our expertise in fullstack development, data science, AI, and specialized 
                    training programs, we help our clients navigate the digital landscape and achieve 
                    their strategic objectives.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;