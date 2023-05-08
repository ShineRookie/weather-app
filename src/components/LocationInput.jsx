import { useNavigate } from "react-router-dom";

const LocationInput = ({ city, setCity, suggestions }) => {
  const navigate = useNavigate();

  const handleClick = (cityValue) => {
    setCity(cityValue);
    navigate("weather");
  };

  return (
    <div className={"relative flex w-full max-w-[400px] shadow-input"}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={"w-full rounded px-2 py-2 text-center focus:outline-none"}
      />
      {suggestions && (
        <ul className={"absolute top-11 z-10 w-full text-white "}>
          {suggestions.map((suggestion) => (
            <li
              onClick={() => handleClick(suggestion.name)}
              key={suggestion.name}
              className={
                " w-full cursor-pointer rounded bg-blue-600 px-3 py-2 transition-all hover:bg-blue-400"
              }
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
