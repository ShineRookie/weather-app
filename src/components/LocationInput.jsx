import { useContext, useEffect, useState } from "react";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../context/LocationContext.jsx";

const LocationInput = () => {
  const { currentCity, setCurrentCity, suggestions } =
    useContext(LocationContext);
  const navigate = useNavigate();

  const handleClick = (cityValue) => {
    setCurrentCity(cityValue);
    navigate("weather");
  };

  return (
    <div className={"relative flex w-full max-w-[400px] shadow-input"}>
      <input
        type="text"
        placeholder="Enter city name"
        value={currentCity}
        autoComplete={"off"}
        onChange={(e) => setCurrentCity(e.target.value)}
        className={
          "w-full bg-[#EAEAEA] px-12 py-2 text-center placeholder:text-[#004346] focus:outline-none"
        }
      />
      {suggestions && (
        <ul className={"absolute top-10 z-40 w-full text-white "}>
          {suggestions.map((suggestion) => (
            <li
              onClick={() => handleClick(suggestion.name)}
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
      {/*<button*/}
      {/*  type={"submit"}*/}
      {/*  className={"absolute right-0 h-full w-[40px] bg-[#004346]"}*/}
      {/*>*/}
      {/*  <img*/}
      {/*    className={"mx-auto my-0 w-full max-w-[25px]"}*/}
      {/*    src={search}*/}
      {/*    alt={"search"}*/}
      {/*  />*/}
      {/*</button>*/}
    </div>
  );
};

export default LocationInput;
