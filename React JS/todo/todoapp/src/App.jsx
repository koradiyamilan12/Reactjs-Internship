import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Alltodos from "./pages/Alltodos";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoDetail from "./pages/TodoDetail";
import RootLayout from "./components/RootLayout";
import PrivateRoute from "./pages/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";

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
      { path: "/todo/:todoId",
        element: <TodoDetail /> 
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
