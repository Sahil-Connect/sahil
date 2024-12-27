import React from "react";
import { motion } from "framer-motion";


export const SplashScreen = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-screen space-y-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="loading loading-ring loading-lg text-primary"></span>
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-medium text-gray-600"
      >
        Loading Sahil
      </motion.p>
    </motion.main>
  );
}; 