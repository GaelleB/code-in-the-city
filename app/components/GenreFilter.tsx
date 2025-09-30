'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface FilterTag {
  id: string;
  label: string;
  color: string;
  count: number;
}

interface GenreFilterProps {
  tags: FilterTag[];
  onFilterChange: (selectedTags: string[]) => void;
  totalItems: number; // Nombre total d'items (séries ou articles)
  className?: string;
}

export default function GenreFilter({ tags, onFilterChange, totalItems, className = '' }: GenreFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tagId: string) => {
    const newSelectedTags = selectedTags.includes(tagId)
      ? selectedTags.filter((id) => id !== tagId)
      : [...selectedTags, tagId];

    setSelectedTags(newSelectedTags);
    onFilterChange(newSelectedTags);
  };

  const selectAll = () => {
    setSelectedTags([]);
    onFilterChange([]);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    onFilterChange([]);
  };

  // const totalResults = useMemo(() => {
  //   if (selectedTags.length === 0) return null;
  //   // Le composant parent calcule les résultats, on affiche juste le compteur
  //   return selectedTags.length;
  // }, [selectedTags]);

  return (
    <div className={`${className}`}>
      {/* En-tête avec compteur et bouton reset */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-serif font-semibold text-[var(--color-dark)]">
          Filtrer par genre
        </h3>
        <AnimatePresence>
          {selectedTags.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-sans font-medium text-gray-600 hover:text-black border border-gray-300 rounded-full hover:border-[var(--color-dark)] transition-all"
            >
              <X className="w-3.5 h-3.5" />
              Effacer ({selectedTags.length})
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Pills de tags */}
      <div className="flex flex-wrap gap-2">
        {/* Bouton "Tout" */}
        <motion.button
          onClick={selectAll}
          className={`
            px-4 py-2 rounded-full border-2 font-sans font-medium text-sm
            transition-all duration-200
            ${
              selectedTags.length === 0
                ? 'bg-[var(--color-dark)] text-white border-[var(--color-dark)] scale-105'
                : 'bg-white text-gray-600 border-gray-300 hover:border-[var(--color-dark)] hover:bg-gray-50'
            }
          `}
          whileHover={{ scale: selectedTags.length === 0 ? 1.05 : 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Tout
          <span className="ml-1.5 opacity-70">({totalItems})</span>
        </motion.button>

        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag.id);

          return (
            <motion.button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`
                px-4 py-2 rounded-full border font-sans font-medium text-sm
                transition-all duration-200
                ${
                  isSelected
                    ? `${tag.color} ring-2 ring-offset-2 ring-[var(--color-primary)] scale-105`
                    : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }
              `}
              whileHover={{ scale: isSelected ? 1.05 : 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.03 }}
            >
              {tag.label}
              <span className="ml-1.5 opacity-70">({tag.count})</span>
            </motion.button>
          );
        })}
      </div>

      {/* Message si aucun filtre actif */}
      {selectedTags.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-500 font-sans mt-3 italic"
        >
          Sélectionnez un ou plusieurs genres pour filtrer
        </motion.p>
      )}

      {/* Message avec filtres actifs */}
      {selectedTags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 p-3 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg"
        >
          <p className="text-sm font-sans text-[var(--color-dark)]">
            <span className="font-medium">
              {selectedTags.length === 1 ? '1 filtre actif' : `${selectedTags.length} filtres actifs`}
            </span>
            {' — '}
            <span className="text-gray-600">
              {selectedTags.map((id) => tags.find((t) => t.id === id)?.label).join(', ')}
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
}
