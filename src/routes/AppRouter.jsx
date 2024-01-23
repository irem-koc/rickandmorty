import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Character from "../pages/Character";
import Episode from "../pages/Episode";
import Home from "../pages/Home";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
