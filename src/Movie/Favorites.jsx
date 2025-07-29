import "../Moviecss/Favorites.css";
import { useMoviecontext } from "./Moviecontext";
import Moviecard from "./Moviecard";

function Favorites() {
  const { favorites } = useMoviecontext();

  // Make sure favorites exists and has items
  if (favorites) {
    return (
      <div className="favorites">
        <h2 className="sup">Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
