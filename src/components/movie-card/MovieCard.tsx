import { useState } from "react";
import { Heart } from "@phosphor-icons/react";
import { Movie } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";
import { placeholder_images_url } from "@/constants";
import styles from "./movie-card.module.css";

export const MovieCard = ({ id, title, overview, poster_path }: Movie) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(isFavorite(id));
  const [imageSrc, setImageSrc] = useState(
    `${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`
  );

  const handleFavoriteToggle = () => {
    toggleFavorite({ id, title, overview, poster_path });
    setFavorite(!favorite);
  };

  return (
    <div className={styles.card}>
      <img
        src={imageSrc}
        alt={title}
        className={styles.poster}
        onError={() => setImageSrc(placeholder_images_url)}
      />
      <div className={styles.info}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.like_button}
            onClick={handleFavoriteToggle}
            aria-label="Favorite"
            title="Favorite"
          >
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
