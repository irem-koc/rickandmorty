import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Character from "../pages/Character";
import Episode from "../pages/Episode";
import FavCharacters from "../pages/FavCharacters";
import Home from "../pages/Home";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/fav-chars" element={<FavCharacters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
