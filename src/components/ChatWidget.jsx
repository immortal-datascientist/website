import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile) {
      setShowForm(false);
      setMessages([
        {
          type: 'bot',
          text: `Hello ${formData.name}! How can I assist you today?`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('service') || message.includes('what do you do')) {
      return 'We offer Full-Stack Development, Data Science & Analytics, Mobile App Development, AI Solutions, Cloud Infrastructure, and Finacle Training. Which service interests you?';
    }
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return 'Our pricing varies based on project requirements. Please contact us for a detailed quote tailored to your needs.';
    }
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return 'You can reach us at: Email: hr@ifit.co.in | Phone: +91 9087875353 | Location: Musiri, Tiruchirapalli, Tamilnadu - 621211';
    }
    if (message.includes('web development') || message.includes('website')) {
      return 'We create modern, responsive websites using React, Node.js, Python, and cloud platforms. We handle everything from frontend to backend development.';
    }
    if (message.includes('mobile app') || message.includes('app development')) {
      return 'We develop native iOS/Android apps and cross-platform solutions using React Native and Flutter with optimal performance.';
    }
    if (message.includes('ai') || message.includes('artificial intelligence')) {
      return 'Our AI services include chatbots, recommendation systems, computer vision, NLP, and predictive modeling using TensorFlow and PyTorch.';
    }
    if (message.includes('data science') || message.includes('analytics')) {
      return 'We provide machine learning models, predictive analytics, data visualization, and business intelligence solutions to unlock your data value.';
    }
    if (message.includes('finacle') || message.includes('banking')) {
      return 'We offer comprehensive Finacle training covering core banking modules, internet banking, treasury management, and risk management with certification.';
    }
    if (message.includes('cloud') || message.includes('aws') || message.includes('devops')) {
      return 'We provide cloud infrastructure setup on AWS/Azure/GCP, CI/CD pipelines, container orchestration, and infrastructure as code.';
    }
    if (message.includes('portfolio') || message.includes('projects') || message.includes('work')) {
      return 'We have successfully delivered projects in e-commerce, AI solutions, analytics dashboards, banking systems, and full-stack applications!';
    }
    if (message.includes('team') || message.includes('company') || message.includes('about')) {
      return 'Immortal Future Infotech transforms ideas into digital reality with cutting-edge technology. We believe in creating technology that evolves with your business needs.';
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! Welcome to Immortal Future Infotech. How can I help you today? Ask me about our services, pricing, or anything else!';
    }
    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re welcome! Is there anything else I can help you with regarding our services?';
    }

    return 'I\'d be happy to help! You can ask me about our services (web development, mobile apps, AI, data science, cloud, Finacle training), pricing, contact information, or our portfolio. What would you like to know?';
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      const newMessage = {
        type: 'user',
        text: currentMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      const userMsg = currentMessage;
      setCurrentMessage('');

      // Generate intelligent bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: getBotResponse(userMsg),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="chat-widget-button" onClick={() => {
        console.log('Chat button clicked!');
        setIsOpen(true);
      }}>
        <FaComments />
        <span className="chat-badge">We are here!</span>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <div className="avatar-icon">AI</div>
                  <div className="online-indicator"></div>
                </div>
                <div className="chat-title">
                  <h4>Immortal Future Infotech</h4>
                  <span>AI Assistant</span>
                </div>
              </div>
              <button className="chat-close" onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Content */}
            <div className="chat-content">
              {showForm ? (
                <div className="chat-form-container">
                  <div className="chat-welcome">
                    <h3>Customer Support</h3>
                    <p>Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>
                  </div>
                  <form onSubmit={handleFormSubmit} className="chat-form">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                    />
                    <button type="submit" className="chat-submit-btn">
                      Start Chat
                    </button>
                  </form>
                </div>
              ) : (
                <div className="chat-messages">
                  <div className="messages-container">
                    {messages.map((message, index) => (
                      <div key={index} className={`message ${message.type}`}>
                        {message.type === 'bot' && (
                          <div className="message-avatar">
                            <div className="bot-avatar">AI</div>
                          </div>
                        )}
                        <div className="message-content">
                          <div className="message-bubble">
                            {message.text}
                          </div>
                          <div className="message-time">{message.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSendMessage} className="chat-input-form">
                    <input
                      type="text"
                      placeholder="Write a reply..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      className="chat-input"
                    />
                    <button type="submit" className="chat-send-btn">
                      <FaPaperPlane />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;