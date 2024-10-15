import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/navbar';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'Sttoria',
  description: 'Servicio profesional de fotografía.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gradient-to-br from-amber-600 via-black to-blue-700`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
