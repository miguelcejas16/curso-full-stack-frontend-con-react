const WatchlistModal = ({ watchlist, onClose, onRemove }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Mi Watchlist</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <ul>
            {watchlist.map((movie) => (
              <li key={movie.id} className="flex justify-between items-center mb-2">
                <span>{movie.title}</span>
                <button
                  onClick={() => onRemove(movie.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default WatchlistModal;