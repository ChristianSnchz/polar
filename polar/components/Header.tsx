import { Volleyball as Bear } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className=" text-white
      bg-gradient-to-b from-blue-600 to-blue-800
    "
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Bear size={32} />
          <span className="text-2xl font-bold">Polar FC</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#players" className="hover:underline">
                Jugadores
              </Link>
            </li>
            <li>
              <Link href="#club" className="hover:underline">
                Club
              </Link>
            </li>
            <li>
              <Link href="#games" className="hover:underline">
                Juegos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
