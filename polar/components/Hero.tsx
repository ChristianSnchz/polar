'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Limelight } from 'next/font/google';

const lime = Limelight({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-blue-900">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image
          src="/assets/logo.jpeg"
          alt="Estadio de fútbol"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1
            className={`${lime.className} text-6xl  md:text-9xl font-bold uppercase`}
          >
            POLAR FC
          </h1>
          {/* <p className="text-2xl mb-8">La fuerza del norte en el sur</p> */}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <p className="text-7xl">⚽</p>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 w-48 h-48"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <p className="  text-2xl md:text-7xl">🐻‍❄️</p>
      </motion.div>
    </section>
  );
}
