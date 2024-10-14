import { createContext, useContext } from "react";
import { Movie } from "@/types";

export interface FavoritesContextType {
  favorites: Movie[];
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: Movie) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
