# Movies App

A React-based web application for browsing and searching movies, with features like trending movies, recent releases, and personal favorites.

## Features

- Browse trending and recent movies
- Search for movies
- Add movies to favorites
- Dark/Light theme toggle
- Responsive design

## Technologies Used

- React 18
- TypeScript
- React Router
- CSS Modules
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/movies-app.git
   cd movies-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_API_KEY=your_tmdb_api_key_here
   VITE_API_BASE_URL=https://api.themoviedb.org/3
   ```

### Running the App

To start the development server:

```
npm run dev
```

or

```
yarn dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```
npm run build
```

or

```
yarn build
```

## Project Structure

- `src/`: Source files
  - `components/`: Reusable React components
    - Contains smaller, modular UI elements used across the application
    - Examples: MovieCard, MoviesList, Tabs
  - `containers/`: Container components
    - Higher-level components that manage state and data flow
    - Often compose multiple smaller components
    - Examples: SearchResults, Navbar
  - `pages/`: Page components
    - Top-level components that represent entire pages or views
    - Typically correspond to different routes in the application
    - Examples: HomePage, FavoritesPage
  - `hooks/`: Custom React hooks
    - Reusable logic extracted into custom hooks
    - Enhance code reusability and separate concerns
    - Examples: useFavorites
  - `services/`: API services
    - Functions for making API calls to external services (e.g., TMDB API)
    - Handles data fetching and response parsing
    - Examples: fetchTrendingMovies, fetchRecentMovies, searchMovies
  - `utils/`: Utility functions
    - Helper functions and utility methods used across the application
    - Examples: debounce
  - `types/`: TypeScript type definitions
    - Custom type definitions and interfaces
    - Ensures type safety throughout the application
    - Examples: Movie, MoviesApiResponse
  - `constants/`: Constant values and configurations
    - Stores app-wide constants, configuration objects, and enums
    - Examples: Routes
  - `providers/`: Context providers
    - React Context providers for managing global state
    - Examples: FavoritesProvider

## License

This project is open source and available under the [MIT License](LICENSE).
