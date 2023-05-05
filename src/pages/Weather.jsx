import back from "../assets/back.svg";
import location from "../assets/location.svg";

const Weather = () => {
  return (
    <div
      className={
        "relative flex h-screen w-screen items-center justify-center text-white"
      }
    >
      <div
        className={
          "flex h-1/2 w-1/3 flex-col items-center justify-start rounded-[12px] bg-[#172A3A] p-5"
        }
      >
        <h1 className={"text-4xl"}>Weather App</h1>
        <div className={"mt-12 flex items-center gap-5 text-2xl"}>
          <img src={location} alt={"location"} />
          Astana
        </div>
        <div className={"mt-5 flex flex-col"}>
          <img src={"https://place-hold.it/165"} alt={"weather status"} />
          <p className={"mt-3 text-center text-2xl"}>Status</p>
        </div>
        <div className={"text-center text-6xl"}> C</div>
      </div>
    </div>
  );
};

export default Weather;
