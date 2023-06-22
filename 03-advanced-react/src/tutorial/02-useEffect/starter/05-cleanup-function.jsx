import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle componenet
      </button>
      {toggle && <RandomComponenet />}
    </div>
  );
};
const RandomComponenet = () => {
  useEffect(() => {
    console.log("this is interesting");
    const intId = setInterval(() => {
      console.log("hello");
      const someFunc = () => {};
      window.addEventListener("scroll", someFunc);
    }, 1000);
    return () => {
      clearInterval(intId);
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return <h1>Hello there</h1>;
};
export default CleanupFunction;
