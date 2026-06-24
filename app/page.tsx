"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/logo"
import { SearchBar } from "@/components/search-bar"
import { FloatingElements } from "@/components/floating-elements"
import { QuickCategories } from "@/components/quick-categories"
import { Stats } from "@/components/stats"
import { SearchResults } from "@/components/search-results"

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (query.trim()) {
      setSearchQuery(query)
      setShowResults(true)
    }
  }

  const handleBackToHome = () => {
    setShowResults(false)
    setQuery("")
    setSearchQuery("")
  }

  return (
    <main className="relative min-h-screen overflow-hidden pt-16">
      <FloatingElements />
      
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
          >
            <Logo />
            
            <div className="mt-12 w-full">
              <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
              />
            </div>

            <QuickCategories />
            <Stats />

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-4 text-center text-sm text-muted-foreground"
            >
              <p>Hecho con ❤️ para Cuba</p>
            </motion.footer>
          </motion.div>
        ) : (
          <SearchResults 
            query={searchQuery} 
            onBack={handleBackToHome}
            searchQuery={query}
            setSearchQuery={setQuery}
            onSearch={handleSearch}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
