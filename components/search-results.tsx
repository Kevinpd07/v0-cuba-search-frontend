"use client"

import { motion } from "framer-motion"
import { Search, ArrowLeft, ExternalLink, Globe, FileText, Image as ImageIcon } from "lucide-react"

interface SearchResultsProps {
  query: string
  onBack: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  onSearch: () => void
}

// Mock search results - these would come from Elasticsearch in the real implementation
const mockResults = [
  {
    title: "Granma - Órgano oficial del PCC",
    url: "https://www.granma.cu",
    description: "Periódico oficial con las últimas noticias de Cuba, política, economía, deportes y cultura.",
    type: "news"
  },
  {
    title: "Cubadebate - Noticias y opinión",
    url: "https://www.cubadebate.cu",
    description: "Portal de noticias cubano con análisis, opiniones y cobertura de eventos nacionales e internacionales.",
    type: "news"
  },
  {
    title: "Universidad de La Habana",
    url: "https://www.uh.cu",
    description: "Sitio oficial de la Universidad de La Habana, la más antigua y prestigiosa institución de educación superior de Cuba.",
    type: "education"
  },
  {
    title: "Ministerio de Salud Pública",
    url: "https://www.minsap.gob.cu",
    description: "Portal oficial del Ministerio de Salud Pública de Cuba con información sobre servicios de salud y campañas sanitarias.",
    type: "government"
  },
  {
    title: "Cubatur - Turismo en Cuba",
    url: "https://www.cubatur.cu",
    description: "Agencia de viajes y turismo oficial. Descubre los destinos más hermosos de Cuba.",
    type: "tourism"
  },
  {
    title: "ETECSA - Telecomunicaciones",
    url: "https://www.etecsa.cu",
    description: "Empresa de Telecomunicaciones de Cuba S.A. Servicios de telefonía, internet y comunicaciones.",
    type: "services"
  },
]

export function SearchResults({ query, onBack, searchQuery, setSearchQuery, onSearch }: SearchResultsProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  const filteredResults = mockResults.filter(
    result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Header with search */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Back button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>

            {/* Logo */}
            <button onClick={onBack} className="flex items-center gap-1">
              <span className="text-xl font-bold">
                <span className="text-primary">Cuba</span>
                <span className="text-secondary">.</span>
                <span className="text-foreground">Entera</span>
              </span>
            </button>

            {/* Search bar */}
            <div className="flex-1 max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full h-11 pl-11 pr-4 bg-muted rounded-full border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                placeholder="Buscar en Cuba..."
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-4 text-sm">
            <button className="flex items-center gap-2 text-primary border-b-2 border-primary pb-2 font-medium">
              <Globe className="w-4 h-4" />
              Todos
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground pb-2 transition-colors">
              <FileText className="w-4 h-4" />
              Noticias
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground pb-2 transition-colors">
              <ImageIcon className="w-4 h-4" />
              Imágenes
            </button>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-sm text-muted-foreground mb-6">
          Aproximadamente {filteredResults.length} resultados para &quot;{query}&quot; en dominios .cu
        </p>

        <div className="space-y-6">
          {filteredResults.map((result, index) => (
            <motion.article
              key={result.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={result.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                    <Globe className="w-3 h-3" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">{result.url}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium text-secondary group-hover:underline underline-offset-2 mb-1">
                  {result.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {result.description}
                </p>
              </a>
            </motion.article>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No se encontraron resultados para &quot;{query}&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Intenta con otros términos de búsqueda
            </p>
          </motion.div>
        )}

        {/* Pagination mock */}
        {filteredResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-2 mt-12 pb-8"
          >
            <span className="text-primary text-lg font-bold">C</span>
            <span className="text-secondary text-lg font-bold">u</span>
            <span className="text-primary text-lg font-bold">b</span>
            <span className="text-secondary text-lg font-bold">a</span>
            <span className="text-muted-foreground mx-4">|</span>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full text-sm transition-colors ${
                  page === 1 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                {page}
              </button>
            ))}
          </motion.div>
        )}
      </main>
    </motion.div>
  )
}
