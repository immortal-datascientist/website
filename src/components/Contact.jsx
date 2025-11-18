import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from 'lucide-react'
import './Contact.css'
import { HeartPulseFill } from 'react-bootstrap-icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hr@ifit.co.in',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=hr@ifit.co.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '9159855985 | 9159159448 | 9087875353',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '26, Gandhi Nagar, 2nd Cross, College Road, Musiri, Tiruchirapalli, Tamilnadu-621211',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/immortal-future-infotech-india-private-limited/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/919087875353', label: 'WhatsApp' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hr@ifit.co.in', label: 'Email' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="section-heading">
            Get In <span style={{ color: 'var(--immortal-dark)' }}>Touch</span>
          </h2>
          <p className="contact-subtitle">
            Ready to start your next project? Let's discuss how we can help
            bring your vision to life with our cutting-edge solutions.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <h3 className="form-title">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="form-submit"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-info-card">
              <h3 className="info-title">
                Contact Information
              </h3>

              <div className="info-items">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ scale: 1.02 }}
                    className="info-item"
                  >
                    <div className="info-icon">
                      <item.icon size={20} />
                    </div>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-info-card">
              <h3 className="info-title">
                Follow Us
              </h3>

              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Logo */}

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact