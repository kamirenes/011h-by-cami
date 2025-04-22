import { Navigate, Route } from "react-router-dom";
import { TPrivateRouteProps } from "./types";
import { ROUTES } from "../../constants/routes";

function PrivateRoute({ children, path, authenticated }: TPrivateRouteProps) {
  return (
    <Route path={path}>
      {authenticated ? children : <Navigate to={ROUTES.login} replace />}
    </Route>
  );
}

export default PrivateRoute;
