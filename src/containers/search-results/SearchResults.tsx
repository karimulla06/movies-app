import { useCallback, useEffect, useReducer, useRef } from "react";
import { MoviesList } from "@/components/movies-list/MoviesList";
import { searchMovies } from "@/services/api";
import { debounce } from "@/utils";
import { translation_keys } from "@/constants";
import { initialState, reducer } from "./reducer";
import styles from "./search-results.module.css";

interface SearchResultsProps {
  query: string;
}

export const SearchResults = ({ query }: SearchResultsProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, page, showLoadMore, isLoading, error } = state;
  const debouncedQueryRef = useRef(query);

  const fetchMovies = async (
    searchQuery = debouncedQueryRef.current,
    pageNumber = page
  ) => {
    if (!searchQuery) {
      dispatch({ type: "RESET" });
      return;
    }
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await searchMovies(searchQuery, pageNumber);
      dispatch({
        type: "SET_MOVIES",
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: "An error occurred while fetching movies.",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const debouncedFetchMovies = useCallback(debounce(fetchMovies, 500), []);

  useEffect(() => {
    debouncedQueryRef.current = query;
    dispatch({ type: "SET_LOADING", payload: true });
    debouncedFetchMovies(query, 1);
  }, [query]);

  if (error) {
    return <p className={styles.message}>{error}</p>;
  }

  if (isLoading && movies.length === 0) {
    return <p className={styles.message}>{translation_keys.searching}</p>;
  }

  if (movies.length === 0) {
    return (
      <p className={styles.message}>{translation_keys.no_results_found}</p>
    );
  }

  return (
    <MoviesList
      movies={movies}
      onLoadMore={() => fetchMovies(query, page + 1)}
      showLoadMore={showLoadMore}
      isLoading={isLoading && movies.length > 0}
    />
  );
};
