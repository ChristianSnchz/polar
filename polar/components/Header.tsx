'use client';

import { Trophy, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="text-white
      bg-gradient-to-b from-gray-900 to-gray-800
      shadow-lg
      sticky top-0 z-50
      backdrop-blur-sm bg-opacity-95
    "
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <Trophy size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span className="text-2xl font-bold tracking-tight">Polar FC</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="#players" className="hover:text-blue-400 transition-colors duration-200">
                Jugadores
              </Link>
            </li>
            <li>
              <Link href="#club" className="hover:text-blue-400 transition-colors duration-200">
                Club
              </Link>
            </li>
            <li>
              <Link href="#games" className="hover:text-blue-400 transition-colors duration-200">
                Juegos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-gray-900 md:hidden">
            <ul className="flex flex-col p-4 space-y-4">
              <li>
                <Link 
                  href="#players" 
                  className="block hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jugadores
                </Link>
              </li>
              <li>
                <Link 
                  href="#club" 
                  className="block hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Club
                </Link>
              </li>
              <li>
                <Link 
                  href="#games" 
                  className="block hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Juegos
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
