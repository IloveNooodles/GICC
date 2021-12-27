import "./App.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import CompetitionPage from "./pages/CompetitionPage";
import Login from "./components/login";
import Register from "./components/register";
import PreEventPage from "./pages/PreEventPage";
import RegisterLeader from "./components/registerLeader";
import RegisterMember from "./components/registerMember";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<CompetitionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/pre-event" element={<PreEventPage />} />
        <Route path="/register-leader" element={<RegisterLeader />} />
        <Route path="/register-member" element={<RegisterMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
