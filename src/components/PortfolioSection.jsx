'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Bodas',
    image: '/weddings/portada.webp',
    href: '/wedding',
  },
  {
    title: 'Videos',
    image: '/video-tumbnails/disney-party.avif',
    href: '/videos',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Portafolio
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Descubre lo que ofrecemos para ti
          </p>
        </motion.div>
        {/* <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
        <div className="mt-12 flex gap-8 justify-center flex-wrap">
          {portfolioItems.map((item, index) => (
            <motion.div
              className="w-full md:w-2/6"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} className="block">
                <div className="bg-white/25 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <img
                    className="h-64 lg:h-96 w-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-200">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
