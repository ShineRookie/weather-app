import { WiHumidity, WiThermometer } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
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
            "relative flex w-1/4 flex-col items-center rounded-2xl bg-blue-400 p-3 shadow-2xl"
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
          <h1 className={"text-4xl"}>Weather App</h1>
          <h2 className={"mb-5 text-xl"}>{weatherData.current.last_updated}</h2>
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
                {weatherData.current.temp_c}
                <span>°C</span>
              </p>
            </div>
          </div>
          <div className={"flex w-full justify-between"}>
            <div className={"flex items-center gap-2"}>
              <WiHumidity className={"text-4xl"} />
              {weatherData.current.humidity}%
            </div>
            <div className={"flex items-center gap-2"}>
              <WiThermometer className={"text-4xl"} />
              {weatherData.current.feelslike_c}°C
            </div>
            <div className={"flex items-center gap-2"}>
              <BsWind className={"text-4xl"} />
              {weatherData.current.wind_kph} kph
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            "h-[100px] w-[100px] animate-spin rounded-full border-[4px] border-solid border-[#f3f3f3] border-t-[#3498db]"
          }
        ></div>
      )}
    </div>
  );
};

export default Weather;
