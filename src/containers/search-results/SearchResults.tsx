import { useCallback, useEffect, useRef, useState } from "react";
import { MoviesList } from "@/components/movies-list/MoviesList";
import { seachMovies } from "@/services/api";
import { Movie } from "@/types";
import { debounce } from "@/utils";
import styles from "./search-results.module.css";

interface SearchResultsProps {
  query: string;
}

export const SearchResults = ({ query }: SearchResultsProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQueryRef = useRef(query);

  const fetchMovies = async (
    searchQuery = debouncedQueryRef.current,
    pageNumber = page
  ) => {
    if (!searchQuery) {
      setMovies([]);
      setPage(1);
      setIsLoading(false);
      return;
    }
    console.log(searchQuery, pageNumber);

    setIsLoading(true);
    try {
      const {
        results,
        page: currentPage,
        total_pages,
      } = await seachMovies(searchQuery, pageNumber);
      setMovies(pageNumber === 1 ? results : [...movies, ...results]);
      setPage(currentPage == total_pages ? 0 : pageNumber + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchMovies = useCallback(debounce(fetchMovies, 500), []);

  useEffect(() => {
    debouncedQueryRef.current = query;
    setIsLoading(true);
    debouncedFetchMovies(query, 1);
  }, [query]);

  if (isLoading && movies.length === 0) {
    return <p className={styles.message}>Searching...</p>;
  }

  if (movies.length === 0) {
    return <p className={styles.message}>No results found</p>;
  }

  return (
    <MoviesList
      movies={movies}
      onLoadMore={fetchMovies}
      showLoadMore={page !== 0}
      isLoading={isLoading && movies.length > 0}
    />
  );
};
