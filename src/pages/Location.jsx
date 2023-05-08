import LocationInput from "../components/LocationInput.jsx";
import LocationButton from "../components/LocationButton.jsx";

const Location = ({ city, setCity, suggestions }) => {
  return (
    <div
      className={
        "flex h-screen w-screen items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 font-bold"
      }
    >
      <div
        className={
          "relative flex w-1/3 flex-col items-center justify-center rounded-2xl bg-blue-400 p-3 shadow-2xl"
        }
      >
        <h1 className={"mb-5 text-2xl"}>Weather App</h1>
        <div className={"flex w-full flex-col items-center gap-3"}>
          <LocationInput
            city={city}
            setCity={setCity}
            suggestions={suggestions}
          />
          <div className={"relative max-w-[250px] text-xl"}>
            <span
              className={
                "absolute right-[40px] top-1/2 h-[2px] w-[100px] bg-white"
              }
            ></span>
            or
            <span
              className={
                "absolute left-[40px] top-1/2 h-[2px] w-[100px] bg-white"
              }
            ></span>
          </div>
          <LocationButton setCity={setCity} />
        </div>
      </div>
    </div>
  );
};

export default Location;
