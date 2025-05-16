'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DEFAULT_AVATAR = '/assets/default.png';

const players = [
  {
    name: 'Marco Antonio',
    position: 'Portero',
    image: '/assets/marco.jpg',
    number: 1,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Kike',
    position: 'Portero',
    image: '/assets/default.png',
    number: 98,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'La Mole',
    position: 'Defensa',
    image: '/assets/mole.jpeg',
    number: 2,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Dennis',
    position: 'Defensa ',
    image: '/assets/dennis.jpeg',
    number: 3,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Jose El tio',
    position: 'Defensa ',
    image: '/assets/default.png',
    number: 99,
    nationality: 'Venezuela',
    goals: 1,
  },
  {
    name: 'Christian',
    position: 'Defensa',
    image: '/assets/default.png',
    number: 4,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Jose Caracas',
    position: 'Defensa',
    image: '/assets/caracas.jpeg',
    number: 5,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Roger Maquina',
    position: 'Defensa',
    image: '/assets/marquina.jpg',
    number: 6,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Yhomer G',
    position: 'Mediocampista',
    image: '/assets/cheito.jpeg',
    number: 8,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Roger Figuera',
    position: 'Mediocampista',
    image: '/assets/roger.jpg',
    number: 9,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Miguel',
    position: 'Mediocampista',
    image: '/assets/miguel.jpg',
    number: 10,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Joel',
    position: 'Mediocampista',
    image: '/assets/joel.jpg',
    number: 11,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Carlos Monky',
    position: 'Delantero',
    image: '/assets/default.png',
    number: 7,
    nationality: 'Venezuela',
    goals: 0,
  },
  {
    name: 'Victor N',
    position: 'Delantero',
    image: '/assets/vicnaldo.jpeg',
    number: 19,
    nationality: 'Venezuela',
    goals: 1,
  },
  {
    name: 'Gabriel Diaz',
    position: 'Delantero',
    image: '/assets/gabo.jpg',
    number: 13,
    nationality: 'Venezuela',
    goals: 6,
  },
  {
    name: 'Buba',
    position: 'Delantero',
    image: '/assets/buba.jpg',
    number: 14,
    nationality: 'Venezuela',
    goals: 1,
  },
  {
    name: 'El Parce',
    position: 'Delantero',
    image: '/assets/parce.jpeg',
    number: 15,
    nationality: 'Colombiano',
    goals: 0,
  },
];

// Default avatar image


// Card color variations
const CARD_COLORS = [
  { border: '#e63946', bg: '#1d3557', text: '#f1faee', accent: '#e63946' }, // Red/Navy
  { border: '#ff9f1c', bg: '#2a9d8f', text: '#fff', accent: '#ff9f1c' },    // Orange/Teal
  { border: '#3a86ff', bg: '#073b4c', text: '#fff', accent: '#3a86ff' },    // Blue/Dark Blue
  { border: '#ffd60a', bg: '#003049', text: '#fff', accent: '#ffd60a' },    // Yellow/Navy
  { border: '#06d6a0', bg: '#073b4c', text: '#fff', accent: '#06d6a0' },    // Green/Dark Blue
  { border: '#0096c7', bg: '#001219', text: '#fff', accent: '#0096c7' },    // Teal/Black
  { border: '#8d99ae', bg: '#2b2d42', text: '#fff', accent: '#8d99ae' },    // Gray/Dark
  { border: '#fb8500', bg: '#023047', text: '#fff', accent: '#fb8500' },    // Orange/Dark Blue
];

