import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Alltodos from "./pages/Alltodos";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoDetail from "./pages/TodoDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/alltodos",
    element: <Alltodos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/todo/:todoId", element: <TodoDetail /> },
  {
    path: "/*",
    element: <h1 className="page-notefound-heading">404 Page Not Found</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
