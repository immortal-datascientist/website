import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function GradualSpacing({ text, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className={`flex space-x-1 ${className}`} ref={ref}>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: delay + i * 0.1 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}