import { useEffect, useState } from "react";
import { MoviesList } from "@/components/movies-list/MoviesList";
import { Movie, MoviesApiResponse } from "@/types";

import styles from "./fetch-movies.module.css";
import { translation_keys } from "@/constants";

interface FetchMoviesProps {
  fetchFn: (page: number) => Promise<MoviesApiResponse>;
}

export const FetchMovies = ({ fetchFn }: FetchMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const { results, page: currentPage, total_pages } = await fetchFn(page);
      setMovies([...movies, ...results]);
      setPage(currentPage == total_pages ? 0 : page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (isLoading && movies.length === 0) {
    return <p className={styles.message}>{translation_keys.loading}</p>;
  }

  if (error) {
    return (
      <p className={styles.message}>{translation_keys.error_fetching_movies}</p>
    );
  }

  return (
    <MoviesList
      movies={movies}
      onLoadMore={fetchMovies}
      showLoadMore={page !== 0}
      isLoading={isLoading}
    />
  );
};
