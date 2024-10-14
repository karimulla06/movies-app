import { MoviesList } from "@/components/movies-list/MoviesList";
import { useFavorites } from "@/hooks/useFavorites";
import styles from "./favorites.module.css";

const Favorites = () => {
  const { favorites } = useFavorites();
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
