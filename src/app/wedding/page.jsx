'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const photoList = Array.from({ length: 50 }, (_, i) => `foto${i + 2}.avif`);

export default function WeddingsPage() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className=" mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-gray-200 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bodas
        </motion.h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {photoList.map((photo, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={`/weddings/${photo}`}
                alt="Fotografía de boda."
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
