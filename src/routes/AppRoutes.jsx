import { Routes, Route } from "react-router";
import Home from "../views/Home";
import Local from "../views/Local";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Post from "../views/Post";
import Profile from "../views/Profile";
import Register from "../views/Register";
import Layout from "../layout/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/local"
        element={
          <Layout>
            <Local />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<Post />} />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
