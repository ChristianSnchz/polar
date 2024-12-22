'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const players = [
  {
    name: 'La Mole',
    position: 'Defensa',
    image: '/assets/mole.jpeg',
    number: 2,
    nationality: 'Venezuela',
  },
  {
    name: 'Dennis',
    position: 'Defensa',
    image: '/assets/dennis.jpeg',
    number: 10,
    nationality: 'Venezuela',
  },
  {
    name: 'Yhomer',
    position: 'Mediocampista',
    image: '/assets/cheito.jpeg',
    number: 19,
    nationality: 'Venezuela',
  },
  {
    name: 'Vicnaldo',
    position: 'Delantero',
    image: '/assets/vicnaldo.jpeg',
    number: 9,
    nationality: 'Venezuela',
  },
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
            Nuestras Estrellas
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {players.map((player) => (
            <AnimatedSection key={player.name} className="flex justify-center">
              <motion.div
                className=" w-full md:w-64 h-96 bg-gradient-to-br from-blue-600 to-pink-300 rounded-lg shadow-lg overflow-hidden relative"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 0px 8px rgb(59, 130, 246)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-0 z-10"></div>
                <div className="relative h-3/4">
                  <Image
                    src={player.image}
                    alt={player.name}
                    layout="fill"
                    objectFit="contain"
                    className="z-0"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-white rounded-full w-10 h-10 flex items-center justify-center z-20">
                  <span className="text-blue-600 font-bold text-xl">
                    {player.number}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 z-20">
                  <h3 className="text-xl font-semibold text-blue-700">
                    {player.name}
                  </h3>
                  <p className="text-gray-600">{player.position}</p>
                  <p className="text-gray-500 text-sm">{player.nationality}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-pink-100 opacity-0 hover:opacity-20 transition-opacity duration-300 z-30"></div>
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
