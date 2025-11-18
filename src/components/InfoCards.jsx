import { motion } from 'framer-motion'
import './InfoCards.css'

const InfoCards = () => {
  const infoCardsData = [
    {
      title: 'Web Development',
      kingdom: 'Frontend & Backend',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      description: 'Modern web applications built with cutting-edge technologies like React, Node.js, and cloud services. We create responsive, scalable solutions.',
      insetImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=150&fit=crop'
    },
    {
      title: 'Mobile Apps',
      kingdom: 'iOS & Android',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      insetImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=150&fit=crop'
    },
    {
      title: 'Cloud Solutions',
      kingdom: 'AWS & Azure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      description: 'Scalable cloud infrastructure and services that grow with your business needs and ensure maximum uptime.',
      insetImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=150&fit=crop'
    },
    {
      title: 'AI & ML',
      kingdom: 'Intelligence',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop',
      description: 'Artificial Intelligence and Machine Learning solutions that automate processes and provide intelligent insights.',
      insetImage: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=200&h=150&fit=crop'
    },
    {
      title: 'UI/UX Design',
      kingdom: 'User Experience',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      description: 'Beautiful, intuitive designs that enhance user engagement and create memorable digital experiences.',
      insetImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=200&h=150&fit=crop'
    },
    {
      title: 'E-Commerce',
      kingdom: 'Digital Commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Complete e-commerce solutions with secure payment gateways, inventory management, and analytics.',
      insetImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=150&fit=crop'
    },
    {
      title: 'DevOps',
      kingdom: 'Automation',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop',
      description: 'Streamlined development and deployment processes with CI/CD pipelines and infrastructure automation.',
      insetImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop'
    },
    {
      title: 'Consulting',
      kingdom: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      description: 'Expert technology consulting to help you make informed decisions and optimize your digital transformation.',
      insetImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=150&fit=crop'
    }
  ]

  return (
    <section className="info-cards-section">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="info-cards-header"
        >
          <h2 className="section-heading">
            Our <span style={{ color: 'var(--immortal-dark)' }}>Services</span>
          </h2>
        </motion.div>

        <div className="info-cards-grid">
          {infoCardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="info-card-wrap animate pop"
            >
              <div className="overlay">
                <div className="overlay-content animate slide-left delay-2">
                  <h1 className="animate slide-left pop delay-4">{card.title}</h1>
                  <p className="animate slide-left pop delay-5" style={{ color: 'white', marginBottom: '2.5rem' }}>
                    Domain: <em>{card.kingdom}</em>
                  </p>
                </div>
                <div className="image-content animate slide delay-5" style={{ backgroundImage: `url(${card.image})` }}></div>
                <div className="dots animate">
                  <div className="dot animate slide-up delay-6"></div>
                  <div className="dot animate slide-up delay-7"></div>
                  <div className="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div className="text">
                <p>
                  <img className="inset" src={card.insetImage} alt="" />
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfoCards