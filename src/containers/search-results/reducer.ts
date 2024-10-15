import { Movie, MoviesApiResponse } from "@/types";

type State = {
  movies: Movie[];
  page: number;
  showLoadMore: boolean;
  isLoading: boolean;
  error: string | null;
};

type Action =
  | {
      type: "SET_MOVIES";
      payload: MoviesApiResponse;
    }
  | {
      type: "SET_LOADING";
      payload: boolean;
    }
  | {
      type: "SET_ERROR";
      payload: string | null;
    }
  | { type: "RESET" };

export const initialState: State = {
  movies: [],
  page: 1,
  showLoadMore: false,
  isLoading: false,
  error: null,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies:
          action.payload.page === 1
            ? action.payload.results
            : [...state.movies, ...action.payload.results],
        page: action.payload.page,
        showLoadMore: action.payload.page !== action.payload.total_pages,
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
