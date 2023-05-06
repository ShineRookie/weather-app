import { createContext, useContext, useEffect, useState } from "react";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
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

  return (
    <LocationContext.Provider
      value={{ currentCity, setCurrentCity, suggestions, request }}
    >
      {children}
    </LocationContext.Provider>
  );
};
