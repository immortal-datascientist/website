import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import './Industries.css';

const INDUSTRIES = [
    { title: "Healthcare", icon: "🏥", color: "#00a693" },
    { title: "Finance", icon: "💰", color: "#0ea5e9" },
    { title: "E-commerce", icon: "🛒", color: "#7c3aed" },
    { title: "Education", icon: "📚", color: "#f59e0b" },
    { title: "Real Estate", icon: "🏢", color: "#ef4444" },
    { title: "Manufacturing", icon: "🏭", color: "#10b981" },
    { title: "Travel", icon: "✈️", color: "#8b5cf6" },
    { title: "Food & Beverage", icon: "🍽️", color: "#f97316" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function Industries() {
    return (
        <section className="industries-section py-2">
            <div className="industries-blob-1"></div>
            <div className="industries-blob-2"></div>
            <div className="industries-blob-3"></div>

            <div className="container-fluid">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-5"
                >
                    <h2 className="section-title">
                        Industries We <span className="highlight">Serve</span>
                    </h2>
                    <p className="section-subtitle mt-3">
                        We deliver tailored solutions across diverse industries, understanding unique challenges and requirements to drive digital transformation and business growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-5"
                >
                    {/* First Row - 4 Industries */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/bank.png" alt="Banking" className="industry-image" />
                                </div>
                                <h4 className="industry-name">Banking</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/e-coms.jpg" alt="E-Commerce" className="industry-image" />
                                </div>
                                <h4 className="industry-name">E-Commerce</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/img3.jpg" alt="Artificial Intelligence" className="industry-image" />
                                </div>
                                <h4 className="industry-name">Artificial Intelligence</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/media.png" alt="Healthcare" className="industry-image" />
                                </div>
                                <h4 className="industry-name">Media & Entertainment</h4>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - 3 Industries */}
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/educations.png" alt="Education" className="industry-image" />
                                </div>
                                <h4 className="industry-name">Education</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/tele.png" alt="Real Estate" className="industry-image" />
                                </div>
                                <h4 className="industry-name">Telecommunications</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="industry-item">
                                <div className="diamond-border">
                                    <img src="/assets/images/mob-app-dev.jpg" alt="Manufacturing" className="industry-image" />
                                </div>
                                <h4 className="industry-name">Mobile Application</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}