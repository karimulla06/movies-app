import React, { useState, useEffect, ReactNode } from "react";
import { FavoritesContext } from "@/hooks/useFavorites";
import { Movie } from "@/types";

const FAVORITES_KEY = "favorites";

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Function to check if a movie is in favorites
  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  // Function to toggle a movie's favorite status
  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie.id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((m) => m.id !== movie.id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
