'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logos/sttoria-logo.png"
              width={200}
              height={1000}
              alt="sttoria logo"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/#portfolio">Portafolio</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
      >
        <div
          className="px-2 pt-2 pb-3 space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MobileNavLink href="/">Inicio</MobileNavLink>
          <MobileNavLink href="#portfolio">Portafolio</MobileNavLink>
          <MobileNavLink href="#contact">Contacto</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
  >
    {children}
  </a>
);

export default Navbar;
