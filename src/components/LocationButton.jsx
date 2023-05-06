import React, { useContext } from "react";
import { LocationContext } from "../context/LocationContext.jsx";
import { useNavigate } from "react-router-dom";

const LocationButton = () => {
  const { currentCity, setCurrentCity } = useContext(LocationContext);
  const navigate = useNavigate();

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentCity(latitude + "," + longitude);
          navigate("weather");
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className={"flex w-full max-w-[400px] shadow-input"}>
      <button
        onClick={handleLocation}
        className={
          "h-full w-full bg-[#004346] px-12 py-2 text-white focus:outline-none active:scale-95"
        }
      >
        Define a city automatically
      </button>
    </div>
  );
};

export default LocationButton;
