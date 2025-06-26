import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/PrivateRoute";
import RootLayout from "./components/RootLayout";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

const user = JSON.parse(localStorage.getItem("login_data")) || {};

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: user.role === "admin" ? <CreatePost /> : null,
      },
      {
        path: "/post/:postId",
        element: <PostDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
