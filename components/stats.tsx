"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Clock } from "lucide-react"

const stats = [
  { icon: MapPin, value: "1,000+", label: "Sitios indexados" },
  { icon: Users, value: "11M+", label: "Cubanos conectados" },
  { icon: Clock, value: "24/7", label: "Actualización constante" },
]

export function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pb-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + index * 0.15 }}
          className="flex items-center gap-3 text-muted-foreground"
        >
          <stat.icon className="w-5 h-5 text-primary/60" />
          <div>
            <span className="font-bold text-foreground">{stat.value}</span>
            <span className="text-sm ml-1">{stat.label}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
