import { MoviesList } from "@/components/movies-list/MoviesList";
import { useFavorites } from "@/hooks/useFavorites";
import { translation_keys } from "@/constants";

import styles from "./favorites.module.css";

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div className={styles.container}>
      {favorites.length > 0 ? (
        <>
          <h2 className={styles.title}>{translation_keys.your_favorites}</h2>
          <MoviesList movies={favorites} />
        </>
      ) : (
        <p className={styles.no_favorites}>
          {translation_keys.no_favorites_found}
        </p>
      )}
    </div>
  );
};

export default Favorites;
