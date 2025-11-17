import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaPalette,
  FaCode,
  FaVial,
  FaRocket,
  FaCog,
  FaDesktop,
} from "react-icons/fa";
import "./DevelopmentProcess.css";

const PROCESS_STEPS = [
  { id: 1, title: "Requirement Collection", icon: FaClipboardList, position: "top" },
  { id: 2, title: "UI / UX Design", icon: FaDesktop, position: "bottom" },
  { id: 3, title: "Customization", icon: FaPalette, position: "top" },
  { id: 4, title: "Development", icon: FaCode, position: "bottom" },
  { id: 5, title: "Testing", icon: FaVial, position: "top" },
  { id: 6, title: "Deployment", icon: FaRocket, position: "bottom" },
  { id: 7, title: "Maintenance", icon: FaCog, position: "top" },
];

const DevelopmentProcess = () => {
  return (
    <section className="development-process-section">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="process-header"
        >
          <h2>Our Development Process</h2>
        </motion.div>

        <div className="process-timeline">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`process-step ${step.position}`}
              >
                <div className="step-circle">
                  <div className="inner-circle">
                    <Icon className="step-icon" />
                  </div>
                </div>

                <div className="step-content">
                  <span className="caret" />
                  <h3>{step.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess