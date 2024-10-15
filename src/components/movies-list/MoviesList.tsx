import { MovieCard } from "@/components/movie-card/MovieCard";
import { translation_keys } from "@/constants";
import { Movie } from "@/types";

import styles from "./movies-list.module.css";

interface Props {
  movies: Movie[];
  showLoadMore?: boolean;
  onLoadMore?: () => Promise<void>;
  isLoading?: boolean;
}

export const MoviesList = ({
  movies,
  showLoadMore,
  onLoadMore,
  isLoading,
}: Props) => {
  return (
    <>
      <div className={styles.movies_list}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      {movies.length > 0 && showLoadMore && (
        <button
          className={styles.load_more_btn}
          onClick={onLoadMore}
          disabled={isLoading}
        >
          {isLoading ? translation_keys.loading : translation_keys.load_more}
        </button>
      )}
    </>
  );
};
