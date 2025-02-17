import { motion } from "framer-motion";
import { useState } from "react"; // Importar useState para manejar el estado del menú
import logoM from '../assets/m-logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú
  const navItems = ["Inicio", "Servicios", "Acerca de", "Contacto"];
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com", icon: "bi-instagram" },
    { name: "Facebook", url: "https://www.facebook.com", icon: "bi-facebook" },
    { name: "Twitter", url: "https://www.x.com", icon: "bi-twitter-x" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center px-8">
      {/* Logo (izquierda) */}
      <div>
        <img
          src={logoM}
          alt="Logo"
          className="rounded-full w-14 h-12"
        />
      </div>

      {/* Menú hamburguesa (solo en móviles) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          <i className="bi-list"></i> {/* Ícono de menú hamburguesa de Bootstrap Icons */}
        </button>
      </div>

      {/* Items de navegación y redes sociales (ocultos en móviles, visibles en pantallas grandes) */}
      <div className={`md:flex md:items-center ${isMenuOpen ? "block" : "hidden"}`}>
        {/* Items de navegación */}
        <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href="/"
              className="hover:text-blue-300 transition-colors overlock-bold py-2 md:py-0"
              whileHover={{ scale: 1.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

      </div>

      {/* Logos de redes sociales */}
      <div className="flex space-x-4 mt-4 md:mt-0 md:ml-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              link={social.url}
              className="hover:text-blue-300 transition-colors text-2xl"
              whileHover={{ scale: 1.2 }}
              aria-label={social.name}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </div>
    </nav>
  );
}

export default Navbar;