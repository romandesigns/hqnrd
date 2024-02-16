"use client";
import { useNavToggle } from "@/store/mobile-navigation";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const MotionMobileNavigation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isOpen } = useNavToggle((state) => state);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
