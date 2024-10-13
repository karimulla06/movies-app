import { Movie } from "@/types";

const fetchMovies = async (path: string, query: Record<string, string>) => {
  const queryParams = {
    api_key: import.meta.env.VITE_API_KEY,
    language: "en-US",
    ...query,
  };
  const url = `${
    import.meta.env.VITE_API_BASE_URL
  }${path}?${new URLSearchParams(queryParams)}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results as Movie[];
};

export const fethRecentMovies = async (page: number = 1) => {
  return await fetchMovies("/movie/now_playing", {
    page: `${page}`,
  });
};

export const fetchTrendingMovies = async (page: number = 1) => {
  return await fetchMovies("/trending/movie/week", {
    page: `${page}`,
  });
};

export const seachMovies = async (query: string, page: number = 1) => {
  return await fetchMovies("/search/movie", {
    page: `${page}`,
    query,
  });
};
