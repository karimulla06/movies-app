import { useState } from "react";
import { Movie } from "@/types";
import styles from "./movie-card.module.css";
import IconButton from "../icon-button/IconButton";
import { Heart } from "@phosphor-icons/react";

export const MovieCard = ({ id, title, overview, poster_path }: Movie) => {
  const [liked, setLiked] = useState(false);
  const imageSrc = `${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`;
  return (
    <div className={styles.movie_card}>
      <img src={imageSrc} alt={title} className={styles.movie_poster} />
      <div className={styles.movie_info}>
        <div className={styles.movie_title_container}>
          <h3 className={styles.movie_title}>{title}</h3>
          <IconButton onClick={() => setLiked(!liked)}>
            <Heart
              className={styles.like}
              weight={liked ? "fill" : "regular"}
              size={24}
            />
          </IconButton>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};
