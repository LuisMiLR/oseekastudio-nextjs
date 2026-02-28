"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 top-6 px-4 md:px-10 xl:px-20 transition-all duration-500">
      <nav
        className={`mx-auto max-w-7xl flex justify-between items-center px-6 lg:px-8 rounded-2xl transition-all duration-500 ease-in-out ${
          isScrolled
            ? "py-4 bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-black/3"
            : "py-5 bg-white/40 backdrop-blur-sm border border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/logo-oseeka.svg"
            alt="Oseeka Studio"
            width={26}
            height={26}
            className="group-hover:opacity-80 transition-opacity -my-3 text-brand"
          />
          <span className="font-extrabold text-dark tracking-tighter text-xl">
            Oseeka<span className="text-brand">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <a
            href="#offres"
            className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold"
          >
            nos offres
          </a>
          <a
            href="#realisations"
            className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold"
          >
            réalisations
          </a>
          <a
            href="#methode"
            className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold"
          >
            méthode
          </a>
          <a
            href="#contact"
            className="text-dark/70 hover:text-brand transition-colors text-sm font-semibold"
          >
            contact
          </a>
        </div>

        {/* Action Button Desktop */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-dark hover:bg-brand text-white px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg active:scale-95"
          >
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
        <div className="lg:hidden absolute top-20 left-4 right-4 md:left-10 md:right-10 bg-white border border-slate-100 rounded-2xl p-8 shadow-2xl space-y-6 animate-fadeIn">
          <a
            href="#offres"
            onClick={() => setIsOpen(false)}
            className="block text-dark font-bold text-lg"
          >
            nos offres
          </a>
          <a
            href="#realisations"
            onClick={() => setIsOpen(false)}
            className="block text-dark font-bold text-lg"
          >
            réalisations
          </a>
          <a
            href="#methode"
            onClick={() => setIsOpen(false)}
            className="block text-dark font-bold text-lg"
          >
            méthode
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-dark text-white px-6 py-4 rounded-xl text-center font-bold"
          >
            démarrer un projet
          </a>
        </div>
      )}
    </div>
  );
}