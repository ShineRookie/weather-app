import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import location from "../assets/location.svg";

const Weather = ({ city, setCity, request }) => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(request);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    return () => fetchData();
  }, [city]);

  console.log(weatherData);

  return (
    <div
      className={
        "flex h-screen w-screen items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-white"
      }
    >
      {weatherData ? (
        <div
          className={
            "relative flex w-1/3 flex-col items-center rounded-2xl bg-blue-400 p-3 shadow-2xl"
          }
        >
          <button
            onClick={() => {
              setCity("");
              navigate("/");
            }}
            className={"absolute left-5 top-5 transition-all hover:scale-95"}
          >
            <img src={back} alt={"back"} />
          </button>
          <h1 className={"mb-5 text-4xl"}>Weather App</h1>
          <div className={"flex gap-5 text-2xl"}>
            <img src={location} alt={"location"} />
            {weatherData.location.name}
          </div>
          <div className={"flex"}>
            <img
              className={"w-36"}
              src={weatherData.current.condition.icon}
              alt={"weather status"}
            />
            <div className={"mt-4"}>
              <p className={"text-center text-xl"}>
                {weatherData.current.condition.text}
              </p>
              <p className={"mt-3 text-center text-5xl"}>
                {weatherData.current.temp_c} C
              </p>
            </div>
          </div>
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
