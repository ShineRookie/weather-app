import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Location from "./pages/Location.jsx";
import Weather from "./pages/Weather.jsx";
import { useEffect, useState } from "react";
import Link from "./components/Link.jsx";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = "9058e6b99f2142fcb34135435242911";
  const request = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${currentCity}`;

  useEffect(() => {
    if (currentCity.length > 1) {
      fetch(request)
          .then((response) => response.json())
          .then((data) => {
            if (data.location) {
              setSuggestions([data.location]);
            } else {
              setSuggestions([]);
            }
          })
          .catch((e) => console.error("Error fetching data:", e));
    } else {
      setSuggestions([]);
    }
  }, [currentCity]);

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!currentCity) {
      return <Navigate to={"/"} />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Link />}>
          <Route
            index
            element={
              <Location
                city={currentCity}
                setCity={setCurrentCity}
                suggestions={suggestions}
              />
            }
          />
          <Route
            path={"weather"}
            element={
              <ProtectedRoute>
                <Weather
                  city={currentCity}
                  setCity={setCurrentCity}
                  request={request}
                />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
