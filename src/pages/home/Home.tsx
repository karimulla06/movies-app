import { useState } from "react";
import { Tabs } from "@/components/tabs/Tabs";
import { FetchMovies } from "@/components/fetch-movies/FetchMovies";
import { SearchResults } from "@/containers/search-results/SearchResults";
import { fetchTrendingMovies, fethRecentMovies } from "@/services/api";
import { translation_keys } from "@/constants";

import styles from "./home.module.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const tabs = [
    {
      label: translation_keys.trending,
      content: <FetchMovies fetchFn={fetchTrendingMovies} />,
    },
    {
      label: translation_keys.recent,
      content: <FetchMovies fetchFn={fethRecentMovies} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <input
          className={styles.search_input}
          type="text"
          placeholder={translation_keys.search_placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {query ? <SearchResults query={query} /> : <Tabs tabs={tabs} />}
    </div>
  );
};

export default Home;
