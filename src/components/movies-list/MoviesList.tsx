import { Movie } from "@/types";
import { MovieCard } from "@/components/movie-card/MovieCard";

import styles from "./movies-list.module.css";

type Props = {
  movies: Movie[];
  showLoadMore?: boolean;
  onLoadMore?: () => Promise<void>;
  isLoading?: boolean;
};

export const MoviesList = ({
  movies,
  showLoadMore,
  onLoadMore,
  isLoading,
}: Props) => {
  return (
    <div>
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
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};
