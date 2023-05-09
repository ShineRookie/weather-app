import { Outlet } from "react-router-dom";

const Link = () => {
  return (
    <>
      <span className={"absolute bottom-5 left-5 font-bold"}>
        Powered by{" "}
        <a
          className={"transition-all hover:underline"}
          href="https://www.weatherapi.com/"
          title="Free Weather API"
        >
          WeatherAPI.com
        </a>
      </span>
      <Outlet />
    </>
  );
};

export default Link;
