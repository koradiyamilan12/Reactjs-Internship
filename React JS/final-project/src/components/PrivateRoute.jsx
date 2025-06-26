import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = JSON.parse(localStorage.getItem("login_data"));

  return login ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
