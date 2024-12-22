'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const players = [
  { name: 'La Mole', position: 'Defensa', image: '/assets/mole.jpeg' },
  { name: 'Dennis', position: 'Defensa', image: '/assets/dennis.jpeg' },
  { name: 'Yhomer', position: 'Mediocampista', image: '/assets/cheito.jpeg' },
];

export default function Players() {
  return (
    <section
      id="players"
      className="py-20 bg-gradient-to-b from-slate-200 to-slate-100"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 ">
            Nuestros Jugadores Estrella
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {players.map((player) => (
            <AnimatedSection key={player.name} className="flex justify-center">
              <motion.div
                className=" rounded-lg shadow-lg p-6 text-center w-64
                
                  bg-gradient-to-b from-blue-800 to-pink-100
                "
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={player.image}
                  alt={player.name}
                  width={200}
                  height={200}
                  className="mx-auto h-56 w-56 object-contain rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-700">
                  {player.name}
                </h3>
                <p className="text-gray-600">{player.position}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <Image
            src="/assets/team-3.jpeg"
            alt="Equipo de fútbol"
            width={800}
            height={400}
            className="rounded-lg object-cover mt-8 mx-auto"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
