import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Location from "./pages/Location.jsx";
import Weather from "./pages/Weather.jsx";
import { useContext, useState } from "react";
import { LocationContext } from "./context/LocationContext.jsx";

function App() {
  const { currentCity } = useContext(LocationContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentCity) {
      return <Navigate to={"/"} />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}>
          <Route index element={<Location />} />
          <Route
            path={"weather"}
            element={
              <ProtectedRoute>
                <Weather />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
