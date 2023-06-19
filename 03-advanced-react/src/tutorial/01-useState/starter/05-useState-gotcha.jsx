import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    // const newState = currentState + 1;
    // return newState;
    setTimeout(() => {
      console.log("button clicked");
      // setValue(value + 1);
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{value}</h3>
      <button onClick={handleClick} className="btn" type="btn">
        Click
      </button>
    </>
  );
};

export default UseStateGotcha;
