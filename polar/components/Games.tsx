'use client';

import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Game {
  date: string;
  opponent: string;
  result: string;
  type: 'Amistoso' | 'Oficial';
}

const games: Game[] = [
  {
    date: '2025-05-24',
    opponent: 'Los Tonfa',
    result: 'Empate 1-1 (Campeonato)',
    type: 'Oficial',
  },
  {
    date: '2025-05-10',
    opponent: 'Sumo',
    result: 'Derrota 3-2 (Campeonato)',
    type: 'Oficial',
  },
  {
    date: '2025-05-03',
    opponent: 'La resurrección FC',
    result: 'Victoria 4-1 (Campeonato)',
    type: 'Oficial',
  },
  {
    date: '2025-04-12',
    opponent: 'Paladar Negro',
    result: 'Victoria 2-1 (Campeonato)',
    type: 'Oficial',
  },
  {
    date: '2025-04-05',
    opponent: 'Bici Volcan',
    result: 'Derrota 2-1 (Campeonato)',
    type: 'Oficial',
  },
  {
    date: '2025-03-22',
    opponent: 'Sin Nombre',
    result: 'Empate 0-0 (Amitoso)',
    type: 'Amistoso',
  },
  {
    date: '2025-03-15',
    opponent: 'NK FC',
    result: 'Empate 0-0 (Cuadrangular)',
    type: 'Oficial',
  },
  {
    date: '2025-03-08',
    opponent: 'Bici Volcan',
    result: 'Victoria 1-0 (Cuadrangular)',
    type: 'Oficial',
  },
  {
    date: '2025-02-22',
    opponent: 'Falso Equipo',
    result: 'Derrota 1-0 (Cuadrangular)',
    type: 'Oficial',
  },
  {
    date: '2025-02-15',
    opponent: 'Cuidado Tchuameni',
    result: 'Derrota 2-1 (Amistoso)',
    type: 'Amistoso',
  },
  {
    date: '2025-02-08',
    opponent: 'CA Peluche',
    result: 'Derrota 2-1 (Amistoso)',
    type: 'Amistoso',
  },
  { date: '2025-02-01', opponent: 'Dynamo', result: 'Empate 2-2 (Amistoso)', type: 'Amistoso' },
  { date: '2024-12-21', opponent: 'Bananero', result: 'Derrota 2-0', type: 'Oficial' },
  { date: '2024-12-14', opponent: 'Mandarina', result: 'Victoria 5-2', type: 'Oficial' },
];

interface Stats {
  total: number;
  wins: number;
  losses: number;
  draws: number;
  friendly: number;
  official: number;
  winRate: string;
}

const calculateStats = (games: Game[]): Stats => {
  const total = games.length;
  const wins = games.filter(g => g.result.startsWith('Victoria')).length;
  const losses = games.filter(g => g.result.startsWith('Derrota')).length;
  const draws = games.filter(g => g.result.startsWith('Empate')).length;
  const friendly = games.filter(g => g.type === 'Amistoso').length;
  const official = games.filter(g => g.type === 'Oficial').length;

  return {
    total,
    wins,
    losses,
    draws,
    friendly,
    official,
    winRate: ((wins / total) * 100).toFixed(1),
  };
};

// Card color themes
const CARD_COLORS = [
  { border: '#3b82f6', bg: '#1e3a8a', text: '#ffffff', accent: '#3b82f6' },  // Blue
  { border: '#10b981', bg: '#064e3b', text: '#ffffff', accent: '#10b981' },  // Green
  { border: '#f59e0b', bg: '#78350f', text: '#ffffff', accent: '#f59e0b' },  // Yellow
  { border: '#ef4444', bg: '#7f1d1d', text: '#ffffff', accent: '#ef4444' },  // Red
];

const getResultColor = (result: string): string => {
  if (result.startsWith('Victoria')) return 'text-green-500';
  if (result.startsWith('Derrota')) return 'text-red-500';
  return 'text-yellow-500';
};

