import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import location from "../assets/location.svg";
import { LocationContext } from "../context/LocationContext.jsx";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { currentCity, setCurrentCity, request } = useContext(LocationContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(request);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Ошибка при выполнении запроса", error);
      }
    };

    fetchData();
  }, [currentCity]);

  console.log(weatherData);

  return (
    <div
      className={
        "relative flex h-screen w-screen items-center justify-center text-white"
      }
    >
      {weatherData ? (
        <div
          className={
            "relative flex h-1/2 w-1/3 flex-col items-center justify-start rounded-[12px] bg-[#172A3A] p-5"
          }
        >
          <button
            onClick={() => {
              setCurrentCity("");
              navigate("/");
            }}
            className={"absolute left-5 top-5 transition-all hover:scale-95"}
          >
            <img src={back} alt={"back"} />
          </button>
          <h1 className={"text-4xl"}>Weather App</h1>
          <div className={"mt-12 flex items-center gap-5 text-2xl"}>
            <img src={location} alt={"location"} />
            {weatherData.location.name}
          </div>
          <div className={"mt-5 flex flex-col"}>
            <img
              src={weatherData.current.condition.icon}
              alt={"weather status"}
            />
            <p className={"mt-3 text-center text-2xl"}>
              {weatherData.current.condition.text}
            </p>
          </div>
          <div
            className={"text-center text-6xl"}
          >{`${weatherData.current.temp_c} C`}</div>
        </div>
      ) : (
        <div
          className={
            "flex h-1/2 w-1/3 items-center justify-center rounded-[12px] bg-[#172A3A] p-5"
          }
        >
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Weather;
