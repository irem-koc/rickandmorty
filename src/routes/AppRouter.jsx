import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episode from "../pages/Episode";
import Home from "../pages/Home";
import Header from "../components/Header";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
