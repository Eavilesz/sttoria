'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white/25 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            ¡Haz clic aquí para agendar tu sesión y capturar los momentos más
            especiales con nosotros a través de WhatsApp!
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://wa.me/+593990319194"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos via WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
