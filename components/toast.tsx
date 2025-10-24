import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className="bg-gray-500/95 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-white/10"
            style={{
              boxShadow:
                "-3px -2px 12px rgba(255, 255, 255, 0.3), -2px 4px 12px rgba(0, 0, 0, 0.8)",
            }}
          >
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
