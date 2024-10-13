import { FAVORITES_KEY_LS } from "@/constants";
import { Movie } from "@/types";

export const debounce = (func: Function, delay = 300) => {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export const getFavorites = (): Movie[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY_LS);
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (
  movie: Movie,
  favorites = getFavorites()
): void => {
  const index = favorites.findIndex((fav) => fav.id === movie.id);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(movie);
  }

  localStorage.setItem(FAVORITES_KEY_LS, JSON.stringify(favorites));
};

export const isFavorite = (
  movieId: number,
  favorites = getFavorites()
): boolean => {
  return favorites.some((fav) => fav.id === movieId);
};
