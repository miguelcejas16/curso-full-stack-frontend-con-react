import logo from '../assets/react.svg'

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-4 mt-8 rounded-md">
        <div className="container mx-auto text-center flex flex-col items-center">
          <img src={logo} alt="react logo" className="mb-2 w-20 h-20 object-contain" />
          <p className="text-sm font-[Bebas-Neue]">
            © 2025 Mi Cuevana. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-blue-200 font-[Bebas-Neue]"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 font-[Bebas-Neue]"
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </footer>

    );
  };
  
  export default Footer;