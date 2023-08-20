'use client';

import { motion } from 'framer-motion';

function Animate({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, escale: 0.5 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
