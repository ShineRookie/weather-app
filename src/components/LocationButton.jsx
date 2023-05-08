import { useNavigate } from "react-router-dom";

const LocationButton = ({ setCity }) => {
  const navigate = useNavigate();

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCity(`${latitude},${longitude}`);
          navigate("weather");
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className={"flex w-full max-w-[400px] "}>
      <button
        onClick={handleLocation}
        className={
          "w-full rounded bg-blue-700 px-2 py-2 text-white shadow-xl focus:outline-none active:scale-95"
        }
      >
        Define a city automatically
      </button>
    </div>
  );
};

export default LocationButton;
