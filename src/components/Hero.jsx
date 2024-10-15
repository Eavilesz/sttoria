'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-black/25 overflow-hidden h-screen flex items-center"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <motion.div
          className="relative z-10 flex-1 lg:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <main className="sm:text-center lg:text-left flex flex-col gap-12">
            <h1 className="text-4xl text-center lg:text-left tracking-tight font-extrabold text-slate-50 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Capturando Tus</span>{' '}
              <span className="block text-cyan-400 xl:inline">
                Mejores Momentos
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl sm:max-w-xl mx-8 md:mt-5 md:text-xl lg:mx-0">
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
            className="h-56 w-screen lg:w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl"
            src="/weddings/foto35.avif"
            alt="Photographer in action"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
