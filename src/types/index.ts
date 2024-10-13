export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MoviesApiResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
