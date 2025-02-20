import { useState } from "react";
import "./App.css";
import CircleProgressBar from "./componenets/CircleProgressBar";

function App() {
  const [precentage, setPercentage] = useState(35);
  return (
    <div className="app">
      <CircleProgressBar precentage={precentage} circleWidth="200" />
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={precentage}
        className="circle-range"
        onChange={(e) => setPercentage(e.target.value)}
      />
    </div>
  );
}

export default App;
