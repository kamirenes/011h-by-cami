import { Navigate } from "react-router-dom";
import { TPrivateRouteProps } from "./types";
import { ROUTES } from "../../constants/routes";

function PrivateRoute({ children, authenticated }: TPrivateRouteProps) {
  return authenticated ? children : <Navigate to={ROUTES.login} replace />
}

export default PrivateRoute;
