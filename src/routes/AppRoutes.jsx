import { Routes, Route } from "react-router";
import Home from "../views/Home";
import Local from "../views/Local";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Post from "../views/Post";
import Profile from "../views/Profile";
import Register from "../views/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/local" element={<Local />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<Post />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
