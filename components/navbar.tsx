"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Menu, X } from "lucide-react"
import { AuthModal } from "./auth-modal"

type UserType = "actor" | "usuario"

interface Preferences {
  language: string
  notifications: boolean
  darkMode: boolean
  resultsPerPage: number
}

interface AuthData {
  isLoggedIn: boolean
  email: string
  userType: UserType
  preferences: Preferences
}

export function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [authData, setAuthData] = useState<AuthData | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const fetchUser = async () => {
    const res = await fetch("/api/auth/me")
    const data = await res.json()
    setAuthData(data.user)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    fetchUser()
    const handleAuthChange = () => fetchUser()
    window.addEventListener("auth-change", handleAuthChange)
    return () => window.removeEventListener("auth-change", handleAuthChange)
  }, [])

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    setAuthData(null)
    window.dispatchEvent(new Event("auth-change"))
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-1 group"
              >
                <span className="text-xl font-bold">
                  <span className="text-primary group-hover:opacity-80 transition-opacity">Cuba</span>
                  <span className="text-secondary">.</span>
                  <span className="text-foreground group-hover:opacity-80 transition-opacity">Entera</span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Categorías
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tendencias
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Acerca de
              </button>
            </nav>

            {/* Auth section */}
            <div className="flex items-center gap-3">
              {authData?.isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium truncate max-w-[120px]">
                      {authData.email}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
                  >
                    Configuración
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-destructive hover:text-destructive/80 transition-colors px-3 py-1.5"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAuthOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-all shadow-md shadow-primary/20"
                >
                  <User className="w-4 h-4" />
                  <span>Entrar</span>
                </motion.button>
              )}

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
            >
              <nav className="flex flex-col p-4 gap-1">
                <button className="text-left px-4 py-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  Categorías
                </button>
                <button className="text-left px-4 py-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  Tendencias
                </button>
                <button className="text-left px-4 py-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  Acerca de
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  )
}
