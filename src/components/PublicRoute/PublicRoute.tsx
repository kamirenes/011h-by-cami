import { Navigate, Route } from "react-router-dom";
import { TPublicRouteProps } from "./types";

function PublicRoute({ children, path, authenticated }: TPublicRouteProps) {
  return (
    <Route path={path}>
      {authenticated ? <Navigate to={"/"} replace /> : children}
    </Route>
  );
}

export default PublicRoute;
