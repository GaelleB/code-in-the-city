"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimelineFilterProps {
  minYear: number;
  maxYear: number;
  onYearRangeChange: (startYear: number, endYear: number) => void;
  className?: string;
}

export default function TimelineFilter({
  minYear,
  maxYear,
  onYearRangeChange,
  className = ""
}: TimelineFilterProps) {
  const [startYear, setStartYear] = useState(minYear);
  const [endYear, setEndYear] = useState(maxYear);

  useEffect(() => {
    onYearRangeChange(startYear, endYear);
  }, [startYear, endYear, onYearRangeChange]);

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= endYear) {
      setStartYear(value);
    }
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= startYear) {
      setEndYear(value);
    }
  };

  const resetRange = () => {
    setStartYear(minYear);
    setEndYear(maxYear);
  };

  const isFiltered = startYear !== minYear || endYear !== maxYear;

  // Calcul pour positionner les curseurs du slider
  const startPercent = ((startYear - minYear) / (maxYear - minYear)) * 100;
  const endPercent = ((endYear - minYear) / (maxYear - minYear)) * 100;

  return (
    <div className={className}>
      {/* En-tete */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="typo-h3 font-serif font-semibold text-[var(--color-dark)]">
          Filtrer par periode
        </h3>
        {isFiltered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={resetRange}
            className="px-3 py-1.5 typo-small font-sans font-medium text-gray-600 hover:text-black border border-gray-300 rounded-full hover:border-[var(--color-dark)] transition-all"
          >
            Reinitialiser
          </motion.button>
        )}
      </div>

      {/* Affichage de la periode selectionnee */}
      <div className="mb-6 text-center">
        <motion.p
          className="typo-h2 font-bold text-[var(--color-dark)]"
          key={`${startYear}-${endYear}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {startYear === endYear ? (
            <span>{startYear}</span>
          ) : (
            <>
              {startYear} <span className="text-gray-400 mx-2">-</span> {endYear}
            </>
          )}
        </motion.p>
      </div>

      {/* Timeline visuelle */}
      <div className="relative mb-8 px-2">
        {/* Ligne de fond */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2" />

        {/* Ligne active */}
        <div
          className="absolute top-1/2 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full -translate-y-1/2 transition-all duration-300"
          style={{
            left: `${startPercent}%`,
            right: `${100 - endPercent}%`
          }}
        />

        {/* Marques des decennies */}
        <div className="relative h-12 mb-2">
          {[1990, 2000, 2010, 2020].map((decade) => {
            if (decade < minYear || decade > maxYear) return null;
            const position = ((decade - minYear) / (maxYear - minYear)) * 100;
            const isInRange = decade >= startYear && decade <= endYear;

            return (
              <div
                key={decade}
                className="absolute top-0 -translate-x-1/2"
                style={{ left: `${position}%` }}
              >
                <div
                  className={`w-1 h-6 rounded-full transition-colors ${
                    isInRange ? "bg-[var(--color-primary)]" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`block typo-tiny font-sans mt-1 transition-colors ${
                    isInRange ? "text-[var(--color-dark)] font-medium" : "text-gray-400"
                  }`}
                >
                  {decade}
                </span>
              </div>
            );
          })}
        </div>

        {/* Sliders superposes */}
        <div className="relative h-12">
          {/* Slider pour startYear */}
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={startYear}
            onChange={handleStartChange}
            className="timeline-slider"
            style={{ zIndex: startYear > minYear ? 5 : 3 }}
          />

          {/* Slider pour endYear */}
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={endYear}
            onChange={handleEndChange}
            className="timeline-slider"
            style={{ zIndex: endYear < maxYear ? 5 : 3 }}
          />
        </div>
      </div>

      {/* Legende */}
      <div className="flex items-center justify-center gap-4 typo-small text-gray-600 font-sans">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <span>Non selectionne</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
          <span>Selectionne</span>
        </div>
      </div>

      <style jsx>{`
        .timeline-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          pointer-events: none;
          cursor: pointer;
        }

        .timeline-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-dark);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          cursor: grab;
          pointer-events: auto;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .timeline-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .timeline-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.1);
        }

        .timeline-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-dark);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          cursor: grab;
          pointer-events: auto;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .timeline-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .timeline-slider::-moz-range-thumb:active {
          cursor: grabbing;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
