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

const games = [
  { date: '2024-12-21', opponent: 'Bananero', result: 'Derrota 2-0' },
  { date: '2024-12-14', opponent: 'Mandarina', result: 'Victoria 5-2' },
];

export default function Games() {
  return (
    <section
      id="games"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 ">Últimos Juegos</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className=" text-white bg-gradient-to-t from-blue-600 to-blue-800 ">
                    Fecha
                  </TableHead>
                  <TableHead className="bg-blue-600 text-white">
                    Oponente
                  </TableHead>
                  <TableHead className="bg-blue-600 text-white">
                    Resultado
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {games.map((game, index) => (
                  <motion.tr
                    key={game.date}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TableCell>{game.date}</TableCell>
                    <TableCell>{game.opponent}</TableCell>
                    <TableCell>{game.result}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