export default function Players() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const teamImages = [
    '/assets/team-1.jpeg',
    '/assets/team-2.jpeg',
    '/assets/team-3.jpeg'
  ];

  // Filter players with at least 1 goal, then sort by goals (descending)
  const goalScorers = players.filter(player => player.goals > 0)
    .sort((a, b) => b.goals - a.goals);
  
  // Get top scorers (all players with goals)
  const topScorers = goalScorers;
  
  // Total team goals
  const totalTeamGoals = players.reduce((sum, player) => sum + player.goals, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === teamImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="players"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Nuestras Estrellas
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              La Colección de Jugadores
            </p>
          </div>
        </AnimatedSection>

        {/* Modern Card Style Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
          {players.map((player, index) => {
            const colorScheme = CARD_COLORS[index % CARD_COLORS.length];
            
            return (
              <AnimatedSection 
                key={player.name + player.number} 
                className="flex justify-center"
                delay={index * 0.05}
              >
                <motion.div
                  className="w-full overflow-hidden relative modern-card"
                  style={{ 
                    background: colorScheme.bg,
                    border: `4px solid ${colorScheme.border}`,
                    boxShadow: `0 10px 20px rgba(0,0,0,0.3), 0 0 10px ${colorScheme.border}66`
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 25px rgba(0,0,0,0.4), 0 0 15px ${colorScheme.border}88`,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Player Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden bg-white border-b-4" style={{ borderColor: colorScheme.border }}>
                    <Image
                      src={player.image || DEFAULT_AVATAR}
                      alt={player.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top"
                      onError={(e) => {
                        // Fallback to default avatar if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = DEFAULT_AVATAR;
                      }}
                    />
                  </div>
                  
                  {/* Player Info Bar */}
                  <div className="p-2 text-center" style={{ color: colorScheme.text }}>
                    <h3 className="text-lg font-bold truncate uppercase tracking-wider">
                      {player.name}
                    </h3>
                    <p className="text-xs opacity-80 uppercase tracking-wide">Club Polar</p>
                  </div>
                  
                  {/* Player Number Badge */}
                  <div 
                    className="absolute bottom-10 right-2 rounded-full w-8 h-8 flex items-center justify-center text-center font-bold text-sm"
                    style={{ 
                      background: colorScheme.border,
                      color: colorScheme.bg,
                      border: `2px solid ${colorScheme.bg}`
                    }}
                  >
                    {player.number}
                  </div>
                  
                  {/* Position Badge */}
                  <div 
                    className="absolute top-2 left-2 px-2 py-1 text-xs font-bold uppercase"
                    style={{ 
                      background: colorScheme.border,
                      color: colorScheme.text
                    }}
                  >
                    {player.position}
                  </div>
                  
                  {/* Goals Badge - New */}
                  {player.goals > 0 && (
                    <div 
                      className="absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-full flex items-center"
                      style={{ 
                        background: colorScheme.border,
                        color: colorScheme.text
                      }}
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                      {player.goals}
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Goals Stats Section */}
        <AnimatedSection className="mt-20">
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-bold mb-6 text-white">Estadísticas de Goles(Oficiales)</h3>
              <p className="text-gray-300 mb-8">Total de goles del equipo: <span className="text-2xl font-bold text-blue-400">{totalTeamGoals}</span></p>
              
              {/* Goals Bar Chart - Only show if there are goal scorers */}
              {topScorers.length > 0 && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 text-white">Goleadores</h4>
                  <div className="space-y-4">
                    {topScorers.map((player, index) => {
                      const percentage = (player.goals / Math.max(...topScorers.map(p => p.goals))) * 100;
                      const barColor = CARD_COLORS[index % CARD_COLORS.length].border;
                      
                      return (
                        <div key={player.name + "-goals"} className="relative">
                          <div className="flex items-center mb-1">
                            <div className="w-20 md:w-36 text-white font-medium truncate">{player.name}</div>
                            <div className="ml-2 text-sm text-gray-300 font-bold">#{player.number}</div>
                            <div className="ml-auto text-white font-bold">{player.goals}</div>
                          </div>
                          <div className="h-4 w-full bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full rounded-full"
                              style={{ backgroundColor: barColor }}
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Goals Table - Only show if there are goal scorers */}
              {goalScorers.length > 0 && (
                <>
                  <h4 className="text-xl font-bold mb-4 text-white">Tabla de Goleadores</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-800">
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Jugador</th>
                          <th className="py-3 px-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Numero</th>
                          <th className="py-3 px-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Posición</th>
                          <th className="py-3 px-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Goles</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {goalScorers.map((player, index) => (
                          <tr key={player.name + "-table"} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                            <td className="py-2 px-4 whitespace-nowrap text-sm font-medium text-white flex items-center gap-2">
                              <div className="w-6 h-6 relative rounded-full overflow-hidden bg-gray-700">
                                <Image
                                  src={player.image || DEFAULT_AVATAR}
                                  alt={player.name}
                                  fill
                                  sizes="24px"
                                  className="object-cover"
                                />
                              </div>
                              {player.name}
                            </td>
                            <td className="py-2 px-4 whitespace-nowrap text-sm text-center text-gray-300">
                              {player.number}
                            </td>
                            <td className="py-2 px-4 whitespace-nowrap text-sm text-center text-gray-300">
                              {player.position}
                            </td>
                            <td className="py-2 px-4 whitespace-nowrap text-sm text-center">
                              <span className="font-bold text-blue-400">{player.goals}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              
              {/* Show message if no goal scorers */}
              {goalScorers.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-400 text-lg">No hay goleadores registrados aún</p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <div className="relative rounded-lg overflow-hidden border-4 border-blue-500">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={teamImages[currentImageIndex]}
                alt="Equipo de fútbol"
                width={1200}
                height={800}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 uppercase tracking-wider">Unidos por la Pasión</h3>
              <p className="text-sm md:text-lg opacity-90">Un equipo que lucha por la gloria en cada partido</p>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              {teamImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-blue-500 scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
