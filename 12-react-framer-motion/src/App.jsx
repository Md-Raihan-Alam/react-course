import { useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id="demo">
      {/* motion must be add to the element that you want to animate */}
      {/* animate prop is used to animate the element, add the css element you want to animate */}
      {/* x is the state that we want to animate */}
      {/* transition prop is used to set the configuration of the animation */}
      {/* sprint here means that the animation will be a spring animation means animation with physics,so bounce will work, if set tween then bound won't work, as tween is simply transition */}
      <motion.div
        id="box"
        animate={{ x: x, y: y, rotate: rotate }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
      />

      <div id="inputs">
        <p>
          <label htmlFor="x">X</label>
          <input
            type="number"
            id="x"
            onChange={(event) => setX(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="y">Y</label>
          <input
            type="number"
            id="y"
            onChange={(event) => setY(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="rotate">Rotate</label>
          <input
            type="number"
            id="rotate"
            onChange={(event) => setRotate(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
