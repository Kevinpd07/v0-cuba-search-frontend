"use client"

import { motion } from "framer-motion"
import { Newspaper, GraduationCap, Building, Heart, Globe, Music } from "lucide-react"

const categories = [
  { icon: Newspaper, label: "Noticias", color: "text-primary" },
  { icon: GraduationCap, label: "Educación", color: "text-secondary" },
  { icon: Building, label: "Gobierno", color: "text-accent" },
  { icon: Heart, label: "Salud", color: "text-primary" },
  { icon: Globe, label: "Turismo", color: "text-secondary" },
  { icon: Music, label: "Cultura", color: "text-accent" },
]

export function QuickCategories() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto mt-12"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
        >
          <category.icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform`} />
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {category.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  )
}
