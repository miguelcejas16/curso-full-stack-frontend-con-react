import logo from '../assets/m-logo.png'

const Header = ({ onOpenModal, watchlist }) => {
    return (
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-4 flex justify-between items-center rounded-md ">
        <a href="/">
          <div className="flex items-center">
            <img href='/' src={logo} alt="Logo" className="h-10 mr-2" /> {/* Logo */}
            <h1 className="text-2xl font-bold font-[Bebas-Neue]">React Watchlist</h1> {/* Título */}
          </div>
        </a>
        <button
          onClick={onOpenModal}
          className="bg-gradient-to-r from-fuchsia-600 to-purple-600 px-4 py-2 rounded hover:bg-blue-100 font-[Bebas-Neue]"
        >
          Ver mi lista
        </button>
        <button onClick={() => {
          return watchlist.length ? console.log("The Matrix") : console.log("No hay peliculas para recomendar");
          }
        }>
          Recomendaciones
        </button>
      </header>
    );
  };
  
  export default Header;