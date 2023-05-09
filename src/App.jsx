import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Location from "./pages/Location.jsx";
import Weather from "./pages/Weather.jsx";
import { useEffect, useState } from "react";
import Link from "./components/Link.jsx";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = import.meta.env.VITE_WEATHER_API;
  const request = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${currentCity}`;

  useEffect(() => {
    if (currentCity.length > 1) {
      fetch(request)
        .then((response) => response.json())
        .then((data) =>
          data.location ? setSuggestions([data.location]) : setSuggestions([])
        )
        .catch((e) => console.log(e));
    } else {
      setSuggestions([]);
    }
  }, [currentCity]);

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
