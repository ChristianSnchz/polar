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
      className="py-24 bg-gradient-to-b from-slate-100 via-white to-slate-100"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
              Nuestras Estrellas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Conoce a los jugadores que hacen historia en cada partido
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <AnimatedSection 
              key={player.name} 
              className="flex justify-center"
              delay={index * 0.1}
            >
              <motion.div
                className="w-full max-w-sm h-[420px] bg-white rounded-2xl shadow-xl overflow-hidden relative group"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={player.image}
                    alt={player.name}
                    layout="fill"
                    objectFit="cover"
                    className="z-0 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center z-20 shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">
                    {player.number}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 z-20 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {player.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {player.position}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-3.646 5.354a.5.5 0 10.707-.707 3 3 0 00-4.243-4.243.5.5 0 10-.707.707 4 4 0 005.657 5.657z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{player.nationality}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/team-3.jpeg"
              alt="Equipo de fútbol"
              width={1200}
              height={600}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Unidos por la Pasión</h3>
              <p className="text-lg opacity-90">Un equipo que lucha por la gloria en cada partido</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
