'use client';

import { motion, AnimatePresence } from 'framer-motion';

function BoxError({ message }) {
  return (
    <AnimatePresence>
      {!!message && (
      <motion.div
        className="absolute flex items-center max-w-sm w-11/12 py-4 px-6 bg-red-200 bottom-8 right-8 rounded-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, escale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-red-800 font-bold">
          Error:
          {' '}
          {message}
        </span>
      </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BoxError;
