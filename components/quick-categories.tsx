"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  GraduationCap,
  Building,
  Heart,
  Globe,
  Music,
  X,
} from "lucide-react";

const categories = [
  { icon: Newspaper, label: "Noticias", color: "text-primary" },
  { icon: GraduationCap, label: "Educación", color: "text-secondary" },
  { icon: Building, label: "Gobierno", color: "text-accent" },
  { icon: Heart, label: "Salud", color: "text-primary" },
  { icon: Globe, label: "Turismo", color: "text-secondary" },
  { icon: Music, label: "Cultura", color: "text-accent" },
];

const categoryData: Record<
  string,
  {
    title: string
    items: { text: string; url: string }[]
  }
> = {
  Noticias: {
    title: "Noticias Recientes",
    items: [
      { text: "Nuevas regulaciones para el sector energético", url: "https://www.granma.cu" },
      { text: "Avances en la infraestructura de transporte público", url: "https://www.cubadebate.cu" },
      { text: "Eventos climáticos y medidas de prevención", url: "https://www.acn.cu" },
      { text: "Actualizaciones en el mercado laboral", url: "https://www.trabajadores.cu" },
    ],
  },
  Educación: {
    title: "Noticias de Educación",
    items: [
      { text: "Nuevas becas disponibles para universidades públicas", url: "https://www.uh.cu" },
      { text: "Programa de alfabetización digital en zonas rurales", url: "https://www.mined.gob.cu" },
      { text: "Reforma curricular 2026 implementada", url: "https://www.cubadebate.cu" },
      { text: "Convocatoria para intercambios estudiantiles", url: "https://www.uh.cu" },
    ],
  },
  Gobierno: {
    title: "Información Gubernamental",
    items: [
      { text: "Anuncio de nuevo plan de vivienda social", url: "https://www.gob.cu" },
      { text: "Actualización de trámites en línea disponibles", url: "https://www.gob.cu" },
      { text: "Presupuesto anual del sector público 2026", url: "https://www.cubadebate.cu" },
      { text: "Iniciativa de gobierno abierto y transparencia", url: "https://www.gob.cu" },
    ],
  },
  Salud: {
    title: "Noticias de Salud",
    items: [
      { text: "Campaña nacional de vacunación iniciada", url: "https://www.salud.gob.cu" },
      { text: "Nuevo hospital inaugurado en provincia occidental", url: "https://www.acn.cu" },
      { text: "Programa de salud mental en centros educativos", url: "https://www.salud.gob.cu" },
      { text: "Resultados del informe de calidad hospitalaria", url: "https://www.granma.cu" },
    ],
  },
  Turismo: {
    title: "Información Turística",
    items: [
      { text: "Festival de verano en Varadero - agenda completa", url: "https://www.cubatravel.tur.cu" },
      { text: "Nuevas rutas aéreas internacionales anunciadas", url: "https://www.granma.cu" },
      { text: "Guía de patrimonio cultural para visitantes", url: "https://www.cubatravel.tur.cu" },
      { text: "Promociones en hoteles para temporada alta", url: "https://www.acn.cu" },
    ],
  },
  Cultura: {
    title: "Eventos Culturales",
    items: [
      { text: "Feria Internacional del Libro - programa oficial", url: "https://www.cubadebate.cu" },
      { text: "Concierto sinfónico en el Teatro Nacional", url: "https://www.granma.cu" },
      { text: "Exposición de arte contemporáneo inaugurada", url: "https://www.cubadebate.cu" },
      { text: "Taller de danza folclórica para todas las edades", url: "https://www.acn.cu" },
    ],
  },
}

export function QuickCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
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
            onClick={() => setSelectedCategory(category.label)}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <category.icon
              className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform`}
            />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              {category.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  {categoryData[selectedCategory]?.title}
                </h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-1 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <ul className="space-y-3">
                {categoryData[selectedCategory]?.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-foreground leading-relaxed group-hover:text-primary transition-colors">
                        {item.text}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
