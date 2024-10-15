'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/85 shadow-md fixed top-0 left-0 right-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center align-middle">
            <Image
              style={{ width: 'auto', height: 'auto', marginTop: '0.5rem' }}
              priority
              src="/logos/sttoria-logo.png"
              width={200}
              height={1000}
              alt="sttoria logo"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/#portfolio">Portafolio</NavLink>
            <NavLink href="https://wa.me/+593990319194" isExternal>
              Contacto
            </NavLink>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
          className="px-2 pt-2 pb-3 space-y-1 bg-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MobileNavLink href="/">Inicio</MobileNavLink>
          <MobileNavLink href="#portfolio">Portafolio</MobileNavLink>
          <MobileNavLink href="https://wa.me/+593990319194">
            Contacto
          </MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, isExternal, children }) => (
  <a
    href={href}
    className="border-transparent text-slate-50 hover:border-gray-300 hover:text-slate-400 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold"
    target={isExternal ? '_blank' : '_self'}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="border-transparent text-black text-xl font-bold hover:bg-gray-50 hover:border-gray-300 hover:text-slate-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
  >
    {children}
  </a>
);

export default Navbar;
