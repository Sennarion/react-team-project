import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Portal({ isVisible, children }) {
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.querySelector('#popup-root')
  );
}
