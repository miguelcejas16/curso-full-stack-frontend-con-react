import { useState } from "react";

function Footer() {
  const [color, setColor] = useState("bg-blue-600");

  const cambiarColor = () => {
    setColor(color === "bg-blue-600" ? "bg-red-600" : "bg-blue-600")
  }

    return (
      <footer className={`${color} text-white text-center p-4 overlock-regular`}>
        <p>&copy; 2025 Mi Landing Page. Miguel Cejas Romero. Todos los derechos reservados.</p>
        <button onClick={cambiarColor}>Click para cambiar de color</button>
      </footer>
    );
  }
  
  export default Footer;