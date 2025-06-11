import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const register = JSON.parse(localStorage.getItem("userDetails"));
  const login = JSON.parse(localStorage.getItem("loginDetails"));

  if (!register && !login) {
    return <Navigate to={"/register"} />;
  } else if (register && !login) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default PrivateRoute;
