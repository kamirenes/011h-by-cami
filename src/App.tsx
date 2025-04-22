import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { ROUTES } from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./features/auth/Login/Login";
import PrincipalLayout from "./features/layout/Layout";

function App() {
  const authenticated = true; // TODO: change for the correct logic when the auth flow be ready
  return (
    <Router>
      <Routes>
        <PublicRoute authenticated={authenticated} path={ROUTES.login}>
          <Suspense fallback="loading">
            <Login />
          </Suspense>
        </PublicRoute>
        <PrivateRoute path="/" authenticated={authenticated}>
          <Suspense fallback="loading">
            <PrincipalLayout />
          </Suspense>
        </PrivateRoute>
      </Routes>
    </Router>
  );
}

export default App;
