"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Menu,
  X,
  ChevronDown,
  Newspaper,
  GraduationCap,
  Building2,
  Heart,
  Globe2,
  Music,
  TrendingUp,
  Settings,
  LogOut,
} from "lucide-react";
import { AuthModal } from "./auth-modal";

type UserType = "actor" | "usuario";

interface Preferences {
  language: string;
  notifications: boolean;
  darkMode: boolean;
  resultsPerPage: number;
}

interface AuthData {
  isLoggedIn: boolean;
  name: string;
  email: string;
  userType: UserType;
  preferences: Preferences;
}

export function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isTrendsOpen, setIsTrendsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const trendsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
      if (
        trendsRef.current &&
        !trendsRef.current.contains(event.target as Node)
      ) {
        setIsTrendsOpen(false);
      }
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchUser = async () => {
    const res = await fetch("/api/auth/me");
    const data = await res.json();
    setAuthData(data.user);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchUser();
    const handleAuthChange = () => fetchUser();
    window.addEventListener("auth-change", handleAuthChange);
    return () => window.removeEventListener("auth-change", handleAuthChange);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthData(null);
    window.dispatchEvent(new Event("auth-change"));
  };

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
                  <span className="text-primary group-hover:opacity-80 transition-opacity">
                    Cuba
                  </span>
                  <span className="text-secondary">.</span>
                  <span className="text-foreground group-hover:opacity-80 transition-opacity">
                    Entera
                  </span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Categories */}
              <div className="relative" ref={categoriesRef}>
                <button
                  onClick={() => {
                    setIsCategoriesOpen(!isCategoriesOpen);
                    setIsTrendsOpen(false);
                    setIsAboutOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  <Globe2 className="w-4 h-4" />
                  Categorías
                </button>

                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                      }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      <div className="p-3">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                          Explora por tema
                        </p>
                        <div className="space-y-1">
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                            <Newspaper className="w-4 h-4 text-primary" />
                            Noticias
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                            <GraduationCap className="w-4 h-4 text-secondary" />
                            Educación
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                            <Building2 className="w-4 h-4 text-accent" />
                            Gobierno
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                            <Heart className="w-4 h-4 text-primary" />
                            Salud
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                            <Globe2 className="w-4 h-4 text-secondary" />
                            Turismo
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                            <Music className="w-4 h-4 text-accent" />
                            Cultura
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tendencias */}
              <div className="relative" ref={trendsRef}>
                <button
                  onClick={() => {
                    setIsTrendsOpen(!isTrendsOpen);
                    setIsCategoriesOpen(false);
                    setIsAboutOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  <TrendingUp className="w-4 h-4" />
                  Tendencias
                </button>

                <AnimatePresence>
                  {isTrendsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                      }}
                      className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      <div className="p-3">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                          Lo más buscado hoy
                        </p>
                        <div className="space-y-1">
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left group">
                            <span className="text-xs font-bold text-primary w-4">
                              1
                            </span>
                            <span className="group-hover:text-primary transition-colors">
                              Cuba
                            </span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left group">
                            <span className="text-xs font-bold text-primary w-4">
                              2
                            </span>
                            <span className="group-hover:text-primary transition-colors">
                              electricidad
                            </span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left group">
                            <span className="text-xs font-bold text-primary w-4">
                              3
                            </span>
                            <span className="group-hover:text-primary transition-colors">
                              internet
                            </span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left group">
                            <span className="text-xs font-bold text-primary w-4">
                              4
                            </span>
                            <span className="group-hover:text-primary transition-colors">
                              transporte
                            </span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-left group">
                            <span className="text-xs font-bold text-primary w-4">
                              5
                            </span>
                            <span className="group-hover:text-primary transition-colors">
                              turismo
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Acerca de */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setIsAboutOpen(!isAboutOpen);
                    setIsCategoriesOpen(false);
                    setIsTrendsOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  Acerca de
                </button>

                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                      }}
                      className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              Desarrollado por
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Infocomunicaciones
                            </p>
                          </div>
                        </div>
                        {/*                   
                        <div className="space-y-2 mb-3">
                          <div className="px-3 py-2 bg-muted/50 rounded-lg">
                            <p className="text-sm font-medium text-foreground">Kevin Padrón</p>
                            <p className="text-xs text-muted-foreground">Desarrollador Frontend</p>
                          </div>
                          <div className="px-3 py-2 bg-muted/50 rounded-lg">
                            <p className="text-sm font-medium text-foreground">Jorge García</p>
                            <p className="text-xs text-muted-foreground">Ingeniero de Sistemas</p>
                          </div>
                        </div>
                        */}

                        <p className="text-xs text-center text-muted-foreground pt-2 border-t border-border">
                          Hecho con ❤️ para Cuba
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Auth section */}
            <div className="flex items-center gap-3">
              {authData ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => {
                      setIsProfileOpen(!isProfileOpen);
                      setIsCategoriesOpen(false);
                      setIsTrendsOpen(false);
                      setIsAboutOpen(false);
                    }}
                    className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium truncate max-w-[120px]">
                      {authData.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{
                          type: "spring",
                          damping: 20,
                          stiffness: 300,
                        }}
                        className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="p-3 border-b border-border">
                          <p className="text-sm font-medium text-foreground truncate">
                            {authData.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {authData.email}
                          </p>
                          <span className="inline-block mt-1 text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                            {authData.userType === "actor"
                              ? "Actor económico"
                              : "Usuario"}
                          </span>
                        </div>
                        <div className="p-1">
                          <button
                            onClick={() => {
                              setIsProfileOpen(false);
                              setIsAuthOpen(true);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                          >
                            <Settings className="w-4 h-4 text-muted-foreground" />
                            Configuración
                          </button>
                          <button
                            onClick={() => {
                              setIsProfileOpen(false);
                              handleLogout();
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-lg transition-colors"
                          >
                            <LogOut className="w-4 h-4" />
                            Cerrar sesión
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="sm:hidden flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full"
                  >
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium truncate max-w-[100px]">
                      {authData.name}
                    </span>
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
                <button className="flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <Globe2 className="w-4 h-4" />
                  Categorías
                </button>
                <button className="flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  Tendencias
                </button>
                <button className="flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  Acerca de
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
