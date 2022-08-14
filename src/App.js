import "./App.css";


import Heading from "./components/Heading";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cardWrapper" id="cardWrapper">
          <div className="card largeMain">
            <Heading />
            <Weather />
            <WeatherDetails />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
