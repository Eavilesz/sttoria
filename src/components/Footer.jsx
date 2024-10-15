import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">&copy; Sttoria</p>
          <div className="flex space-x-6">
            <a
              target="_blank"
              href="https://www.instagram.com/sttoria_ph/"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@sttoria_ph"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Instagram</span>
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
