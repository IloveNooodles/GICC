import "./App.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import CompetitionPage from "./pages/CompetitionPage";
import Login from "./components/login";
import Register from "./components/register"
import PreEventPage from "./pages/PreEventPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<CompetitionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/preevent" element={<PreEventPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
