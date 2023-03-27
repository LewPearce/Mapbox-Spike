import "./App.css";
import Maphook from "./components/Maphook";
import { Bikes } from "./components/Bikes";
import { useState } from "react";

function App() {
  const [bike, setBike] = useState([53.47310644940652, -2.2483562103991255]);
  return (
    <div className="App">
      <h1>Leaflet testing</h1>
      <Bikes bike={bike} setBike={setBike} />
      <Maphook bike={bike} />
    </div>
  );
}

export default App;
