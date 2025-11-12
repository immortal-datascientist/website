import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaChartBar, FaMoneyBillWave, FaClipboardList, FaBriefcase,
  FaBoxes, FaChartLine, FaBuilding, FaBalanceScale,
  FaUpload, FaUniversity, FaCreditCard, FaChartPie,
  FaExclamationTriangle, FaUsers, FaSync, FaFolder,
  FaGlobe, FaMobile, FaLock
} from 'react-icons/fa';
import './Products.css';

// Import portfolio images
import eComs from '../assets/images/e-coms.jpg';
import mobAppDev from '../assets/images/mob-app-dev.jpg';
import ai4 from '../assets/images/ai4.jpg';
import img1 from '../assets/images/img1.jpg';
import webDevs from '../assets/images/web-devs.jpg';
import womenLaptop from '../assets/images/women-with-laptop.jpg';

const PRODUCTS = [
  { icon: FaChartBar, title: "GST Module", desc: "Automates GST calculation, filing, and reconciliation for all banking transactions.\nEnsures compliance with government regulations and tax requirements.", image: eComs },
  { icon: FaMoneyBillWave, title: "TDS Module", desc: "Facilitates automatic deduction, tracking, and reporting of TDS across operations.\nManages various financial operations and interest payouts efficiently.", image: mobAppDev },
  { icon: FaClipboardList, title: "15G/H Forms", desc: "Manages submission, validation, and reporting of Form 15G/15H for customers.\nClaiming non-deduction of TDS on interest income made simple.", image: ai4 },
  { icon: FaBriefcase, title: "Investments & Treasury Management", desc: "Helps manage treasury operations, investment portfolios, and liquidity.\nReal-time monitoring of asset-liability ratios and risk management.", image: img1 },
  { icon: FaBoxes, title: "Inventory Management", desc: "Tracks physical and digital inventory with automated accounting entries.\nIntegrated with the Core Banking System (CBS) for seamless operations.", image: webDevs },
  { icon: FaChartLine, title: "Share Module", desc: "Maintains shareholders' data, dividend payments, and share transactions.\nEfficient management with complete accounting integration.", image: womenLaptop },
  { icon: FaBuilding, title: "Fixed Assets Management", desc: "Manages all fixed assets including acquisition, depreciation, and disposal.\nComprehensive reporting and tracking for institutional assets.", image: eComs },
  { icon: FaBalanceScale, title: "ALM - Asset Liability Management", desc: "Analyzes and monitors balance sheet risk by evaluating mismatches.\nAsset and liability maturity and interest rate management.", image: mobAppDev },
  { icon: FaUpload, title: "Credit Rating Agencies Data Upload", desc: "Simplifies uploading borrower and loan data to RBI-approved agencies.\nEnsures compliance and accuracy in credit reporting.", image: ai4 },
  { icon: FaUniversity, title: "GST Bank", desc: "Dedicated utility for managing inter-bank GST-related transactions.\nReconciliations and automated report generation made easy.", image: img1 },
  { icon: FaCreditCard, title: "Card Request Generation", desc: "Enables automated request and tracking of debit/credit card issuance.\nDirectly integrated with customer accounts for seamless processing.", image: webDevs },
  { icon: FaChartPie, title: "Modus BI Tool / MIS Report", desc: "Business intelligence and reporting module for generating MIS reports.\nRegulatory and analytical reports from CBS data.", image: womenLaptop },
  { icon: FaExclamationTriangle, title: "NPA Management", desc: "Monitors loan performance and classifies NPAs automatically.\nGenerates statutory provisioning and recovery reports.", image: eComs },
  { icon: FaUsers, title: "HRMS", desc: "Centralized employee management system handling payroll and attendance.\nLeave management and performance tracking in one platform.", image: mobAppDev },
  { icon: FaSync, title: "Reconciliation (MISCOT)", desc: "Automates reconciliation between CBS, payment gateways, and systems.\nMinimizes manual intervention and reduces processing time.", image: ai4 },
  { icon: FaFolder, title: "DMS (MISCOT)", desc: "Digitizes and securely stores documents for quick retrieval.\nReduces paper dependency and improves document management.", image: img1 },
  { icon: FaGlobe, title: "Internet Banking (Techurate)", desc: "Provides secure online access for customers to view balances.\nTransfer funds and manage accounts remotely with ease.", image: webDevs },
  { icon: FaMobile, title: "Mobile Banking (Techurate)", desc: "Mobile app for customers to conduct banking transactions on the go.\nEnhanced security and user-friendly features for better experience.", image: womenLaptop },
  { icon: FaLock, title: "HRMS Implementation (P2B)", desc: "HR and payroll management platform for staff administration.\nPerformance monitoring and management under P2B vendor.", image: eComs }
];

const Products = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <>
        <section className="products-mobile">
          <h2>Our Products</h2>
          <p>Banking & Financial Solutions</p>

          {PRODUCTS.map((product, index) => (
            <div key={index} className="product-mobile-card">
              <div className="product-icon"><product.icon /></div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
              <button className="product-expand-btn" onClick={() => handleProductClick(product)}>+</button>
            </div>
          ))}
        </section>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="product-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="product-modal"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* <button className="product-modal-close" onClick={() => setSelectedProduct(null)}>×</button> */}
                <img src={selectedProduct.image} alt={selectedProduct.title} />
                <div className="product-modal-content">
                  <h3>{selectedProduct.title}</h3>
                  <p>{selectedProduct.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <div className="products-section">
        <div className="products-header">
          <h2>Our Products</h2>
          <p>Banking & Financial Solutions</p>
        </div>

        <div className="products-viewport">
          <div className="products-track">
            {[...PRODUCTS, ...PRODUCTS].map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon"><product.icon /></div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.desc}</p>
                </div>
                <button className="product-expand-btn" onClick={() => handleProductClick(product)}>+</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="product-modal"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="product-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
              {/* <img src={selectedProduct.image} alt={selectedProduct.title} /> */}
              <div className="product-modal-content">
                <h3>{selectedProduct.title}</h3>
                <p>{selectedProduct.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;