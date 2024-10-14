import { useEffect, useState } from "react";
import { MoviesList } from "@/components/movies-list/MoviesList";
import { Movie, MoviesApiResponse } from "@/types";

interface FetchMoviesProps {
  fetchFn: (page: number) => Promise<MoviesApiResponse>;
}

export const FetchMovies = ({ fetchFn }: FetchMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const { results, page: currentPage, total_pages } = await fetchFn(page);
      setMovies([...movies, ...results]);
      setPage(currentPage == total_pages ? 0 : page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesList
      movies={movies}
      onLoadMore={fetchMovies}
      showLoadMore={page !== 0}
      isLoading={isLoading}
    />
  );
};
