import { useState, useEffect } from 'react';

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const savedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
      // Asegurarse de que savedWatchlist es un array
      return Array.isArray(savedWatchlist) ? savedWatchlist : [];
    } catch (error) {
      console.error("Error al cargar la watchlist desde el Local Storage:", error);
      return [];
    }
  })

  /*// Cargar la watchlist desde el Local Storage al cargar la página
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (savedWatchlist) {
      console.log("Watchlist cargada desde Local Storage:", savedWatchlist);
      setWatchlist(savedWatchlist);
    }
  }, []);*/

  // Guardar la watchlist en el Local Storage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Agregar una película a la watchlist
  const addToWatchlist = (movie) => {
    const isMovieInWatchlist = watchlist.some((m) => m.id === movie.id);

    if (!isMovieInWatchlist) {
      setWatchlist([...watchlist, movie]);
    } else {
      console.log("La película ya está en la watchlist");
    }
  };

  // Eliminar una película de la watchlist
  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedWatchlist);
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};

export default useWatchlist;