const MovieCard = ({ movie, onAdd }) => {
    return (
      <div className="bg-stone-300 border rounded-lg shadow-lg overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 font-[Bebas-Neue]">{movie.title}</h3>
          <button
            onClick={() => onAdd(movie)}
            className="w-full bg-gradient-to-tr from-violet-600 to-indigo-500 text-white py-2 rounded hover:bg-blue-600 font-[Bebas-Neue]"
          >
            Agregar a mi lista
          </button>
        </div>
      </div>
    );
  };
  
  export default MovieCard;