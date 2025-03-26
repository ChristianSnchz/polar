'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';




export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 15,
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

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-white text-lg md:text-xl font-semibold tracking-wider uppercase">
              Bienvenidos a
            </span>
          </motion.div>
          
          <h1 className={`text-5xl md:text-8xl font-bold uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200`}>
            POLAR FC
          </h1>
                            
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-blue-900 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      
  
    </section>
  );
}
