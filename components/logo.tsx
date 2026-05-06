"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      {/* Main Logo */}
      <div className="relative">
        {/* Decorative ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Logo text */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-primary">Cuba</span>
          <span className="text-secondary">.</span>
          <span className="text-foreground">Entera</span>
        </motion.h1>
      </div>

      {/* Animated decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 max-w-xs"
      />

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground text-center max-w-md leading-relaxed text-pretty"
      >
        El único buscador que no necesitas salir de la isla
        <br />
        <span className="text-primary font-medium">porque la isla está adentro</span>
      </motion.p>

      {/* Domain badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="mt-4 px-4 py-1.5 bg-muted rounded-full border border-border"
      >
        <span className="text-sm text-muted-foreground">
          Buscando exclusivamente en dominios <span className="font-mono font-semibold text-secondary">.cu</span>
        </span>
      </motion.div>
    </motion.div>
  )
}
