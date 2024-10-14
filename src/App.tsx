import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES, translation_keys } from "@/constants";
import NavBar from "@/containers/nav-bar/NavBar";
import { FavoritesProvider } from "@/providers/FavoritesProvider";
import "./App.css";

const Home = lazy(() => import("@/pages/home/Home"));
const Favorites = lazy(() => import("@/pages/favorites/Favorites"));
const NotFound = lazy(() => import("@/pages/not-found/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <NavBar />
        <Suspense
          fallback={
            <div className="fallback_loading">{translation_keys.loading}</div>
          }
        >
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.FAVORITES} element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
