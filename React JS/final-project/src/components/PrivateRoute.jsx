import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = JSON.parse(localStorage.getItem("login_data"));

  if (!login) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default PrivateRoute;
