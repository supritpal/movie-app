import Moviecard from "./Moviecard.jsx";
import "../Moviecss/Homepage.css";
import React, { useState, useEffect } from "react";
import { searchmovies, getpopularmovies } from "../Services/api.js";

function Homepage() {
  let [searchquery, setsearchquery] = useState("");
  let [movies, setmovies] = useState([]);
  let [error, seterror] = useState(null);
  let [loading, setloading] = useState(true);

  useEffect(() => {
    let loadpopularmvies = async () => {
      try {
        let popularmovies = await getpopularmovies();
        setmovies(popularmovies);
      } catch (error) {
        console.log(error);
        seterror("Failed to load movies😥 Please try again.");
      } finally {
        setloading(false);
      }
    };
    loadpopularmvies();
  }, []);

  let submitform = async (e) => {
    e.preventDefault();
    if (!searchquery.trim()) return;
    if (loading) return;
    setloading(true);
    try {
      let searchresults = await searchmovies(searchquery);
      setmovies(searchresults);
      seterror(null);
    } catch (error) {
      console.log(error);
      seterror("Failed to search movie. Please try again.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={submitform} className="search-form">
        <input
          type="text"
          placeholder="enter movie name"
          className="search-input"
          value={searchquery}
          onChange={(e) => setsearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading.....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
