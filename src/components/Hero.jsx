'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <motion.div
          className="relative z-10 flex-1 lg:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <main className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Capturando Tus</span>{' '}
              <span className="block text-indigo-600 xl:inline">
                Mejores Momentos
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Nos especializamos en crear recuerdos para toda la vida a través
              de nuestros lentes. Desde bodas hasta eventos corporativos,
              estamos aquí para capturar tus momentos especiales.
            </p>
          </main>
        </motion.div>
        <motion.div
          className="flex-1 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Photographer in action"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
