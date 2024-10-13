import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/home/Home";
import Favorites from "@/pages/favorites/Favorites";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
