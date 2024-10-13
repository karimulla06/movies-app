import styles from "./home.module.css";
import Tabs from "@/components/tabs/Tabs";
import { TrendingMovies } from "@/containers/trending-movies/TrendingMovies";
import { RecentMovies } from "@/containers/recent-movies/RecentMovies";
import { SearchResults } from "@/containers/search-results/SearchResults";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const tabs = [
    {
      label: "Trending",
      content: <TrendingMovies />,
    },
    {
      label: "Recent",
      content: <RecentMovies />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <input
          className={styles.search_input}
          type="text"
          placeholder="Search for movie, tv show, person..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {query ? <SearchResults query={query} /> : <Tabs tabs={tabs} />}
    </div>
  );
};

export default Home;
