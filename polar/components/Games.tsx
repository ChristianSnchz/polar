'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { Button } from './ui/button';

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

const getResultColor = (result: string): string => {
  if (result.startsWith('Victoria')) return 'text-green-600';
  if (result.startsWith('Derrota')) return 'text-red-600';
  return 'text-yellow-600';
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
    labels: filteredGames.map(g => g.date),
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
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12">Últimos Juegos</h2>
        </AnimatedSection>

        {/* Stats Cards */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600">Total Partidos</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600">Victorias</h3>
              <p className="text-3xl font-bold text-green-600">{stats.wins}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600">Empates</h3>
              <p className="text-3xl font-bold text-yellow-600">{stats.draws}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600">% Victoria</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.winRate}%</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Charts */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Distribución de Partidos</h3>
              <Pie data={pieChartData} options={chartOptions} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Goles por Partido</h3>
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection>
          <div className="flex gap-4 mb-6">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              Todos
            </Button>
            <Button
              variant={filter === 'Amistoso' ? 'default' : 'outline'}
              onClick={() => setFilter('Amistoso')}
            >
              Amistosos
            </Button>
            <Button
              variant={filter === 'Oficial' ? 'default' : 'outline'}
              onClick={() => setFilter('Oficial')}
            >
              Oficiales
            </Button>
          </div>
        </AnimatedSection>

        {/* Games Table */}
        <AnimatedSection>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white bg-gradient-to-t from-blue-600 to-blue-800 min-w-[100px]">
                      Fecha
                    </TableHead>
                    <TableHead className="bg-blue-600 text-white min-w-[120px]">Oponente</TableHead>
                    <TableHead className="bg-blue-600 text-white min-w-[100px]">Tipo</TableHead>
                    <TableHead className="bg-blue-600 text-white min-w-[120px]">Resultado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredGames.map((game, index) => (
                    <motion.tr
                      key={game.date}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <TableCell className="py-3 px-2 sm:px-4 text-sm sm:text-base break-words">
                        {game.date}
                      </TableCell>
                      <TableCell className="py-3 px-2 sm:px-4 text-sm sm:text-base break-words">
                        {game.opponent}
                      </TableCell>
                      <TableCell className="py-3 px-2 sm:px-4 text-sm sm:text-base">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          game.type === 'Oficial' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {game.type}
                        </span>
                      </TableCell>
                      <TableCell className={`py-3 px-2 sm:px-4 text-sm sm:text-base break-words ${getResultColor(game.result)}`}>
                        {game.result}
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 p-4">
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-4 border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{game.opponent}</h3>
                      <p className="text-gray-600 text-sm">{game.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      game.type === 'Oficial' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
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
