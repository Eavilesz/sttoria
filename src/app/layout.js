import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Sttoria',
  description: 'Servicio profesional de fotografía.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
