import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ Children }) {
  const isAuth = useSelector((store) => store.auth.isAuth);
  console.log(isAuth)
  return  Children
}

export default PrivateRoutes;
