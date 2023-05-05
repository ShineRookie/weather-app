import { useEffect, useState } from "react";
import search from "../assets/search.svg";

const LocationInput = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = import.meta.env.VITE_WEATHER_API;
  const request = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  useEffect(() => {
    if (city.length > 1) {
      fetch(request)
        .then((response) => response.json())
        .then((data) =>
          data.location ? setSuggestions([data.location]) : setSuggestions([])
        )
        .catch((e) => console.log(e));
    } else {
      setSuggestions([]);
    }
  }, [city]);

  console.log(suggestions);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={"relative flex w-full max-w-[400px] shadow-input"}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={
          "w-full bg-[#EAEAEA] px-12 py-2 text-center placeholder:text-[#004346] focus:outline-none"
        }
      />
      {suggestions && (
        <ul className={"absolute top-10 z-40 w-full text-white "}>
          {suggestions.map((suggestion) => (
            <li
              onClick={() => {
                setCity(suggestion.name);
                setSuggestions([]);
              }}
              key={suggestion.name}
              className={
                "h-full w-full cursor-pointer bg-[#004346] px-3 py-2 transition-all hover:bg-[#508991]"
              }
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
      <button
        type={"submit"}
        className={"absolute right-0 h-full w-[40px] bg-[#004346]"}
      >
        <img
          className={"mx-auto my-0 w-full max-w-[25px]"}
          src={search}
          alt={"search"}
        />
      </button>
    </form>
  );
};

export default LocationInput;
