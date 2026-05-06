"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  // Create positions for floating elements - themed around Cuba
  const elements = [
    { x: "10%", y: "20%", size: 60, delay: 0, emoji: "🌴" },
    { x: "85%", y: "15%", size: 50, delay: 0.5, emoji: "☀️" },
    { x: "5%", y: "70%", size: 45, delay: 1, emoji: "🌊" },
    { x: "90%", y: "75%", size: 55, delay: 1.5, emoji: "🎺" },
    { x: "15%", y: "45%", size: 35, delay: 2, emoji: "🌺" },
    { x: "80%", y: "50%", size: 40, delay: 2.5, emoji: "🥁" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: el.x,
            top: el.y,
            fontSize: el.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.08,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: el.delay, duration: 1 },
            scale: { delay: el.delay, duration: 0.5 },
            y: {
              delay: el.delay,
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      {/* Animated circles in the background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
