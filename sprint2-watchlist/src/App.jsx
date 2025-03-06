import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import Header from './components/Header'
import Footer from './components/Footer'
import WatchlistModal from './components/WatchlistModal'
import useWatchlist from './hooks/useWatchlist'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist()

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /* 
  const handleRemoveMovie = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };
*/

const movies = [
  { id: 1, title: "Inception", image: "https://cdn.culturagenial.com/es/imagenes/inception-cke.jpg?class=article" },
  { id: 2, title: "Interstellar", image: "https://i.discogs.com/aoxhCtS937sIpYa2GlR_Sirc7nGKsnp5_ZUsmaTuS1Q/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjAy/NDA0LTE3MzY3Njc5/MzEtMzY2Mi5qcGVn.jpeg" },
  { id: 3, title: "The Dark Knight", image: "https://i.scdn.co/image/ab67616d0000b2739ca20352ead0cc8dccdf7951" },
  { id: 4, title: "The Matrix", image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY445_.jpg" },
  { id: 5, title: "Pulp Fiction", image: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg" },
  { id: 6, title: "Fight Club", image: "https://m.media-amazon.com/images/I/81D+KJkO4SL._AC_SY679_.jpg" },
  { id: 7, title: "The Shawshank Redemption", image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg" },
  { id: 8, title: "Forrest Gump", image: "https://resizing.flixster.com/kNAalgVTTW4PiJNLyUlQrRoXbTA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_h9_aa.jpg" }
];

/*  const handleAddToWatchlist = (movie) => {
    // Verifica si la película ya está en la watchlist
    const isMovieInWatchlist = watchlist.some((m) => m.id === movie.id);
  
    if (!isMovieInWatchlist) {
      setWatchlist([...watchlist, movie]); // Agrega la película a la watchlist
    } else {
      console.log("La película ya está en la watchlist");
    }
  }
*/
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <Header onOpenModal={handleOpenModal} watchlist={watchlist} />
      <MovieList movies={movies} onAdd={addToWatchlist} />
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={handleCloseModal}
          onRemove={removeFromWatchlist}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;