import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "@/constants";
import NavBar from "@/containers/nav-bar/NavBar";
import Home from "@/pages/home/Home";
import Favorites from "@/pages/favorites/Favorites";
import NotFound from "@/pages/not-found/NotFound";
import { FavoritesProvider } from "@/hooks/FavoritesProvider";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.FAVORITES} element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
