import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "raihan",
    age: 22,
    target: "web development",
  });
  const updateData = () => {
    // setPerson({name:'shadow',age:22,target:'ethical hacking'});
    setPerson({ ...person, name: "shadow", target: "ethical hacking" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.target}</h3>
      <button onClick={updateData} className="btn" type="button">
        Updated
      </button>
    </div>
  );
};

export default UseStateObject;
