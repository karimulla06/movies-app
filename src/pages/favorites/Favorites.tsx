import { MoviesList } from "@/components/movies-list/MoviesList";
import { getFavorites } from "@/utils";
import styles from "./favorites.module.css";

const Favorites = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Favorites</h2>
      <MoviesList movies={getFavorites()} />
    </div>
  );
};

export default Favorites;
