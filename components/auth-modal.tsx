"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, KeyRound, Building2, UserCircle, Sparkles } from "lucide-react"

type UserType = "actor" | "usuario"

interface AuthData {
  isLoggedIn: boolean
  email: string
  userType: UserType
  preferences: {
    language: string
    notifications: boolean
    darkMode: boolean
    resultsPerPage: number
  }
}

const defaultPreferences = {
  language: "es",
  notifications: true,
  darkMode: false,
  resultsPerPage: 10,
}

export function AuthModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [tab, setTab] = useState<"login" | "register">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<UserType>("usuario")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (!isOpen) {
      setTab("login")
      setEmail("")
      setPassword("")
      setUserType("usuario")
      setLoading(false)
      setMessage("")
      setError("")
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setEmail("")
      setPassword("")
      setUserType("usuario")
      setMessage("")
      setError("")
    }
  }, [tab])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")

    try {
      const endpoint = tab === "register" ? "/api/auth/register" : "/api/auth/login"
      const body: any = {
        email,
        password,
        preferences: {
          ...defaultPreferences,
          language: defaultPreferences.language,
          notifications: defaultPreferences.notifications,
          darkMode: defaultPreferences.darkMode,
          resultsPerPage: defaultPreferences.resultsPerPage,
        },
      }
      if (tab === "register") {
        body.userType = userType
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Error en la autenticación")
        setLoading(false)
        return
      }

      setMessage(`¡${tab === "login" ? "Sesión iniciada" : "Cuenta creada"} exitosamente!`)
      window.dispatchEvent(new Event("auth-change"))
      setLoading(false)
      setTimeout(() => {
        onClose()
      }, 600)
    } catch {
      setError("Error de conexión")
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-1">
                {tab === "login" ? "Bienvenido de nuevo" : "Crear cuenta"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {tab === "login"
                  ? "Inicia sesión para personalizar tu experiencia"
                  : "Regístrate y elige tu tipo de usuario"}
              </p>
            </div>

            <div className="flex gap-2 mb-6 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setTab("login")}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                  tab === "login"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => setTab("register")}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                  tab === "register"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Registrarse
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Correo electrónico
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="nombre@ejemplo.cu"
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Contraseña
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {tab === "register" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-foreground">
                    Tipo de usuario
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType("actor")}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        userType === "actor"
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border hover:border-primary/30 bg-background"
                      }`}
                    >
                      <Building2
                        className={`w-6 h-6 ${
                          userType === "actor" ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <div className="text-center">
                        <span className="block text-sm font-semibold text-foreground">
                          Actor económico
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          Empresas, negocios, MIYPES
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserType("usuario")}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        userType === "usuario"
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border hover:border-primary/30 bg-background"
                      }`}
                    >
                      <UserCircle
                        className={`w-6 h-6 ${
                          userType === "usuario" ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <div className="text-center">
                        <span className="block text-sm font-semibold text-foreground">
                          Usuario
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          Ciudadano, estudiantil, general
                        </span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20 text-center"
                >
                  {error}
                </motion.p>
              )}

              {message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-primary bg-primary/10 p-3 rounded-lg border border-primary/20 text-center"
                >
                  {message}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    {tab === "login" ? "Entrar" : "Crear cuenta"}
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-4">
              {tab === "login" ? (
                <>
                  ¿No tienes cuenta?{" "}
                  <button
                    onClick={() => setTab("register")}
                    className="text-primary hover:underline font-medium"
                  >
                    Regístrate aquí
                  </button>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta?{" "}
                  <button
                    onClick={() => setTab("login")}
                    className="text-primary hover:underline font-medium"
                  >
                    Inicia sesión
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
