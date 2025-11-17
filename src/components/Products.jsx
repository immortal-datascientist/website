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

// Use public folder images

const PRODUCTS = [
  {
    icon: FaChartBar,
    title: "GST Module",
    desc: "Automates GST calculation, filing, and reconciliation for all banking transactions.\nEnsures compliance with government regulations and tax requirements.\nPerforms automatic tax rate selection, HSN/SAC tagging and invoice validation.\nMaintains audit trails and rollback capabilities for corrected filings.\nProvides configurable rules for state/central split, reverse charge and exemptions.\nIncludes dashboards for tax liability, input credit, and filing status across periods.\nExports e-way bills and GSTR returns in statutory formats for easy submission.",
    image: "/assets/images/e-coms.jpg"
  },
  {
    icon: FaMoneyBillWave,
    title: "TDS Module",
    desc: "Facilitates automatic deduction, tracking, and reporting of TDS across operations.\nManages various financial operations and interest payouts efficiently.\nSupports layered TDS rules, exemptions, thresholds, and rate changes over time.\nAutomatically generates TDS challans, e-TDS files and Form 16/16A certificates.\nReconciles deducted TDS with tax filings and provides mismatch alerts.\nProvides audit-ready logs, employee/vendor-wise TDS history and bulk download features.\nIntegrates with payroll, vendor payments and CBS ledgers for end-to-end accuracy.",
    image: "/assets/images/mob-app-dev.jpg"
  },
  {
    icon: FaClipboardList,
    title: "15G/H Forms",
    desc: "Manages submission, validation, and reporting of Form 15G/15H for customers.\nClaiming non-deduction of TDS on interest income made simple.\nPerforms automated eligibility checks using customer profile and thresholds.\nSupports bulk capture, digital signatures and secure submission workflows.\nStores form history with timestamps for audit and compliance reviews.\nProvides branch-level and consolidated reporting for regulatory oversight.\nNotifies customers and branch users on expiring or rejected submissions.",
    image: "/assets/images/ai4.jpg"
  },
  {
    icon: FaBriefcase,
    title: "Investments & Treasury Management",
    desc: "Helps manage treasury operations, investment portfolios, and liquidity.\nReal-time monitoring of asset-liability ratios and risk management.\nTracks securities, government bonds, term deposits, repo and money market positions.\nProvides mark-to-market valuations, yield curves, and profit & loss analytics.\nSupports limit monitoring, approval workflows and counterparty exposure controls.\nDelivers scenario analysis, stress testing, and maturity ladder visualizations.\nGenerates compliance reports and IFRS/GAAP-ready accounting entries.",
    image: "/assets/images/img1.jpg"
  },
  {
    icon: FaBoxes,
    title: "Inventory Management",
    desc: "Tracks physical and digital inventory with automated accounting entries.\nIntegrated with the Core Banking System (CBS) for seamless operations.\nSupports item master, batch/serial tracking, location transfers and stock audits.\nProvides FIFO/LIFO valuation, obsolescence flags and integrated GL postings.\nGenerates low-stock alerts, consumption trends and reorder suggestions.\nEnables barcode/RFID scanning, mobile stocktaking and offline syncing.\nOffers role-based access, audit trails and reconciliation with purchase modules.",
    image: "/assets/images/web-devs.jpg"
  },
  {
    icon: FaChartLine,
    title: "Share Module",
    desc: "Maintains shareholders' data, dividend payments, and share transactions.\nEfficient management with complete accounting integration.\nHandles allotment, transfers, bonus issues, splits and buybacks with approvals.\nAutomates dividend calculations, entitlement schedules and bank remittances.\nGenerates statutory filings, share certificates and cap table reports.\nProvides KYC linkage, nominee management and investor communication tools.\nIncludes audit logs and reconciliation with the general ledger and registrar.",
    image: "/assets/images/women-with-laptop.jpg"
  },
  {
    icon: FaBuilding,
    title: "Fixed Assets Management",
    desc: "Manages all fixed assets including acquisition, depreciation, and disposal.\nComprehensive reporting and tracking for institutional assets.\nHandles multiple depreciation methods, useful life schedules and revaluations.\nTracks asset location, custodian, warranty, insurance and maintenance history.\nSupports capital work-in-progress, asset transfers and impairment assessments.\nProvides asset register exports, audit trails and monthly depreciation postings.\nIntegrates with procurement, invoice matching and GL for end-to-end control.",
    image: "/assets/images/e-coms.jpg"
  },
  {
    icon: FaBalanceScale,
    title: "ALM - Asset Liability Management",
    desc: "Analyzes and monitors balance sheet risks by evaluating mismatches.\nAsset and liability maturity and interest rate management.\nBuilds gap reports, liquidity coverage ratios and cash flow forecasts.\nRuns rate shock and scenario analyses to assess interest rate sensitivity.\nSupports transfer pricing, intraday funding and term funding optimization.\nGenerates regulatory ALM reports and board-level dashboards for oversight.\nAllows parameter tuning and stress test scheduling for proactive risk control.",
    image: "/assets/images/mob-app-dev.jpg"
  },
  {
    icon: FaUpload,
    title: "Credit Rating Agencies Data Upload",
    desc: "Simplifies uploading borrower and loan data to RBI-approved agencies.\nEnsures compliance and accuracy in credit reporting.\nPerforms data validation, cleansing and mapping to agency formats.\nSchedules periodic exports and supports secure transmission channels.\nMaintains submission history, acknowledgements and exception reports.\nProvides pre-submission checks to reduce rejections and follow-ups.\nIntegrates borrower updates, collateral data and resolved account flags.",
    image: "/assets/images/ai4.jpg"
  },
  {
    icon: FaUniversity,
    title: "GST Bank",
    desc: "Dedicated utility for managing inter-bank GST-related transactions.\nReconciliations and automated report generation made easy.\nConsolidates GST inputs/outputs across branches and settlement accounts.\nAutomates inter-bank claim settlements and reversal processing.\nProvides audit trails, user-wise action logs and reconciliation statements.\nGenerates ready-to-file GST returns and exception ledgers for review.\nSupports cross-branch matching and reconciliation with clearing systems.",
    image: "/assets/images/img1.jpg"
  },
  {
    icon: FaCreditCard,
    title: "Card Request Generation",
    desc: "Enables automated request and tracking of debit/credit card issuance.\nDirectly integrated with customer accounts for seamless processing.\nSupports card variants, limits, delivery preferences and PAN/KYC checks.\nTracks lifecycle from request, production, dispatch to activation and PIN mailers.\nProvides SLA dashboards, rejection reasons and branch-level performance metrics.\nIntegrates with fraud screening, BIN validation and vendor APIs for issuance.\nEnables bulk issuing, replacement flows and chargeback reporting.",
    image: "/assets/images/web-devs.jpg"
  },
  {
    icon: FaChartPie,
    title: "Modus BI Tool / MIS Report",
    desc: "Business intelligence and reporting module for generating MIS reports.\nRegulatory and analytical reports extracted directly from CBS.\nOffers configurable dashboards, KPI widgets and scheduled report distribution.\nSupports drill-downs, cross-filters and comparative period analysis.\nEnables ad-hoc query builder, role-based views and export to multiple formats.\nIncludes lineage tracking, data freshness indicators and anomaly alerts.\nHelps management identify trends, cost centers and revenue leakage quickly.",
    image: "/assets/images/women-with-laptop.jpg"
  },
  {
    icon: FaExclamationTriangle,
    title: "NPA Management",
    desc: "Monitors loan performance and classifies NPAs automatically.\nGenerates statutory provisioning and recovery reports.\nProvides watchlists, delinquency aging and cascade notification workflows.\nSupports restructuring, settlement offers and legal escalation tracking.\nOffers recovery dashboards, collector allocations and target metrics.\nMaintains borrower contact history, promises-to-pay and repayment plans.\nIntegrates with legal, auction and collateral realization modules for closure.",
    image: "/assets/images/e-coms.jpg"
  },
  {
    icon: FaUsers,
    title: "HRMS",
    desc: "Centralized employee management system handling payroll and attendance.\nLeave management and performance tracking in one platform.\nAutomates statutory calculations (PF, ESI, professional tax) and payroll runs.\nProvides competency matrices, appraisal workflows and training records.\nOffers employee self-service for claims, declarations and personal updates.\nGenerates headcount reports, cost-to-company analytics and attrition trends.\nEnsures data privacy, role-based access and secure document repositories.",
    image: "/assets/images/mob-app-dev.jpg"
  },
  {
    icon: FaSync,
    title: "Reconciliation (MISCOT)",
    desc: "Automates reconciliation between CBS, payment gateways, and other systems.\nMinimizes manual intervention and reduces processing time.\nSupports rule-engine mapping, fuzzy matching and tolerance configurations.\nProvides exception handling queues with assignment and SLA monitoring.\nGenerates summary, detailed and audit-friendly reconciliation reports.\nEnables auto-posting of matched items and notification for unresolved items.\nIntegrates with settlement, suspense clearing and GL correction workflows.",
    image: "/assets/images/ai4.jpg"
  },
  {
    icon: FaFolder,
    title: "DMS (MISCOT)",
    desc: "Digitizes and securely stores documents for quick retrieval.\nReduces paper dependency and improves operational efficiency.\nSupports indexed storage, OCR, full-text search and metadata tagging.\nEnforces retention policies, version control and tamper-evident logs.\nEnables secure sharing, workflow approvals and e-signature integration.\nProvides access controls, audit trails and compliance with data protection rules.\nIntegrates with loan origination, account opening and HR systems.",
    image: "/assets/images/img1.jpg"
  },
  {
    icon: FaGlobe,
    title: "Internet Banking (Techurate)",
    desc: "Provides secure online access for customers to view balances and statements.\nAllows fund transfers, bill payments and service requests remotely.\nSupports multi-factor authentication, session management and device controls.\nOffers tailored dashboards, quick-pay widgets and scheduled transfers.\nIncludes admin controls for limits, beneficiary approvals and AML checks.\nDelivers accessibility features, multi-lingual support and responsive design.\nIntegrates with payments, cards, loans and fixed deposit modules seamlessly.",
    image: "/assets/images/web-devs.jpg"
  },
  {
    icon: FaMobile,
    title: "Mobile Banking (Techurate)",
    desc: "Mobile app for customers to conduct banking transactions on the go.\nEnhanced security with encrypted sessions, biometrics and OTP verification.\nProvides instant push notifications, in-app statements and alerts.\nSupports UPI, QR payments, peer-to-peer transfers and biller integrations.\nIncludes offline flows, quick balance, tokenized cards and spend insights.\nOptimized for performance, minimal data usage and cross-platform parity.\nSupports app analytics, feature flags and staged rollouts for new releases.",
    image: "/assets/images/women-with-laptop.jpg"
  },
  {
    icon: FaLock,
    title: "HRMS Implementation (P2B)",
    desc: "HR and payroll management platform for staff administration.\nPerformance monitoring and management under P2B vendor.\nHandles data migration, employee onboarding and role mapping carefully.\nImplements payroll engine, statutory compliance and automated payouts.\nProvides configurable approval chains, SLA management and escalation paths.\nIncludes training, change management and knowledge transfer for teams.\nOffers ongoing support, patching, reporting and continuous improvement cycles.",
    image: "/assets/images/e-coms.jpg"
  }
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
          {/* <p>Banking & Financial Solutions</p> */}

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
          {/* <p>Banking & Financial Solutions</p> */}
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

export default Products