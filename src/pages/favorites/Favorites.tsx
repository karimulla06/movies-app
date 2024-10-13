import { MoviesList } from "@/components/movies-list/MoviesList";
import { getFavorites } from "@/utils";
import styles from "./favorites.module.css";

const Favorites = () => {
  const favorites = getFavorites();
  return (
    <div className={styles.container}>
      {favorites.length > 0 ? (
        <>
          <h2 className={styles.title}>Your Favorites</h2>
          <MoviesList movies={favorites} />
        </>
      ) : (
        <p className={styles.no_favorites}>
          You haven't added any favorites yet
        </p>
      )}
    </div>
  );
};

export default Favorites;