export default function Games() {
  const [filter, setFilter] = useState<'all' | 'Amistoso' | 'Oficial'>('all');
  const stats = calculateStats(games);
  const filteredGames = filter === 'all' ? games : games.filter(g => g.type === filter);

  const pieChartData = {
    labels: ['Amistosos', 'Oficiales'],
    datasets: [
      {
        data: [stats.friendly, stats.official],
        backgroundColor: ['#60A5FA', '#3B82F6'],
        borderColor: ['#2563EB', '#1D4ED8'],
        borderWidth: 1,
      },
    ],
  };

  const barChartData = {
    labels: filteredGames.map(g => g.date.substring(5)), // Only showing MM-DD
    datasets: [
      {
        label: 'Goles',
        data: filteredGames.map(g => {
          const score = g.result.match(/\d+-\d+/)?.[0]?.split('-').map(Number) || [0, 0];
          return score[0];
        }),
        backgroundColor: '#3B82F6',
        borderColor: '#2563EB',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#9ca3af'
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.2)'
        }
      },
      y: {
        ticks: {
          color: '#9ca3af'
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.2)'
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <section id="games" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Estadísticas y Partidos
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Seguimiento de nuestro rendimiento en el terreno de juego
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Cards */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px rgba(0,0,0,0.4)' }}
              className="overflow-hidden relative"
              style={{ 
                background: CARD_COLORS[0].bg,
                border: `4px solid ${CARD_COLORS[0].border}`,
                boxShadow: `0 10px 20px rgba(0,0,0,0.3), 0 0 10px ${CARD_COLORS[0].border}66`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
              <div className="p-5 relative z-10">
                <h3 className="text-gray-300 font-medium text-sm uppercase tracking-wider mb-1">Total Partidos</h3>
                <p className="text-4xl font-bold" style={{ color: CARD_COLORS[0].border }}>{stats.total}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px rgba(0,0,0,0.4)' }}
              className="overflow-hidden relative"
              style={{ 
                background: CARD_COLORS[1].bg,
                border: `4px solid ${CARD_COLORS[1].border}`,
                boxShadow: `0 10px 20px rgba(0,0,0,0.3), 0 0 10px ${CARD_COLORS[1].border}66`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent pointer-events-none" />
              <div className="p-5 relative z-10">
                <h3 className="text-gray-300 font-medium text-sm uppercase tracking-wider mb-1">Victorias</h3>
                <p className="text-4xl font-bold" style={{ color: CARD_COLORS[1].border }}>{stats.wins}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px rgba(0,0,0,0.4)' }}
              className="overflow-hidden relative"
              style={{ 
                background: CARD_COLORS[2].bg,
                border: `4px solid ${CARD_COLORS[2].border}`,
                boxShadow: `0 10px 20px rgba(0,0,0,0.3), 0 0 10px ${CARD_COLORS[2].border}66`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent pointer-events-none" />
              <div className="p-5 relative z-10">
                <h3 className="text-gray-300 font-medium text-sm uppercase tracking-wider mb-1">Empates</h3>
                <p className="text-4xl font-bold" style={{ color: CARD_COLORS[2].border }}>{stats.draws}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px rgba(0,0,0,0.4)' }}
              className="overflow-hidden relative"
              style={{ 
                background: CARD_COLORS[3].bg,
                border: `4px solid ${CARD_COLORS[3].border}`,
                boxShadow: `0 10px 20px rgba(0,0,0,0.3), 0 0 10px ${CARD_COLORS[3].border}66`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent pointer-events-none" />
              <div className="p-5 relative z-10">
                <h3 className="text-gray-300 font-medium text-sm uppercase tracking-wider mb-1">Derrotas</h3>
                <p className="text-4xl font-bold" style={{ color: CARD_COLORS[3].border }}>{stats.losses}</p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Win Rate Progress Bar */}
        <AnimatedSection>
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl p-6 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Porcentaje de Victoria: <span className="text-blue-400">{stats.winRate}%</span></h3>
            <div className="h-5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, parseFloat(stats.winRate))}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 text-gray-400 text-sm">{stats.wins} victorias de {stats.total} partidos</div>
          </div>
        </AnimatedSection>

        {/* Charts */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Tipos de Partidos</h3>
                <div className="h-60">
                  <Pie data={pieChartData} options={pieOptions} />
                </div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">{stats.official}</div>
                    <div className="text-gray-400 text-sm">Oficiales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-300">{stats.friendly}</div>
                    <div className="text-gray-400 text-sm">Amistosos</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Goles por Partido</h3>
                <div className="h-60">
                  <Bar data={barChartData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection>
          <div className="flex gap-4 mb-6 justify-center">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}
              className={`px-5 py-2 rounded-lg font-medium transition-colors text-sm ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 border border-gray-700'
              }`}
              onClick={() => setFilter('all')}
            >
              Todos
            </motion.button>
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}
              className={`px-5 py-2 rounded-lg font-medium transition-colors text-sm ${
                filter === 'Amistoso' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 border border-gray-700'
              }`}
              onClick={() => setFilter('Amistoso')}
            >
              Amistosos
            </motion.button>
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}
              className={`px-5 py-2 rounded-lg font-medium transition-colors text-sm ${
                filter === 'Oficial' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 border border-gray-700'
              }`}
              onClick={() => setFilter('Oficial')}
            >
              Oficiales
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Games Table */}
        <AnimatedSection>
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-4 text-left text-gray-300 font-medium text-sm uppercase tracking-wider">Fecha</th>
                    <th className="py-4 px-4 text-left text-gray-300 font-medium text-sm uppercase tracking-wider">Oponente</th>
                    <th className="py-4 px-4 text-left text-gray-300 font-medium text-sm uppercase tracking-wider">Tipo</th>
                    <th className="py-4 px-4 text-left text-gray-300 font-medium text-sm uppercase tracking-wider">Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGames.map((game, index) => (
                    <motion.tr
                      key={game.date}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-300">{game.date}</td>
                      <td className="py-4 px-4 text-white font-medium">{game.opponent}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          game.type === 'Oficial' 
                            ? 'bg-blue-900 text-blue-300 border border-blue-600' 
                            : 'bg-green-900 text-green-300 border border-green-600'
                        }`}>
                          {game.type}
                        </span>
                      </td>
                      <td className={`py-4 px-4 font-medium ${getResultColor(game.result)}`}>
                        {game.result}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 p-4">
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-700 rounded-lg p-4 border border-gray-600"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-white">{game.opponent}</h3>
                      <p className="text-gray-400 text-sm">{game.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      game.type === 'Oficial' 
                        ? 'bg-blue-900 text-blue-300 border border-blue-600' 
                        : 'bg-green-900 text-green-300 border border-green-600'
                    }`}>
                      {game.type}
                    </span>
                  </div>
                  <div className={`text-lg font-medium ${getResultColor(game.result)}`}>
                    {game.result}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
