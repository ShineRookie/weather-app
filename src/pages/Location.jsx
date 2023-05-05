import LocationInput from "../components/LocationInput.jsx";
import LocationButton from "../components/LocationButton.jsx";
import pic from "../assets/Group.svg";

const Location = () => {
  return (
    <div
      className={
        "relative flex h-screen w-screen flex-col items-center justify-center"
      }
    >
      <div
        className={
          "relative z-30 flex h-[300px] w-[500px] flex-col items-center justify-center rounded-[12px] shadow-3xl"
        }
      >
        <h1 className={"absolute top-6 text-2xl text-[#004346]"}>
          Weather App
        </h1>
        <div className={"flex w-full flex-col items-center"}>
          <LocationInput />
          <div className={"relative max-w-[250px] text-xl text-[#004346]"}>
            <span
              className={
                "before:absolute before:right-[40px] before:top-1/2 before:h-[2px] before:w-[100px] before:bg-[#EAEAEA] before:content-['']"
              }
            ></span>
            or
            <span
              className={
                "after:absolute after:left-[40px] after:top-1/2 after:h-[2px] after:w-[100px] after:bg-[#EAEAEA] after:content-['']"
              }
            ></span>
          </div>
          <LocationButton />
        </div>
      </div>
      <img
        src={pic}
        alt={"image"}
        className={"absolute bottom-0 left-0 z-20"}
      />
    </div>
  );
};

export default Location;
