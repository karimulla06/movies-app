import { useState } from "react";
import { Heart } from "@phosphor-icons/react";
import { Movie } from "@/types";
import { isFavorite, toggleFavorite } from "@/utils";
import styles from "./movie-card.module.css";

export const MovieCard = ({ id, title, overview, poster_path }: Movie) => {
  const [favorite, setFavorite] = useState(isFavorite(id));

  const handleFavoriteToggle = () => {
    toggleFavorite({ id, title, overview, poster_path });
    setFavorite(!favorite);
  };

  const imageSrc = `${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`;

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.poster} />
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.like_button} onClick={handleFavoriteToggle}>
            <Heart
              className={styles.like_icon}
              weight={favorite ? "fill" : "regular"}
              size={24}
            />
          </button>
        </div>
        <p className={styles.overview}>{overview}</p>
      </div>
    </div>
  );
};
