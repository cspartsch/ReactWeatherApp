import "./App.css";

import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cardWrapper" id="cardWrapper">
          <div className="card largeMain">
            <h1>Weather Search</h1>
            <Weather />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
