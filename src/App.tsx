import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { ROUTES } from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./features/auth/Login/Login";
import PrincipalLayout from "./features/layout/Layout";
import ProductsMainScreen from "./features/products/ProductsMainScreen/ProductsMainScreen";

function App() {
  const authenticated = true; // TODO: change for the correct logic when the auth flow be ready
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute authenticated={authenticated} path={ROUTES.login}>
              <Suspense fallback="loading">
                <Login />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute path="/" authenticated={authenticated}>
              <Suspense fallback="loading">
                <PrincipalLayout />
              </Suspense>
            </PrivateRoute>
          }
        >
          <Route path="products" element={<ProductsMainScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
