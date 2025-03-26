import { Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
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
        <nav>
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
      </div>
    </header>
  );
}
