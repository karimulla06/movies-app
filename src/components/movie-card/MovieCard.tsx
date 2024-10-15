import { useState } from "react";
import { Heart } from "@phosphor-icons/react";
import { useFavorites } from "@/hooks/useFavorites";
import { Movie } from "@/types";
import styles from "./movie-card.module.css";

export const MovieCard = ({ id, title, overview, poster_path }: Movie) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(isFavorite(id));
  const [imageSrc, setImageSrc] = useState(
    `${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteToggle = () => {
    toggleFavorite({ id, title, overview, poster_path });
    setFavorite(!favorite);
  };

  const placeholder_images_url = `${
    import.meta.env.VITE_PLACEHOLDER_IMAGE_BASE_URL
  }/400x600?text=No+Image+Available`;

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        {!imageLoaded && <div className={styles.placeholder} />}
        <img
          src={imageSrc}
          alt={title}
          className={`${styles.poster} ${imageLoaded ? styles.loaded : ""}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageSrc(placeholder_images_url);
            setImageLoaded(true);
          }}
          width="400"
          height="600"
        />
      </div>
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
