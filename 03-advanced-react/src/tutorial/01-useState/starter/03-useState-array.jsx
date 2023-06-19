import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePeople = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" class="btn" onClick={() => removePeople(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" class="btn" onClick={removeAll}>
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
