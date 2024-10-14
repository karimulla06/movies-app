import { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import { TrendingMovies } from "@/containers/trending-movies/TrendingMovies";
import { RecentMovies } from "@/containers/recent-movies/RecentMovies";
import { SearchResults } from "@/containers/search-results/SearchResults";
import { translation_keys } from "@/constants";
import styles from "./home.module.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const tabs = [
    {
      label: translation_keys.trending,
      content: <TrendingMovies />,
    },
    {
      label: translation_keys.recent,
      content: <RecentMovies />,
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
