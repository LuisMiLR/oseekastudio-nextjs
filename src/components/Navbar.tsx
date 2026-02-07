"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 px-4 md:px-10 py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-slate-100 shadow-sm">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-dark group-hover:bg-brand rounded-full flex items-center justify-center text-white text-[12px] font-bold transition-all duration-300">
            o
          </div>
          <span className="font-extrabold text-dark tracking-tighter text-xl uppercase">
            OSEEKA
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#offres" className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold">
            nos offres
          </a>
          <a href="#realisations" className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold">
            réalisations
          </a>
          <a href="#methode" className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold">
            méthode
          </a>
          <a href="#contact" className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold">
            contact
          </a>
        </div>

        {/* Action Button Desktop */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-dark hover:bg-brand text-white px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg active:scale-95">
            Démarrer un projet
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-dark p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-4 right-4 bg-white border border-slate-100 rounded-2xl p-8 shadow-2xl space-y-6 animate-fadeIn">
          <a href="#offres" onClick={() => setIsOpen(false)} className="block text-dark font-bold text-lg">
            nos offres
          </a>
          <a href="#realisations" onClick={() => setIsOpen(false)} className="block text-dark font-bold text-lg">
            réalisations
          </a>
          <a href="#methode" onClick={() => setIsOpen(false)} className="block text-dark font-bold text-lg">
            méthode
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-dark text-white px-6 py-4 rounded-xl text-center font-bold">
            démarrer un projet
          </a>
        </div>
      )}
    </div>
  );
}