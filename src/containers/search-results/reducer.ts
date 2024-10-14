import { Movie } from "@/types";

type State = {
  movies: Movie[];
  page: number;
  isLoading: boolean;
  error: string | null;
};

type Action =
  | {
      type: "SET_MOVIES";
      payload: { movies: Movie[]; page: number };
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
            ? action.payload.movies
            : [...state.movies, ...action.payload.movies],
        page: action.payload.page,
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
