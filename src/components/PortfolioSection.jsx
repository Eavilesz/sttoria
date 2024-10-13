'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Bodas',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    href: '/wedding',
  },
  {
    title: 'Videos',
    image: '/video-tumbnails/disney-party.avif',
    href: '/videos',
  },
  {
    title: 'Sesiones',
    image:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    href: '/lifestyle',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Portafolio
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Descubre nuestra amplia gama de servicios
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <img
                    className="h-48 w-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
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
