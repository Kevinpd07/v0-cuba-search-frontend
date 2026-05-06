"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"

interface SearchBarProps {
  query: string
  setQuery: (query: string) => void
  onSearch: () => void
  isFocused: boolean
  setIsFocused: (focused: boolean) => void
}

export function SearchBar({ query, setQuery, onSearch, isFocused, setIsFocused }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <motion.div
        className="relative"
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 bg-primary/20 rounded-full blur-xl"
          animate={{
            opacity: isFocused ? 0.6 : 0,
            scale: isFocused ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Search input container */}
        <div className="relative flex items-center">
          <motion.div
            className="absolute left-5 text-muted-foreground"
            animate={{ 
              color: isFocused ? "var(--primary)" : "var(--muted-foreground)",
              scale: isFocused ? 1.1 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <Search className="w-5 h-5" />
          </motion.div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar en Cuba..."
            className="w-full h-14 pl-14 pr-32 bg-card text-foreground rounded-full border-2 border-border shadow-lg shadow-primary/5 focus:border-primary focus:outline-none transition-all duration-300 text-lg placeholder:text-muted-foreground"
          />
          
          <motion.button
            onClick={onSearch}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Buscar
          </motion.button>
        </div>
      </motion.div>

      {/* Quick search suggestions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap justify-center gap-2 mt-6"
      >
        {["Noticias", "Deportes", "Cultura", "Tecnología", "Salud"].map((tag, index) => (
          <motion.button
            key={tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setQuery(tag)}
            className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-full transition-colors border border-border/50"
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
