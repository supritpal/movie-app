import "../Moviecss/MovieCard.css";
import { useMoviecontext } from "./Moviecontext";
import { motion } from "framer-motion"; // ✅ Framer Motion

function Moviecard({ movie }) {
  const { isfavorites, addtofavorites, removefromfavorites } =
    useMoviecontext();
  let favorite = isfavorites(movie.id);

  // ❤️ Handle Favorite Button
  const onfavclick = (e) => {
    e.preventDefault(); // ✅ Prevent navigation
    if (favorite) {
      removefromfavorites(movie.id);
    } else {
      addtofavorites(movie);
    }
  };

  // 🔗 YouTube Trailer URL
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    movie.title + " trailer"
  )}`;

  return (
    <motion.a
      href={youtubeSearchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="movie-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
    >
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || "Movie"}
        />
        <motion.div
          className="movie-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 10 }}
            onClick={onfavclick}
          >
            {favorite ? "❤️" : "🤍"}
          </motion.button>
        </motion.div>
      </div>
      <div className="movie-info">
        <h3>{movie.title || "Unknown Title"}</h3>
        <p>{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
      </div>
    </motion.a>
  );
}

export default Moviecard;
