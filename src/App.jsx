import { BrowserRouter, Route, Routes } from "react-router-dom";
import Location from "./pages/Location.jsx";
import Weather from "./pages/Weather.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}>
          <Route index element={<Location />} />
          <Route path={"weather"} element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
