import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaPhone, FaTimes, FaBars } from "react-icons/fa";
import "./Navigation.css";

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const texts = ["Immortal Future Infotech", "Technology Lives Forever"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const currentText = texts[currentTextIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, currentTextIndex, isDeleting, texts]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/assets/logo_company.png" alt="Logo" className="logo-img" />
                    <span className="logo-text">{displayText}</span>
                </div>
                <div className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
                <div className="hamburger-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes className="menu-toggle-icon" /> : <FaBars className="menu-toggle-icon" />}
                </div>
                <div className={`mobile-menu-dropdown ${mobileMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header">
                        <FaTimes className="close-icon" onClick={() => setMobileMenuOpen(false)} />
                    </div>
                    <Link to="/" className="mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                        <FaHome className="menu-icon" />
                        <span>HOME</span>
                    </Link>
                    <Link to="/about" className="mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                        <FaUser className="menu-icon" />
                        <span>ABOUT</span>
                    </Link>
                    <Link to="/services" className="mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                        <FaBriefcase className="menu-icon" />
                        <span>SERVICES</span>
                    </Link>
                    <Link to="/portfolio" className="mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                        <FaFolderOpen className="menu-icon" />
                        <span>PORTFOLIO</span>
                    </Link>
                    <Link to="/contact" className="mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                        <FaPhone className="menu-icon" />
                        <span>CONTACT</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation