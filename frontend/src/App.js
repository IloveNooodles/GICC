import "./App.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import CompetitionPage from "./pages/CompetitionPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<CompetitionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
