import { useState } from "react";
import { Movie } from "@/types";
import styles from "./movie-card.module.css";
import IconButton from "../icon-button/IconButton";
import { Heart } from "@phosphor-icons/react";
import { isFavorite, toggleFavorite } from "@/utils";

export const MovieCard = ({ id, title, overview, poster_path }: Movie) => {
  const [favorite, setFavorite] = useState(isFavorite(id));

  const handleFavoriteToggle = () => {
    toggleFavorite({ id, title, overview, poster_path });
    setFavorite(!favorite);
  };

  const imageSrc = `${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`;
  return (
    <div className={styles.movie_card}>
      <img src={imageSrc} alt={title} className={styles.movie_poster} />
      <div className={styles.movie_info}>
        <div className={styles.movie_title_container}>
          <h3 className={styles.movie_title}>{title}</h3>
          <IconButton onClick={handleFavoriteToggle}>
            <Heart
              className={styles.like}
              weight={favorite ? "fill" : "regular"}
              size={24}
            />
          </IconButton>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};
