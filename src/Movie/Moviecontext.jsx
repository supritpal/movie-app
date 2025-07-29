import { createContext, useState, useContext, useEffect } from "react";

let Moviecontext = createContext();

export let useMoviecontext = () => useContext(Moviecontext);

export let Movieprovider = ({ children }) => {
  let [favorites, setfavorites] = useState([]);

  useEffect(() => {
    let storedfavs = localStorage.getItem("favorites");
    if (storedfavs) {
      setfavorites(JSON.parse(storedfavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  let addtofavorites = (movie) => {
    setfavorites((prev) => [...prev, movie]);
  };

  let removefromfavorites = (movieId) => {
    setfavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  let isfavorites = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  let value = {
    favorites,
    addtofavorites,
    removefromfavorites,
    isfavorites,
  };

  return (
    <Moviecontext.Provider value={value}>{children}</Moviecontext.Provider>
  );
};
