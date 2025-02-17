import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import reactLogo from '../assets/react-logo-main.png';

function MainContent() {
  const [message, setMessage] = useState("Bienvenido a mi Trabajo Práctico N°3 - Sprint 1");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => {
    setMessage("¡Gracias por la visita!");
    setIsButtonVisible(false);
  };

  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 my-4 md:my-8 bg-white border border-gray-200 rounded-lg shadow-lg mx-4 md:mx-8 lg:mx-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Logo de React */}
      <motion.img
        src={reactLogo}
        alt="React Logo"
        className="w-32 h-32 md:w-64 md:h-64 mb-4 md:mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      {/* Mensaje principal */}
      <motion.p
        className="text-xl md:text-2xl text-center text-gray-800 mb-4 md:mb-8 overlock-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {message}
      </motion.p>

      {/* Descripción */}
      <motion.p
        className="text-base md:text-lg text-center text-gray-800 mb-4 md:mb-8 overlock-regular"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Este proyecto es parte del curso Full Stack que estoy cursando actualmente, enfocado en el módulo
        de Frontend. Aquí he creado una landing page moderna y dinámica utilizando tecnologías como Vite
        y React para el desarrollo, Tailwind CSS para los estilos, Google Fonts para la tipografía y
        Bootstrap Icons para los íconos. Además, he incorporado animaciones sutiles con Motion para mejorar
        la experiencia del usuario.
      </motion.p>

      {/* Botón con animación de salida */}
      <AnimatePresence>
        {isButtonVisible && (
          <motion.button
            onClick={handleClick}
            className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-700 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Haz clic aquí
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

export default MainContent;