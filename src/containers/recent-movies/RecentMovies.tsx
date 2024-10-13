import { useEffect, useState } from "react";
import { MoviesList } from "@/components/movies-list/MoviesList";
import { fethRecentMovies } from "@/services/api";
import { Movie } from "@/types";

export const RecentMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    try {
      const {
        results,
        page: currentPage,
        total_pages,
      } = await fethRecentMovies(page);
      setMovies([...movies, ...results]);
      setPage(currentPage == total_pages ? 0 : page + 1);
    } catch (error) {
      console.error(error);
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
    />
  );
};
