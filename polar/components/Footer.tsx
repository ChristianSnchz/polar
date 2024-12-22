import { Volleyball as Bear } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="text-white py-8
      bg-gradient-to-b from-blue-600 to-blue-800
    "
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Bear size={24} className="mr-2" />
            <span className="text-xl font-bold">Polar FC</span>
          </div>
          <div>
            <p>&copy; 2024 Polar FC. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
