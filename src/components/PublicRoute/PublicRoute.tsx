import { Navigate } from "react-router-dom";
import { TPublicRouteProps } from "./types";

function PublicRoute({ children, authenticated }: TPublicRouteProps) {
  return authenticated ? <Navigate to={"/"} replace /> : children;
}

export default PublicRoute;
